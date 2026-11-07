/**
 * Cut a plain studio backdrop out of a photo.
 *
 * The hero and product shots are photographed on seamless paper, so the
 * backdrop is a flat, slightly graded colour. We sample the corners, flood in
 * from the border while pixels stay close to that colour, then feather the
 * edge by a pixel. Flooding from the border means light areas inside the
 * subject (a pale shirt, the cream sole of a shoe) are kept.
 *
 *   node scripts/cutout.mjs public/media/hero.jpg public/media/hero-cut.png 36
 */
import sharp from 'sharp'

const [, , src, dst, tolArg] = process.argv
if (!src || !dst) {
  console.error('usage: node scripts/cutout.mjs <src> <dst> [tolerance]')
  process.exit(1)
}
const tolerance = Number(tolArg ?? 30)

const { data, info } = await sharp(src)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
const { width: w, height: h, channels } = info
const px = (x, y) => (y * w + x) * channels

// Median of the four corner patches gives the backdrop colour.
const patch = Math.max(4, Math.min(h, w) >> 5)
const samples = [[], [], []]
for (const [sx, sy] of [
  [0, 0],
  [w - patch, 0],
  [0, h - patch],
  [w - patch, h - patch],
]) {
  for (let y = sy; y < sy + patch; y++) {
    for (let x = sx; x < sx + patch; x++) {
      const i = px(x, y)
      samples[0].push(data[i])
      samples[1].push(data[i + 1])
      samples[2].push(data[i + 2])
    }
  }
}
const backdrop = samples.map((values) => {
  values.sort((a, b) => a - b)
  return values[values.length >> 1]
})

const near = new Uint8Array(w * h)
for (let p = 0, i = 0; p < w * h; p++, i += channels) {
  const dr = data[i] - backdrop[0]
  const dg = data[i + 1] - backdrop[1]
  const db = data[i + 2] - backdrop[2]
  if (dr * dr + dg * dg + db * db <= tolerance * tolerance) near[p] = 1
}

const visited = new Uint8Array(w * h)
const queue = new Int32Array(w * h)
let head = 0
let tail = 0
const seed = (x, y) => {
  const p = y * w + x
  if (near[p] && !visited[p]) {
    visited[p] = 1
    queue[tail++] = p
  }
}
for (let x = 0; x < w; x++) {
  seed(x, 0)
  seed(x, h - 1)
}
for (let y = 0; y < h; y++) {
  seed(0, y)
  seed(w - 1, y)
}
while (head < tail) {
  const p = queue[head++]
  const x = p % w
  const y = (p / w) | 0
  if (x > 0) seed(x - 1, y)
  if (x < w - 1) seed(x + 1, y)
  if (y > 0) seed(x, y - 1)
  if (y < h - 1) seed(x, y + 1)
}

let alpha = new Uint8Array(w * h)
for (let p = 0; p < w * h; p++) alpha[p] = visited[p] ? 0 : 255

// Feather the cut edge (3x3 box) so it does not look die-cut.
const soft = new Uint8Array(w * h)
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    let sum = 0
    let count = 0
    for (let dy = -1; dy <= 1; dy++) {
      const ny = y + dy
      if (ny < 0 || ny >= h) continue
      for (let dx = -1; dx <= 1; dx++) {
        const nx = x + dx
        if (nx < 0 || nx >= w) continue
        sum += alpha[ny * w + nx]
        count++
      }
    }
    soft[y * w + x] = Math.round(sum / count)
  }
}
alpha = soft

// Crop to the visible subject.
let minX = w
let minY = h
let maxX = 0
let maxY = 0
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    if (alpha[y * w + x] > 8) {
      if (x < minX) minX = x
      if (x > maxX) maxX = x
      if (y < minY) minY = y
      if (y > maxY) maxY = y
    }
  }
}
const cw = maxX - minX + 1
const ch = maxY - minY + 1

const rgba = Buffer.alloc(cw * ch * 4)
for (let y = 0; y < ch; y++) {
  for (let x = 0; x < cw; x++) {
    const from = ((y + minY) * w + (x + minX)) * channels
    const to = (y * cw + x) * 4
    rgba[to] = data[from]
    rgba[to + 1] = data[from + 1]
    rgba[to + 2] = data[from + 2]
    rgba[to + 3] = alpha[(y + minY) * w + (x + minX)]
  }
}

await sharp(rgba, { raw: { width: cw, height: ch, channels: 4 } })
  .png({ compressionLevel: 9 })
  .toFile(dst)

console.log(`${dst}: ${cw}x${ch} (from ${w}x${h}), backdrop rgb(${backdrop.join(' ')})`)

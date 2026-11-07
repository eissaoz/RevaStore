# REVA — social commerce prototype

A multi-page frontend prototype for REVA, a social-commerce platform that turns a
creator's social media content into a store people can buy from and track.

The message across every page: REVA connects the three things social sellers keep
in separate apps — social presence, products and customers, and sales, payments
and fulfilment. It is explicitly **alongside** TikTok, Instagram and WhatsApp,
not a replacement for them.

Everything is local mock data. There is no auth, no payments, no database and no
network calls beyond the static build.

## Pages

| Route       | What it is                                                                 |
| ----------- | -------------------------------------------------------------------------- |
| `/`         | Landing page: hero, partners strip, stats, the three pillars, "keep posting where you already post", two entry paths, how it works, CTA |
| `/explore`  | Search, category filter, product grid and creator grid                     |
| `/creators` | Creator pitch: the problem, how it works, the toolkit (anchors `#payments`, `#orders`), guides FAQ (`#guides`) |
| `/shoppers` | Shopper pitch, buyer protection, featured products, help centre (`#help`)  |
| `/store`    | Demo storefront (`?creator=handle`) with a cart drawer and fake checkout   |
| `/orders`   | Order reference form, delivery timeline, order summary and receipt         |
| `/start`    | Three-step onboarding wizard (store, products, payouts) with a live preview |
| `/signin`   | Sign-in screen — accepts anything, no auth                                  |
| `/about`    | Positioning, story and principles                                          |
| anything    | 404 with links back into the catalogue                                     |

The router is ~80 lines in `src/lib/router.tsx` (History API, `Link`, `useQuery`),
so no routing dependency was added.

## Run it

```sh
npm install
npm run dev        # http://localhost:5173 (Vite + the Worker in workerd)
npm run typecheck  # tsc --noEmit
npm run build      # dist/client (assets) + dist/saas_landing/index.js (Worker)
```

`bun run dev` works too if Bun is installed.

## Edit it

- `src/content.ts` holds shared marketing copy: nav, hero, pillars, alongside,
  paths, steps, CTA and footer.
- `src/content-pages.ts` holds copy for the creator and shopper pages.
- `src/data.ts` is the demo catalogue: products, categories, creators and the
  order shown on the tracking page.
- `src/pages/*` are the routes; `src/sections/*` are landing-page sections;
  `src/components/*` are shared cards, buttons, page heroes and the hero collage.
- `src/styles.css` holds the design tokens: paper white, near-black ink, warm
  grey surfaces and a soft lilac. Headlines use Inter Tight, body copy Inter.
- `src/worker/index.ts` is the Cloudflare Worker that serves the built SPA.

## Images

`public/media` holds the photography (Pexels, free to use) and the community
avatars. The hero portrait and the sneaker were shot on seamless paper;
`scripts/cutout.mjs` removes that backdrop by flooding in from the border, so
light areas inside the subject are kept:

```sh
node scripts/cutout.mjs public/media/hero.jpg public/media/hero-cut.png 36
```

## Deploy with Freebuff Sites

`deploy.json` already points at the build output. After `npm run build`, deploy
it with the `sites_deploy` tool (or the Sites API) from this directory.

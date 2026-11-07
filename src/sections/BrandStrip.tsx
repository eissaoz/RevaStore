import { Container } from '../components/Container'

function TikTok() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 24 24" aria-hidden className="size-[26px] fill-ink">
        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z" />
      </svg>
      <span className="font-display text-[25px] font-extrabold tracking-[-0.03em] text-ink">TikTok</span>
    </div>
  )
}

function MPesa() {
  return (
    <div className="flex items-center font-display text-[24px] font-extrabold tracking-[-0.02em] text-[#3ea34a]">
      <span>M</span>
      <svg viewBox="0 0 18 16" aria-hidden className="mx-[3px] mt-[-6px] h-[13px] w-[14px] self-center">
        <rect width="18" height="4" y="0" fill="#0e0e0e" />
        <rect width="18" height="4" y="4" fill="#c8102e" />
        <rect width="18" height="4" y="8" fill="#3ea34a" />
        <rect width="7" height="4" y="12" fill="#ffffff" />
      </svg>
      <span>PESA</span>
    </div>
  )
}

function PayPal() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 26 30" aria-hidden className="h-[26px] w-[22px]">
        <path
          d="M8.4 2h8.9c4.3 0 6.6 2.2 6.6 5.9 0 4.2-2.9 6.9-7.4 6.9h-3.9l-1.4 8.1H4.7L8.4 2Z"
          fill="#253b80"
        />
        <path
          d="M11.2 7.5h7.6c2.3 0 3.5 1.1 3.5 3 0 3-2 4.9-5.2 4.9h-3.6l-1.2 7.4H6.9l4.3-15.3Z"
          fill="#179bd7"
          opacity="0.85"
        />
      </svg>
      <span className="font-display text-[24px] font-bold italic tracking-[-0.035em] text-[#253b80]">
        PayPal
      </span>
    </div>
  )
}

function Visa() {
  return (
    <span className="font-display text-[27px] font-extrabold italic tracking-[-0.06em] text-[#1a1f71]">
      VISA
    </span>
  )
}

function Mastercard() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 38 24" aria-hidden className="h-[25px] w-[38px]">
        <circle cx="13" cy="12" r="10" fill="#eb001b" />
        <circle cx="25" cy="12" r="10" fill="#f79e1b" />
        <path
          d="M19 3.6a10 10 0 0 1 0 16.8 10 10 0 0 1 0-16.8Z"
          fill="#ff5f00"
        />
      </svg>
      <span className="text-[21px] font-medium tracking-[-0.03em] text-[#161615]">mastercard</span>
    </div>
  )
}

const marks = [
  { label: 'TikTok', node: <TikTok /> },
  { label: 'M-PESA', node: <MPesa /> },
  { label: 'PayPal', node: <PayPal /> },
  { label: 'Visa', node: <Visa /> },
  { label: 'Mastercard', node: <Mastercard /> },
]

export function BrandStrip() {
  return (
    <section aria-label="Selling and payment partners" className="pb-4 pt-6 sm:pt-8">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-7 sm:gap-x-10 lg:flex-nowrap lg:justify-between lg:gap-x-8">
          {marks.map((mark, i) => (
            <div key={mark.label} className="flex items-center gap-8 sm:gap-10 lg:gap-8">
              {i > 0 && <span aria-hidden className="hidden h-8 w-px bg-line lg:block" />}
              <span className="text-muted" aria-label={mark.label}>
                {mark.node}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

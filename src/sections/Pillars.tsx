import { Check } from 'lucide-react'
import type { ReactNode } from 'react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/PageHero'
import { pillars } from '../content'

const icons: Record<string, ReactNode> = {
  audience: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M15.5 5.4a3.2 3.2 0 0 1 0 6.2M17 14.8c2.4.6 4 2.4 4 5.2" />
    </>
  ),
  catalogue: (
    <>
      <path d="M4 8.5 5.6 4h12.8L20 8.5" />
      <path d="M4 8.5a2.6 2.6 0 0 0 5.2 0 2.6 2.6 0 0 0 5.3 0 2.6 2.6 0 0 0 5.3 0" />
      <path d="M5.4 11.7V20h13.2v-8.3M9.8 20v-4.6h4.4V20" />
    </>
  ),
  money: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3" />
      <path d="M2.5 10h19M6.5 14.5h3" />
      <path d="M16 14.5h2" />
    </>
  ),
}

export function Pillars() {
  return (
    <section className="border-t border-line py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHead
            eyebrow={pillars.eyebrow}
            title={pillars.title}
            description={pillars.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
          {pillars.items.map((item, i) => (
            <Reveal key={item.key} delay={i * 0.07}>
              <article className="flex h-full flex-col rounded-[26px] border border-line bg-white p-7">
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-full bg-soft text-ink">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden
                      className="size-[22px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {icons[item.key]}
                    </svg>
                  </span>
                  <span className="font-display text-[13px] font-semibold text-faint">{item.number}</span>
                </div>
                <h3 className="mt-7 text-[21px] font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.description}</p>
                <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-5">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-ink-soft">
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-soft">
                        <Check className="size-2.5 text-ink" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-5 overflow-hidden rounded-[26px] bg-ink px-6 py-6 text-white sm:px-9">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-white/45">
                One connected path
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-3 sm:justify-end">
                {pillars.flow.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    {i > 0 && <span aria-hidden className="text-white/30">→</span>}
                    <span className="rounded-full border border-white/15 px-3.5 py-2 text-[13px] font-medium text-white/85">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

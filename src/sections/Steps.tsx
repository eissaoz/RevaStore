import { ArrowRight } from 'lucide-react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { steps } from '../content'

export function Steps() {
  return (
    <section id="how" className="border-t border-line py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-muted">
              {steps.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[560px] text-[clamp(32px,3.8vw,48px)] font-bold leading-[1.03] tracking-[-0.04em] text-ink">
              {steps.title}
            </h2>
          </div>
          <div className="sm:text-right">
            <p className="max-w-[280px] text-[14.5px] leading-relaxed text-muted">
              No setup fees, no developer, no waiting for approval.
            </p>
            <Button href="/start" variant="quiet" className="mt-4">
              Open a store
              <ArrowRight />
            </Button>
          </div>
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.items.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="border-t border-line-strong pt-6">
                <span className="font-display text-[15px] font-semibold text-muted">0{i + 1}</span>
                <h3 className="mt-5 text-[22px] font-bold text-ink">{step.title}</h3>
                <p className="mt-2.5 text-[15.5px] leading-relaxed text-muted">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}

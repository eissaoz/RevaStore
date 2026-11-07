import { ArrowRight } from 'lucide-react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { cta } from '../content'

export function Cta() {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-ink px-6 py-14 text-center sm:rounded-[36px] sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="absolute -top-1/2 left-1/2 size-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#7a5cd6_0%,transparent_65%)] opacity-45 blur-2xl"
            />
            <div className="relative mx-auto max-w-[620px]">
              <h2 className="text-[clamp(34px,4.4vw,56px)] font-bold leading-[1.02] text-white">
                {cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-[480px] text-[16.5px] leading-relaxed text-white/65 sm:text-[18px]">
                {cta.description}
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button href="/start" variant="inverse" size="lg" className="gap-3 pl-7 pr-6 font-semibold">
                  {cta.button}
                  <ArrowRight className="size-[18px]" />
                </Button>
                <Button href="/orders" variant="outline" size="lg">
                  {cta.secondary}
                </Button>
              </div>
              <p className="mt-5 text-[13.5px] text-white/45">{cta.note}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

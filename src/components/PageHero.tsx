import type { ReactNode } from 'react'

import { Container } from './Container'
import { Reveal } from './Reveal'

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  aside,
}: {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  aside?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pb-14 pt-10 sm:pb-20 sm:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-[radial-gradient(circle,#eee6ff_0%,transparent_68%)] blur-2xl"
      />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end">
          <Reveal>
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-muted">{eyebrow}</p>
            <h1 className="mt-4 max-w-[820px] text-[clamp(38px,5vw,64px)] font-bold leading-[1.01] tracking-[-0.045em] text-ink">
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-[560px] text-[16.5px] leading-relaxed text-muted sm:text-[17.5px]">
                {description}
              </p>
            )}
            {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
          </Reveal>
          {aside && <Reveal delay={0.1}>{aside}</Reveal>}
        </div>
      </Container>
    </section>
  )
}

export function SectionHead({
  eyebrow,
  title,
  description,
  children,
  className = '',
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between ${className}`}>
      <div>
        {eyebrow && (
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-muted">{eyebrow}</p>
        )}
        <h2 className="mt-4 max-w-[640px] text-[clamp(32px,3.8vw,48px)] font-bold leading-[1.03] tracking-[-0.04em] text-ink">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-[540px] text-[16px] leading-relaxed text-muted">{description}</p>
        )}
      </div>
      {children && <div className="shrink-0">{children}</div>}
    </div>
  )
}

import { ArrowRight, ArrowUpRight, Share2, ShoppingBag, Star } from 'lucide-react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { HeroCollage } from '../components/HeroCollage'
import { hero } from '../content'
import { Link } from '../lib/router'

const featureIcons = [Share2, ShoppingBag]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-12 pt-5 sm:pt-7 lg:pb-16 lg:pt-9">
      <Container className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.16fr)] lg:gap-6 xl:gap-8">
        <div className="relative z-10 max-w-[575px]">
          <div className="inline-flex min-h-[52px] items-center gap-3 rounded-full border border-[#e6e3dd] px-5 py-2.5 text-[15.5px] font-medium text-ink-soft sm:px-6">
            <Star className="size-[17px] shrink-0 fill-ink text-ink" strokeWidth={1} />
            <span>{hero.badge.first}</span>
            <span className="size-1 rounded-full bg-[#c4c1ba]" />
            <span>{hero.badge.second}</span>
          </div>

          <h1 className="mt-6 text-[clamp(44px,5.35vw,78px)] font-bold leading-[0.97] tracking-[-0.045em] text-ink lg:whitespace-nowrap">
            {hero.title[0]}
            <br />
            {hero.title[1]}
          </h1>

          <p className="mt-5 max-w-[520px] text-[15.5px] leading-relaxed text-muted sm:text-[16.5px]">
            {hero.description}
          </p>

          <ul className="mt-6 flex flex-col gap-3.5">
            {hero.features.map((feature, i) => {
              const Icon = featureIcons[i]
              return (
                <li key={feature} className="flex items-center gap-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-soft">
                    <Icon className="size-[19px] text-ink" strokeWidth={2.1} />
                  </span>
                  <span className="text-[16.5px] font-medium text-ink sm:text-[18px]">{feature}</span>
                </li>
              )
            })}
          </ul>

          <div className="mt-6 max-w-[560px] border-t border-line" />

          <div className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-5">
            <div>
              <p className="font-display text-[23px] font-bold leading-tight tracking-[-0.03em] text-ink">
                {hero.start.title}
              </p>
              <p className="mt-1 text-[16px] text-muted">{hero.start.subtitle}</p>
            </div>
            <Button href="/start" size="lg" className="gap-3 pl-7 pr-6 font-semibold">
              {hero.start.cta}
              <ArrowRight className="size-[18px]" strokeWidth={2} />
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-4 rounded-[22px] bg-soft px-4 py-4 sm:flex-nowrap sm:px-5">
            <ul className="flex -space-x-3">
              {hero.community.avatars.map((avatar) => (
                <li key={avatar.src} className="shrink-0">
                  <img
                    src={avatar.src}
                    alt={avatar.alt}
                    width={52}
                    height={52}
                    loading="eager"
                    className="size-12 rounded-full object-cover ring-[2.5px] ring-white sm:size-[52px]"
                  />
                </li>
              ))}
            </ul>
            <div className="min-w-0">
              <p className="text-[15px] font-semibold text-ink">{hero.community.title}</p>
              <Link
                href="/creators"
                className="mt-1.5 inline-flex items-center gap-2 text-[14.5px] text-ink-soft transition-colors hover:text-ink"
              >
                <span className="grid size-5 place-items-center rounded-full bg-ink text-white">
                  <ArrowUpRight className="size-3.5" strokeWidth={2.2} />
                </span>
                {hero.community.cta}
              </Link>
            </div>
          </div>
        </div>

        <HeroCollage />
      </Container>
    </section>
  )
}

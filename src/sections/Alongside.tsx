import { Check, Lock } from 'lucide-react'

import { ChannelChips } from '../components/ChannelChips'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { VerifiedBadge } from '../components/ProductCard'
import { alongside } from '../content'

export function Alongside() {
  return (
    <section className="border-t border-line py-16 sm:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
        <Reveal>
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-muted">
            {alongside.eyebrow}
          </p>
          <h2 className="mt-4 max-w-[520px] text-[clamp(32px,3.8vw,48px)] font-bold leading-[1.03] tracking-[-0.04em] text-ink">
            {alongside.title}
          </h2>
          <p className="mt-4 max-w-[500px] text-[16px] leading-relaxed text-muted">
            {alongside.description}
          </p>
          <ul className="mt-7 flex flex-col gap-3">
            {alongside.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[14.5px] leading-snug text-ink-soft">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-soft">
                  <Check className="size-3 text-ink" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <ChannelChips channels={['TikTok', 'Instagram', 'WhatsApp']} className="mt-7" />
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="relative mx-auto w-full max-w-[330px] py-6 sm:py-8">
            <div className="absolute -left-2 top-24 z-20 max-w-[168px] rounded-[16px] rounded-bl-[5px] border border-line bg-white p-3 text-[11.5px] leading-snug text-ink-soft shadow-[0_16px_40px_-22px_rgb(20_10_40/0.4)] sm:-left-10 sm:text-[12px]">
              {alongside.chats[0]}
            </div>
            <div className="absolute -right-1 bottom-32 z-20 max-w-[186px] rounded-[16px] rounded-br-[5px] bg-[#e6f6ea] p-3 text-[11.5px] leading-snug text-[#14532d] shadow-[0_16px_40px_-22px_rgb(20_10_40/0.4)] sm:-right-8 sm:text-[12px]">
              {alongside.chats[1]}
            </div>

            <div className="relative rounded-[44px] border-[8px] border-ink bg-ink shadow-[0_44px_90px_-36px_rgb(24_12_48/0.5)]">
              <div className="overflow-hidden rounded-[36px] bg-white">
                <div className="flex items-center justify-between px-6 pb-1 pt-2.5 text-[9px] font-medium text-muted">
                  <span>9:41</span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/50" />
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/30" />
                  </span>
                </div>
                <div className="px-4 pb-6 pt-2">
                  <div className="flex items-center justify-center gap-1.5 rounded-full bg-soft px-3 py-2 text-[10px] text-muted">
                    <Lock className="size-2.5" strokeWidth={2.5} />
                    reva.store/amara
                  </div>
                  <div className="mt-3.5 flex items-center gap-2.5">
                    <img
                      src="/media/avatar-45.jpg"
                      alt=""
                      className="size-10 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <p className="flex items-center gap-1 text-[12.5px] font-semibold text-ink">
                        Amara Reed
                        <VerifiedBadge className="size-3.5" />
                      </p>
                      <p className="text-[10px] text-muted">86K followers · 18 products</p>
                    </div>
                    <span className="ml-auto rounded-full bg-ink px-3 py-1.5 text-[10px] font-medium text-white">
                      Follow
                    </span>
                  </div>
                  <div className="mt-3.5 aspect-[4/4.4] overflow-hidden rounded-[14px] bg-soft">
                    <img
                      src="/media/tote.jpg"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[12px] font-semibold text-ink">Heavy Canvas Tote</p>
                      <p className="text-[10px] text-muted">$28 · Natural canvas</p>
                    </div>
                    <span className="rounded-full bg-ink px-3.5 py-1.5 text-[10px] font-medium text-white">
                      Buy
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between rounded-[10px] bg-soft px-3 py-2 text-[9.5px] text-muted">
                    <span>M-PESA · Card · PayPal</span>
                    <span className="font-medium text-ink">Secure checkout</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-[12px] text-muted">
              Your storefront, behind the link in your bio.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

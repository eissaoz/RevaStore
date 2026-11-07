import { Check, Lock, MapPin, Package, ShieldCheck, Users } from 'lucide-react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { CreatorCard } from '../components/CreatorCard'
import { PageHero, SectionHead } from '../components/PageHero'
import { ProductCard } from '../components/ProductCard'
import { Reveal } from '../components/Reveal'
import { shopperFaq, shopperSteps } from '../content-pages'
import { creators, products } from '../data'

export function Shoppers() {
  return (
    <>
      <PageHero
        eyebrow="For shoppers"
        title="Buy from the people you already follow."
        description="Discover small brands, pay in the way you already pay and track every order from one place. You never have to download another app to buy something you saw in a video."
      >
        <Button href="/explore">Explore creators</Button>
        <Button href="/orders" variant="quiet">
          Track an order
        </Button>
      </PageHero>

      <section className="py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-center">
          <Reveal>
            <SectionHead
              eyebrow="How buying works"
              title="Three taps from the video to your door"
              description="No DMs, no bank transfers to a stranger, no “please send a screenshot”. REVA sits between you and the creator so both sides know what was ordered and paid."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {shopperSteps.map((step, index) => (
                <div key={step.title} className="rounded-[20px] border border-line p-5">
                  <span className="font-display text-[12px] font-semibold text-muted">0{index + 1}</span>
                  <h3 className="mt-3 text-[15.5px] font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[26px] bg-ink p-6 text-white sm:p-8">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.15em] text-white/45">
                Demo order
              </p>
              <p className="mt-3 text-[19px] font-semibold">#REVA1001</p>
              <p className="mt-1 text-[13px] text-white/55">Reva Store · 2 items · $96</p>

              <div className="mt-7 flex items-center gap-1.5">
                {['Confirmed', 'Packed', 'In transit', 'Delivered'].map((label, index) => (
                  <div key={label} className="flex-1">
                    <div
                      className={
                        index <= 2
                          ? 'h-1 rounded-full bg-white'
                          : 'h-1 rounded-full bg-white/20'
                      }
                    />
                    <p
                      className={
                        index <= 2
                          ? 'mt-2 text-[10px] font-medium text-white/85'
                          : 'mt-2 text-[10px] text-white/40'
                      }
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex items-start gap-3 rounded-[16px] bg-white/8 p-4">
                <MapPin className="mt-0.5 size-4 shrink-0 text-white/60" />
                <div>
                  <p className="text-[12.5px] font-medium">Arriving Thu, 6 Nov</p>
                  <p className="mt-0.5 text-[11.5px] text-white/50">18 Riverside Drive, Nairobi</p>
                </div>
              </div>

              <Button href="/orders" variant="inverse" className="mt-5 w-full">
                Open the tracking page
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line py-14 sm:py-20">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Buyer protection"
              title="The same trust you expect from a big shop"
              description="Small creator does not have to mean risky. Every REVA checkout carries the same baseline, whoever you buy from."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: 'Protected payments',
                description:
                  'Pay by mobile money, card or PayPal. Your details stay with the payment provider, never in a chat.',
              },
              {
                icon: Package,
                title: 'Tracked delivery',
                description:
                  'Every order gets a status page. If a parcel does not arrive, the refund process starts from that page.',
              },
              {
                icon: Lock,
                title: 'One order record',
                description:
                  'Receipt, items, messages and returns stay attached to the order — not lost between apps.',
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-[24px] border border-line bg-white p-6">
                  <span className="grid size-11 place-items-center rounded-full bg-soft text-ink">
                    <item.icon className="size-[19px]" />
                  </span>
                  <h3 className="mt-5 text-[18px] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <SectionHead
            eyebrow="Featured"
            title="A few things worth a look"
            description="Demo catalogue for the prototype — every card is real navigation, every price is imaginary."
          >
            <Button href="/explore" variant="quiet">
              All products
            </Button>
          </SectionHead>
          <div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-14 sm:py-20">
        <Container>
          <SectionHead
            eyebrow="Creators"
            title="Shops run by the people who make the work"
          >
            <Button href="/explore" variant="quiet">
              Browse all
            </Button>
          </SectionHead>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {creators.slice(1, 4).map((creator) => (
              <CreatorCard key={creator.handle} creator={creator} />
            ))}
          </div>
        </Container>
      </section>

      <section id="help" className="scroll-mt-24 border-t border-line py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-muted">
              Help centre
            </p>
            <h2 className="mt-4 text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.04] tracking-[-0.04em] text-ink">
              Where is my order, and other questions
            </h2>
            <p className="mt-4 max-w-[420px] text-[15.5px] leading-relaxed text-muted">
              Tracking lives behind your order number. Returns and shipping rules are set by each
              creator, with REVA's baseline underneath.
            </p>

            <div className="mt-7 rounded-[22px] bg-soft p-5">
              <span className="grid size-9 place-items-center rounded-full bg-white text-ink">
                <Users className="size-4" />
              </span>
              <p className="mt-3 text-[14px] font-semibold text-ink">Still need a human?</p>
              <p className="mt-1 text-[13px] leading-relaxed text-muted">
                Support can see the order, the payment and the delivery status — you will not be
                asked to explain the whole story again.
              </p>
              <Button href="/about" variant="quiet" className="mt-4">
                Contact support
              </Button>
            </div>

            <div className="mt-6 flex items-start gap-3 text-[13px] leading-relaxed text-muted">
              <Check className="mt-0.5 size-4 shrink-0 text-ink" />
              <p>This is a frontend prototype — support links and forms are illustrative.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-line">
              {shopperFaq.map((item) => (
                <details key={item.question} className="group border-b border-line py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[15.5px] font-semibold text-ink marker:hidden">
                    {item.question}
                    <span
                      aria-hidden
                      className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-line text-muted transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[560px] pr-8 text-[14.5px] leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="flex flex-col items-start gap-5 rounded-[28px] bg-[#efe9ff] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-muted">
                Sell on REVA
              </p>
              <p className="mt-2 max-w-[520px] text-[22px] font-bold leading-snug tracking-[-0.02em] text-ink">
                If you make things and post about them, your store can be live tonight.
              </p>
            </div>
            <Button href="/start">Create your store</Button>
          </div>
        </Container>
      </section>
    </>
  )
}

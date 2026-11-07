import {
  BarChart3,
  CreditCard,
  Package,
  Sparkles,
  Store as StoreIcon,
  Users,
} from 'lucide-react'

import { Button } from '../components/Button'
import { ChannelChips } from '../components/ChannelChips'
import { Container } from '../components/Container'
import { along, creatorFaq, creatorTools } from '../content-pages'
import { PageHero, SectionHead } from '../components/PageHero'
import { Reveal } from '../components/Reveal'

import { Alongside } from '../sections/Alongside'
import { Cta } from '../sections/Cta'

const icons = {
  store: StoreIcon,
  payments: CreditCard,
  orders: Package,
  customers: Users,
  insights: BarChart3,
  extras: Sparkles,
}

const flowSteps = [
  {
    number: '01',
    title: 'Your content',
    description: 'You post a drop, a restock or a behind-the-scenes clip on TikTok, Instagram or WhatsApp.',
  },
  {
    number: '02',
    title: 'Your store link',
    description: 'One REVA link in your bio and DMs takes shoppers to a storefront that matches your brand.',
  },
  {
    number: '03',
    title: 'Checkout & payout',
    description: 'They pay with mobile money, card or PayPal. Stock updates, a receipt sends and the money reaches you.',
  },
  {
    number: '04',
    title: 'Delivery & tracking',
    description: 'Book a courier, print the label and let the order status answer “where is my order?” for you.',
  },
]

export function CreatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="For creators & small brands"
        title="Post like you always do. Get paid like a business."
        description="REVA is the store, checkout and order system behind your content. Keep your audience on TikTok and WhatsApp — add the part that takes payment, tracks stock and ships the order."
      >
        <Button href="/start">Open your store</Button>
        <Button href="#how" variant="quiet">
          See how it works
        </Button>
      </PageHero>

      <section className="py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
          <Reveal>
            <SectionHead
              eyebrow="The missing layer"
              title="You already have the audience. You are missing the checkout."
            />
            <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-muted">
              Most social sellers run a real business out of DMs: asking for sizes, sending account
              numbers, screenshotting payment confirmations, then tracking deliveries in a notes
              app. It works until it does not.
            </p>
            <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-muted">
              REVA gives that business a proper front door — without asking you to leave the
              platforms where your customers already spend their time.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <ChannelChips channels={['TikTok', 'Instagram', 'WhatsApp']} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[26px] border border-line bg-white p-6 sm:p-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                What changes
              </p>
              <ul className="mt-5 flex flex-col gap-4">
                {[
                  { before: '“Is this still available?”', after: 'Live stock on the store page' },
                  { before: '“Send the payment screenshot”', after: 'Checkout confirms instantly' },
                  { before: '“Where is my order?”', after: 'Tracking link updates itself' },
                  { before: '“What is your number again?”', after: 'Customers, saved per buyer' },
                ].map((row) => (
                  <li key={row.before} className="grid gap-2 border-t border-line pt-4 first:border-0 first:pt-0 sm:grid-cols-2 sm:gap-4">
                    <span className="text-[13.5px] text-muted line-through decoration-line-strong">
                      {row.before}
                    </span>
                    <span className="text-[13.5px] font-medium text-ink">{row.after}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="how" className="scroll-mt-24 border-t border-line py-14 sm:py-20">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="How it works"
              title="One connected path from post to parcel"
              description="Each piece is useful on its own. Together they close the loop between the content and the customer."
            />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {flowSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06}>
                <div className="border-t border-line-strong pt-5">
                  <span className="font-display text-[13px] font-semibold text-muted">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-[18px] font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="The toolkit"
              title="Everything the DM thread was doing, in one place"
              description="Turn parts on as you grow. Most creators start with a store and a payment method, then add delivery once the orders pile up."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {creatorTools.map((tool, index) => {
              const Icon = icons[tool.key]
              return (
                <Reveal key={tool.key} delay={index * 0.05}>
                  <article
                    id={tool.anchor}
                    className="flex h-full scroll-mt-28 flex-col rounded-[24px] border border-line bg-white p-6"
                  >
                    <span className="grid size-11 place-items-center rounded-full bg-soft text-ink">
                      <Icon className="size-[19px]" />
                    </span>
                    <h3 className="mt-5 text-[18px] font-semibold text-ink">{tool.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted">{tool.description}</p>
                    <ul className="mt-5 flex flex-col gap-2 border-t border-line pt-4">
                      {tool.points.map((point) => (
                        <li key={point} className="text-[12.5px] leading-snug text-ink-soft">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              )
            })}
          </div>
          <p className="mt-6 text-[13px] text-muted">
            Pricing in this prototype is illustrative. Nothing is charged and no accounts are
            created.
          </p>
        </Container>
      </section>

      <Alongside />

      <section id="guides" className="scroll-mt-24 border-t border-line py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal>
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-muted">
              Creator guides
            </p>
            <h2 className="mt-4 text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.04] tracking-[-0.04em] text-ink">
              Straight answers before you move your business
            </h2>
            <p className="mt-4 max-w-[420px] text-[15.5px] leading-relaxed text-muted">
              The questions creators ask most, answered without the sales pitch. Still unsure?
              Nothing here is live in this prototype.
            </p>
            <Button href="/start" variant="quiet" className="mt-6">
              Try the onboarding
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-line">
              {creatorFaq.map((item) => (
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

      <section className="pb-4">
        <Container>
          <div className="rounded-[24px] bg-soft p-6 sm:p-8">
            <p className="text-[15.5px] font-semibold text-ink">{along.title}</p>
            <p className="mt-2 max-w-[720px] text-[14.5px] leading-relaxed text-muted">
              {along.description}
            </p>
          </div>
        </Container>
      </section>

      <div className="pt-14">
        <Cta />
      </div>
    </>
  )
}

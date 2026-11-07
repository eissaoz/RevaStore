import { Container } from '../components/Container'
import { PageHero, SectionHead } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { pillars } from '../content'
import { Cta } from '../sections/Cta'

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About REVA"
        title="Social media built the audience. REVA builds the business."
        description="REVA is a social-commerce platform for independent creators and small brands. It takes the audience you built on social media and gives it somewhere to buy — with the payments, stock and delivery handled in the same place."
        aside={
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: '10K+', label: 'Creators selling' },
              { value: '1M+', label: 'Shoppers' },
              { value: '32', label: 'Countries' },
              { value: '2 min', label: 'Store setup' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[20px] bg-soft p-5">
                <p className="text-[26px] font-bold tracking-[-0.03em] text-ink">{stat.value}</p>
                <p className="mt-1 text-[12px] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        }
      />

      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="The problem"
              title="Three things that should be one"
              description="For most social sellers, the audience, the products and the money live in different apps. That gap is where orders get lost."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pillars.items.map((item, index) => (
              <Reveal key={item.key} delay={index * 0.06}>
                <article className="h-full rounded-[24px] border border-line bg-white p-6">
                  <span className="font-display text-[13px] font-semibold text-muted">
                    {item.number}
                  </span>
                  <h3 className="mt-4 text-[19px] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <Reveal>
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-muted">
              Why we built it
            </p>
            <h2 className="mt-4 text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.04] tracking-[-0.04em] text-ink">
              It started with a screenshot and a bank alert
            </h2>
            <div className="mt-6 flex max-w-[600px] flex-col gap-4 text-[16px] leading-relaxed text-muted">
              <p>
                Creators we spoke to were running serious businesses from their phones: a TikTok
                clip, a WhatsApp thread, a payment screenshot, a courier booked by phone. The
                content was excellent. The operations were held together with memory and goodwill.
              </p>
              <p>
                The obvious answer — “move everything to a new platform” — never worked. The
                audience was on TikTok. The conversations were on WhatsApp. Asking people to
                rebuild that somewhere else was asking them to lose the thing that made the
                business work.
              </p>
              <p>
                So REVA does the opposite. Your content stays where it is. The store, checkout,
                receipts and delivery sit behind it, in one system that talks to the channels you
                already use.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[26px] bg-ink p-7 text-white sm:p-8">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.15em] text-white/45">
                What we believe
              </p>
              <ul className="mt-5 flex flex-col gap-6">
                {[
                  {
                    title: 'Alongside, not instead',
                    body: 'REVA should make the channels you already use more valuable, not compete with them for attention.',
                  },
                  {
                    title: 'The creator owns the customer',
                    body: 'Your buyer list, order history and audience are yours. We are the infrastructure, not the landlord.',
                  },
                  {
                    title: 'Boring where it matters',
                    body: 'Payments and delivery should be unremarkable. The interesting part is what you make.',
                  },
                ].map((item) => (
                  <li key={item.title} className="border-t border-white/12 pt-5 first:border-0 first:pt-0">
                    <p className="text-[15px] font-semibold">{item.title}</p>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/60">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <SectionHead
            eyebrow="The product"
            title="What connects, and what it replaces"
            description="REVA is not another feed. It is the commercial layer behind the feed."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'It connects',
                points: [
                  'TikTok, Instagram and WhatsApp as discovery channels',
                  'A storefront and catalogue with live stock',
                  'Mobile money, cards and PayPal at checkout',
                  'Couriers, labels and tracking on every order',
                ],
                tone: 'light',
              },
              {
                title: 'It does not replace',
                points: [
                  'Your social accounts, followers or content',
                  'The conversations you have in DMs',
                  'The way you price or brand your work',
                  'The relationship you have with your buyers',
                ],
                tone: 'dark',
              },
            ].map((block) => (
              <div
                key={block.title}
                className={
                  block.tone === 'dark'
                    ? 'rounded-[26px] bg-soft p-7 sm:p-8'
                    : 'rounded-[26px] border border-line bg-white p-7 sm:p-8'
                }
              >
                <h3 className="text-[18px] font-semibold text-ink">{block.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[14px] leading-snug text-ink-soft">
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-ink/40" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Cta />
    </>
  )
}

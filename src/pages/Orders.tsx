import { Check, MapPin, Package, Truck } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { demoOrder } from '../data'
import { cx } from '../lib/cx'
import { useQuery, useRouter } from '../lib/router'

export function Orders() {
  const query = useQuery()
  const { navigate } = useRouter()
  const placed = query.get('placed') === '1'

  const [reference, setReference] = useState(placed ? demoOrder.reference : '')
  const [tracked, setTracked] = useState(placed)
  const [error, setError] = useState('')

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!reference.trim()) {
      setError('Enter the order number from your receipt.')
      return
    }
    setError('')
    setTracked(true)
  }

  const subtotal = demoOrder.items.reduce((sum, item) => sum + item.product.price * item.qty, 0)

  return (
    <>
      <PageHero
        eyebrow="Orders"
        title="Every order in one place"
        description="Check where a purchase is, what was in it and when it arrives. No DM threads, no screenshots, no chasing the seller for an update."
      >
        <Button href="/explore">Keep shopping</Button>
        <Button href="/shoppers" variant="quiet">
          How buying works
        </Button>
      </PageHero>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-start">
            <div>
              {placed && (
                <div className="mb-6 flex items-start gap-3 rounded-[20px] border border-[#d6ebdc] bg-[#f2faf4] p-5">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-[#1f7a45] text-white">
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="text-[14.5px] font-semibold text-[#14532d]">Order placed</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#356b4a]">
                      This is a prototype, so no payment was taken. Your receipt would be sent by
                      email, and the creator would see the order instantly.
                    </p>
                  </div>
                </div>
              )}

              {!tracked ? (
                <>
                  <form
                    onSubmit={submit}
                    className="rounded-[26px] border border-line bg-white p-6 sm:p-8"
                  >
                    <h2 className="text-[22px] font-bold tracking-[-0.02em] text-ink">
                      Track an order
                    </h2>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted">
                      Use the order number from your confirmation. It looks like{' '}
                      <span className="font-medium text-ink">#REVA1001</span>.
                    </p>
                    <label className="mt-6 block">
                      <span className="text-[12.5px] font-semibold text-ink">Order number</span>
                      <input
                        value={reference}
                        onChange={(event) => {
                          setReference(event.target.value)
                          setError('')
                        }}
                        placeholder="#REVA1001"
                        className="mt-2 h-12 w-full rounded-[14px] border border-line bg-white px-4 text-[14.5px] text-ink placeholder:text-faint focus:border-line-strong focus:outline-none"
                      />
                    </label>
                    {error && <p className="mt-2 text-[12.5px] text-[#b42318]">{error}</p>}
                    <div className="mt-5 flex flex-wrap items-center gap-4">
                      <Button type="submit">Track order</Button>
                      <button
                        type="button"
                        onClick={() => {
                          setReference(demoOrder.reference)
                          setError('')
                        }}
                        className="text-[13px] font-medium text-muted underline hover:text-ink"
                      >
                        Use demo order
                      </button>
                    </div>
                  </form>

                  <div className="mt-4 flex items-start gap-3 rounded-[20px] bg-soft p-5 text-[13px] leading-relaxed text-muted">
                    <Package className="mt-0.5 size-4 shrink-0 text-ink" />
                    <p>
                      Buy on REVA and tracking is automatic — the creator does not have to send you
                      updates manually, and the link stays the same from payment to delivery.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-[26px] border border-line bg-white p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                          Order {demoOrder.id}
                        </p>
                        <h2 className="mt-2 text-[24px] font-bold tracking-[-0.025em] text-ink">
                          Arriving {demoOrder.eta}
                        </h2>
                        <p className="mt-1 text-[13px] text-muted">
                          Placed {demoOrder.placed} · {demoOrder.courier}
                        </p>
                      </div>
                      <span className="rounded-full bg-soft px-3.5 py-1.5 text-[12px] font-medium text-ink">
                        In transit
                      </span>
                    </div>

                    <ol className="mt-8">
                      {demoOrder.steps.map((step, index) => {
                        const done = index < demoOrder.activeStep
                        const current = index === demoOrder.activeStep
                        return (
                          <li key={step.title} className="relative flex gap-4 pb-7 last:pb-0">
                            {index < demoOrder.steps.length - 1 && (
                              <span
                                aria-hidden
                                className={cx(
                                  'absolute left-[13px] top-7 h-full w-px',
                                  done ? 'bg-ink' : 'bg-line',
                                )}
                              />
                            )}
                            <span
                              className={cx(
                                'relative z-10 mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border',
                                done && 'border-ink bg-ink text-white',
                                current && 'border-ink bg-white',
                                !done && !current && 'border-line bg-white',
                              )}
                            >
                              {done ? (
                                <Check className="size-3.5" strokeWidth={3} />
                              ) : current ? (
                                <span className="size-2 rounded-full bg-ink" />
                              ) : (
                                <span className="size-1.5 rounded-full bg-line-strong" />
                              )}
                            </span>
                            <div>
                              <p
                                className={cx(
                                  'text-[14.5px] font-semibold',
                                  done || current ? 'text-ink' : 'text-muted',
                                )}
                              >
                                {step.title}
                              </p>
                              <p className="mt-0.5 text-[12.5px] text-muted">{step.detail}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ol>

                    <div className="mt-6 flex flex-wrap gap-3 border-t border-line pt-5">
                      <Button
                        variant="quiet"
                        onClick={() => {
                          setTracked(false)
                          setReference('')
                          if (placed) navigate('/orders', { replace: true })
                        }}
                      >
                        Track another order
                      </Button>
                      <Button href="/explore">Continue shopping</Button>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {[
                      { icon: MapPin, title: 'Delivering to', detail: demoOrder.address },
                      { icon: Truck, title: 'Courier', detail: demoOrder.courier },
                      { icon: Package, title: 'Payment', detail: demoOrder.payment },
                    ].map((item) => (
                      <div key={item.title} className="rounded-[18px] border border-line p-4">
                        <item.icon className="size-4 text-muted" />
                        <p className="mt-2 text-[11.5px] uppercase tracking-[0.1em] text-muted">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[13px] font-medium leading-snug text-ink">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <aside className="rounded-[26px] bg-soft p-6 sm:p-7">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                {tracked ? `Order ${demoOrder.id}` : 'Your receipt'}
              </p>
              <p className="mt-2 text-[15px] font-semibold text-ink">
                {tracked ? '2 items from Reva Store' : 'What tracking includes'}
              </p>

              <ul className="mt-5 flex flex-col gap-4 border-t border-line pt-5">
                {(tracked
                  ? demoOrder.items.map((item) => ({
                      key: item.product.id,
                      left: item.qty > 1 ? `${item.product.name} × ${item.qty}` : item.product.name,
                      right: `$${item.product.price * item.qty}`,
                    }))
                  : [
                      { key: '1', left: 'Payment confirmation', right: 'Instant' },
                      { key: '2', left: 'Packing update', right: 'From creator' },
                      { key: '3', left: 'Courier tracking', right: 'Automatic' },
                    ]
                ).map((line) => (
                  <li key={line.key} className="flex items-start justify-between gap-4">
                    <span className="text-[13.5px] leading-snug text-ink-soft">{line.left}</span>
                    <span className="shrink-0 text-[13px] font-medium text-ink">{line.right}</span>
                  </li>
                ))}
              </ul>

              {tracked && (
                <div className="mt-5 flex items-center justify-between border-t border-line pt-5 text-[14px]">
                  <span className="text-muted">Total paid</span>
                  <span className="font-semibold text-ink">${subtotal}</span>
                </div>
              )}

              <div className="mt-6 rounded-[16px] bg-white p-4">
                <p className="text-[12px] font-semibold text-ink">Something wrong?</p>
                <p className="mt-1 text-[12px] leading-relaxed text-muted">
                  Open a return from the order or contact the creator directly — REVA keeps the
                  thread attached to the order.
                </p>
                <a
                  href="/shoppers#help"
                  className="mt-3 inline-flex text-[12px] font-semibold text-ink underline"
                >
                  Get help
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}

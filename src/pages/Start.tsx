import { ArrowLeft, ArrowRight, Check, Lock } from 'lucide-react'
import { useState } from 'react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { products } from '../data'
import { cx } from '../lib/cx'
import { Link } from '../lib/router'

const channelOptions = ['TikTok', 'Instagram', 'WhatsApp', 'YouTube']
const payoutOptions = [
  { id: 'mpesa', name: 'M-PESA', detail: 'Instant payouts to your phone · Kenya, Tanzania, Ghana' },
  { id: 'bank', name: 'Bank / card', detail: 'Two-day payouts to a local bank account' },
  { id: 'paypal', name: 'PayPal', detail: 'For international buyers and payouts' },
]
const stepLabels = ['Your store', 'Products', 'Payouts']

export function Start() {
  const [step, setStep] = useState(0)
  const [storeName, setStoreName] = useState('Amara Studio')
  const [handle, setHandle] = useState('amara')
  const [channels, setChannels] = useState<string[]>(['TikTok', 'WhatsApp'])
  const [selected, setSelected] = useState<string[]>(products.map((product) => product.id))
  const [payout, setPayout] = useState('mpesa')
  const [done, setDone] = useState(false)

  const toggleChannel = (channel: string) =>
    setChannels((previous) =>
      previous.includes(channel)
        ? previous.filter((item) => item !== channel)
        : [...previous, channel],
    )

  const toggleProduct = (id: string) =>
    setSelected((previous) =>
      previous.includes(id) ? previous.filter((item) => item !== id) : [...previous, id],
    )

  const canContinue =
    step === 0 ? storeName.trim().length > 0 && handle.trim().length > 0 : step === 1 ? selected.length > 0 : Boolean(payout)

  const previewProducts = products.filter((product) => selected.includes(product.id)).slice(0, 2)

  return (
    <>
      <section className="border-b border-line py-3">
        <Container className="flex items-center gap-2 text-[12.5px] text-muted">
          <Link href="/creators" className="hover:text-ink">
            For creators
          </Link>
          <span aria-hidden>/</span>
          <span className="text-ink">Open a store</span>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-14">
          <div>
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-muted">
              Step {Math.min(step + 1, 3)} of 3
            </p>
            <h1 className="mt-3 text-[clamp(32px,4vw,46px)] font-bold leading-[1.04] tracking-[-0.04em] text-ink">
              {done ? 'Your store is ready.' : 'Open your store in two minutes.'}
            </h1>
            <p className="mt-3 max-w-[520px] text-[15.5px] leading-relaxed text-muted">
              {done
                ? 'In the real product this is where your link goes live and your first product is ready to share. In this prototype, the preview beside it is the finished result.'
                : 'No card, no developer, no app to download. Pick a handle, choose what to sell and how you want to get paid.'}
            </p>

            {!done && (
              <>
                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {stepLabels.map((label, index) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => index <= step && setStep(index)}
                      disabled={index > step}
                      className={cx(
                        'inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[12.5px] font-medium transition-colors',
                        index === step
                          ? 'border-ink bg-ink text-white'
                          : index < step
                            ? 'border-line bg-white text-ink hover:border-line-strong'
                            : 'border-line bg-white text-faint',
                      )}
                    >
                      {index < step && <Check className="size-3" strokeWidth={3} />}
                      {label}
                    </button>
                  ))}
                </div>

                <div className="mt-5 rounded-[26px] border border-line bg-white p-6 sm:p-8">
                  {step === 0 && (
                    <div className="flex flex-col gap-5">
                      <label className="block">
                        <span className="text-[12.5px] font-semibold text-ink">Store name</span>
                        <input
                          value={storeName}
                          onChange={(event) => setStoreName(event.target.value)}
                          placeholder="Amara Studio"
                          className="mt-2 h-12 w-full rounded-[14px] border border-line bg-white px-4 text-[14.5px] text-ink placeholder:text-faint focus:border-line-strong focus:outline-none"
                        />
                      </label>
                      <label className="block">
                        <span className="text-[12.5px] font-semibold text-ink">Store link</span>
                        <div className="mt-2 flex h-12 items-center rounded-[14px] border border-line bg-white pl-4 focus-within:border-line-strong">
                          <span className="text-[14px] text-muted">reva.store/</span>
                          <input
                            value={handle}
                            onChange={(event) =>
                              setHandle(event.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))
                            }
                            placeholder="yourname"
                            className="h-full min-w-0 flex-1 bg-transparent px-1 pr-4 text-[14px] text-ink placeholder:text-faint focus:outline-none"
                          />
                        </div>
                      </label>
                      <div>
                        <span className="text-[12.5px] font-semibold text-ink">
                          Where do you post?
                        </span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {channelOptions.map((channel) => (
                            <button
                              key={channel}
                              type="button"
                              onClick={() => toggleChannel(channel)}
                              className={cx(
                                'h-10 rounded-full border px-4 text-[13px] font-medium transition-colors',
                                channels.includes(channel)
                                  ? 'border-ink bg-ink text-white'
                                  : 'border-line bg-white text-ink-soft hover:border-line-strong',
                              )}
                            >
                              {channel}
                            </button>
                          ))}
                        </div>
                        <p className="mt-2 text-[12px] text-muted">
                          You keep posting there. REVA only adds the commerce behind the link.
                        </p>
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-[13px] text-muted">
                          {selected.length} of {products.length} demo products selected
                        </p>
                        <button
                          type="button"
                          onClick={() =>
                            setSelected(
                              selected.length === products.length
                                ? []
                                : products.map((product) => product.id),
                            )
                          }
                          className="text-[12.5px] font-medium text-ink underline"
                        >
                          {selected.length === products.length ? 'Clear all' : 'Select all'}
                        </button>
                      </div>
                      <ul className="mt-4 flex flex-col gap-2">
                        {products.map((product) => {
                          const active = selected.includes(product.id)
                          return (
                            <li key={product.id}>
                              <button
                                type="button"
                                onClick={() => toggleProduct(product.id)}
                                className={cx(
                                  'flex w-full items-center gap-4 rounded-[16px] border p-3 text-left transition-colors',
                                  active ? 'border-ink bg-soft/60' : 'border-line bg-white hover:border-line-strong',
                                )}
                              >
                                <span className="size-12 shrink-0 overflow-hidden rounded-[10px] bg-soft">
                                  <img
                                    src={product.image}
                                    alt=""
                                    className={cx('h-full w-full', product.contain ? 'object-contain p-1' : 'object-cover')}
                                  />
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span className="block truncate text-[13.5px] font-semibold text-ink">
                                    {product.name}
                                  </span>
                                  <span className="block text-[11.5px] text-muted">
                                    {product.category} · ${product.price}
                                  </span>
                                </span>
                                <span
                                  className={cx(
                                    'grid size-5 shrink-0 place-items-center rounded-full border',
                                    active ? 'border-ink bg-ink text-white' : 'border-line text-transparent',
                                  )}
                                >
                                  <Check className="size-3" strokeWidth={3} />
                                </span>
                              </button>
                            </li>
                          )
                        })}
                      </ul>
                      <p className="mt-4 text-[12px] text-muted">
                        Demo catalogue — a real setup would let you add photos, sizes and stock.
                      </p>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="flex flex-col gap-2">
                      {payoutOptions.map((option) => {
                        const active = payout === option.id
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => setPayout(option.id)}
                            className={cx(
                              'flex items-start gap-3 rounded-[16px] border p-4 text-left transition-colors',
                              active ? 'border-ink bg-soft/60' : 'border-line bg-white hover:border-line-strong',
                            )}
                          >
                            <span
                              className={cx(
                                'mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border',
                                active ? 'border-ink bg-ink text-white' : 'border-line',
                              )}
                            >
                              {active && <Check className="size-3" strokeWidth={3} />}
                            </span>
                            <span>
                              <span className="block text-[14px] font-semibold text-ink">
                                {option.name}
                              </span>
                              <span className="mt-0.5 block text-[12.5px] leading-relaxed text-muted">
                                {option.detail}
                              </span>
                            </span>
                          </button>
                        )
                      })}
                      <p className="mt-3 flex items-start gap-2 text-[12px] leading-relaxed text-muted">
                        <Lock className="mt-0.5 size-3.5 shrink-0" />
                        Payout details are collected by the payment provider, not stored in this
                        prototype.
                      </p>
                    </div>
                  )}

                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-6">
                    <button
                      type="button"
                      onClick={() => setStep((value) => Math.max(0, value - 1))}
                      disabled={step === 0}
                      className="inline-flex items-center gap-2 text-[13.5px] font-medium text-muted transition-colors hover:text-ink disabled:pointer-events-none disabled:opacity-40"
                    >
                      <ArrowLeft className="size-4" />
                      Back
                    </button>
                    <Button
                      disabled={!canContinue}
                      onClick={() => {
                        if (step < 2) setStep((value) => value + 1)
                        else setDone(true)
                      }}
                    >
                      {step < 2 ? 'Continue' : 'Launch my store'}
                      <ArrowRight />
                    </Button>
                  </div>
                </div>
              </>
            )}

            {done && (
              <div className="mt-8 rounded-[26px] border border-line bg-white p-6 sm:p-8">
                <span className="grid size-12 place-items-center rounded-full bg-[#e8f6ec] text-[#1f7a45]">
                  <Check className="size-6" strokeWidth={2.6} />
                </span>
                <h2 className="mt-4 text-[22px] font-bold tracking-[-0.02em] text-ink">
                  {storeName || 'Your store'} is open
                </h2>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                  Your storefront link is ready to go in your bio. In the real product, your
                  products, payouts and delivery settings would already be attached.
                </p>
                <div className="mt-4 flex items-center gap-2 rounded-[14px] bg-soft px-4 py-3 text-[13px]">
                  <Lock className="size-3.5 text-muted" />
                  <span className="font-medium text-ink">reva.store/{handle || 'yourname'}</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={`/store?creator=${handle || 'revastore'}`}>View my store</Button>
                  <Button variant="quiet" href="/creators">
                    Back to creator hub
                  </Button>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setDone(false)
                    setStep(0)
                  }}
                  className="mt-5 text-[12.5px] text-muted underline hover:text-ink"
                >
                  Start over
                </button>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-[26px] border border-line bg-white p-5">
              <div className="flex items-center justify-between">
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Live preview
                </p>
                <span className="rounded-full bg-soft px-2.5 py-1 text-[10.5px] text-muted">Demo</span>
              </div>

              <div className="mt-3 overflow-hidden rounded-[20px] border border-line">
                <div className="flex items-center gap-2 border-b border-line bg-soft px-3 py-2 text-[10.5px] text-muted">
                  <Lock className="size-3" />
                  reva.store/{handle || 'yourname'}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-9 place-items-center rounded-full bg-soft text-[12px] font-semibold text-ink">
                      {(storeName || 'Your store').slice(0, 1).toUpperCase()}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[12.5px] font-semibold text-ink">
                        {storeName || 'Your store'}
                      </p>
                      <p className="text-[10px] text-muted">@{handle || 'yourname'}</p>
                    </div>
                  </div>

                  {previewProducts.length > 0 ? (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {previewProducts.map((product) => (
                        <div key={product.id}>
                          <div className="aspect-square overflow-hidden rounded-[10px] bg-soft">
                            <img
                              src={product.image}
                              alt=""
                              className={cx('h-full w-full', product.contain ? 'object-contain p-2' : 'object-cover')}
                            />
                          </div>
                          <p className="mt-1.5 truncate text-[10.5px] font-medium text-ink">
                            {product.name}
                          </p>
                          <p className="text-[10px] text-muted">${product.price}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-4 rounded-[10px] bg-soft px-3 py-6 text-center text-[10.5px] text-muted">
                      Pick a product to see it here
                    </p>
                  )}

                  <div className="mt-3 rounded-full bg-ink py-2 text-center text-[10.5px] font-medium text-white">
                    Buy now
                  </div>
                  <p className="mt-2 text-center text-[9.5px] text-muted">
                    {channels.length > 0 ? `Share from ${channels.join(', ')}` : 'Add your socials'}
                  </p>
                </div>
              </div>
            </div>

            <ul className="mt-4 flex flex-col gap-2.5 px-1">
              {[
                'Free to start — no card in this prototype',
                'Your TikTok, Instagram and WhatsApp stay as they are',
                'Orders, receipts and tracking in one dashboard',
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-[12.5px] leading-snug text-muted">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-ink" />
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>
    </>
  )
}

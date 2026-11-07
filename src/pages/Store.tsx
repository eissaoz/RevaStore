import { ArrowLeft, Minus, Package, Plus, ShieldCheck, ShoppingBag, Truck, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '../components/Button'
import { ChannelChips } from '../components/ChannelChips'
import { Container } from '../components/Container'
import { ProductCard, VerifiedBadge } from '../components/ProductCard'
import { creators, products, type Product } from '../data'
import { cx } from '../lib/cx'
import { Link, useQuery, useRouter } from '../lib/router'

export function Store() {
  const query = useQuery()
  const { navigate } = useRouter()
  const creator = creators.find((item) => item.handle === query.get('creator')) ?? creators[0]

  const [cart, setCart] = useState<Record<string, number>>({})
  const [open, setOpen] = useState(false)
  const [following, setFollowing] = useState(false)

  const lines = Object.entries(cart).map(([id, qty]) => ({
    product: products.find((item) => item.id === id) as Product,
    qty,
  }))
  const count = lines.reduce((sum, line) => sum + line.qty, 0)
  const subtotal = lines.reduce((sum, line) => sum + line.qty * line.product.price, 0)

  const add = (product: Product) => {
    setCart((previous) => ({ ...previous, [product.id]: (previous[product.id] ?? 0) + 1 }))
    setOpen(true)
  }

  const change = (id: string, delta: number) => {
    setCart((previous) => {
      const next = { ...previous }
      const qty = (next[id] ?? 0) + delta
      if (qty <= 0) delete next[id]
      else next[id] = qty
      return next
    })
  }

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="pb-20">
      <div className="border-b border-line bg-soft">
        <Container className="flex items-center justify-between gap-4 py-2.5 text-[12px] text-muted">
          <span>Demo storefront · checkout and orders are simulated</span>
          <Link
            href="/explore"
            className="inline-flex items-center gap-1.5 font-medium text-ink hover:underline"
          >
            <ArrowLeft className="size-3.5" />
            Back to Explore
          </Link>
        </Container>
      </div>

      <Container className="pt-6">
        <div className="relative h-[190px] overflow-hidden rounded-[26px] bg-[linear-gradient(120deg,#f2ecff,#d9c8f7)] sm:h-[240px]">
          <img
            src={creator.cover}
            alt=""
            className={cx(
              creator.coverClass?.includes('object-contain')
                ? 'absolute bottom-0 right-[6%] h-[94%] w-auto max-w-[48%] object-contain object-bottom'
                : 'absolute inset-0 h-full w-full object-cover',
            )}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(90deg,rgb(255_255_255/0.55),transparent_65%)]"
          />
          <span className="absolute left-6 top-6 rounded-full bg-white/85 px-3 py-1.5 text-[11.5px] font-medium text-ink backdrop-blur sm:left-8 sm:top-8">
            Powered by REVA
          </span>
        </div>

        <div className="relative -mt-10 px-2 sm:-mt-12 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="flex items-end gap-4">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="size-20 rounded-full object-cover ring-4 ring-white sm:size-24"
              />
              <div className="pb-1">
                <h1 className="flex items-center gap-2 text-[26px] font-bold tracking-[-0.03em] text-ink sm:text-[32px]">
                  {creator.name}
                  {creator.verified && <VerifiedBadge className="size-5" />}
                </h1>
                <p className="mt-1 text-[13.5px] text-muted">
                  @{creator.handle} · {creator.category}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 pb-1">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative inline-flex h-11 items-center gap-2 rounded-full border border-line bg-white px-4 text-[14px] font-medium text-ink transition-colors hover:border-line-strong"
              >
                <ShoppingBag className="size-4" />
                Bag
                {count > 0 && (
                  <span className="grid size-5 place-items-center rounded-full bg-ink text-[11px] font-semibold text-white">
                    {count}
                  </span>
                )}
              </button>
              <Button
                variant={following ? 'quiet' : 'primary'}
                onClick={() => setFollowing((value) => !value)}
              >
                {following ? 'Following' : 'Follow'}
              </Button>
            </div>
          </div>

          <div className="mt-6 grid gap-6 border-b border-line pb-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
            <div>
              <p className="max-w-[540px] text-[15.5px] leading-relaxed text-ink-soft">
                {creator.bio}
              </p>
              <ChannelChips channels={creator.channels} className="mt-4" />
            </div>
            <dl className="grid grid-cols-3 gap-3 text-center">
              {[
                { value: creator.followers, label: 'Followers' },
                { value: String(creator.products), label: 'Products' },
                { value: '48h', label: 'Ships in' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-[16px] bg-soft px-2 py-4">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-[18px] font-semibold text-ink">{stat.value}</dd>
                  <p className="mt-0.5 text-[11.5px] text-muted">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">Shop</p>
              <h2 className="mt-2 text-[28px] font-bold tracking-[-0.035em] text-ink">
                The current drop
              </h2>
            </div>
            <p className="text-[13px] text-muted">{products.length} products · demo catalogue</p>
          </div>

          <div className="mt-6 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={add}
                creatorHandle={creator.handle}
              />
            ))}
          </div>

          <div className="mt-14 grid gap-4 rounded-[24px] bg-soft p-7 sm:grid-cols-3">
            {[
              { icon: Truck, title: 'Ships in 48 hours', detail: 'Tracked delivery on every order' },
              { icon: ShieldCheck, title: 'Buyer protection', detail: 'Full refund if it never arrives' },
              { icon: Package, title: 'One order system', detail: 'Receipts, updates and returns in one place' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-ink">
                  <item.icon className="size-4" />
                </span>
                <div>
                  <p className="text-[13.5px] font-semibold text-ink">{item.title}</p>
                  <p className="mt-0.5 text-[12.5px] leading-snug text-muted">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {open && (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            aria-label="Close bag"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink/35 backdrop-blur-[2px]"
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Your bag"
            className="absolute right-0 top-0 flex h-full w-full max-w-[410px] flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <div>
                <p className="text-[17px] font-semibold text-ink">Your bag</p>
                <p className="mt-0.5 text-[12px] text-muted">
                  {count > 0 ? `${count} item${count > 1 ? 's' : ''}` : 'Nothing added yet'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-9 place-items-center rounded-full bg-soft text-ink transition-colors hover:bg-soft-2"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="grid size-14 place-items-center rounded-full bg-soft text-muted">
                    <ShoppingBag className="size-5" />
                  </span>
                  <p className="mt-4 text-[15px] font-semibold text-ink">Your bag is empty</p>
                  <p className="mt-1 max-w-[220px] text-[13px] leading-relaxed text-muted">
                    Add something from the drop and it will show up here.
                  </p>
                  <Button variant="quiet" className="mt-5" onClick={() => setOpen(false)}>
                    Keep browsing
                  </Button>
                </div>
              ) : (
                <ul className="flex flex-col gap-5">
                  {lines.map((line) => (
                    <li key={line.product.id} className="flex gap-4">
                      <div className="size-[76px] shrink-0 overflow-hidden rounded-[14px] bg-soft">
                        <img
                          src={line.product.image}
                          alt={line.product.name}
                          className={cx('h-full w-full', line.product.contain ? 'object-contain p-2' : 'object-cover')}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="truncate text-[13.5px] font-semibold text-ink">
                              {line.product.name}
                            </p>
                            <p className="mt-0.5 truncate text-[11.5px] text-muted">
                              {line.product.detail}
                            </p>
                          </div>
                          <p className="text-[13.5px] font-semibold text-ink">
                            ${line.product.price * line.qty}
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="inline-flex items-center rounded-full border border-line">
                            <button
                              type="button"
                              onClick={() => change(line.product.id, -1)}
                              className="grid size-8 place-items-center text-ink"
                              aria-label={`Remove one ${line.product.name}`}
                            >
                              <Minus className="size-3.5" />
                            </button>
                            <span className="w-5 text-center text-[12.5px] font-medium">{line.qty}</span>
                            <button
                              type="button"
                              onClick={() => change(line.product.id, 1)}
                              className="grid size-8 place-items-center text-ink"
                              aria-label={`Add one ${line.product.name}`}
                            >
                              <Plus className="size-3.5" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => change(line.product.id, -line.qty)}
                            className="text-[11.5px] text-muted underline hover:text-ink"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-line px-6 py-5">
              <div className="flex items-center justify-between text-[14.5px]">
                <span className="text-muted">Subtotal</span>
                <span className="font-semibold text-ink">${subtotal}</span>
              </div>
              <p className="mt-1 text-[12px] text-muted">
                Shipping and taxes calculated at checkout.
              </p>
              <Button
                className="mt-4 w-full"
                disabled={lines.length === 0}
                onClick={() => navigate('/orders?placed=1')}
              >
                Checkout
              </Button>
              <p className="mt-3 text-center text-[11px] text-faint">
                Prototype checkout — no payment is taken.
              </p>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}

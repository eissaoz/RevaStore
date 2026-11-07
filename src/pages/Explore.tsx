import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { CreatorCard } from '../components/CreatorCard'
import { PageHero, SectionHead } from '../components/PageHero'
import { ProductCard } from '../components/ProductCard'
import { categories, creators, products } from '../data'
import { cx } from '../lib/cx'

export function Explore() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('All')
  const q = query.trim().toLowerCase()

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const inCategory = category === 'All' || product.category === category
        const matches =
          !q || `${product.name} ${product.category} ${product.detail}`.toLowerCase().includes(q)
        return inCategory && matches
      }),
    [category, q],
  )

  const filteredCreators = useMemo(
    () =>
      creators.filter(
        (creator) => !q || `${creator.name} ${creator.handle} ${creator.category}`.toLowerCase().includes(q),
      ),
    [q],
  )

  return (
    <>
      <PageHero
        eyebrow="Explore"
        title="Shop the creators you already follow"
        description="Small brands, limited drops and independent makers — with a storefront you can buy from directly. No screenshots in DMs, no lost order numbers."
      >
        <Button href="/start">Start selling</Button>
        <Button href="/orders" variant="quiet">
          Track an order
        </Button>
      </PageHero>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <label className="relative w-full max-w-[380px]">
              <span className="sr-only">Search products or creators</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-muted" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search products or creators"
                className="h-12 w-full rounded-full border border-line bg-white pl-11 pr-4 text-[14.5px] text-ink placeholder:text-faint focus:border-line-strong focus:outline-none"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={cx(
                    'h-10 rounded-full border px-4 text-[13.5px] font-medium transition-colors',
                    category === item
                      ? 'border-ink bg-ink text-white'
                      : 'border-line bg-white text-ink-soft hover:border-line-strong',
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <SectionHead
            eyebrow="Featured drops"
            title="New from creators this week"
            className="mt-12"
          />

          {filteredProducts.length > 0 ? (
            <div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="mt-8 rounded-[20px] bg-soft px-6 py-14 text-center text-[15px] text-muted">
              No products match “{query}” in {category}. Try another search or category.
            </p>
          )}
        </Container>
      </section>

      <section className="border-t border-line py-12 sm:py-16">
        <Container>
          <SectionHead
            eyebrow="Creators"
            title="People worth following"
            description="Every store is run by the person who makes the work. Follow them on social, buy from their REVA link."
          />
          {filteredCreators.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCreators.map((creator) => (
                <CreatorCard key={creator.handle} creator={creator} />
              ))}
            </div>
          ) : (
            <p className="mt-8 rounded-[20px] bg-soft px-6 py-14 text-center text-[15px] text-muted">
              No creators match “{query}”.
            </p>
          )}
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid gap-6 rounded-[28px] bg-soft p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-muted">
                Sell on REVA
              </p>
              <h2 className="mt-3 max-w-[460px] text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.05] tracking-[-0.035em]">
                Your next customer already follows you.
              </h2>
              <p className="mt-3 max-w-[480px] text-[15.5px] leading-relaxed text-muted">
                Open a storefront, connect your socials and turn the link in your bio into a
                checkout that takes payments and tracks delivery for you.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href="/start">Create your store</Button>
              <Button href="/creators" variant="quiet">
                How it works
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

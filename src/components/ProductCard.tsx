import { Check } from 'lucide-react'

import type { Product } from '../data'
import { cx } from '../lib/cx'
import { Link } from '../lib/router'

export function ProductCard({
  product,
  onAdd,
  creatorHandle = 'revastore',
}: {
  product: Product
  onAdd?: (product: Product) => void
  creatorHandle?: string
}) {
  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden rounded-[22px] bg-soft">
        <Link href={`/store?creator=${creatorHandle}`} aria-label={product.name} className="block h-full w-full">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className={cx(
              'h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]',
              product.contain ? 'object-contain p-8' : 'object-cover',
            )}
          />
        </Link>
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-ink shadow-[0_2px_10px_-4px_rgb(0_0_0/0.25)]">
            {product.badge}
          </span>
        )}
        {onAdd ? (
          <button
            type="button"
            onClick={() => onAdd(product)}
            className="absolute bottom-3 right-3 h-9 rounded-full bg-white px-4 text-[12.5px] font-semibold text-ink shadow-[0_6px_18px_-8px_rgb(0_0_0/0.35)] transition-colors hover:bg-ink hover:text-white"
          >
            Add to bag
          </button>
        ) : (
          <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-white text-ink shadow-[0_6px_18px_-8px_rgb(0_0_0/0.35)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <svg viewBox="0 0 20 20" aria-hidden className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 14 14 6M7 6h7v7" />
            </svg>
          </span>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-[15.5px] font-semibold text-ink">{product.name}</h3>
          <p className="mt-1 truncate text-[13px] text-muted">{product.creator} · {product.detail}</p>
        </div>
        <p className="shrink-0 text-[15px] font-semibold text-ink">${product.price}</p>
      </div>
    </article>
  )
}

export function VerifiedBadge({ className }: { className?: string }) {
  return (
    <span
      className={cx('grid size-[15px] shrink-0 place-items-center rounded-full bg-info text-white', className)}
      title="Verified creator"
    >
      <Check className="size-[10px]" strokeWidth={4} />
    </span>
  )
}

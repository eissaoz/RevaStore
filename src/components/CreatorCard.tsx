import { cx } from '../lib/cx'
import { Link } from '../lib/router'
import type { Creator } from '../data'
import { VerifiedBadge } from './ProductCard'

export function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <Link
      href={`/store?creator=${creator.handle}`}
      className="group block overflow-hidden rounded-[24px] border border-line bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-30px_rgb(20_10_40/0.35)]"
    >
      <div className="relative h-40 overflow-hidden bg-soft">
        <img
          src={creator.cover}
          alt=""
          className={cx('h-full w-full transition-transform duration-500 group-hover:scale-[1.03]', creator.coverClass ?? 'object-cover')}
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[11px] font-medium text-ink backdrop-blur">
          {creator.category}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3">
          <img
            src={creator.avatar}
            alt=""
            className="size-11 shrink-0 rounded-full object-cover ring-2 ring-white"
          />
          <div className="min-w-0 flex-1">
            <p className="flex items-center gap-1.5 text-[15.5px] font-semibold text-ink">
              <span className="truncate">{creator.name}</span>
              {creator.verified && <VerifiedBadge />}
            </p>
            <p className="truncate text-[13px] text-muted">@{creator.handle}</p>
          </div>
          <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white">
            <svg viewBox="0 0 20 20" aria-hidden className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 14 14 6M7 6h7v7" />
            </svg>
          </span>
        </div>
        <div className="mt-4 flex items-center gap-2 text-[12.5px] text-muted">
          <span className="rounded-full bg-soft px-2.5 py-1">{creator.followers} followers</span>
          <span className="rounded-full bg-soft px-2.5 py-1">{creator.products} products</span>
        </div>
      </div>
    </Link>
  )
}

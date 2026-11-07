import { cx } from '../lib/cx'
import { Link } from '../lib/router'

/**
 * The REVA monogram: a heavy geometric R with a cut counter and an angled leg.
 * It inherits currentColor so it works on paper and on black.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={cx('shrink-0', className)} fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 2.5h17.2c8.4 0 13.6 5.2 13.6 12.4 0 5.9-3.6 9.7-8.4 11L37 37.5H24.6L14.1 26.4h-1.4v11.1H3.5V2.5Zm9.2 8.6v7.2h7.6c2.9 0 4.3-1.3 4.3-3.6 0-2.3-1.4-3.6-4.3-3.6h-7.6Z"
      />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="REVA home"
      className={cx('inline-flex items-center gap-3 text-ink', className)}
    >
      <LogoMark className="h-9 w-9" />
      <span className="font-display text-[29px] font-extrabold leading-none tracking-[-0.02em]">
        REVA
      </span>
    </Link>
  )
}

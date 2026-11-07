import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cx } from '../lib/cx'
import { Link } from '../lib/router'

type Variant = 'primary' | 'inverse' | 'quiet' | 'outline'
type Size = 'md' | 'lg'

const base =
  'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background-color,color,transform,box-shadow] duration-200 active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[18px] [&_svg]:shrink-0'

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-white hover:bg-[#1d1d20] shadow-[0_10px_24px_-14px_rgb(0_0_0/0.7)]',
  inverse: 'bg-white text-ink hover:bg-[#f3f1ec]',
  quiet: 'bg-soft text-ink hover:bg-soft-2',
  outline: 'border border-white/25 text-white hover:bg-white/10',
}

const sizes: Record<Size, string> = {
  md: 'h-12 rounded-full px-6 text-[15px]',
  lg: 'h-14 rounded-full px-7 text-[16px]',
}

type Common = { variant?: Variant; size?: Size; className?: string; children: ReactNode }
type ButtonProps =
  | (Common & { href: string } & ComponentPropsWithoutRef<'a'>)
  | (Common & { href?: undefined } & ComponentPropsWithoutRef<'button'>)

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props
  const classes = cx(base, variants[variant], sizes[size], className)
  if ('href' in rest && rest.href !== undefined) {
    const href = rest.href
    const anchorProps = rest as Omit<ComponentPropsWithoutRef<'a'>, 'href'>
    if (href.startsWith('/')) {
      return (
        <Link href={href} className={classes} {...anchorProps}>
          {children}
        </Link>
      )
    }
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...(rest as ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  )
}

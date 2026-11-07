import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { nav } from '../content'
import { cx } from '../lib/cx'
import { Link, useRouter } from '../lib/router'

export function Nav() {
  const { path } = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
    setResourcesOpen(false)
  }, [path])

  const isActive = (href: string) =>
    href === '/' ? path === '/' : path === href || path.startsWith(`${href}/`)

  return (
    <header
      className={cx(
        'sticky top-0 z-50 bg-paper/90 backdrop-blur-xl transition-shadow duration-300',
        scrolled && 'shadow-[0_1px_0_0_var(--color-line)]',
      )}
    >
      <Container className="grid h-[76px] grid-cols-[1fr_auto] items-center gap-4 lg:h-[92px] lg:grid-cols-[1fr_auto_1fr]">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
          {nav.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={cx(
                'text-[15.5px] font-medium transition-colors hover:text-ink',
                isActive(link.href) ? 'text-ink' : 'text-ink-soft',
              )}
            >
              {link.label}
            </Link>
          ))}
          <div
            className="group relative"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setResourcesOpen(false)
            }}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setResourcesOpen(false)
            }}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={resourcesOpen}
              onClick={() => setResourcesOpen((value) => !value)}
              className="flex items-center gap-1 text-[15.5px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {nav.resources.label}
              <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
            </button>
            <div
              className={cx(
                'absolute left-1/2 top-full w-56 -translate-x-1/2 pt-4 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100',
                resourcesOpen ? 'visible opacity-100' : 'invisible opacity-0',
              )}
            >
              <ul className="rounded-[18px] border border-line bg-white p-2 shadow-[0_24px_60px_-24px_rgb(0_0_0/0.28)]">
                {nav.resources.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setResourcesOpen(false)}
                      className="flex h-11 items-center rounded-[12px] px-3 text-[15px] text-ink-soft transition-colors hover:bg-soft hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <div className="hidden items-center justify-end gap-6 lg:flex">
          <Link
            href={nav.signIn.href}
            className="text-[15.5px] font-medium text-ink transition-colors hover:text-ink-soft"
          >
            {nav.signIn.label}
          </Link>
          <Button href={nav.cta.href} className="h-12 gap-2 pl-6 pr-5">
            {nav.cta.label}
            <svg viewBox="0 0 20 20" aria-hidden className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3.5 10h13M11 4.5 16.5 10 11 15.5" />
            </svg>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 grid size-11 place-items-center justify-self-end rounded-full text-ink transition-colors hover:bg-soft lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            key="sheet"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-76px)] overflow-y-auto border-t border-line bg-paper px-5 pb-10 pt-4 lg:hidden"
          >
            <ul className="flex flex-col">
              {nav.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex h-14 items-center border-b border-line text-[19px] font-medium text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="pb-2 pt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
              Resources
            </p>
            <ul className="flex flex-col">
              {nav.resources.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex h-14 items-center border-b border-line text-[17px] font-medium text-ink-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3">
              <Button href={nav.cta.href} size="lg">
                {nav.cta.label}
              </Button>
              <Button href={nav.signIn.href} size="lg" variant="quiet">
                {nav.signIn.label}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

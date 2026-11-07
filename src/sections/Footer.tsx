import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { footer } from '../content'
import { Link } from '../lib/router'

const socials = [
  {
    label: 'X',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'Instagram',
    path: 'M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.67.51.72.28 1.33.66 1.93 1.26.6.6.98 1.21 1.26 1.93.27.7.46 1.5.51 2.67.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.51 2.67-.28.72-.66 1.33-1.26 1.93-.6.6-1.21.98-1.93 1.26-.7.27-1.5.46-2.67.51-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.67-.51a5.34 5.34 0 0 1-1.93-1.26 5.34 5.34 0 0 1-1.26-1.93c-.27-.7-.46-1.5-.51-2.67C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.51-2.67.28-.72.66-1.33 1.26-1.93.6-.6 1.21-.98 1.93-1.26.7-.27 1.5-.46 2.67-.51C8.42 2.21 8.8 2.2 12 2.2zm0 3.05a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zm0 11.13a4.38 4.38 0 1 1 0-8.76 4.38 4.38 0 0 1 0 8.76zm6.96-11.4a1.58 1.58 0 1 1-3.15 0 1.58 1.58 0 0 1 3.15 0z',
  },
  {
    label: 'TikTok',
    path: 'M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z',
  },
]

export function Footer() {
  return (
    <footer className="border-t border-line pb-10 pt-14 sm:pt-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-5 max-w-[270px] text-[14.5px] leading-relaxed text-muted">
              {footer.blurb}
            </p>
            <div className="mt-6 flex items-center gap-1">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="grid size-9 place-items-center rounded-full text-ink-soft transition-colors hover:bg-soft hover:text-ink"
                >
                  <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <p className="text-[14px] font-semibold text-ink">{column.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14.5px] text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-faint">{footer.legal}</p>
          <ul className="flex items-center gap-6">
            {footer.legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-[13px] text-faint transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}

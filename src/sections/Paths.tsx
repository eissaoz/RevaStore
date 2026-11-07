import { ArrowRight } from 'lucide-react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { paths } from '../content'
import { cx } from '../lib/cx'
import { Link } from '../lib/router'

const creatorImages = [
  { src: '/media/hoodie.jpg', alt: 'Hoodie from a REVA store' },
  { src: '/media/tote.jpg', alt: 'Canvas tote from a REVA store' },
  { src: '/media/shoe-cut.webp', alt: 'Sneaker from a REVA store' },
]

const shopperAvatars = ['/media/avatar-32.jpg', '/media/avatar-65.jpg', '/media/avatar-20.jpg']

export function Paths() {
  return (
    <section className="pb-16 pt-4 sm:pb-24 sm:pt-6">
      <Container>
        <Reveal className="max-w-[620px]">
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-muted">
            {paths.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(32px,3.8vw,48px)] font-bold leading-[1.03] tracking-[-0.04em] text-ink">
            {paths.title}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
          {paths.items.map((item, i) => (
            <Reveal key={item.key} delay={i * 0.08}>
              <Link
                href={item.href}
                className={cx(
                  'group relative flex min-h-[350px] flex-col overflow-hidden rounded-[28px] p-8 sm:p-10',
                  item.key === 'creator' ? 'bg-ink text-white' : 'bg-[#efe9ff] text-ink',
                )}
              >
                <p
                  className={cx(
                    'text-[11.5px] font-semibold uppercase tracking-[0.14em]',
                    item.key === 'creator' ? 'text-white/45' : 'text-muted',
                  )}
                >
                  {item.kicker}
                </p>
                <h3 className="mt-3 text-[clamp(28px,3vw,36px)] font-bold tracking-[-0.035em]">
                  {item.title}
                </h3>
                <p
                  className={cx(
                    'mt-3 max-w-[280px] text-[15px] leading-relaxed',
                    item.key === 'creator' ? 'text-white/60' : 'text-ink/65',
                  )}
                >
                  {item.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2.5 pt-10 text-[14.5px] font-semibold">
                  {item.cta}
                  <span
                    className={cx(
                      'grid size-8 place-items-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5',
                      item.key === 'creator' ? 'bg-white text-ink' : 'bg-ink text-white',
                    )}
                  >
                    <ArrowRight className="size-4" />
                  </span>
                </span>

                {item.key === 'creator' ? (
                  <div className="pointer-events-none absolute -bottom-6 right-4 flex -space-x-6 rotate-[-8deg] sm:right-8">
                    {creatorImages.map((image, index) => (
                      <span
                        key={image.src}
                        className={cx(
                          'block size-[86px] overflow-hidden rounded-[16px] border-[5px] border-ink bg-white shadow-[0_18px_30px_-16px_rgb(0_0_0/0.6)] sm:size-[102px]',
                          index === 2 && 'mt-4',
                        )}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className={cx('h-full w-full', index === 2 ? 'object-contain p-1.5' : 'object-cover')}
                        />
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="pointer-events-none absolute -bottom-6 right-6 flex -space-x-4 sm:right-10">
                    {shopperAvatars.map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt=""
                        className="size-[68px] rounded-full object-cover ring-4 ring-[#efe9ff] sm:size-[78px]"
                      />
                    ))}
                  </div>
                )}
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

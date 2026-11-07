import { Check, Play, ShoppingBag } from 'lucide-react'

import { LogoMark } from './Logo'

function ShoppingBags() {
  return (
    <svg viewBox="0 0 260 320" aria-hidden className="h-auto w-full drop-shadow-[0_24px_30px_rgb(0_0_0/0.16)]">
      {/* back bag */}
      <g transform="translate(58 14) rotate(6 70 130)">
        <path
          d="M34 74c0-30 26-46 52-46s52 16 52 46"
          fill="none"
          stroke="#141414"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path d="M8 70h156l9 174a12 12 0 0 1-12 13H11a12 12 0 0 1-12-13L8 70Z" fill="#171717" />
        <path d="M8 70h156l2 32H6L8 70Z" fill="#232323" />
      </g>
      {/* front bag */}
      <g transform="translate(2 40) rotate(-7 70 140)">
        <path
          d="M30 78c0-32 27-50 55-50s55 18 55 50"
          fill="none"
          stroke="#141414"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path d="M6 74h160l10 182a13 13 0 0 1-13 14H9a13 13 0 0 1-13-14L6 74Z" fill="#131313" />
      </g>
    </svg>
  )
}

export function HeroCollage() {
  return (
    <div className="relative mx-auto aspect-[1.14/1] w-full max-w-[660px] select-none">
      {/* lilac stage */}
      <div
        aria-hidden
        className="absolute top-[7%] -left-[3%] h-[92%] w-[109%] overflow-hidden rounded-[44px] bg-[linear-gradient(155deg,#f2ecff_0%,#e8dcfb_46%,#d9c7f7_100%)]"
      >
        <div className="absolute -top-[18%] left-[8%] size-[60%] rounded-full bg-white/45 blur-3xl" />
        <div className="absolute -right-[10%] bottom-[2%] size-[55%] rounded-full bg-[#c3a8f3]/40 blur-3xl" />
        <div className="absolute bottom-[12%] left-[-10%] size-[45%] rounded-full bg-[#fff6ef]/50 blur-3xl" />
      </div>

      {/* creator portrait, cut out of its studio backdrop */}
      <div className="absolute bottom-0 left-[7%] z-10 w-[77%]">
        <img
          src="/media/hero-cut.webp"
          alt="A REVA creator in a denim jacket smiling in her studio"
          width={1100}
          height={1277}
          className="h-auto w-full"
        />
      </div>

      {/* shopping bags */}
      <div className="absolute top-[23%] -left-[2%] z-20 w-[37%] -rotate-[4deg]">
        <ShoppingBags />
      </div>
      <span aria-hidden className="absolute top-[35%] left-[8%] z-30 w-[9%] -rotate-[6deg] text-white">
        <LogoMark className="h-auto w-full" />
      </span>

      {/* total sales */}
      <div className="absolute top-[16%] right-[1%] z-30 w-[30%] min-w-[150px] rounded-[18px] bg-[#101014] px-4 py-4 text-white shadow-[0_26px_50px_-20px_rgb(20_10_40/0.55)] sm:min-w-[196px] sm:rounded-[20px] sm:px-6 sm:py-5">
        <div className="flex items-center gap-3 sm:gap-4">
          <svg viewBox="0 0 28 22" aria-hidden className="h-6 w-7 text-white/85 sm:h-[26px] sm:w-8" fill="currentColor">
            <rect x="0" y="13" width="5" height="9" rx="2.5" />
            <rect x="8" y="8" width="5" height="14" rx="2.5" />
            <rect x="16" y="3" width="5" height="19" rx="2.5" />
            <rect x="24" y="10" width="4" height="12" rx="2" opacity="0.55" />
          </svg>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-[19px] font-semibold leading-none tracking-[-0.02em] sm:text-[23px]">
                12.5K
              </span>
              <span className="grid size-[18px] shrink-0 place-items-center rounded-full bg-[#1faa63] sm:size-5">
                <svg viewBox="0 0 12 12" aria-hidden className="size-2.5 sm:size-3" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 10V2.5M2.8 5.6 6 2.4l3.2 3.2" />
                </svg>
              </span>
            </div>
            <p className="mt-1.5 truncate text-[11px] text-white/55 sm:text-[12.5px]">Total Sales</p>
          </div>
        </div>
      </div>

      {/* store profile */}
      <div className="absolute top-[42%] left-[33%] z-40 w-[57%] rounded-[16px] bg-white p-4 shadow-[0_26px_60px_-22px_rgb(30_15_60/0.4)] sm:w-[44%] sm:rounded-[18px] sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#111] text-white sm:size-11">
              <LogoMark className="size-5 sm:size-6" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <p className="truncate text-[13px] font-semibold leading-tight text-ink sm:text-[16px]">
                  Reva Store
                </p>
                <span className="grid size-3.5 shrink-0 place-items-center rounded-full bg-info text-white">
                  <Check className="size-2.5" strokeWidth={3.5} />
                </span>
              </div>
              <p className="truncate text-[10.5px] text-muted sm:text-[12.5px]">@revastore</p>
            </div>
          </div>
          <button
            type="button"
            className="h-8 shrink-0 rounded-full bg-ink px-3 text-[11px] font-medium text-white transition-colors hover:bg-[#222] sm:h-9 sm:px-4 sm:text-[12.5px]"
          >
            Follow
          </button>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-1 border-t border-[#f0eee9] pt-3.5 text-left">
          {[
            ['120K', 'Followers'],
            ['2.1M', 'Likes'],
            ['12K', 'Products'],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="font-display text-[13.5px] font-semibold leading-none tracking-[-0.02em] text-ink sm:text-[17px]">
                {value}
              </p>
              <p className="mt-1 text-[9.5px] text-muted sm:text-[12px]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* product video */}
      <div className="absolute top-[56%] left-[6%] z-40 w-[25%] min-w-[124px] rounded-[16px] bg-white p-[7px] shadow-[0_26px_50px_-22px_rgb(30_15_60/0.4)] sm:min-w-[150px]">
        <div className="relative overflow-hidden rounded-[11px] bg-soft">
          <img
            src="/media/hoodie.jpg"
            alt="Hoodie from the Reva Store"
            width={800}
            height={1067}
            className="h-[112px] w-full scale-[1.3] object-cover object-[50%_12%] sm:h-[150px]"
          />
          <span className="absolute left-1/2 top-[42%] grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-ink shadow-sm sm:size-10">
            <Play className="ml-0.5 size-3.5 fill-ink" strokeWidth={1} />
          </span>
          <span className="absolute bottom-1.5 left-1.5 grid size-6 place-items-center rounded-[7px] bg-white/95 text-ink">
            <ShoppingBag className="size-3.5" strokeWidth={2} />
          </span>
        </div>
        <div className="absolute -bottom-3 right-2 flex h-9 items-center gap-1.5 rounded-full bg-white px-3.5 text-[11.5px] font-medium text-ink shadow-[0_10px_24px_-8px_rgb(0_0_0/0.25)] sm:-bottom-4 sm:h-10 sm:px-4 sm:text-[13px]">
          Shop Now
          <svg viewBox="0 0 16 16" aria-hidden className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.8 8h10M9 4.2 12.8 8 9 11.8" />
          </svg>
        </div>
      </div>

      {/* sneaker */}
      <img
        src="/media/shoe-cut.webp"
        alt=""
        aria-hidden
        width={800}
        height={492}
        className="absolute right-0 bottom-[5%] z-20 w-[41%] -rotate-[6deg] drop-shadow-[0_22px_26px_rgb(44_28_78/0.35)] [filter:contrast(1.05)_saturate(1.05)]"
      />

      {/* order confirmed */}
      <div className="absolute right-[3%] bottom-0 z-50 flex w-[27%] min-w-[160px] items-center gap-2.5 rounded-[14px] bg-white px-3 py-3 shadow-[0_22px_50px_-18px_rgb(30_15_60/0.4)] sm:min-w-[212px] sm:gap-3 sm:rounded-[16px] sm:px-4 sm:py-3.5">
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-ok/12 text-ok sm:size-8">
          <Check className="size-4" strokeWidth={3} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[11.5px] font-semibold leading-tight text-ink sm:text-[13.5px]">
            Order Confirmed
          </p>
          <p className="mt-0.5 truncate text-[9.5px] text-muted sm:text-[11.5px]">#REVA1001</p>
        </div>
      </div>
    </div>
  )
}

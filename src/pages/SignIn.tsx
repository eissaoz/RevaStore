import { ArrowRight, Lock } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Link, useRouter } from '../lib/router'

export function SignIn() {
  const { navigate } = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/start')
  }

  return (
    <section className="py-12 sm:py-20">
      <Container>
        <div className="mx-auto grid max-w-[980px] gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-stretch">
          <div className="rounded-[26px] border border-line bg-white p-6 sm:p-10">
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-muted">
              Welcome back
            </p>
            <h1 className="mt-3 text-[clamp(30px,3.6vw,40px)] font-bold leading-[1.05] tracking-[-0.04em] text-ink">
              Sign in to your store
            </h1>
            <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
              This is a frontend prototype. Any email and password will move you along — no account
              is checked and nothing is stored.
            </p>

            <form onSubmit={submit} className="mt-7 flex flex-col gap-4">
              <label className="block">
                <span className="text-[12.5px] font-semibold text-ink">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@studio.com"
                  className="mt-2 h-12 w-full rounded-[14px] border border-line bg-white px-4 text-[14.5px] text-ink placeholder:text-faint focus:border-line-strong focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="flex items-center justify-between text-[12.5px] font-semibold text-ink">
                  Password
                  <span className="text-[11.5px] font-normal text-muted">Demo only</span>
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  className="mt-2 h-12 w-full rounded-[14px] border border-line bg-white px-4 text-[14.5px] text-ink placeholder:text-faint focus:border-line-strong focus:outline-none"
                />
              </label>
              <Button type="submit" className="mt-2 w-full">
                Continue
                <ArrowRight />
              </Button>
            </form>

            <div className="mt-6 flex items-start gap-2.5 text-[12px] leading-relaxed text-muted">
              <Lock className="mt-0.5 size-3.5 shrink-0" />
              <p>
                No authentication is wired up in this prototype. The form only demonstrates the
                signed-in flow.
              </p>
            </div>

            <p className="mt-6 border-t border-line pt-5 text-[13px] text-muted">
              New to REVA?{' '}
              <Link href="/start" className="font-semibold text-ink underline">
                Open a store
              </Link>
            </p>
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden rounded-[26px] bg-ink p-6 text-white sm:p-10">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 size-[320px] rounded-full bg-[radial-gradient(circle,#7a5cd6_0%,transparent_65%)] opacity-50 blur-2xl"
            />
            <div className="relative">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.15em] text-white/45">
                One dashboard
              </p>
              <p className="mt-4 text-[26px] font-bold leading-[1.12] tracking-[-0.03em]">
                Products, payments and delivery — behind the content you already post.
              </p>
            </div>

            <div className="relative mt-10 flex flex-col gap-3">
              {[
                { label: 'New order', detail: '#REVA1002 · $96 · paid' },
                { label: 'Payout sent', detail: 'M-PESA · 2 min ago' },
                { label: 'Out for delivery', detail: 'Courier · arriving today' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 rounded-[14px] bg-white/8 px-4 py-3"
                >
                  <span className="text-[12.5px] font-medium">{item.label}</span>
                  <span className="text-[11.5px] text-white/50">{item.detail}</span>
                </div>
              ))}
              <p className="mt-1 text-[11.5px] text-white/40">
                Demo data. No real orders or payouts are created.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

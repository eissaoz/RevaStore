import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Link } from '../lib/router'

export function NotFound() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-[560px] text-center">
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-muted">
            404
          </p>
          <h1 className="mt-4 text-[clamp(36px,5vw,54px)] font-bold leading-[1.02] tracking-[-0.045em] text-ink">
            This link sold out
          </h1>
          <p className="mx-auto mt-4 max-w-[420px] text-[16px] leading-relaxed text-muted">
            The page you were looking for is not here. The storefront, the drop and the order
            tracker are all still where you left them.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/">Back home</Button>
            <Button href="/explore" variant="quiet">
              Explore creators
            </Button>
          </div>
          <p className="mt-6 text-[13px] text-muted">
            Looking for an order?{' '}
            <Link href="/orders" className="font-medium text-ink underline">
              Track it here
            </Link>
          </p>
        </div>
      </Container>
    </section>
  )
}

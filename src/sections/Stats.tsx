import { Container } from '../components/Container'
import { stats } from '../content'

export function Stats() {
  return (
    <section className="pb-16 pt-6 sm:pb-20 sm:pt-8">
      <Container>
        <dl className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-[24px] bg-soft px-6 py-9 text-center sm:py-11"
            >
              <dd className="font-display text-[46px] font-bold leading-none tracking-[-0.045em] text-ink sm:text-[54px]">
                {stat.value}
              </dd>
              <dt className="mt-3 text-[15.5px] text-muted sm:text-[17px]">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

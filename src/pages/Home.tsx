import { Alongside } from '../sections/Alongside'
import { BrandStrip } from '../sections/BrandStrip'
import { Cta } from '../sections/Cta'
import { Hero } from '../sections/Hero'
import { Paths } from '../sections/Paths'
import { Pillars } from '../sections/Pillars'
import { Stats } from '../sections/Stats'
import { Steps } from '../sections/Steps'

export function Home() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <Stats />
      <Pillars />
      <Alongside />
      <Paths />
      <Steps />
      <Cta />
    </>
  )
}

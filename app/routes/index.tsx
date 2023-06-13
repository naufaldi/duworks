import About from '~/components/home/about'
import Hero from '~/components/home/hero'
import Portfolio from '~/components/home/portfolio'
import Services from '~/components/home/services'

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </>
  )
}

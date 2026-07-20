import { Hero } from '../components/sections/Hero'
import { ProblemSolution } from '../components/sections/ProblemSolution'
import { ServicesGrid } from '../components/sections/ServicesGrid'
import { HowItWorks } from '../components/sections/HowItWorks'
import { Testimonials } from '../components/sections/Testimonials'
import { FAQ } from '../components/sections/FAQ'
import { FinalCTA } from '../components/sections/FinalCTA'

export function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <ServicesGrid />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}

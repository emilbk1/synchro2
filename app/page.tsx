import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Pricing } from "@/components/pricing"
import { Benefits } from "@/components/benefits"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <div className="min-h-screen animated-bg overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="floating-orb floating-orb-1" />
        <div className="floating-orb floating-orb-2" />
        <div className="floating-orb floating-orb-3" />
      </div>
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <Process />
          <Benefits />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

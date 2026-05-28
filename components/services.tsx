"use client"

import { Globe, RefreshCw, Gauge, Rocket, ArrowRight, MessageSquare } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export function Services() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animated = entry.target.querySelectorAll(".service-animate")
            animated.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-on-scroll")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Globe,
      title: "Desarrollo de sitios web a medida",
      active: true,
    },
    {
      icon: Gauge,
      title: "Rendimiento",
      active: false,
    },
    {
      icon: RefreshCw,
      title: "Mantenimiento y actualizaciones",
      active: false,
    },
    {
      icon: Rocket,
      title: "Landing pages para captacion de clientes",
      active: false,
    },
  ]

  const scrollToContact = () => {
    const el = document.getElementById("contacto")
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={sectionRef} id="servicios" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Services list */}
          <div>
            <p className="service-animate opacity-0 text-accent text-sm font-medium uppercase tracking-wider mb-3">
              SERVICIOS
            </p>
            <h2 className="service-animate opacity-0 text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Como puedo ayudarte?
            </h2>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service-animate opacity-0 flex items-center gap-4 p-4 rounded-xl transition-all cursor-pointer ${
                    service.active
                      ? "bg-accent/10 border border-accent/30"
                      : "hover:bg-muted/50 border border-transparent"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      service.active ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <service.icon size={20} />
                  </div>
                  <span className={`font-medium ${service.active ? "text-accent" : "text-foreground"}`}>
                    {service.title}
                  </span>
                </div>
              ))}
            </div>

            <Button
              onClick={scrollToContact}
              variant="outline"
              className="service-animate opacity-0 mt-8 border-border hover:bg-accent hover:text-accent-foreground hover:border-accent"
            >
              VER SOLUCIONES
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

          {/* Right side - CTA Card */}
          <div className="service-animate opacity-0 lg:sticky lg:top-24">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/20 flex items-center justify-center">
                <MessageSquare className="text-accent" size={28} />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">Tenes un proyecto en mente?</h3>
              <p className="text-muted-foreground mb-8">Hablemos y llevemos tu idea al siguiente nivel.</p>

              <Button
                onClick={scrollToContact}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
              >
                ESCRIBIME
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

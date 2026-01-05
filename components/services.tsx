"use client"

import { Globe, Palette, RefreshCw, Gauge, Headphones, Code2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef } from "react"

export function Services() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-on-scroll")
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
      titleKey: "services.creation.title",
      descriptionKey: "services.creation.description",
    },
    {
      icon: Palette,
      titleKey: "services.redesign.title",
      descriptionKey: "services.redesign.description",
    },
    {
      icon: RefreshCw,
      titleKey: "services.maintenance.title",
      descriptionKey: "services.maintenance.description",
    },
    {
      icon: Gauge,
      titleKey: "services.seo.title",
      descriptionKey: "services.seo.description",
    },
    {
      icon: Code2,
      titleKey: "services.custom.title",
      descriptionKey: "services.custom.description",
    },
    {
      icon: Headphones,
      titleKey: "services.support.title",
      descriptionKey: "services.support.description",
    },
  ]

  return (
    <section ref={sectionRef} id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">{t("services.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card p-6 rounded-lg border border-border bg-card hover:shadow-xl hover:scale-105 hover:border-primary/50 transition-all duration-300 opacity-0"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">{t(service.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(service.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

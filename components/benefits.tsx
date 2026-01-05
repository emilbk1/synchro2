"use client"

import { Shield, Users, Sparkles, LineChart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef } from "react"

export function Benefits() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".benefit-card")
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

  const benefits = [
    {
      icon: Shield,
      titleKey: "benefits.experience.title",
      descriptionKey: "benefits.experience.description",
    },
    {
      icon: Sparkles,
      titleKey: "benefits.technology.title",
      descriptionKey: "benefits.technology.description",
    },
    {
      icon: Users,
      titleKey: "benefits.support.title",
      descriptionKey: "benefits.support.description",
    },
    {
      icon: LineChart,
      titleKey: "benefits.results.title",
      descriptionKey: "benefits.results.description",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">{t("benefits.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("benefits.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card p-6 rounded-lg border border-border bg-card text-center opacity-0 hover:shadow-lg hover:scale-105 hover:border-accent/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                <benefit.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">{t(benefit.titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(benefit.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

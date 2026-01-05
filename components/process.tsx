"use client"

import { Search, Pen, Code, Rocket } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef } from "react"

export function Process() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = entry.target.querySelectorAll(".process-step")
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add("animate-on-scroll")
              }, index * 150)
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

  const steps = [
    {
      number: "01",
      icon: Search,
      titleKey: "process.step1.title",
      descriptionKey: "process.step1.description",
    },
    {
      number: "02",
      icon: Pen,
      titleKey: "process.step2.title",
      descriptionKey: "process.step2.description",
    },
    {
      number: "03",
      icon: Code,
      titleKey: "process.step3.title",
      descriptionKey: "process.step3.description",
    },
    {
      number: "04",
      icon: Rocket,
      titleKey: "process.step4.title",
      descriptionKey: "process.step4.description",
    },
  ]

  return (
    <section ref={sectionRef} id="proceso" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">{t("process.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("process.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative process-step opacity-0">
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="text-primary" size={28} />
                </div>
                <div className="text-4xl font-bold text-primary/20 mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t(step.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(step.descriptionKey)}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

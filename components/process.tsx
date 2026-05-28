"use client"

import { Search, Pen, Code, Rocket, Check, FileText, Settings } from "lucide-react"
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
      title: "Analisis visual",
      description: "Estudiamos tu negocio, competencia y objetivos para crear una estrategia web efectiva.",
    },
    {
      number: "02",
      icon: Pen,
      title: "Diseno visual",
      description: "Disenamos interfaces atractivas y funcionales enfocadas en la experiencia del usuario.",
    },
    {
      number: "03",
      icon: Check,
      title: "Aceptacion y puesta en comun",
      description: "Revisamos juntos el diseno y ajustamos detalles antes de comenzar el desarrollo.",
    },
    {
      number: "04",
      icon: Code,
      title: "Desarrollo",
      description: "Programamos tu sitio con codigo limpio, optimizado y siguiendo las mejores practicas.",
    },
    {
      number: "05",
      icon: Settings,
      title: "Ajustes y contenido",
      description: "Integramos tu contenido real y realizamos los ajustes finales para el lanzamiento.",
    },
    {
      number: "06",
      icon: Rocket,
      title: "Publicacion",
      description: "Publicamos tu sitio y te acompanamos con soporte continuo para asegurar el exito.",
    },
  ]

  return (
    <section ref={sectionRef} id="proceso" className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">PROCESO</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">{t("process.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("process.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-step opacity-0 relative p-6 rounded-xl border border-border bg-background hover:border-accent/50 transition-all duration-300 group"
            >
              {/* Step number badge */}
              <div className="absolute -top-3 left-6 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                {step.number}
              </div>

              <div className="pt-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <step.icon className="text-accent" size={24} />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

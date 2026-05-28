"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Linkedin } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function About() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animated = entry.target.querySelectorAll(".about-animate")
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

  const features = [
    "Desarrollador Web",
    "Enfoque en profesionales y servicios",
    "Diseno orientado a conversion",
    "Sitios web optimizados para rendimiento",
  ]

  return (
    <section ref={sectionRef} id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Logo */}
          <div className="about-animate opacity-0">
            <div className="relative bg-card border border-border rounded-2xl p-12 aspect-square flex items-center justify-center">
              <div className="text-center">
                <Image
                  src="/logo.png"
                  alt="Synchro Systems"
                  width={200}
                  height={200}
                  className="w-48 h-48 mx-auto mb-6"
                />
                <p className="text-sm text-muted-foreground tracking-widest uppercase">Diseno y Desarrollo Web</p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent rounded-bl-2xl" />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="about-animate opacity-0 text-accent text-sm font-medium uppercase tracking-wider mb-3">
              Sobre mi
            </p>
            <h2 className="about-animate opacity-0 text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Desarrollador Web
            </h2>
            <p className="about-animate opacity-0 text-muted-foreground leading-relaxed mb-8">
              Me especializo en crear sitios web modernos para profesionales independientes y empresas de servicios que
              buscan destacar en el mundo digital. Entiendo que cada negocio tiene necesidades unicas, por eso diseno
              experiencias web personalizadas que transmiten confianza, comunican claramente el valor de tu marca y
              convierten visitas en potenciales clientes. Mi objetivo no es solo crear paginas visualmente atractivas,
              sino desarrollar una presencia digital profesional, estrategica y enfocada en resultados.
            </p>

            <ul className="about-animate opacity-0 space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/20">
                    <Check className="text-accent" size={12} />
                  </span>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="about-animate opacity-0 flex flex-wrap gap-4">
              <Button
                onClick={() => {
                  const el = document.getElementById("contacto")
                  el?.scrollIntoView({ behavior: "smooth" })
                }}
                variant="outline"
                className="border-border hover:bg-accent hover:text-accent-foreground hover:border-accent"
              >
                MAS SOBRE MI
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <Linkedin size={18} className="text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

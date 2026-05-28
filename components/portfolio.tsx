"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    category: "PROFESIONALES",
    title: "Sitio web para consultorio medico",
    description:
      "Diseno profesional con hero de servicios, boton para agendar citas, tarjetas de especialidades y seccion sobre el profesional.",
  },
  {
    id: 2,
    category: "CORPORATIVO",
    title: "Sitio corporativo para empresa de exportacion",
    description:
      "Landing corporativa con formulario de contacto, mapa interactivo de sucursales, carousel de servicios y secciones informativas.",
  },
  {
    id: 3,
    category: "EMPRENDEDORES",
    title: "Landing page para startup tecnologica",
    description:
      "Landing orientada a conversion para startup; hero con propuesta de valor, formulario de cotizacion, tarjetas de servicios y galeria visual.",
  },
]

export function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".portfolio-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-on-scroll")
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

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">PROYECTOS</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Algunos disenos recientes</h2>
          </div>
          <a
            href="#portfolio"
            className="hidden sm:flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
          >
            VER TODOS LOS PROYECTOS
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card opacity-0 group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 card-hover"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt={project.title}
                    width={60}
                    height={60}
                    className="w-15 h-15 opacity-30"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-accent text-xs font-medium tracking-wider mb-2">{project.category}</p>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-border group-hover:border-accent group-hover:bg-accent transition-all">
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-accent-foreground transition-colors"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile link */}
        <div className="flex sm:hidden justify-center mt-8">
          <a href="#portfolio" className="flex items-center gap-2 text-sm text-foreground hover:text-accent">
            VER TODOS LOS PROYECTOS
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

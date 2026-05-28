"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function Hero() {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const processSteps = [
    { num: "1", label: "Analisis visual" },
    { num: "2", label: "Diseno visual" },
    { num: "3", label: "Aceptacion y puesta en comun" },
    { num: "4", label: "Desarrollo" },
    { num: "5", label: "Ajustes y contenido" },
    { num: "6", label: "Publicacion" },
  ]

  return (
    <section id="hero" className="relative min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start pt-8 lg:pt-16">
          {/* Left column - Text content */}
          <div className="animate-on-scroll">
            <p className="text-accent text-sm font-medium mb-4">Hola, soy Synchro</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Diseno y desarrollo web para{" "}
              <span className="text-accent">profesionales, negocios, emprendedores y empresas</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Creo sitios web modernos, rapidos y optimizados para quienes necesitan una presencia digital que
              transmita confianza y convierta visitas en clientes.
            </p>

            {/* Process Card */}
            <div className="bg-card border border-border rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Como trabajo</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Conoce la propuesta de tu sitio antes de invertir en el desarrollo. Sin compromiso.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {processSteps.map((step) => (
                  <div key={step.num} className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 text-accent text-xs font-bold">
                      {step.num}
                    </span>
                    <span className="text-sm text-muted-foreground">{step.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToSection("proceso")}
                  className="text-sm text-foreground hover:text-accent transition-colors flex items-center gap-1"
                >
                  Ver el proceso completo
                  <ArrowRight size={14} />
                </button>
                <Button
                  onClick={() => scrollToSection("contacto")}
                  variant="outline"
                  className="text-sm border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                >
                  CONTACTAR
                  <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right column - Laptop mockup */}
          <div className="relative animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Laptop frame */}
              <div className="relative bg-card border border-border rounded-2xl p-4 shadow-2xl">
                {/* Browser bar */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-accent/50" />
                    <div className="w-3 h-3 rounded-full bg-secondary/50" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-muted rounded-md px-3 py-1.5 text-xs text-muted-foreground">
                      synchrosystems.com
                    </div>
                  </div>
                </div>

                {/* Screen content placeholder */}
                <div className="aspect-[16/10] bg-muted rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-accent/20 flex items-center justify-center">
                        <Image
                          src="/synchro-logo.png"
                          alt="Synchro"
                          width={40}
                          height={40}
                          className="w-10 h-10"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">Soluciones digitales que generan resultados</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -right-4 top-1/4 bg-card border border-border rounded-lg p-3 shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="text-accent" size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">Optimizado</p>
                      <p className="text-xs text-muted-foreground">100% SEO</p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -left-4 bottom-1/4 bg-card border border-border rounded-lg p-3 shadow-lg animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Check className="text-secondary" size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">Responsivo</p>
                      <p className="text-xs text-muted-foreground">Todos los dispositivos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-accent transition-colors animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </section>
  )
}

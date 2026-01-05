"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Smartphone, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto animate-on-scroll">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            {t("hero.title")} <span className="text-accent">{t("hero.titleHighlight")}</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" onClick={() => scrollToSection("contacto")} className="w-full sm:w-auto">
              {t("hero.startProject")}
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("servicios")}
              className="w-full sm:w-auto"
            >
              {t("hero.viewServices")}
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                <Zap className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">{t("hero.feature1.title")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t("hero.feature1.description")}</p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 mx-auto">
                <Smartphone className="text-secondary" size={24} />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">{t("hero.feature2.title")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t("hero.feature2.description")}</p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">{t("hero.feature3.title")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t("hero.feature3.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

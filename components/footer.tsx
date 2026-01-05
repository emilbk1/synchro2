"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/synchro-logo.png" alt="Synchro Systems" width={32} height={32} className="w-8 h-8" />
              <h3 className="text-xl font-bold text-card-foreground">Synchro Systems</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">{t("hero.subtitle")}</p>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("services.creation.title")}
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("services.redesign.title")}
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("services.maintenance.title")}
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("services.seo.title")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#proceso" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.process")}
                </a>
              </li>
              <li>
                <a href="#planes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.plans")}
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.contact")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.support")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2026 Synchro Systems. {t("footer.rights")}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

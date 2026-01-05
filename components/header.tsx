"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"
import Image from "next/image"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Image src="/synchro-logo.png" alt="Synchro Systems" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-semibold text-foreground hidden sm:inline">Synchro Systems</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.services")}
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.process")}
            </button>
            <button
              onClick={() => scrollToSection("planes")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.plans")}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-md bg-muted/50 hover:bg-muted transition-all hover:scale-105"
              aria-label="Toggle language"
            >
              <span className="text-sm font-semibold text-foreground">{language.toUpperCase()}</span>
            </button>

            <Button onClick={() => scrollToSection("contacto")} size="sm">
              {t("nav.contact")}
            </Button>
          </nav>

          {/* Mobile controls and menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={toggleTheme} className="p-2 text-foreground" aria-label="Toggle theme">
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded bg-muted/50 hover:bg-muted transition-all"
              aria-label="Toggle language"
            >
              <span className="text-xs font-semibold text-foreground">{language.toUpperCase()}</span>
            </button>

            <button className="text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col gap-4 p-4">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.services")}
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.process")}
            </button>
            <button
              onClick={() => scrollToSection("planes")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.plans")}
            </button>
            <Button onClick={() => scrollToSection("contacto")} className="w-full">
              {t("nav.contact")}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

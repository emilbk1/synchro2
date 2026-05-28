"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image src="/logo.png" alt="Synchro Systems" width={36} height={36} className="w-9 h-9" />
            <span className="text-lg font-bold text-foreground tracking-tight">SYNCHRO.</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollToSection("hero")}
              className="px-4 py-2 text-sm text-accent hover:text-accent transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre mi
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.process")}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.services")}
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Right side: Language + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-md transition-colors"
            >
              {language.toUpperCase()}
            </button>

            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-full px-5"
            >
              HABLEMOS
              <ArrowUpRight className="ml-1" size={16} />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs font-medium text-muted-foreground border border-border rounded"
            >
              {language.toUpperCase()}
            </button>
            <button className="text-foreground p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col p-4 gap-1">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-left px-4 py-3 text-accent hover:bg-muted/50 rounded-lg transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
              Sobre mi
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
              {t("nav.process")}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
              {t("nav.services")}
            </button>
            <Button onClick={() => scrollToSection("contacto")} className="mt-2 bg-accent text-accent-foreground">
              HABLEMOS
              <ArrowUpRight className="ml-1" size={16} />
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

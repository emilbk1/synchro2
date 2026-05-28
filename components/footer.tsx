"use client"

import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/synchro-logo.png" alt="Synchro Systems" width={24} height={24} className="w-6 h-6" />
            <span className="text-sm font-bold text-foreground">SYNCHRO.</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} SYNCHRO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

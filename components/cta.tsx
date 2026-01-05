"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, MessageSquare, Send, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function CTA() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animated = entry.target.querySelectorAll(".contact-animate")
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: t("contact.title"),
      description: t("contact.subtitle"),
    })

    setFormData({ name: "", email: "", phone: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section ref={sectionRef} id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 contact-animate opacity-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">{t("cta.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("cta.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="contact-animate opacity-0 p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">contacto@synchrosystems.com</p>
                </div>
              </div>
            </div>

            <div className="contact-animate opacity-0 p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-accent/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">{t("contact.phone")}</h3>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="contact-animate opacity-0 p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-secondary/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">{t("contact.subtitle")}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">24-48 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="contact-animate opacity-0 md:col-span-3 p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                  {t("contact.name")}
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t("contact.name")}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  {t("contact.email")}
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t("contact.email")}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                  {t("contact.phone")}
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t("contact.phone")}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t("contact.message")}
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  t("contact.sending")
                ) : (
                  <>
                    {t("contact.send")}
                    <Send className="ml-2" size={18} />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

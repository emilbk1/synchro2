"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Header
    "nav.services": "Servicios",
    "nav.process": "Proceso",
    "nav.plans": "Planes",
    "nav.contact": "Contactar",

    // Hero
    "hero.title": "Transformamos tu visión en",
    "hero.titleHighlight": "sitios web profesionales",
    "hero.subtitle":
      "Diseñamos y desarrollamos experiencias web modernas, rápidas y responsivas que impulsan tu negocio al siguiente nivel",
    "hero.startProject": "Iniciar Proyecto",
    "hero.viewServices": "Ver Servicios",
    "hero.feature1.title": "Rendimiento Óptimo",
    "hero.feature1.description": "Sitios web ultrarrápidos optimizados para SEO y conversión",
    "hero.feature2.title": "100% Responsivo",
    "hero.feature2.description": "Diseños adaptativos que funcionan perfectamente en cualquier dispositivo",
    "hero.feature3.title": "Enfoque en Resultados",
    "hero.feature3.description": "Estrategias orientadas a aumentar tu presencia online y ventas",

    // Services
    "services.title": "Servicios Profesionales",
    "services.subtitle": "Soluciones completas de diseño y desarrollo web adaptadas a las necesidades de tu negocio",
    "services.creation.title": "Creación de Sitios Web",
    "services.creation.description":
      "Desarrollamos sitios web modernos desde cero, adaptados a tu marca y objetivos de negocio con las últimas tecnologías.",
    "services.redesign.title": "Rediseño Web",
    "services.redesign.description":
      "Renovamos tu sitio existente con diseños actualizados, mejorando la experiencia de usuario y conversión.",
    "services.maintenance.title": "Mantenimiento Web",
    "services.maintenance.description":
      "Planes de mantenimiento continuo: actualizaciones, backups, seguridad y soporte técnico mensual.",
    "services.seo.title": "Optimización SEO",
    "services.seo.description":
      "Mejoramos la velocidad, rendimiento y posicionamiento de tu sitio en buscadores para mayor visibilidad.",
    "services.custom.title": "Desarrollo a Medida",
    "services.custom.description":
      "Funcionalidades personalizadas, integraciones con APIs y soluciones técnicas específicas para tu negocio.",
    "services.support.title": "Soporte Técnico",
    "services.support.description":
      "Asistencia profesional continua para resolver dudas, problemas técnicos y actualizaciones urgentes.",

    // Process
    "process.title": "Nuestro Proceso de Trabajo",
    "process.subtitle": "Un método probado que garantiza resultados excepcionales en cada proyecto",
    "process.step1.title": "Análisis y Estrategia",
    "process.step1.description":
      "Estudiamos tu negocio, competencia y objetivos para crear una estrategia web efectiva.",
    "process.step2.title": "Diseño UI/UX",
    "process.step2.description":
      "Diseñamos interfaces atractivas y funcionales enfocadas en la experiencia del usuario.",
    "process.step3.title": "Desarrollo",
    "process.step3.description":
      "Programamos tu sitio con código limpio, optimizado y siguiendo las mejores prácticas.",
    "process.step4.title": "Lanzamiento y Soporte",
    "process.step4.description": "Publicamos tu sitio y te acompañamos con soporte continuo para asegurar el éxito.",

    // Benefits
    "benefits.title": "¿Por Qué Elegirnos?",
    "benefits.subtitle": "Experiencia, tecnología y dedicación para llevar tu negocio al éxito digital",
    "benefits.experience.title": "Experiencia Comprobada",
    "benefits.experience.description":
      "Más de 100 proyectos exitosos entregados a clientes satisfechos en diversos sectores.",
    "benefits.technology.title": "Tecnología de Punta",
    "benefits.technology.description":
      "Utilizamos las últimas herramientas y frameworks para garantizar sitios modernos y escalables.",
    "benefits.support.title": "Soporte Continuo",
    "benefits.support.description":
      "Te acompañamos después del lanzamiento con mantenimiento, actualizaciones y asistencia técnica.",
    "benefits.results.title": "Resultados Medibles",
    "benefits.results.description":
      "Enfoque en métricas concretas: más tráfico, mejor conversión y crecimiento de tu negocio online.",

    // Pricing
    "pricing.title": "Planes y Paquetes",
    "pricing.subtitle": "Elige el plan que mejor se adapte a las necesidades de tu proyecto",
    "pricing.basic.name": "Básico",
    "pricing.basic.description": "Ideal para emprendedores y negocios pequeños",
    "pricing.basic.feature1": "Diseño responsivo de hasta 5 páginas",
    "pricing.basic.feature2": "Optimización SEO básica",
    "pricing.basic.feature3": "Formulario de contacto",
    "pricing.basic.feature4": "Integración con redes sociales",
    "pricing.basic.feature5": "1 mes de soporte técnico",
    "pricing.basic.feature6": "Entrega en 2 semanas",
    "pricing.professional.name": "Profesional",
    "pricing.professional.description": "Perfecto para negocios en crecimiento",
    "pricing.professional.feature1": "Diseño responsivo de hasta 10 páginas",
    "pricing.professional.feature2": "Optimización SEO avanzada",
    "pricing.professional.feature3": "Blog y sistema de contenidos",
    "pricing.professional.feature4": "Animaciones y efectos modernos",
    "pricing.professional.feature5": "Panel de administración",
    "pricing.professional.feature6": "3 meses de soporte y mantenimiento",
    "pricing.professional.feature7": "Entrega en 3 semanas",
    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.description": "Soluciones a medida para empresas",
    "pricing.enterprise.feature1": "Páginas ilimitadas",
    "pricing.enterprise.feature2": "Funcionalidades personalizadas",
    "pricing.enterprise.feature3": "Integraciones con APIs",
    "pricing.enterprise.feature4": "Base de datos y backend",
    "pricing.enterprise.feature5": "Diseño UI/UX profesional",
    "pricing.enterprise.feature6": "Soporte prioritario 24/7",
    "pricing.enterprise.feature7": "Mantenimiento continuo incluido",
    "pricing.custom": "A Medida",
    "pricing.selectPlan": "Seleccionar Plan",

    // CTA
    "cta.title": "¿Listo para Comenzar tu Proyecto?",
    "cta.subtitle": "Contáctanos hoy y transformemos tu visión en una realidad digital exitosa",
    "cta.button": "Hablemos de tu Proyecto",

    // Contact Form
    "contact.title": "Contáctanos",
    "contact.subtitle": "Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas",
    "contact.name": "Nombre completo",
    "contact.email": "Correo electrónico",
    "contact.phone": "Teléfono (opcional)",
    "contact.message": "Cuéntanos sobre tu proyecto",
    "contact.send": "Enviar Mensaje",
    "contact.sending": "Enviando...",

    // Footer
    "footer.services": "Servicios",
    "footer.company": "Empresa",
    "footer.about": "Sobre Nosotros",
    "footer.contact": "Contacto",
    "footer.support": "Soporte",
    "footer.legal": "Legal",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    // Header
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.plans": "Plans",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Transform your vision into",
    "hero.titleHighlight": "professional websites",
    "hero.subtitle":
      "We design and develop modern, fast, and responsive web experiences that drive your business to the next level",
    "hero.startProject": "Start Project",
    "hero.viewServices": "View Services",
    "hero.feature1.title": "Optimal Performance",
    "hero.feature1.description": "Ultra-fast websites optimized for SEO and conversion",
    "hero.feature2.title": "100% Responsive",
    "hero.feature2.description": "Adaptive designs that work perfectly on any device",
    "hero.feature3.title": "Results-Focused",
    "hero.feature3.description": "Strategies aimed at increasing your online presence and sales",

    // Services
    "services.title": "Professional Services",
    "services.subtitle": "Complete web design and development solutions tailored to your business needs",
    "services.creation.title": "Website Creation",
    "services.creation.description":
      "We develop modern websites from scratch, tailored to your brand and business goals with the latest technologies.",
    "services.redesign.title": "Web Redesign",
    "services.redesign.description":
      "We refresh your existing site with updated designs, improving user experience and conversion.",
    "services.maintenance.title": "Web Maintenance",
    "services.maintenance.description":
      "Continuous maintenance plans: updates, backups, security, and monthly technical support.",
    "services.seo.title": "SEO Optimization",
    "services.seo.description":
      "We improve your site's speed, performance, and search engine ranking for greater visibility.",
    "services.custom.title": "Custom Development",
    "services.custom.description":
      "Custom functionalities, API integrations, and specific technical solutions for your business.",
    "services.support.title": "Technical Support",
    "services.support.description":
      "Continuous professional assistance to resolve questions, technical issues, and urgent updates.",

    // Process
    "process.title": "Our Work Process",
    "process.subtitle": "A proven method that guarantees exceptional results in every project",
    "process.step1.title": "Analysis & Strategy",
    "process.step1.description": "We study your business, competition, and goals to create an effective web strategy.",
    "process.step2.title": "UI/UX Design",
    "process.step2.description": "We design attractive and functional interfaces focused on user experience.",
    "process.step3.title": "Development",
    "process.step3.description": "We code your site with clean, optimized code following best practices.",
    "process.step4.title": "Launch & Support",
    "process.step4.description": "We publish your site and support you with continuous assistance to ensure success.",

    // Benefits
    "benefits.title": "Why Choose Us?",
    "benefits.subtitle": "Experience, technology, and dedication to take your business to digital success",
    "benefits.experience.title": "Proven Experience",
    "benefits.experience.description":
      "Over 100 successful projects delivered to satisfied clients across various sectors.",
    "benefits.technology.title": "Cutting-Edge Technology",
    "benefits.technology.description": "We use the latest tools and frameworks to ensure modern and scalable sites.",
    "benefits.support.title": "Continuous Support",
    "benefits.support.description":
      "We accompany you after launch with maintenance, updates, and technical assistance.",
    "benefits.results.title": "Measurable Results",
    "benefits.results.description":
      "Focus on concrete metrics: more traffic, better conversion, and growth of your online business.",

    // Pricing
    "pricing.title": "Plans & Packages",
    "pricing.subtitle": "Choose the plan that best fits your project needs",
    "pricing.basic.name": "Basic",
    "pricing.basic.description": "Ideal for entrepreneurs and small businesses",
    "pricing.basic.feature1": "Responsive design up to 5 pages",
    "pricing.basic.feature2": "Basic SEO optimization",
    "pricing.basic.feature3": "Contact form",
    "pricing.basic.feature4": "Social media integration",
    "pricing.basic.feature5": "1 month technical support",
    "pricing.basic.feature6": "Delivery in 2 weeks",
    "pricing.professional.name": "Professional",
    "pricing.professional.description": "Perfect for growing businesses",
    "pricing.professional.feature1": "Responsive design up to 10 pages",
    "pricing.professional.feature2": "Advanced SEO optimization",
    "pricing.professional.feature3": "Blog and content management system",
    "pricing.professional.feature4": "Modern animations and effects",
    "pricing.professional.feature5": "Admin panel",
    "pricing.professional.feature6": "3 months support and maintenance",
    "pricing.professional.feature7": "Delivery in 3 weeks",
    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.description": "Custom solutions for businesses",
    "pricing.enterprise.feature1": "Unlimited pages",
    "pricing.enterprise.feature2": "Custom functionalities",
    "pricing.enterprise.feature3": "API integrations",
    "pricing.enterprise.feature4": "Database and backend",
    "pricing.enterprise.feature5": "Professional UI/UX design",
    "pricing.enterprise.feature6": "24/7 priority support",
    "pricing.enterprise.feature7": "Continuous maintenance included",
    "pricing.custom": "Custom",
    "pricing.selectPlan": "Select Plan",

    // CTA
    "cta.title": "Ready to Start Your Project?",
    "cta.subtitle": "Contact us today and let's transform your vision into a successful digital reality",
    "cta.button": "Let's Talk About Your Project",

    // Contact Form
    "contact.title": "Contact Us",
    "contact.subtitle": "Tell us about your project and we'll respond in less than 24 hours",
    "contact.name": "Full name",
    "contact.email": "Email address",
    "contact.phone": "Phone (optional)",
    "contact.message": "Tell us about your project",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",

    // Footer
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.about": "About Us",
    "footer.contact": "Contact",
    "footer.support": "Support",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.rights": "All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es"
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.es] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {!mounted ? <div style={{ visibility: "hidden" }}>{children}</div> : children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

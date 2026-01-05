"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef } from "react"

export function Pricing() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".pricing-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("scale-on-scroll")
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

  const plans = [
    {
      nameKey: "pricing.basic.name",
      price: "499",
      descriptionKey: "pricing.basic.description",
      features: [
        "pricing.basic.feature1",
        "pricing.basic.feature2",
        "pricing.basic.feature3",
        "pricing.basic.feature4",
        "pricing.basic.feature5",
        "pricing.basic.feature6",
      ],
      highlighted: false,
    },
    {
      nameKey: "pricing.professional.name",
      price: "999",
      descriptionKey: "pricing.professional.description",
      features: [
        "pricing.professional.feature1",
        "pricing.professional.feature2",
        "pricing.professional.feature3",
        "pricing.professional.feature4",
        "pricing.professional.feature5",
        "pricing.professional.feature6",
        "pricing.professional.feature7",
      ],
      highlighted: true,
    },
    {
      nameKey: "pricing.enterprise.name",
      price: "Custom",
      descriptionKey: "pricing.enterprise.description",
      features: [
        "pricing.enterprise.feature1",
        "pricing.enterprise.feature2",
        "pricing.enterprise.feature3",
        "pricing.enterprise.feature4",
        "pricing.enterprise.feature5",
        "pricing.enterprise.feature6",
        "pricing.enterprise.feature7",
      ],
      highlighted: false,
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={sectionRef} id="planes" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">{t("pricing.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card rounded-lg p-8 opacity-0 hover:scale-105 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-xl md:scale-105"
                  : "bg-card border border-border hover:shadow-lg hover:border-primary/30"
              }`}
            >
              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlighted ? "text-primary-foreground" : "text-card-foreground"
                  }`}
                >
                  {t(plan.nameKey)}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {t(plan.descriptionKey)}
                </p>
              </div>

              <div className="mb-6">
                {plan.price === "Custom" ? (
                  <div
                    className={`text-4xl font-bold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}
                  >
                    {t("pricing.custom")}
                  </div>
                ) : (
                  <div className="flex items-baseline">
                    <span
                      className={`text-4xl font-bold ${
                        plan.highlighted ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      ${plan.price}
                    </span>
                    <span
                      className={`ml-2 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                    >
                      USD
                    </span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((featureKey, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className={`flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-primary-foreground" : "text-accent"}`}
                    />
                    <span
                      className={`text-sm leading-relaxed ${
                        plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"
                      }`}
                    >
                      {t(featureKey)}
                    </span>
                  </li>
                ))}
              </ul>

              <Button onClick={scrollToContact} variant={plan.highlighted ? "secondary" : "default"} className="w-full">
                {t("pricing.selectPlan")}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

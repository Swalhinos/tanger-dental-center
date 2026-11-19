'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

// Detailed full-colour service icons (Flaticon free licence, attribution in
// the site footer). One consistent dental pack family for 9 of 10 services;
// the paediatric card uses a matching full-colour milk-tooth + pacifier icon
// (same licence) — tooth-based, no child figure.
// Order matches the 10 services in lib/translations.ts.
const icons = [
  '/images/icons/service-implant.png', // Implantologie
  '/images/icons/service-surgery.png', // Chirurgie orale
  '/images/icons/service-perio.png', // Parodontologie
  '/images/icons/service-rootcanal.png', // Soins conservateurs
  '/images/icons/service-prosthesis.png', // Prothèses & couronnes
  '/images/icons/service-veneer.png', // Blanchiment & facettes
  '/images/icons/service-braces.png', // Orthodontie & aligneurs
  '/images/icons/service-kids.png', // Dentisterie pédiatrique
  '/images/icons/service-scaling.png', // Détartrage & prévention
  '/images/icons/service-bruxism.png', // Bruxisme & gouttières
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="bg-sky-soft py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-background px-4 py-1.5 text-xs font-medium text-navy">
            {t.services.badge}
          </span>
          <h2 className="font-serif text-3xl font-semibold text-navy text-balance md:text-4xl">
            {t.services.title}
          </h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            {t.services.subtitle}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((service, i) => (
            <article
              key={service.title}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-navy/5 shadow-inner">
                <Image
                  src={icons[i % icons.length]}
                  alt={service.title}
                  width={512}
                  height={512}
                  className="size-14 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
              </span>
              <h3 className="font-serif text-lg font-semibold text-navy">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

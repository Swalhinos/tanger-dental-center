'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

// Before/after pairs — free-licensed stock photos (Pexels), men's smiles only.
// Each pair illustrates one treatment; the two photos of a pair are different
// people (mockup illustration, see the section note in translations).
const PAIRS = [
  { before: '/images/results-whitening-before.webp', after: '/images/results-whitening-after.webp' },
  { before: '/images/results-veneers-before.webp', after: '/images/results-veneers-after.webp' },
  { before: '/images/results-implants-before.webp', after: '/images/results-implants-after.webp' },
]

export function Results() {
  const { t } = useLanguage()

  return (
    <section id="results" className="bg-sky-soft py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-background px-4 py-1.5 text-xs font-medium text-navy">
            {t.results.badge}
          </span>
          <h2 className="font-serif text-3xl font-semibold text-navy text-balance md:text-4xl">
            {t.results.title}
          </h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">{t.results.subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {t.results.items.map((item, i) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-background"
            >
              <div className="grid grid-cols-2">
                <figure className="relative">
                  <Image
                    src={PAIRS[i].before}
                    alt={item.altBefore}
                    width={640}
                    height={480}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="absolute bottom-2 left-2 rounded-full bg-navy/85 px-3 py-1 text-[11px] font-semibold text-white rtl:left-auto rtl:right-2">
                    {t.results.before}
                  </figcaption>
                </figure>
                <figure className="relative">
                  <Image
                    src={PAIRS[i].after}
                    alt={item.altAfter}
                    width={640}
                    height={480}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="absolute bottom-2 left-2 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-navy rtl:left-auto rtl:right-2">
                    {t.results.after}
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col gap-2 p-6">
                <h3 className="font-serif text-xl font-semibold text-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">{t.results.note}</p>
      </div>
    </section>
  )
}

'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

// Before/after pairs — the clinic's own case photos, supplied as vertical
// composites and split into matching halves (see scripts/process-results.py).
// Both halves of a pair received the exact same enhancement, so the contrast
// between them is the treatment's, not a filter's.
const PAIRS = [
  { before: '/images/results-case1-before.webp', after: '/images/results-case1-after.webp' },
  { before: '/images/results-case2-before.webp', after: '/images/results-case2-after.webp' },
  { before: '/images/results-case3-before.webp', after: '/images/results-case3-after.webp' },
  { before: '/images/results-case4-before.webp', after: '/images/results-case4-after.webp' },
  { before: '/images/results-case5-before.webp', after: '/images/results-case5-after.webp' },
]

type SliderProps = {
  before: string
  after: string
  altBefore: string
  altAfter: string
  beforeLabel: string
  afterLabel: string
  dragHint: string
  rtl: boolean
}

function CompareSlider({ before, after, altBefore, altAfter, beforeLabel, afterLabel, dragHint, rtl }: SliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const beforeLayerRef = useRef<HTMLDivElement>(null)
  const handleRef = useRef<HTMLDivElement>(null)
  const beforeChipRef = useRef<HTMLSpanElement>(null)
  const afterChipRef = useRef<HTMLSpanElement>(null)
  const draggingRef = useRef(false)
  const posRef = useRef(50)
  const [touched, setTouched] = useState(false)

  // p = divider position, % from the LEFT edge (physical, both directions).
  // LTR: the before photo occupies [0, p]. RTL: it occupies [p, 100].
  // All updates mutate styles directly — no re-render while dragging.
  const apply = useCallback(
    (p: number) => {
      const pos = Math.min(96, Math.max(4, p))
      posRef.current = pos
      if (beforeLayerRef.current) {
        beforeLayerRef.current.style.clipPath = rtl ? `inset(0 0 0 ${pos}%)` : `inset(0 ${100 - pos}% 0 0)`
      }
      if (handleRef.current) handleRef.current.style.left = `${pos}%`
      const beforeRegion = rtl ? 100 - pos : pos
      const afterRegion = rtl ? pos : 100 - pos
      if (beforeChipRef.current) {
        beforeChipRef.current.style.opacity = String(Math.min(1, Math.max(0, (beforeRegion - 8) / 16)))
      }
      if (afterChipRef.current) {
        afterChipRef.current.style.opacity = String(Math.min(1, Math.max(0, (afterRegion - 8) / 16)))
      }
      containerRef.current?.setAttribute('aria-valuenow', String(Math.round(pos)))
    },
    [rtl],
  )

  // Re-apply on mount and whenever the direction flips (language switch).
  useEffect(() => {
    apply(posRef.current)
  }, [apply])

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const el = containerRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      apply(((clientX - r.left) / r.width) * 100)
    },
    [apply],
  )

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label={dragHint}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={50}
      tabIndex={0}
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      onPointerDown={(e) => {
        draggingRef.current = true
        e.currentTarget.setPointerCapture(e.pointerId)
        setTouched(true)
        updateFromClientX(e.clientX)
      }}
      onPointerMove={(e) => {
        if (draggingRef.current) updateFromClientX(e.clientX)
      }}
      onPointerUp={() => {
        draggingRef.current = false
      }}
      onPointerCancel={() => {
        draggingRef.current = false
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          apply(posRef.current - 4)
        } else if (e.key === 'ArrowRight') {
          e.preventDefault()
          apply(posRef.current + 4)
        } else if (e.key === 'Home') {
          e.preventDefault()
          apply(4)
        } else if (e.key === 'End') {
          e.preventDefault()
          apply(96)
        }
      }}
    >
      {/* AFTER — base layer */}
      <Image
        src={after}
        alt={altAfter}
        fill
        sizes="(max-width: 768px) 92vw, (max-width: 1024px) 50vw, 640px"
        className="pointer-events-none object-cover"
        draggable={false}
      />
      {/* BEFORE — top layer, clipped to its side of the divider */}
      <div
        ref={beforeLayerRef}
        className="absolute inset-0"
        style={{ clipPath: rtl ? 'inset(0 0 0 50%)' : 'inset(0 50% 0 0)' }}
      >
        <Image
          src={before}
          alt={altBefore}
          fill
          sizes="(max-width: 768px) 92vw, (max-width: 1024px) 50vw, 640px"
          className="pointer-events-none object-cover"
          draggable={false}
        />
      </div>

      <span
        ref={beforeChipRef}
        className="absolute bottom-2 left-2 z-10 rounded-full bg-navy/85 px-3 py-1 text-[11px] font-semibold text-white rtl:left-auto rtl:right-2"
      >
        {beforeLabel}
      </span>
      <span
        ref={afterChipRef}
        className="absolute bottom-2 right-2 z-10 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-navy rtl:right-auto rtl:left-2"
      >
        {afterLabel}
      </span>

      {!touched && (
        <span className="pointer-events-none absolute left-1/2 top-3 z-10 -translate-x-1/2 rounded-full bg-black/45 px-3 py-1 text-[11px] font-medium whitespace-nowrap text-white backdrop-blur-sm">
          {dragHint}
        </span>
      )}

      {/* Divider + handle */}
      <div ref={handleRef} className="pointer-events-none absolute inset-y-0 z-20" style={{ left: '50%' }}>
        <div className="absolute inset-y-0 w-[3px] -translate-x-1/2 bg-white shadow-[0_0_6px_rgba(0,0,0,0.35)]" />
        <div className="absolute top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-xl ring-1 ring-black/10">
          <span className="flex items-center">
            <ChevronLeft className="-mr-[9px] size-5" />
            <ChevronRight className="-ml-[9px] size-5" />
          </span>
        </div>
      </div>
    </div>
  )
}

export function Results() {
  const { t, lang } = useLanguage()
  const rtl = lang === 'ar'

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

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.results.items.map((item, i) => (
            <article
              key={item.title}
              className={`flex flex-col overflow-hidden rounded-3xl border border-border bg-background ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <CompareSlider
                before={PAIRS[i].before}
                after={PAIRS[i].after}
                altBefore={item.altBefore}
                altAfter={item.altAfter}
                beforeLabel={t.results.before}
                afterLabel={t.results.after}
                dragHint={t.results.dragHint}
                rtl={rtl}
              />
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

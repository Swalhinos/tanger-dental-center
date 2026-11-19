# Tanger Dental Center — Dental Centre Website

Static Next.js website (mockup / redesign pitch) for Tanger Dental Center, a
multidisciplinary dental centre in Tangier, Morocco. Built from the proven
Dalil/Le Pont template (same code base, fully rebranded to the clinic's own
black + gold identity).

## Clinic facts used (verified 2026-11-19)
- Call number (from the clinic's own website): +212 694 75 59 88
- WhatsApp (clinic's WhatsApp Business number): +212 777 61 95 54
  (wa.me/212777619554) — every WhatsApp link/button points here
- Address (public directories, corroborated by 3 sources): Place Moulay
  Abdelaziz – Mosquée Badr, Résidence Ennasr, 4e étage, Appt 15, 90000 Tanger
- Hours: Monday – Saturday 09:00 – 20:00 (clinic's own website). NOTE: the
  clinic's WhatsApp profile claims "Open 24 hours" — discrepancy flagged,
  the website hours are used.
- Facebook: facebook.com/Tangerdentalcenter (~1,210 likes)
- Services (10 shown): implantologie, chirurgie orale, parodontologie,
  soins conservateurs, prothèses & couronnes, blanchiment & facettes,
  orthodontie & aligneurs, dentisterie pédiatrique, détartrage & prévention,
  bruxisme & gouttières

## Logo
- `public/images/logo-original.jpg` — the clinic's official logo, supplied
  by the user, byte-identical (gold tooth + TDC monogram on black).
- `public/images/logo-transparent.png` — transparent version produced from
  the original by luminance keying / unmultiply (black backdrop removed
  only; artwork and colours untouched), upscaled 2x (558×508) with Lanczos +
  light sharpening. Used ONLY on dark surfaces (black header + footer).
  Round-trip check: composited back over black it is pixel-identical to
  the original (mean abs diff 0.0).
- Favicons / chat icon: resize-only copies of the original logo.

## Images
The clinic's OWN treatment images, downloaded from its current website:
- `clinic-hero.webp` — their implant-model photo (hero + about overlay)
- `clinic-about.webp` — their crown-model photo
Their other treatment photos showing a woman patient (hero scaling,
aesthetics shade-guide, periodontal probe) were EXCLUDED per the standing
no-women-in-images rule; the intra-oral restorative shot was also left out
to stay strictly safe. The 6 model/instrument-only images were audited;
2 are used.

## Languages & features
- French (default), Arabic (RTL), English — mirroring the clinic's own site
- Fully local FAQ chatbot (no external API): ~30 intents × 3 languages,
  prices always deflected to WhatsApp, medical questions to the clinic team
- Booking form opens WhatsApp (212777619554) with the details prefilled
- Google Maps embed + directions for the Ennasr address

## Placeholders (flagged)
- The 3 testimonials are generic placeholders (same practice as previous
  clinic builds) — replace with the clinic's real patient reviews.
- No Google rating is displayed (not verified for this centre).

## Build & package
- `npm install && npm run build` → static export in `out/`
- `deploy/site.zip` — project source in the standard layout for the
  GitHub "Extract site zip" → Vercel route (see deploy/DEPLOY-STEPS.md)

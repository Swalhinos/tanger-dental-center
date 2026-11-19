import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Arabic, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
})

export const metadata: Metadata = {
  title: 'Tanger Dental Center | Centre dentaire pluridisciplinaire à Tanger',
  description:
    'Tanger Dental Center — centre dentaire pluridisciplinaire à Tanger : implantologie, chirurgie orale, parodontologie, orthodontie, blanchiment et facettes, soins pour toute la famille. Place Moulay Abdelaziz, Résidence Ennasr, 90000 Tanger. Réservez sur WhatsApp.',
  keywords: ['Tanger Dental Center', 'dentiste Tanger', 'dentiste à Tanger', 'centre dentaire Tanger', 'implants dentaires Tanger', 'orthodontie Tanger', 'blanchiment dentaire Tanger', 'مركز طب الأسنان طنجة', 'طبيب أسنان طنجة'],
  icons: {
    icon: '/images/logo-favicon-hd.png',
    apple: '/images/logo-favicon-hd.png',
  },
  openGraph: {
    title: 'Tanger Dental Center | Centre dentaire à Tanger',
    description:
      'Votre sourire, notre signature — Tanger Dental Center, place Moulay Abdelaziz, Tanger. Réservez votre rendez-vous sur WhatsApp.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export const viewport: Viewport = {
  themeColor: '#0c0c0e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${playfair.variable} ${plexArabic.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

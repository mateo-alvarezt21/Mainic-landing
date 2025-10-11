import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Mainic Software Services',
    template: '%s | Mainic Software Services',
  },
  description: 'Automatiza tu negocio con soluciones de software de vanguardia. Desarrollo personalizado, análisis de datos y automatización de procesos.',
  keywords: [
    'automatización',
    'software personalizado', 
    'análisis de datos',
    'transformación digital',
    'desarrollo web',
    'inteligencia artificial',
    'Colombia',
    'Bogotá',
  ],
  authors: [{ name: 'Mainic Software Services' }],
  creator: 'Mainic Software Services',
  publisher: 'Mainic Software Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: process.env.SITE_URL,
    siteName: 'Mainic Software Services',
    title: 'Mainic Software Services - Automatiza tu Éxito',
    description: 'Transformamos empresas con soluciones de software de vanguardia',
    images: [
      {
        url: '/images/og-mainic.jpg',
        width: 1200,
        height: 630,
        alt: 'Mainic Software Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mainic',
    creator: '@mainic',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1193d4" />
      </head>
      <body className={`${inter.className} antialiased`} style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Mainic Software Services',
              description: 'Empresa de desarrollo de software y automatización de procesos',
              url: process.env.SITE_URL,
              logo: `${process.env.SITE_URL}/images/logo.png`,
              sameAs: [
                'https://linkedin.com/company/mainic',
                'https://github.com/mainic',
                'https://twitter.com/mainic',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+57-1-234-5678',
                contactType: 'customer service',
                availableLanguage: ['Spanish', 'English'],
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Calle 72 #10-34, Oficina 501',
                addressLocality: 'Bogotá',
                addressCountry: 'CO',
              },
              offers: {
                '@type': 'Offer',
                name: 'Consulta Gratuita de Software',
                description: 'Consulta gratuita para automatización y desarrollo de software',
                price: '0',
                priceCurrency: 'COP',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}

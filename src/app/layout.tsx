import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Mainic Software Services - Automatiza tu Éxito con Tecnología Inteligente',
    template: '%s | Mainic Software Services',
  },
  description: 'Transformamos empresas con soluciones de software personalizadas, automatización de procesos y análisis de datos avanzados. Desarrollo de videojuegos y armado de equipos en Colombia.',
  keywords: [
    'automatización',
    'software personalizado',
    'análisis de datos',
    'transformación digital',
    'desarrollo web',
    'inteligencia artificial',
    'desarrollo de videojuegos',
    'armado de computadoras',
    'Colombia',
    'Bogotá',
    'desarrollo de software Colombia',
    'automatización de procesos',
  ],
  authors: [{ name: 'Mainic Software Services' }],
  creator: 'Mainic Software Services',
  publisher: 'Mainic Software Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: process.env.SITE_URL || 'https://mainic.com',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: process.env.SITE_URL || 'https://mainic.com',
    siteName: 'Mainic Software Services',
    title: 'Mainic Software Services - Automatiza tu Éxito con Tecnología Inteligente',
    description: 'Transformamos empresas con soluciones de software personalizadas, automatización de procesos y análisis de datos avanzados. Consulta gratuita disponible.',
    images: [
      {
        url: '/images/og-mainic.jpg',
        width: 1200,
        height: 630,
        alt: 'Mainic Software Services - Tecnología que transforma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mainic',
    creator: '@mainic',
    title: 'Mainic Software Services - Automatiza tu Éxito',
    description: 'Transformamos empresas con tecnología de vanguardia',
    images: ['/images/og-mainic.jpg'],
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
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1193d4" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  const theme = savedTheme || systemTheme;
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`} style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID} />
        )}

        <ThemeProvider>
          {children}
        </ThemeProvider>
        
        {/* Schema.org structured data - Organization */}
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
            }),
          }}
        />

        {/* Schema.org structured data - Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'Service',
                  name: 'Automatización de Procesos',
                  description: 'Automatiza tareas repetitivas y flujos de trabajo para aumentar la eficiencia y reducir costos operativos.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Mainic Software Services',
                  },
                  areaServed: 'CO',
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Servicios de Automatización',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Workflows Automatizados',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Integración de Sistemas',
                        },
                      },
                    ],
                  },
                },
                {
                  '@type': 'Service',
                  name: 'Desarrollo de Software Personalizado',
                  description: 'Desarrollamos aplicaciones de software a medida para abordar los desafíos únicos de tu empresa.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Mainic Software Services',
                  },
                  areaServed: 'CO',
                },
                {
                  '@type': 'Service',
                  name: 'Análisis de Datos e Informes',
                  description: 'Obtén información valiosa de tus datos con herramientas avanzadas de análisis y reportes.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Mainic Software Services',
                  },
                  areaServed: 'CO',
                },
                {
                  '@type': 'Service',
                  name: 'Desarrollo de Videojuegos',
                  description: 'Creamos experiencias interactivas y videojuegos innovadores para diferentes plataformas.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Mainic Software Services',
                  },
                  areaServed: 'CO',
                },
                {
                  '@type': 'Service',
                  name: 'Armado de Equipos de Cómputo',
                  description: 'Ensamblamos y configuramos equipos de cómputo a medida para empresas y usuarios especializados.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Mainic Software Services',
                  },
                  areaServed: 'CO',
                },
              ],
            }),
          }}
        />

        {/* Schema.org structured data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': process.env.SITE_URL,
              name: 'Mainic Software Services',
              image: `${process.env.SITE_URL}/images/logo.png`,
              telephone: '+57-1-234-5678',
              email: 'contacto@mainic.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Calle 72 #10-34, Oficina 501',
                addressLocality: 'Bogotá',
                addressRegion: 'Cundinamarca',
                postalCode: '110221',
                addressCountry: 'CO',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '4.6533',
                longitude: '-74.0836',
              },
              url: process.env.SITE_URL,
              priceRange: '$$',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}

import { Metadata } from 'next'
import { Header } from '@/components/layout/header/Header'
import { Hero } from '@/components/features/sections/hero'
import { Clients } from '@/components/features/sections/clients'
import { Services } from '@/components/features/sections/services'
import { TechStack } from '@/components/features/sections/tech-stack'
import { Cases } from '@/components/features/sections/cases'
import { Stats } from '@/components/features/sections/stats'
import About from '@/components/sections/About'
import { Testimonials } from '@/components/features/sections/testimonials'
import { ContactSection } from '@/components/features/sections/contact-section'
import { Footer } from '@/components/layout/footer'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { FloatingElements } from '@/components/ui/floating-elements'

export const metadata: Metadata = {
  title: 'Mainic Software Services - Automatiza tu Éxito con Tecnología Inteligente',
  description: 'Transformamos empresas con soluciones de software personalizadas, automatización de procesos y análisis de datos avanzados. Consulta gratuita disponible.',
  keywords: 'automatización, software personalizado, análisis de datos, transformación digital, desarrollo web, inteligencia artificial',
  openGraph: {
    title: 'Mainic Software Services - Automatiza tu Éxito',
    description: 'Transformamos empresas con tecnología de vanguardia',
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
    title: 'Mainic Software Services - Automatiza tu Éxito',
    description: 'Transformamos empresas con tecnología de vanguardia',
    images: ['/images/og-mainic.jpg'],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Progress indicator */}
      <ScrollProgress />
      
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main className="overflow-hidden">
        <Hero />
        <Clients />
        <About />
        <Cases />
        <TechStack />
        <Services />
        <Stats />
        <Testimonials />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
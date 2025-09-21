import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { Clients } from '@/components/sections/Clients'
import { Services } from '@/components/sections/Services'
import { TechStack } from '@/components/sections/TechStack'
import { Cases } from '@/components/sections/Cases'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { FloatingElements } from '@/components/ui/FloatingElements'

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
        <Services />
        <TechStack />
        <Cases />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
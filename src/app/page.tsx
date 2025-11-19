import dynamic from 'next/dynamic'
import { ClientHeader } from '@/components/layout/header/ClientHeader'
import { Hero } from '@/components/features/sections/hero'
import { PopularServices } from '@/components/features/sections/popular-services/PopularServices'

// Lazy load non-critical components for better performance
const Services = dynamic(() => import('@/components/features/sections/services').then(mod => ({ default: mod.Services })), {
  loading: () => <div className="min-h-[400px]" />
})
const Cases = dynamic(() => import('@/components/features/sections/cases').then(mod => ({ default: mod.Cases })), {
  loading: () => <div className="min-h-[400px]" />
})
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <div className="min-h-[400px]" />
})
const ContactSection = dynamic(() => import('@/components/features/sections/contact-section').then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="min-h-[400px]" />
})
const Footer = dynamic(() => import('@/components/layout/footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="min-h-[200px]" />
})
const ScrollProgress = dynamic(() => import('@/components/ui/scroll-progress').then(mod => ({ default: mod.ScrollProgress })), {
  ssr: false
})
const FloatingElements = dynamic(() => import('@/components/ui/floating-elements').then(mod => ({ default: mod.FloatingElements })), {
  ssr: false
})

// Metadata is now handled in layout.tsx to avoid duplication

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Progress indicator */}
      <ScrollProgress />
      
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Header - Client component */}
      <ClientHeader />
      
      {/* Main content */}
      <main className="overflow-hidden">
        <Hero />
        <PopularServices />
        <Services />
        <Cases />
        <About />
        {/* <Testimonials /> */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
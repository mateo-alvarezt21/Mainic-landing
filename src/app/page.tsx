import { ClientHeader } from '@/components/layout/header/ClientHeader'
import { Hero } from '@/components/features/sections/hero'
import { Services } from '@/components/features/sections/services'
import { Cases } from '@/components/features/sections/cases'
import About from '@/components/sections/About'
// import { Testimonials } from '@/components/features/sections/testimonials'
import { ContactSection } from '@/components/features/sections/contact-section'
import { Footer } from '@/components/layout/footer'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { FloatingElements } from '@/components/ui/floating-elements'

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
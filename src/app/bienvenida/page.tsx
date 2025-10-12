'use client'

import { ContactFormStepper } from '@/components/features/contact'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface CompanyData {
  id: number
  years_experience: string
  projects_completed: string
}

interface CompanyFromEndpoint {
  name: string
  logo: string
}

const fetchCompanyData = async (): Promise<CompanyData | null> => {
  try {
    const response = await fetch('https://strapi-core.mainics.com/empresa-data')
    const data: CompanyData[] = await response.json()
    return data.length > 0 ? data[0] : null
  } catch (error) {
    console.error('Error fetching company data:', error)
    return null
  }
}

const fetchCompaniesFromEndpoint = async (): Promise<CompanyFromEndpoint[]> => {
  try {
    return [
      {
        name: 'Empresa de Confianza',
        logo: 'https://strapi-core.mainics.com/uploads/BLANCO_d64b3634d7.png'
      }
    ]
  } catch (error) {
    console.error('Error al crear datos de empresas:', error)
    return []
  }
}

export default function BienvenidaPage() {
  const [companyData, setCompanyData] = useState<CompanyData | null>(null)
  const [endpointCompanies, setEndpointCompanies] = useState<CompanyFromEndpoint[]>([])

  useEffect(() => {
    const loadCompanyData = async () => {
      const data = await fetchCompanyData()
      setCompanyData(data)
    }

    const loadCompanies = async () => {
      try {
        const companies = await fetchCompaniesFromEndpoint()
        setEndpointCompanies(companies)
      } catch (error) {
        console.error('Error loading companies:', error)
      }
    }

    loadCompanyData()
    loadCompanies()
  }, [])
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Header with back button */}
      <header className="border-b" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-primary)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:text-primary-500 transition-colors"
            style={{ color: 'var(--text-primary)' }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Volver al inicio</span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 py-12 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              ¡Bienvenido!
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-4" style={{ color: 'var(--text-secondary)' }}>
              Estamos emocionados de conocer tu proyecto. Completa este formulario en unos minutos
              y nuestro equipo te contactará con una propuesta personalizada.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm" style={{ color: 'var(--text-tertiary)' }}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>5 pasos simples</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>3-5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span>Respuesta en 24h</span>
              </div>
            </div>
          </div>

          {/* Stepper Form */}
          <ContactFormStepper />

          {/* Companies that trust us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 mb-12 max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <p className="text-base mb-6" style={{ color: 'var(--text-secondary)' }}>Empresas que confían en nosotros</p>
            </div>
            <div className="flex justify-center items-center">
              {endpointCompanies.length > 0 ? (
                endpointCompanies.map((company, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1
                    }}
                    className="relative"
                    title={company.name}
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={250}
                      height={150}
                      className="object-contain company-logo opacity-80 hover:opacity-100 transition-opacity duration-300 w-40 sm:w-52 md:w-60 h-auto"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </motion.div>
                ))
              ) : (
                <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Cargando empresas...</div>
              )}
            </div>
          </motion.div>

          {/* Trust indicators */}
          <div className="mt-12 pt-12 border-t" style={{ borderColor: 'var(--border-primary)' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  {companyData ? `${companyData.projects_completed}+` : '100+'}
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Proyectos completados</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  {companyData ? `${companyData.years_experience}+` : '5+'}
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Años de experiencia</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">100%</div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Clientes satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t py-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-primary)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 text-center">
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            © 2025 Mainic Software Services. Todos los Derechos Reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

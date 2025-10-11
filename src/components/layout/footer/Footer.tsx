'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react'

const footerSections = [
  {
    title: 'Servicios',
    links: [
      { label: 'Automatización de Procesos', href: '#automation' },
      { label: 'Desarrollo Personalizado', href: '#development' },
      { label: 'Análisis de Datos', href: '#analytics' },
      { label: 'Consultoría IT', href: '#consulting' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre Nosotros', href: '/about' },
      { label: 'Nuestro Equipo', href: '/team' },
      { label: 'Carreras', href: '/careers' },
      { label: 'Blog', href: '/blog' }
    ]
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Casos de Estudio', href: '/cases' },
      { label: 'Whitepapers', href: '/resources' },
      { label: 'Centro de Ayuda', href: '/help' },
      { label: 'API Docs', href: '/docs' }
    ]
  }
]

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/mainic', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/mainic', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/mainic', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contacto@mainic.com', label: 'Email' }
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-50 dark:bg-dark-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="text-2xl font-bold">Mainic</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Transformamos empresas a través de la automatización y la innovación 
                tecnológica. Construimos el futuro, una línea de código a la vez.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-200 dark:bg-dark-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-400 hover:bg-gray-300 dark:hover:bg-dark-600 transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (sectionIndex + 1) }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center group"
                      >
                        {link.label}
                        <ArrowUp className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity rotate-45" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-800 py-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">
                Mantente al día con las últimas tendencias tecnológicas
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Recibe insights exclusivos y actualizaciones sobre automatización empresarial.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors whitespace-nowrap"
              >
                Suscribirse
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © 2025 Mainic Software Services. Todos los Derechos Reservados.
            </p>
            
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Términos de Servicio
              </Link>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 bg-gray-200 dark:bg-dark-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-400 hover:bg-gray-300 dark:hover:bg-dark-600 transition-all"
                aria-label="Volver al inicio"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
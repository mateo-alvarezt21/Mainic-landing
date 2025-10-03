'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '@/components/features/contact'
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Correo Electrónico',
    details: ['contacto@mainic.com', 'ventas@mainic.com'],
    color: 'text-blue-400'
  },
  {
    icon: Phone,
    title: 'Teléfono',
    details: ['+57 1 234 5678', '+57 300 123 4567'],
    color: 'text-green-400'
  },
  {
    icon: MapPin,
    title: 'Oficina',
    details: ['Bogotá, Colombia', 'Calle 72 #10-34, Oficina 501'],
    color: 'text-red-400'
  },
  {
    icon: Clock,
    title: 'Horario de Atención',
    details: ['Lun - Vie: 8:00 AM - 6:00 PM', 'Sáb: 9:00 AM - 2:00 PM'],
    color: 'text-purple-400'
  }
]

export function ContactSection() {
    return (
      <section id="contact" className="py-12 md:py-20 bg-dark-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>
  
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              ¿Listo para <span className="gradient-text">Transformar</span> tu Negocio?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Ponte en contacto con nuestro equipo de expertos y descubre cómo podemos 
              ayudarte a automatizar y optimizar tus procesos empresariales.
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
  
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">Información de Contacto</h3>
                <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8">
                  Estamos aquí para ayudarte. No dudes en contactarnos por cualquiera 
                  de estos medios.
                </p>
              </div>
  
              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-dark-700/50 border border-gray-600 hover:border-gray-500 transition-colors"
                    >
                      <div className={`${info.color} mt-1 flex-shrink-0`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-400 text-sm sm:text-base break-words">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
  
              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-2xl p-4 sm:p-6 border border-primary-500/30"
              >
                <h4 className="text-lg sm:text-xl font-bold mb-2">¿Necesitas una respuesta rápida?</h4>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  Programa una llamada de 15 minutos con uno de nuestros expertos.
                </p>
                <button className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold group transition-colors text-sm sm:text-base">
                  Programar Llamada
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }
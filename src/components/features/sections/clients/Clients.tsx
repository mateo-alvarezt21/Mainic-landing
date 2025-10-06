'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getPostsByCategory, decodeHtmlEntities } from '@/lib/wp'
import type { WPPost } from '@/lib/wp'

const clients = [
  // {
  //   name: 'Microsoft',
  //   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg',
  // },
  {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  },
  // {
  //   name: 'Amazon',
  //   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  // },
   {
     name: 'Netflix',
     logo: 'https://cdn.worldvectorlogo.com/logos/netflix-4.svg',
   },
  // {
  //   name: 'Spotify',
  //   logo: 'https://cdn.worldvectorlogo.com/logos/spotify-2.svg',
  // },
  // {
  //   name: 'Salesforce',
  //   logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg',
  // },
  // {
  //   name: 'Adobe',
  //   logo: 'https://cdn.worldvectorlogo.com/logos/adobe-1.svg',
  // },
  // {
  //   name: 'Oracle',
  //   logo: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg',
  // }
]

export function Clients() {
  const [clientsData, setClientsData] = useState<WPPost[]>([])

  useEffect(() => {
    const fetchClientsData = async () => {
      try {
        const data = await getPostsByCategory('clientes', 20)
        console.log('Posts de clientes desde WordPress:', data)
        setClientsData(data)
      } catch (error) {
        console.error('Error al obtener posts de clientes:', error)
      }
    }
    
    fetchClientsData()
  }, [])

  return (
    <section className="py-12 md:py-20 bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl" />
      </div>

      <div className="w-full px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Confían en <span className="gradient-text">Nosotros</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Empresas líderes en la industria han elegido nuestras soluciones 
            para transformar sus operaciones y alcanzar el éxito.
          </p>
        </motion.div>

        {/* WordPress clients grid */}
        {clientsData.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className={`mx-auto px-4 ${
              clientsData.length === 1 
                ? 'max-w-xs' 
                : clientsData.length === 2 
                  ? 'max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl' 
                  : clientsData.length <= 4
                    ? 'max-w-3xl lg:max-w-4xl'
                    : 'max-w-5xl lg:max-w-6xl'
            }`}>
              <div className={`flex flex-wrap justify-center items-center ${
                clientsData.length === 1 
                  ? 'gap-0' 
                  : clientsData.length === 2 
                    ? 'gap-4 sm:gap-6 md:gap-8 lg:gap-12' 
                    : clientsData.length <= 4
                      ? 'gap-4 sm:gap-6 md:gap-8 lg:gap-12'
                      : 'gap-3 sm:gap-4 md:gap-6 lg:gap-8'
              }`}>
                {clientsData.map((client, index) => (
                  <motion.div
                    key={client.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 
                    }}
                    viewport={{ once: true }}
                    className="w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 bg-dark-700/50 border border-gray-600/30 rounded-lg md:rounded-xl flex items-center justify-center hover:bg-dark-600/50 hover:border-primary-500/50 transition-all cursor-pointer backdrop-blur-sm group relative"
                    title={decodeHtmlEntities(client.title.rendered)}
                  >
                    {client._embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
                      <Image
                        src={client._embedded['wp:featuredmedia'][0].source_url}
                        alt={decodeHtmlEntities(client.title.rendered)}
                        fill
                        className="object-contain p-2 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500 text-xs">
                        {decodeHtmlEntities(client.title.rendered)}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Fallback static logos */}
        <div className="relative">
          {clientsData.length === 0 && clients.length > 0 ? (
            <div className={`mx-auto px-4 ${
              clients.length === 1 
                ? 'max-w-xs' 
                : clients.length === 2 
                  ? 'max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl' 
                  : clients.length <= 4
                    ? 'max-w-3xl lg:max-w-4xl'
                    : 'max-w-5xl lg:max-w-6xl'
            }`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-wrap justify-center items-center ${
                  clients.length === 1 
                    ? 'gap-0' 
                    : clients.length === 2 
                      ? 'gap-4 sm:gap-6 md:gap-8 lg:gap-12' 
                      : clients.length <= 4
                        ? 'gap-4 sm:gap-6 md:gap-8 lg:gap-12'
                        : 'gap-3 sm:gap-4 md:gap-6 lg:gap-8'
                }`}
              >
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 
                  }}
                  viewport={{ once: true }}
                  className="w-32 h-20 sm:w-36 sm:h-22 md:w-40 md:h-24 lg:w-48 lg:h-28 bg-dark-700/50 border border-gray-600/30 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 flex items-center justify-center hover:bg-dark-600/50 hover:border-primary-500/50 transition-all cursor-pointer backdrop-blur-sm"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={120}
                    height={70}
                    className="max-w-full max-h-full w-auto h-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
              </motion.div>
            </div>
          ) : null}
        </div>

        {/* Stats below logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-16 text-center px-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
            {[
              { 
                number: clientsData.length > 0 ? clientsData.length.toString() : clients.length.toString(), 
                label: (clientsData.length > 0 ? clientsData.length : clients.length) === 1 ? 'Cliente de Confianza' : 'Clientes de Confianza' 
              },
              { number: '24/7', label: 'Soporte Dedicado' },
              { number: '100%', label: 'Compromiso' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center bg-dark-700/30 rounded-lg p-4 sm:bg-transparent sm:p-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl sm:text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm sm:text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
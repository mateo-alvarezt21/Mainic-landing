'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    position: 'CEO, TechCorp',
    company: 'TechCorp Solutions',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    text: 'Mainic transformó completamente nuestros procesos. La automatización que implementaron nos ahorró más de 40 horas semanales y redujo errores en un 90%. Increíble trabajo.'
  },
  {
    name: 'María González',
    position: 'Directora de Operaciones, HealthPlus',
    company: 'HealthPlus Medical',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    text: 'El sistema que desarrollaron para nosotros revolucionó la atención al paciente. Ahora podemos atender 3x más pacientes con la misma calidad. Muy recomendados.'
  },
  {
    name: 'José Martinez',
    position: 'Gerente General, RetailCo',
    company: 'RetailCo Commerce',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    text: 'Los insights que obtenemos ahora con su plataforma de analytics son impresionantes. Aumentamos nuestras ventas en 25% en solo 6 meses. Excelente inversión.'
  }
]

export function Testimonials() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const yBackground = useTransform(scrollYProgress, [0, 1], [200, -200])
  const rotateBackground = useTransform(scrollYProgress, [0, 1], [0, 45])
  const scaleBackground = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8])
  const perspective = useTransform(scrollYProgress, [0, 1], [1000, 1500])

  return (
    <section ref={ref} className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Enhanced parallax background decoration */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y: yBackground, rotate: rotateBackground, scale: scaleBackground }}
      >
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
      
      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: yBackground, perspective }}
      >
        <div className="absolute top-20 left-1/4 w-8 h-8 border border-primary-400 transform rotate-45" />
        <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-purple-400 rounded-full" />
        <div className="absolute top-1/3 right-1/5 w-4 h-16 bg-gradient-to-b from-cyan-400 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lo que dicen nuestros <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor referencia. 
            Escucha lo que tienen que decir sobre nuestro trabajo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: index % 2 === 0 ? 2 : -2,
                scale: 1.02
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 
              }}
              viewport={{ once: true }}
              className="bg-dark-700 rounded-2xl p-8 border border-gray-600 hover:border-primary-500 transition-colors relative transform-gpu"
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-500 opacity-50" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              {/* Author info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                  <p className="text-sm text-primary-400">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
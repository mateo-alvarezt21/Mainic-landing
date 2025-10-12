'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ArrowRight, ArrowLeft, User, Mail, Phone, MessageSquare, DollarSign, Calendar, Send, Handshake, Sparkles, Rocket, ClipboardList, PartyPopper } from 'lucide-react'
import { Settings, Code, BarChart3, Gamepad2, Cpu, Lightbulb } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  projectIdea: string
  services: string[]
  budget: string
  timeline: string
}

const services = [
  { id: 'automation', icon: Settings, label: 'Automatización', color: 'from-blue-500 to-cyan-500' },
  { id: 'development', icon: Code, label: 'Desarrollo Web/Móvil', color: 'from-purple-500 to-pink-500' },
  { id: 'analytics', icon: BarChart3, label: 'Análisis de Datos', color: 'from-emerald-500 to-teal-500' },
  { id: 'gamedev', icon: Gamepad2, label: 'Videojuegos', color: 'from-orange-500 to-red-500' },
  { id: 'hardware', icon: Cpu, label: 'Hardware', color: 'from-indigo-500 to-blue-600' },
  { id: 'consulting', icon: Lightbulb, label: 'Consultoría', color: 'from-yellow-500 to-orange-500' },
]

const budgetRanges = [
  { id: 'small', label: 'Menos de $5M COP', value: '<5M' },
  { id: 'medium', label: '$5M - $20M COP', value: '5M-20M' },
  { id: 'large', label: '$20M - $50M COP', value: '20M-50M' },
  { id: 'enterprise', label: 'Más de $50M COP', value: '>50M' },
]

const timelines = [
  { id: 'urgent', label: 'Lo antes posible', value: 'urgent' },
  { id: 'month', label: 'En un mes', value: '1-month' },
  { id: 'quarter', label: 'En 3 meses', value: '3-months' },
  { id: 'flexible', label: 'Sin prisa', value: 'flexible' },
]

export function ContactFormStepper() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectIdea: '',
    services: [],
    budget: '',
    timeline: '',
  })

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleService = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.name.trim().length > 0
      case 1:
        return formData.email.trim().length > 0 && formData.phone.trim().length > 0
      case 2:
        return formData.projectIdea.trim().length > 10
      case 3:
        return formData.services.length > 0
      case 4:
        return true // Budget and timeline are optional
      default:
        return false
    }
  }

  const steps = [
    {
      icon: Sparkles,
      title: '¡Hola!',
      subtitle: '¿Cómo te llamas?',
      content: (
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-tertiary)' }} />
            <input
              type="text"
              placeholder="Tu nombre completo"
              value={formData.name}
              onChange={(e) => updateFormData('name', e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)'
              }}
            />
          </div>
        </div>
      )
    },
    {
      icon: Handshake,
      title: `Encantado, ${formData.name}!`,
      subtitle: '¿Cómo podemos contactarte?',
      content: (
        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-tertiary)' }} />
            <input
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)'
              }}
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-tertiary)' }} />
            <input
              type="tel"
              placeholder="+57 300 123 4567"
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)'
              }}
            />
          </div>
        </div>
      )
    },
    {
      icon: Lightbulb,
      title: 'Cuéntanos tu idea',
      subtitle: '¿Qué proyecto tienes en mente?',
      content: (
        <div className="space-y-4">
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5" style={{ color: 'var(--text-tertiary)' }} />
            <textarea
              placeholder="Describe tu proyecto o la idea que quieres desarrollar..."
              value={formData.projectIdea}
              onChange={(e) => updateFormData('projectIdea', e.target.value)}
              rows={6}
              className="w-full pl-12 pr-4 py-4 rounded-xl border text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)'
              }}
            />
          </div>
          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
            {formData.projectIdea.length} / 500 caracteres
          </p>
        </div>
      )
    },
    {
      icon: Rocket,
      title: '¿En qué te podemos ayudar?',
      subtitle: 'Selecciona uno o varios servicios',
      content: (
        <div className="grid grid-cols-2 gap-3">
          {services.map((service) => {
            const Icon = service.icon
            const isSelected = formData.services.includes(service.id)
            return (
              <motion.button
                key={service.id}
                type="button"
                onClick={() => toggleService(service.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  isSelected ? 'border-primary-500' : ''
                }`}
                style={{
                  backgroundColor: isSelected ? 'rgba(var(--primary-rgb, 17, 147, 212), 0.1)' : 'var(--bg-primary)',
                  borderColor: isSelected ? '#1193d4' : 'var(--border-primary)'
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-3 mx-auto`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {service.label}
                </p>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-2"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-500 mx-auto" />
                  </motion.div>
                )}
              </motion.button>
            )
          })}
        </div>
      )
    },
    {
      icon: ClipboardList,
      title: 'Últimos detalles',
      subtitle: 'Esto nos ayuda a darte una mejor respuesta (opcional)',
      content: (
        <div className="space-y-6">
          {/* Budget */}
          <div>
            <label className="flex items-center gap-2 mb-3 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              <DollarSign className="w-4 h-4" />
              Presupuesto aproximado
            </label>
            <div className="grid grid-cols-2 gap-3">
              {budgetRanges.map((budget) => (
                <button
                  key={budget.id}
                  type="button"
                  onClick={() => updateFormData('budget', budget.value)}
                  className={`p-3 rounded-lg border transition-all text-sm ${
                    formData.budget === budget.value ? 'border-primary-500' : ''
                  }`}
                  style={{
                    backgroundColor: formData.budget === budget.value ? 'rgba(var(--primary-rgb, 17, 147, 212), 0.1)' : 'var(--bg-primary)',
                    borderColor: formData.budget === budget.value ? '#1193d4' : 'var(--border-primary)',
                    color: 'var(--text-primary)'
                  }}
                >
                  {budget.label}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label className="flex items-center gap-2 mb-3 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              <Calendar className="w-4 h-4" />
              ¿Cuándo quieres empezar?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {timelines.map((timeline) => (
                <button
                  key={timeline.id}
                  type="button"
                  onClick={() => updateFormData('timeline', timeline.value)}
                  className={`p-3 rounded-lg border transition-all text-sm ${
                    formData.timeline === timeline.value ? 'border-primary-500' : ''
                  }`}
                  style={{
                    backgroundColor: formData.timeline === timeline.value ? 'rgba(var(--primary-rgb, 17, 147, 212), 0.1)' : 'var(--bg-primary)',
                    borderColor: formData.timeline === timeline.value ? '#1193d4' : 'var(--border-primary)',
                    color: 'var(--text-primary)'
                  }}
                >
                  {timeline.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )
    },
  ]

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl p-8 text-center border"
        style={{
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border-success, #10b981)'
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <CheckCircle className="w-20 h-20 text-emerald-500 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-bold mb-3 flex items-center justify-center gap-2" style={{ color: 'var(--text-primary)' }}>
          ¡Mensaje Enviado!
          <PartyPopper className="w-8 h-8 text-primary-500" />
        </h3>
        <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
          Gracias {formData.name}, hemos recibido tu solicitud.
        </p>
        <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
          Nuestro equipo revisará tu proyecto y te contactaremos en menos de 24 horas.
        </p>
      </motion.div>
    )
  }

  const currentStepData = steps[currentStep]
  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="rounded-2xl p-6 md:p-8 border" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-primary)' }}>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
            Paso {currentStep + 1} de {steps.length}
          </span>
          <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-2">
            {currentStepData.icon && (
              <currentStepData.icon className="w-7 h-7 text-primary-500 flex-shrink-0" />
            )}
            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
              {currentStepData.title}
            </h3>
          </div>
          <p className="text-base md:text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            {currentStepData.subtitle}
          </p>

          <div className="mb-8">
            {currentStepData.content}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex gap-3">
        {currentStep > 0 && (
          <motion.button
            type="button"
            onClick={handleBack}
            className="px-6 py-3 rounded-xl border font-semibold transition-all flex items-center gap-2"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-primary)',
              color: 'var(--text-primary)'
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </motion.button>
        )}

        <motion.button
          type="button"
          onClick={currentStep === steps.length - 1 ? handleSubmit : handleNext}
          disabled={!canProceed() || isSubmitting}
          className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
            !canProceed() ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          style={{
            backgroundColor: canProceed() ? '#1193d4' : 'var(--bg-secondary)',
            color: canProceed() ? '#ffffff' : 'var(--text-tertiary)'
          }}
          whileHover={canProceed() ? { scale: 1.02 } : {}}
          whileTap={canProceed() ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Enviando...
            </>
          ) : currentStep === steps.length - 1 ? (
            <>
              <Send className="w-4 h-4" />
              Enviar Solicitud
            </>
          ) : (
            <>
              Continuar
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </div>
    </div>
  )
}

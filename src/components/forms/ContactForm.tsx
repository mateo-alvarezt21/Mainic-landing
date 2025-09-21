'use client'

import { motion } from 'framer-motion'
import { useContactForm } from '@/hooks/useContactForm'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { CheckCircle, Send } from 'lucide-react'

export function ContactForm() {
  const { form, onSubmit, isSubmitting, isSuccess } = useContactForm()

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-dark-700 rounded-2xl p-8 text-center border border-green-500/30"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
        <p className="text-gray-400">
          Gracias por contactarnos. Nos pondremos en contacto contigo muy pronto.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onSubmit={form.handleSubmit(onSubmit)}
      className="bg-dark-700 rounded-2xl p-8 space-y-6 border border-gray-600"
    >
      <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input
            label="Nombre completo"
            placeholder="Tu nombre"
            {...form.register('name')}
            error={form.formState.errors.name?.message}
          />
        </div>
        <div>
          <Input
            label="Correo electrónico"
            type="email"
            placeholder="tu@empresa.com"
            {...form.register('email')}
            error={form.formState.errors.email?.message}
          />
        </div>
      </div>

      <Input
        label="Empresa (opcional)"
        placeholder="Nombre de tu empresa"
        {...form.register('company')}
      />

      <Textarea
        label="Mensaje"
        placeholder="Cuéntanos sobre tu proyecto..."
        rows={5}
        {...form.register('message')}
        error={form.formState.errors.message?.message}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            Enviando...
          </div>
        ) : (
          <div className="flex items-center">
            <Send className="w-4 h-4 mr-2" />
            Enviar Mensaje
          </div>
        )}
      </Button>
    </motion.form>
  )
}
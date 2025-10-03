import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'gradient' | 'glass' | 'outline'
  padding?: 'sm' | 'md' | 'lg'
}

export function Card({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'md'
}: CardProps) {
  const baseClasses = 'rounded-xl transition-all duration-300'
  
  const variantClasses = {
    default: 'bg-dark-800 border border-gray-700',
    gradient: 'bg-gradient-to-br from-dark-800 to-dark-900 border border-gray-600',
    glass: 'bg-dark-800/50 backdrop-blur-xl border border-gray-600/50',
    outline: 'bg-transparent border-2 border-gray-600 hover:border-primary-500'
  }

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  return (
    <div className={cn(
      baseClasses,
      variantClasses[variant],
      paddingClasses[padding],
      className
    )}>
      {children}
    </div>
  )
}

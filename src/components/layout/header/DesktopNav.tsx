import { memo } from 'react'
import { motion } from 'framer-motion'
import type { NavItem } from '@/types/navigation'

interface NavButtonProps {
  label: string
  onClick: () => void
  index: number
}

const NavButton = memo(({ label, onClick, index }: NavButtonProps) => {
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: -20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  }

  return (
    <motion.div
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={onClick}
        className="relative font-medium group overflow-hidden"
        style={{ color: 'var(--text-primary)' }}
      >
        <span className="relative z-10 inline-block px-1 transition-all duration-300 group-hover:text-primary-500 dark:group-hover:text-primary-400">
          {label}
        </span>
        
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600"
          initial={{ width: '0%' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
        
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </button>
    </motion.div>
  )
})

NavButton.displayName = 'NavButton'

interface DesktopNavProps {
  navItems: NavItem[]
  onNavClick: (href: string) => void
}

export const DesktopNav = memo(({ navItems, onNavClick }: DesktopNavProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <motion.div
      className="hidden lg:flex items-center space-x-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {navItems.map((item, index) => (
        <NavButton
          key={item.href}
          label={item.label}
          onClick={() => onNavClick(item.href)}
          index={index}
        />
      ))}
      
    </motion.div>
  )
})

DesktopNav.displayName = 'DesktopNav'
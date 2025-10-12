import { memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { NavItem } from '@/types/navigation'

interface MobileMenuItemProps {
  label: string
  onClick: () => void
  index: number
}

const MobileMenuItem = memo(({ label, onClick, index }: MobileMenuItemProps) => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: index * 0.08,
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.div
      variants={itemVariants}
      whileTap={{ scale: 0.97 }}
    >
      <button
        onClick={onClick}
        className="group relative block w-full text-left font-medium py-3 px-4 rounded-lg overflow-hidden border hover:border-primary-500/30 transition-colors duration-300"
        style={{
          color: 'var(--text-primary)',
          borderColor: 'var(--border-primary)'
        }}
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-500">
          {label}
        </span>

        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--bg-tertiary)' }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600"
          initial={{ width: '0%' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </button>
    </motion.div>
  )
})

MobileMenuItem.displayName = 'MobileMenuItem'

interface MobileMenuProps {
  isOpen: boolean
  navItems: NavItem[]
  onNavClick: (href: string) => void
}

export const MobileMenu = memo(({ isOpen, navItems, onNavClick }: MobileMenuProps) => {
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: {
        duration: 0.2,
        ease: 'easeIn' as const
      }
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  }


  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 backdrop-blur-sm z-40 lg:hidden"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => onNavClick('')}
          />

          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-[73px] left-0 right-0 z-50 lg:hidden backdrop-blur-xl border-b border-primary-500/20 shadow-2xl shadow-primary-500/5"
            style={{ backgroundColor: 'var(--bg-secondary)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-transparent pointer-events-none" />

            <div className="relative container mx-auto py-6 px-4 sm:px-6">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <MobileMenuItem
                    key={item.href}
                    label={item.label}
                    onClick={() => onNavClick(item.href)}
                    index={index}
                  />
                ))}

              </div>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
})

MobileMenu.displayName = 'MobileMenu'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui'
import type { NavItem } from '@/types/navigation'

interface MobileMenuProps {
  isOpen: boolean
  navItems: NavItem[]
  onNavClick: (href: string) => void
}

const menuVariants = {
  hidden: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.2 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: index * 0.1 }
  })
}

export function MobileMenu({ isOpen, navItems, onNavClick }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="lg:hidden bg-dark-900/98 backdrop-blur-xl border-t border-gray-700/50 shadow-2xl"
        >
          <div className="container mx-auto py-6 px-4 sm:px-6">
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => onNavClick(item.href)}
                  className="block w-full text-left text-white hover:text-primary-400 transition-all duration-200 font-medium py-3 px-4 rounded-lg hover:bg-dark-700/50 border border-transparent hover:border-primary-500/30"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                custom={navItems.length}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="pt-4"
              >
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => onNavClick('contact')}
                >
                  Consulta Gratuita
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

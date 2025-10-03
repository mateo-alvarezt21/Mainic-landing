import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface MobileMenuToggleProps {
  isOpen: boolean
  onToggle: () => void
}

export function MobileMenuToggle({ isOpen, onToggle }: MobileMenuToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="lg:hidden p-2 bg-dark-700/50 rounded-lg text-white hover:text-primary-400 hover:bg-dark-600/50 transition-all duration-200 backdrop-blur-sm border border-gray-600/30"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </motion.div>
    </motion.button>
  )
}

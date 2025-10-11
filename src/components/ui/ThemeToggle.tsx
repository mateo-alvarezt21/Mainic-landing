'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const handleToggle = () => {
    toggleTheme()
  }
  
  if (!mounted) {
    // Return null during SSR since we're already handling it in ClientHeader
    return null
  }

  return (
    <motion.button
      onClick={handleToggle}
      className="relative p-2 rounded-xl bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-600/50 hover:bg-gray-300/80 dark:hover:bg-gray-700/80 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Current: ${theme} | Click to switch`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : 180,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-5 h-5 text-amber-500" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : -180,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-5 h-5 text-blue-400" />
        </motion.div>
      </div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0"
        animate={{
          opacity: theme === 'light' ? [0, 0.5, 0] : [0, 0.3, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: theme === 'light' 
            ? 'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
        }}
      />
    </motion.button>
  )
}
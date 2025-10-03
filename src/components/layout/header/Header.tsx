'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useScrollState, useMobileMenu, useNavigation } from '@/hooks'
import { Logo } from '@/components/layout/header/Logo'
import { DesktopNav } from '@/components/layout/header/DesktopNav'
import { MobileMenu } from '@/components/layout/header/MobileMenu'
import { MobileMenuToggle } from '@/components/layout/header/MobileMenuToggle'

const headerVariants = {
  hidden: { 
    y: -100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { 
    y: -20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99] as const
    }
  }
}

const logoVariants = {
  hidden: { 
    x: -30,
    opacity: 0,
    scale: 0.8
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const
    }
  }
}

const navVariants = {
  hidden: { 
    x: 30,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const
    }
  }
}

const backgroundVariants = {
  transparent: {
    backgroundColor: 'rgba(17, 22, 24, 0)',
    backdropFilter: 'blur(0px)',
    boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)'
  },
  scrolled: {
    backgroundColor: 'rgba(17, 22, 24, 0.95)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  }
}

export const Header = memo(() => {
  const isScrolled = useScrollState({ threshold: 50 })
  const { isOpen: isMobileMenuOpen, toggleMenu, closeMenu } = useMobileMenu()
  const { navItems, handleNavClick } = useNavigation()

  const handleNavClickWithClose = (href: string) => {
    handleNavClick(href)
    closeMenu()
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="fixed top-0 left-0 w-full z-50"
    >
      <motion.div
        animate={isScrolled ? 'scrolled' : 'transparent'}
        variants={backgroundVariants}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0"
          animate={isScrolled ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        <nav className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 relative z-10">
          <motion.div variants={logoVariants}>
            <Logo />
          </motion.div>
          
          <motion.div variants={navVariants}>
            <DesktopNav 
              navItems={navItems} 
              onNavClick={handleNavClick} 
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <MobileMenuToggle 
              isOpen={isMobileMenuOpen} 
              onToggle={toggleMenu} 
            />
          </motion.div>
        </nav>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isScrolled ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </motion.div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        navItems={navItems}
        onNavClick={handleNavClickWithClose}
      />
    </motion.header>
  )
})

Header.displayName = 'Header'
'use client'

import { cn } from '@/lib/utils'
import { useScrollState, useMobileMenu, useNavigation } from '@/hooks'
import { Logo } from '@/components/layout/header/Logo'
import { DesktopNav } from '@/components/layout/header/DesktopNav'
import { MobileMenu } from '@/components/layout/header/MobileMenu'
import { MobileMenuToggle } from '@/components/layout/header/MobileMenuToggle'

export function Header() {
  const isScrolled = useScrollState({ threshold: 50 })
  const { isOpen: isMobileMenuOpen, toggleMenu, closeMenu } = useMobileMenu()
  const { navItems, handleNavClick } = useNavigation()

  const handleNavClickWithClose = (href: string) => {
    handleNavClick(href)
    closeMenu()
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-dark-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        <Logo />
        
        <DesktopNav 
          navItems={navItems} 
          onNavClick={handleNavClick} 
        />
        
        <MobileMenuToggle 
          isOpen={isMobileMenuOpen} 
          onToggle={toggleMenu} 
        />
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        navItems={navItems}
        onNavClick={handleNavClickWithClose}
      />
    </header>
  )
}
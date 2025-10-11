'use client'

import { cn } from '@/lib/utils'
import { useScrollState, useMobileMenu, useNavigation } from '@/hooks'
import { Logo } from '@/components/layout/header/Logo'
import { DesktopNav } from '@/components/layout/header/DesktopNav'
import { MobileMenu } from '@/components/layout/header/MobileMenu'
import { MobileMenuToggle } from '@/components/layout/header/MobileMenuToggle'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

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
          ? 'backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      )}
      style={{
        backgroundColor: isScrolled ? 'rgba(var(--bg-primary-rgb), 0.95)' : 'transparent'
      }}
    >
      <nav className="container mx-auto flex items-center justify-between h-20 px-4 sm:px-6">
        <Logo />
        
        <div className="flex items-center space-x-4">
          <DesktopNav 
            navItems={navItems} 
            onNavClick={handleNavClick} 
          />
          
          <ThemeToggle />
          
          <MobileMenuToggle 
            isOpen={isMobileMenuOpen} 
            onToggle={toggleMenu} 
          />
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        navItems={navItems}
        onNavClick={handleNavClickWithClose}
      />
    </header>
  )
}
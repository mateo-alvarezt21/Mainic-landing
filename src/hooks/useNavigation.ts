import { useMemo } from 'react'
import { scrollToSection } from '@/lib/utils'
import type { NavItem } from '@/types/navigation'

export function useNavigation() {
  const navItems: NavItem[] = useMemo(() => [
    { label: 'Servicios', href: 'services' },
    { label: 'Casos de Éxito', href: 'cases' },
    { label: 'Contacto', href: 'contact' },
  ], [])

  const handleNavClick = (href: string) => {
    scrollToSection(href)
  }

  return {
    navItems,
    handleNavClick,
  }
}

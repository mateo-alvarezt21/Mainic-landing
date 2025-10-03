import { Button } from '@/components/ui'
import type { NavItem } from '@/types/navigation'

interface DesktopNavProps {
  navItems: NavItem[]
  onNavClick: (href: string) => void
}

export function DesktopNav({ navItems, onNavClick }: DesktopNavProps) {
  return (
    <div className="hidden lg:flex items-center space-x-8">
      {navItems.map((item) => (
        <button
          key={item.href}
          onClick={() => onNavClick(item.href)}
          className="text-white hover:text-primary-400 transition-colors duration-200 font-medium relative group"
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-200 group-hover:w-full" />
        </button>
      ))}
      <Button
        variant="primary"
        size="sm"
        onClick={() => onNavClick('contact')}
        className="ml-2"
      >
        Consulta Gratuita
      </Button>
    </div>
  )
}

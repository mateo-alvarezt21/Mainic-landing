'use client'

import { useEffect, useState } from 'react'
import { Header } from './Header'

export function ClientHeader() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder during SSR to avoid hydration mismatch
    return (
      <header className="fixed top-0 left-0 w-full z-50 h-20 bg-transparent">
        <nav className="container mx-auto flex items-center justify-between h-20 px-4 sm:px-6">
          <div className="w-28 h-12 bg-gray-200 animate-pulse rounded" />
          <div className="hidden lg:flex space-x-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-20 h-6 bg-gray-200 animate-pulse rounded" />
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-xl" />
            <div className="lg:hidden w-10 h-10 bg-gray-200 animate-pulse rounded-lg" />
          </div>
        </nav>
      </header>
    )
  }

  return <Header />
}
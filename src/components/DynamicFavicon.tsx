'use client'

import { useFavicon } from '@/hooks/useFavicon'

export function DynamicFavicon() {
  useFavicon()
  return null // This component doesn't render anything
}
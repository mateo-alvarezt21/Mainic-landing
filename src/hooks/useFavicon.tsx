'use client'

import { useEffect, useState } from 'react'

interface FaviconData {
  url: string
}

interface CompanyData {
  id: number
  favicon: FaviconData
}

const fetchFaviconUrl = async (): Promise<string | null> => {
  try {
    const response = await fetch('https://strapi-core.mainics.com/empresa-data')
    const data: CompanyData[] = await response.json()
    if (data.length > 0 && data[0].favicon?.url) {
      return `https://strapi-core.mainics.com${data[0].favicon.url}`
    }
    return null
  } catch (error) {
    console.error('Error fetching favicon:', error)
    return null
  }
}

export const useFavicon = () => {
  const [faviconUrl, setFaviconUrl] = useState<string | null>(null)

  useEffect(() => {
    const loadFavicon = async () => {
      try {
        const url = await fetchFaviconUrl()
        console.log('Favicon URL loaded:', url)
        if (url) {
          setFaviconUrl(url)
          
          // Remove all existing favicons first
          const existingFavicons = document.querySelectorAll("link[rel*='icon']")
          existingFavicons.forEach(favicon => favicon.remove())
          
          // Add cache-busting parameter
          const cacheBustUrl = `${url}?t=${Date.now()}`
          
          // Add multiple favicon sizes for better visibility
          const sizes = ['16x16', '32x32', '48x48', '64x64', '96x96', '128x128']
          
          sizes.forEach(size => {
            const link = document.createElement('link')
            link.rel = 'icon'
            link.href = cacheBustUrl
            link.type = 'image/png'
            link.sizes = size
            document.head.appendChild(link)
          })
          
          // Add as shortcut icon (legacy)
          const shortcutLink = document.createElement('link')
          shortcutLink.rel = 'shortcut icon'
          shortcutLink.href = cacheBustUrl
          shortcutLink.type = 'image/png'
          document.head.appendChild(shortcutLink)
          
          // Add apple-touch-icon for better mobile support
          const appleLink = document.createElement('link')
          appleLink.rel = 'apple-touch-icon'
          appleLink.href = cacheBustUrl
          appleLink.sizes = '180x180'
          document.head.appendChild(appleLink)
          
          // Force browser to reload favicon
          setTimeout(() => {
            const links = document.querySelectorAll("link[rel*='icon']")
            links.forEach(link => {
              const href = (link as HTMLLinkElement).href
              ;(link as HTMLLinkElement).href = href
            })
          }, 100)
          
          console.log('Favicon updated successfully with URL:', cacheBustUrl)
        }
      } catch (error) {
        console.error('Error loading favicon:', error)
      }
    }
    
    loadFavicon()
  }, [])

  return faviconUrl
}
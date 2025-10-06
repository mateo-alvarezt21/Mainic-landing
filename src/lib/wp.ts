const WP_DOMAIN = process.env.WP_DOMAIN || 'wordpress.mainics.com'
const API_URL = `https://${WP_DOMAIN}/wp-json/wp/v2`

// Tipos para WordPress API
export interface WPPage {
  id: number
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  featured_media: number
  acf?: Record<string, unknown>
  date: string
  modified: string
  status: string
}

export interface WPPost {
  id: number
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  featured_media: number
  categories: number[]
  tags: number[]
  acf?: Record<string, unknown>
  date: string
  author: number
  status: string
  _embedded?: {
    author?: Array<{
      id: number
      name: string
      slug: string
    }>
    'wp:featuredmedia'?: WPMedia[]
    'wp:term'?: Array<Array<{
      id: number
      name: string
      slug: string
    }>>
  }
}

export interface WPMedia {
  id: number
  source_url: string
  alt_text: string
  media_details: {
    width: number
    height: number
    sizes: Record<string, {
      source_url: string
      width: number
      height: number
    }>
  }
}

export interface WPCategory {
  id: number
  name: string
  slug: string
  description: string
  count: number
}

// Función principal para obtener páginas por slug
export const getPageInfo = async (slug: string): Promise<WPPage | null> => {
  try {
    const response = await fetch(`${API_URL}/pages?slug=${slug}&_embed=true`, {
      next: { revalidate: 300 } // Cache por 5 minutos
    })
    
    if (!response.ok) {
      throw new Error(`Error fetching page: ${response.status}`)
    }
    
    const pages = await response.json()
    
    if (!pages || pages.length === 0) {
      return null
    }
    
    return pages[0] // WordPress devuelve array, tomamos el primero
  } catch (error) {
    console.error('Error fetching page info:', error)
    return null
  }
}

// Obtener posts por categoría
export const getPostsByCategory = async (categorySlug: string, limit = 10): Promise<WPPost[]> => {
  try {
    const response = await fetch(
      `${API_URL}/posts?categories_slug=${categorySlug}&per_page=${limit}&_embed=true`,
      {
        next: { revalidate: 180 } // Cache por 3 minutos
      }
    )
    
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching posts by category:', error)
    return []
  }
}

// Obtener post individual por slug
export const getPostBySlug = async (slug: string): Promise<WPPost | null> => {
  try {
    const response = await fetch(`${API_URL}/posts?slug=${slug}&_embed=true`, {
      next: { revalidate: 300 }
    })
    
    if (!response.ok) {
      throw new Error(`Error fetching post: ${response.status}`)
    }
    
    const posts = await response.json()
    
    if (!posts || posts.length === 0) {
      return null
    }
    
    return posts[0]
  } catch (error) {
    console.error('Error fetching post by slug:', error)
    return null
  }
}

// Obtener posts recientes
export const getRecentPosts = async (limit = 5): Promise<WPPost[]> => {
  try {
    const response = await fetch(
      `${API_URL}/posts?per_page=${limit}&_embed=true&orderby=date&order=desc`,
      {
        next: { revalidate: 300 }
      }
    )
    
    if (!response.ok) {
      throw new Error(`Error fetching recent posts: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching recent posts:', error)
    return []
  }
}

// Obtener categorías
export const getCategories = async (): Promise<WPCategory[]> => {
  try {
    const response = await fetch(`${API_URL}/categories?per_page=100`, {
      next: { revalidate: 3600 } // Cache por 1 hora
    })
    
    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

// Obtener imagen featured
export const getFeaturedImage = async (mediaId: number): Promise<WPMedia | null> => {
  if (!mediaId) return null
  
  try {
    const response = await fetch(`${API_URL}/media/${mediaId}`, {
      next: { revalidate: 3600 }
    })
    
    if (!response.ok) {
      throw new Error(`Error fetching media: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching featured image:', error)
    return null
  }
}

// Buscar contenido
export const searchContent = async (query: string, type: 'posts' | 'pages' = 'posts'): Promise<WPPost[] | WPPage[]> => {
  try {
    const response = await fetch(
      `${API_URL}/${type}?search=${encodeURIComponent(query)}&per_page=20&_embed=true`,
      {
        next: { revalidate: 60 } // Cache corto para búsquedas
      }
    )
    
    if (!response.ok) {
      throw new Error(`Error searching content: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error searching content:', error)
    return []
  }
}

// Funciones específicas para el sitio
export const getServices = async (): Promise<WPPost[]> => {
  return getPostsByCategory('servicios', 10)
}

export const getTestimonials = async (): Promise<WPPost[]> => {
  return getPostsByCategory('testimonios', 10)
}

export const getCaseStudies = async (): Promise<WPPost[]> => {
  return getPostsByCategory('casos-estudio', 10)
}

export const getTeamMembers = async (): Promise<WPPost[]> => {
  return getPostsByCategory('equipo', 20)
}

// Helper para limpiar contenido HTML
export const cleanHtmlContent = (htmlContent: string): string => {
  return htmlContent
    .replace(/<[^>]*>/g, '') // Eliminar tags HTML
    .replace(/&nbsp;/g, ' ') // Reemplazar espacios no rompibles
    .replace(/&amp;/g, '&')  // Decodificar &
    .replace(/&lt;/g, '<')   // Decodificar <
    .replace(/&gt;/g, '>')   // Decodificar >
    .replace(/&quot;/g, '"') // Decodificar "
    .trim()
}

// Helper para decodificar entidades HTML
export const decodeHtmlEntities = (text: string): string => {
  return text
    .replace(/&#8211;/g, '–')  // em dash
    .replace(/&#8212;/g, '—')  // en dash  
    .replace(/&#8217;/g, "'")  // right single quotation mark
    .replace(/&#8216;/g, "'")  // left single quotation mark
    .replace(/&#8220;/g, '"')  // left double quotation mark
    .replace(/&#8221;/g, '"')  // right double quotation mark
    .replace(/&amp;/g, '&')   // ampersand
    .replace(/&nbsp;/g, ' ')   // non-breaking space
    .replace(/&lt;/g, '<')    // less than
    .replace(/&gt;/g, '>')    // greater than
    .replace(/&quot;/g, '"')  // quotation mark
    .replace(/&#039;/g, "'")  // apostrophe
    .replace(/&#38;/g, '&')   // another ampersand encoding
    .trim()
}

// Helper para generar URL de imagen responsiva
export const getResponsiveImageUrl = (media: WPMedia, size: 'thumbnail' | 'medium' | 'large' | 'full' = 'medium'): string => {
  if (!media?.media_details?.sizes?.[size]) {
    return media?.source_url || ''
  }
  
  return media.media_details.sizes[size].source_url
}

// Health check para verificar conexión con WordPress
export const checkWPConnection = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/posts?per_page=1`, {
      method: 'HEAD',
      signal: AbortSignal.timeout(5000)
    })
    
    return response.ok
  } catch {
    return false
  }
}
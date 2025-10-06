// Tipos adicionales para WordPress API extendida
import type { WPPost, WPPage, WPMedia, WPCategory } from '@/lib/wp'

export interface WPAuthor {
  id: number
  name: string
  slug: string
  avatar_urls: {
    '24': string
    '48': string
    '96': string
  }
  description: string
  url: string
}

export interface WPEmbedded {
  author?: WPAuthor[]
  'wp:featuredmedia'?: WPMedia[]
  'wp:term'?: Array<WPCategory[] | WPTag[]>
}

export interface WPTag {
  id: number
  name: string
  slug: string
  description: string
  count: number
}

export interface WPResponse<T> {
  data: T[]
  total: number
  totalPages: number
  page: number
  perPage: number
}

// Tipos específicos para Mainics
export interface MainicsService extends Omit<WPPost, 'acf'> {
  acf?: {
    icono?: string
    precio?: string
    duracion?: string
    incluye?: string[]
    beneficios?: string[]
    tecnologias?: string[]
  }
}

export interface MainicsTestimonial extends Omit<WPPost, 'acf'> {
  acf?: {
    cliente_nombre?: string
    cargo?: string
    empresa?: string
    rating?: number
    proyecto?: string
    resultado?: string
    foto_cliente?: WPMedia
  }
}

export interface MainicsCaseStudy extends Omit<WPPost, 'acf'> {
  acf?: {
    cliente?: string
    industria?: string
    duracion_proyecto?: string
    tecnologias_usadas?: string[]
    problemas_resueltos?: string[]
    resultados_obtenidos?: string[]
    metricas_antes?: {
      tiempo?: string
      costo?: string
      eficiencia?: string
    }
    metricas_despues?: {
      tiempo?: string
      costo?: string
      eficiencia?: string
    }
    galeria_imagenes?: WPMedia[]
  }
}

export interface MainicsTeamMember extends Omit<WPPost, 'acf'> {
  acf?: {
    cargo?: string
    especialidades?: string[]
    experiencia_anos?: number
    linkedin?: string
    github?: string
    email?: string
    bio_corta?: string
    foto_perfil?: WPMedia
  }
}

// Tipos para contenido dinámico de la landing
export interface LandingPageData {
  hero?: {
    titulo?: string
    subtitulo?: string
    cta_primario?: string
    cta_secundario?: string
    estadisticas?: Array<{
      numero: string
      label: string
    }>
  }
  about?: {
    titulo?: string
    descripcion?: string
    mision?: string
    vision?: string
    valores?: Array<{
      titulo: string
      descripcion: string
      icono: string
    }>
  }
  contacto?: {
    titulo?: string
    subtitulo?: string
    direccion?: string
    telefono?: string
    email?: string
    horarios?: string
  }
}

export interface WPPageWithACF extends Omit<WPPage, 'acf'> {
  acf?: LandingPageData
}
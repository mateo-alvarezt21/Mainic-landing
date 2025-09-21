export interface Service {
    id: string
    title: string
    description: string
    icon: string
    features: string[]
  }
  
  export interface CaseStudy {
    id: string
    title: string
    company: string
    description: string
    image: string
    results: string[]
    technologies: string[]
  }
  
  export interface ContactFormData {
    name: string
    email: string
    company?: string
    message: string
  }
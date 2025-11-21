export interface Service {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
  color: 'blue' | 'purple' | 'orange' | 'green'
  link: string
}

export interface Product {
  id: string
  name: string
  category: 'phone' | 'laptop' | 'printer' | 'accessory'
  condition: 'new' | 'used' | 'refurbished'
  price: number
  image: string
  specs: string[]
  inStock: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  avatar: string
  rating: number
  text: string
  date: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  certifications: string[]
  expertise: string[]
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  date: string
  readTime: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  serviceType: string
  deviceModel?: string
  message: string
}

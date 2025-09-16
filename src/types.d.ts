export type WpPost = {
  id?: number
  featuredImageUrl: string
  title: string
  content: string
  slug: string
  author: string
  authorAvatar: string,
  readAlsoPosts?: WpPost[],
  date: string
}

export type ServiceType = 'web-development' | 'ai-integration'

export type Project = {
  name: string
  description: string
  type: ServiceType,
  featuredImageUrl: string,
  href: string
}
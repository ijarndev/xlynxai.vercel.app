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
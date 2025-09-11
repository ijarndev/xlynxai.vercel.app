import WPAPI from "wpapi";
import type { WpPost } from "../types";

const wp = new WPAPI({
  endpoint: 'https://wordpress.xlynxai.com/wp-json'
})

wp.blogPost = wp.registerRoute("wp/v2", "/blog-post/(?P<id>\\d+)?");

export async function getAllPosts () {
  const posts = await wp.blogPost().embed().get()
  
  const serializedPosts = await Promise.all(
    posts.map(async (post: any) => {
      // pick a random bunch of posts to recommend
      const readAlsoPosts = posts.filter((p: WpPost) => p.slug != post.slug).slice(0, 6)
      const serializedReadAlsoPosts = readAlsoPosts.map((readAlsoPost: any) => ({
        featuredImageUrl: readAlsoPost._embedded["wp:featuredmedia"][0].source_url,
        slug: readAlsoPost.slug,
        title: readAlsoPost.title.rendered.length <= 35 ? readAlsoPost.title.rendered.substring(0, 35) : `${readAlsoPost.title.rendered.substring(0, 35)}...` 
      }))
      
      
      const serializedPost: WpPost = {
        featuredImageUrl: post._embedded["wp:featuredmedia"][0].source_url,
        title: post.title.rendered,
        content: post.acf.content,
        slug: post.slug,
        author: post._embedded.author[0].name,
        authorAvatar: post._embedded.author[0].avatar_urls["48"],
        readAlsoPosts: serializedReadAlsoPosts,
        date: post.date
      }
    
      return serializedPost
    })
  )

  return serializedPosts
}

export async function getRecentPosts () {
  const posts = await wp.blogPost()
    .perPage(20)
    .order('desc')
    .orderby('date')
    .embed()
    .get()

  const serializedPosts: WpPost[] = posts.map((post: any) => ({
    featuredImageUrl: post._embedded["wp:featuredmedia"][0].source_url,
    title: post.title.rendered,
    content: post.acf.content,
    slug: post.slug,
    author: post._embedded.author[0].name,
    authorAvatar: post._embedded.author[0].avatar_urls["48"],
    date: new Date(posts[0].date).toLocaleDateString()
  }))
  
  return serializedPosts
}
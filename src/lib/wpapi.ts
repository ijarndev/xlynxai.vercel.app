import WPAPI from "wpapi";
import type { WpPost } from "../types";

const wp = new WPAPI({
  endpoint: 'https://wordpress.xlynxai.com/wp-json'
})

wp.blogPost = wp.registerRoute("wp/v2", "/blog-post/(?P<id>\\d+)?");

export async function getAllPosts () {
  const posts = await wp.blogPost().embed().get()
  console.log(posts[0]._embedded.author[0])
  
  const serializedPosts = await Promise.all(
    posts.map(async (post: any) => {
      const serializedPost: WpPost = {
        featuredImageUrl: post._embedded["wp:featuredmedia"][0].source_url,
        title: post.title.rendered,
        content: post.acf.content,
        slug: post.slug,
        author: post._embedded.author[0].name,
        authorAvatar: post._embedded.author[0].avatar_urls["48"],
      }
      
      return serializedPost
    })
  )

  return serializedPosts
}
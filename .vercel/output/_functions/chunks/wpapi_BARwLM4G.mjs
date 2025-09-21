import WPAPI from 'wpapi';

const wp = new WPAPI({
  endpoint: "https://wordpress.xlynxai.com/wp-json"
});
wp.blogPost = wp.registerRoute("wp/v2", "/blog-post/(?P<id>\\d+)?");
wp.project = wp.registerRoute("wp/v2", "/project/(?P<id>\\d+)?");
wp.review = wp.registerRoute("wp/v2", "/review/(?P<id>\\d+)?");
async function getAllPosts() {
  const posts = await wp.blogPost().embed().get();
  try {
    const serializedPosts = await Promise.all(
      posts.map(async (post) => {
        const readAlsoPosts = posts.filter((p) => p.slug != post.slug).slice(0, 6);
        const serializedReadAlsoPosts = readAlsoPosts.map((readAlsoPost) => ({
          featuredImageUrl: readAlsoPost._embedded["wp:featuredmedia"][0].source_url,
          slug: readAlsoPost.slug,
          title: readAlsoPost.title.rendered.length <= 35 ? readAlsoPost.title.rendered.substring(0, 35) : `${readAlsoPost.title.rendered.substring(0, 35)}...`
        }));
        const serializedPost = {
          featuredImageUrl: post._embedded["wp:featuredmedia"][0].source_url,
          title: post.title.rendered,
          content: post.acf.content,
          slug: post.slug,
          author: post._embedded.author[0].name,
          authorAvatar: post._embedded.author[0].avatar_urls["48"],
          readAlsoPosts: serializedReadAlsoPosts,
          date: post.date
        };
        return serializedPost;
      })
    );
    return serializedPosts;
  } catch (e) {
    throw new Error("Failed to fetch blog posts: " + e);
  }
}
async function getRecentPosts() {
  const posts = await wp.blogPost().perPage(20).order("desc").orderby("date").embed().get();
  const serializedPosts = posts.map((post) => ({
    featuredImageUrl: post._embedded["wp:featuredmedia"][0].source_url,
    title: post.title.rendered,
    content: post.acf.content,
    slug: post.slug,
    author: post._embedded.author[0].name,
    authorAvatar: post._embedded.author[0].avatar_urls["48"],
    date: new Date(posts[0].date).toLocaleDateString()
  }));
  return serializedPosts;
}
async function getProjects(type) {
  try {
    const projects = await wp.project().embed().get();
    const serializedProjects = await Promise.all(
      projects.filter((p) => p.acf.project_type == type).map((project) => ({
        name: project.title.rendered,
        description: project.acf.description,
        type: project.acf.project_type,
        featuredImageUrl: project._embedded["wp:featuredmedia"][0].source_url,
        href: project.acf.target_url
      }))
    );
    console.log(serializedProjects);
    return serializedProjects;
  } catch (e) {
    throw new Error("Failed to fetch projects: " + e);
  }
}
async function getReviews() {
  try {
    const reviews = await wp.review().embed().get();
    const serializedReviews = await Promise.all(
      reviews.map((project) => ({
        message: project.acf.review_message,
        author: project.acf.author,
        authorCompany: project.acf.author_company,
        authorPosition: project.acf.author_position
      }))
    );
    if (!reviews) return [];
    return serializedReviews;
  } catch (e) {
    console.log("Failed to fetch reviews: " + e);
  }
}

export { getRecentPosts as a, getProjects as b, getReviews as c, getAllPosts as g };

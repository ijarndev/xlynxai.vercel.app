import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_BWQvXihV.mjs';
import { a as $$Layout, b as $$Anchor } from '../../chunks/Layout_BYhv8hup.mjs';
import { g as getAllPosts } from '../../chunks/wpapi_BARwLM4G.mjs';
import 'clsx';
import { a as actions } from '../../chunks/_astro_actions_CH1ArTFd.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ReadAlsoItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ReadAlsoItem;
  const { imageUrl, title, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/blog/${slug}`, "href")}> <article class="flex items-center gap-x-3 py-1"> <div class="w-2/8 bg-zinc-800 aspect-video grid place-content-center overflow-hidden"> <img class="w-full"${addAttribute(imageUrl, "src")}${addAttribute(slug, "alt")}> </div> <div> <h3 class="text-zinc-100">${title}</h3> </div> </article> </a>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/blog/ReadAlsoItem.astro", void 0);

const $$Astro = createAstro();
const getStaticPaths = (async () => {
  const posts = await getAllPosts();
  if (!posts || posts.length == 0) return [];
  return posts.map((post) => ({
    params: {
      slug: post.slug
    },
    props: {
      featuredImage: post.featuredImageUrl,
      title: post.title,
      content: post.content,
      author: post.author,
      authorAvatar: post.authorAvatar,
      slug: post.slug,
      readAlsoPosts: post.readAlsoPosts
    }
  }));
});
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { featuredImage, title, content, author, authorAvatar, readAlsoPosts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${title} | XLynx AI`, "description": `Read ${title} on XLynx AI's blog. Written by ${author}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="sticky top-10 background-default px-8 md:px-14 lg:px-40 xl:px-50 pt-10 md:pt-50 lg:pt-18 border-b border-zinc-800/50"> <div class="pb-4 text-sm"> ${renderComponent($$result2, "Anchor", $$Anchor, { "href": "/blog" }, { "default": async ($$result3) => renderTemplate`Blog` })} <span class="mx-2 text-secondary">/</span> <span class="text-zinc-100">${title}</span> </div> </div> <div class="px-8 md:px-14 lg:px-40 xl:px-50 pt-18"> <div class="grid gap-10 grid-cols-1 md:grid-cols-[1fr_3fr_1fr] justify-items-stretch"> <div class=""> <div class="md:sticky top-45"> <h4 class="text-lg text-zinc-100">Read Also</h4> <div class="mt-4 space-y-2"> ${readAlsoPosts?.map((post) => renderTemplate`${renderComponent($$result2, "ReadAlsoItem", $$ReadAlsoItem, { "imageUrl": post.featuredImageUrl, "title": post.title, "slug": post.slug })}`)} </div> </div> </div> <div> <div> <h1 class="text-4xl text-zinc-100">${title}</h1> </div> <div class="flex items-center gap-x-4 mt-4 border-b border-zinc-800/50 pb-4"> <img${addAttribute(authorAvatar, "src")} class="size-[36px] rounded-full bg-zinc-800"${addAttribute(`${author}_profile_pic`, "alt")}> <div> <p class="text-zinc-100">${author}</p> </div> </div> <img${addAttribute(featuredImage, "src")} class="w-full" alt="post_featured_image"> <div class="mt-12 text-secondary prose lg:prose-lg prose-invert max-w-none">${unescapeHTML(content)}</div> </div> <div class=""> <div class="p-4 bg-zinc-900 rounded-xl md:sticky top-45"> <h3 class="text-zinc-100 text-xl text-medium">Subscribe to Newsletter</h3> <p class="text-secondary text-xs">Get updates in your inbox to stay up to date</p> ${renderComponent($$result2, "NewsletterForm", null, { "subcribeActionUrl": actions.subscribeToNewsletter, "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/NewsletterForm", "client:component-export": "NewsletterForm" })} </div> </div> </div> </div> ` })}`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/jarndev/dev/xlynxai.vercel.app/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

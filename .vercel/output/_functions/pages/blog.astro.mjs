import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent, n as renderScript } from '../chunks/astro/server_BWQvXihV.mjs';
import 'clsx';
import { a as $$Layout } from '../chunks/Layout_DprA3Fpv.mjs';
import { a as getRecentPosts } from '../chunks/wpapi_CSfvwGpS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { featuredImageUrl, title, description, createdAt, slug, extraClasses, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`${extraClasses}`, "class")}${addAttribute(`/blog/${slug}`, "href")}> <article${addAttribute(`background-light hover:-translate-y-1 cursor-pointer transition-transform`, "class")}> <div class="flex flex-col"> <div class="bg-zinc-900 grid place-content-center relative overflow-hidden min-h-30"> <img class="min-w-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"${addAttribute(featuredImageUrl, "src")} alt=""> </div> <div class="px-4 py-2"> <h3 class="text-lg font-medium text-zinc-800 mb-1">${title}</h3> <p class="text-secondary text-xs">${date}</p> </div> <div class="flex px-4 mt-2 justify-between items-center"> <span class="text-xs">${createdAt}</span> </div> </div> </article> </a>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/blog/PostCard.astro", void 0);

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const recentPosts = await getRecentPosts();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Recent Posts | XLynX AI", "description": "Stay updated with the latest articles and insights about AI, machine learning, and technology trends from XLynX AI's blog." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-8 md:px-14 lg:px-40 xl:px-50 pt-24"> <h1 class="text-4xl text-zinc-100">Recent Entries</h1> <div class="swiper mt-10"> <div class="swiper-wrapper *:swiper-slide"> ${recentPosts.length > 0 ? recentPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "featuredImageUrl": post.featuredImageUrl, "title": post.title, "slug": post.slug, "extraClasses": "swiper-slide", "date": post.date })}`) : renderTemplate`<p class="text-4xl text-zinc-100 text-secondary mt-10">No post were published yet.</p>`} </div> </div> </section> ${renderScript($$result2, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/pages/blog.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/pages/blog.astro", void 0);

const $$file = "C:/Users/jarndev/dev/xlynxai.vercel.app/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

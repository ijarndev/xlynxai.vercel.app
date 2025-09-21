import { e as createComponent, r as renderTemplate, l as renderComponent, m as maybeRenderHead, f as createAstro, h as addAttribute, n as renderScript } from '../chunks/astro/server_BWQvXihV.mjs';
import { $ as $$Button, a as $$Layout } from '../chunks/Layout_DprA3Fpv.mjs';
import { $ as $$ArrowRight } from '../chunks/ArrowRight_C3NCsPBX.mjs';
import 'clsx';
import { c as createSvgComponent } from '../chunks/runtime_CwAyalfU.mjs';
import { c as getReviews } from '../chunks/wpapi_CSfvwGpS.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section class="overflow-hidden group rounded-bl-[100px] md:rounded-bl-[200px] h-screen bg-gradient-to-br from-transparent via-[#00B4FB]/3 to-[#00B4FB]/15 px-8 md:px-14 lg:px-40 xl:px-50 pt-20 md:pt-50 lg:pt-40 sm:pt-40 pb-30 mb-10 relative z-1 border-b-2 border-dashed border-gray-400/10"> <div class="flex pt-10 xl:mb-0"> <div> <!-- <h1\n        class="mb-8 text-center sm:text-left text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:max-w-4/5 font-bold text-primary"\n      >\n        <span class="block">NEXT-GEN</span>\n        <span class="text-theme">WEB DEVELOPMENT</span>\n        &\n        <span class="text-theme">AI INTEGRATION</span>\n      </h1> --> <h1 class=""> ', " ", " ", ' </h1> <h2 class="xl:w-2/5 text-secondary mb-20 text-xl">\nLaunch your website, automate your business, and scale with AI-Powered\n        systems \u2014 we take care of everything.\n</h2> <div class="md:*:w-auto *:w-full md:*:*:w-auto *:*:w-auto flex flex-wrap items-center gap-x-4"> <div class="*:text-nowrap *:w-full sm:*:w-auto relative mb-8 sm:mb-0"> <a href="javascript:void(0)" data-cal-link="luis-roberto-leyva-galban-kze0qq/30min" data-cal-namespace="30min" data-cal-config="{&quot;layout&quot;:&quot;month_view&quot;}" class="w-full"> ', ' </a> </div> <div class="*:text-nowrap"> <div data-cal-link="luis-roberto-leyva-galban-kze0qq/30min" data-cal-namespace="30min" data-cal-config="{&quot;layout&quot;:&quot;month_view&quot;}" class="w-full text-center"> <button class="px-5 py-3 border box-border border-zinc-100/20 cursor-pointer text-zinc-100 rounded-full"> AUTOMATE YOUR BUSINESS </button> </div> </div> </div> </div> <div id="particles1" class="hidden lg:block xl:min-w-1/6"></div> </div> <div class="flex items-start justify-start flex-col sm:flex-row gap-x-20"> <div id="particles2" class="lg:-rotate-45 xl:mb-10 lg:block flex-1 flex justify-end"></div> </div> </section> <script>\n  particlesJS.load("particles1", PARTICLES_CONFIG_URL);\n  particlesJS.load("particles2", PARTICLES_CONFIG_URL);\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "BlurText", null, { "client:only": true, "text": "NEXT-GEN", "delay": 150, "animateBy": "words", "direction": "top", "className": "text-center sm:text-left text-4xl md:text-6xl lg:text-6xl xl:text-8xl 2xl:max-w-4/5 font-bold text-primary", "client:component-hydration": "only", "client:component-path": "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/BlurText", "client:component-export": "default" }), renderComponent($$result, "BlurText", null, { "client:only": true, "text": "WEB DEVELOPMENT", "delay": 150, "animateBy": "words", "direction": "top", "className": "text-center sm:text-left text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:max-w-4/5 font-bold text-theme", "client:component-hydration": "only", "client:component-path": "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/BlurText", "client:component-export": "default" }), renderComponent($$result, "BlurText", null, { "client:only": true, "text": "& AI INTEGRATION", "delay": 150, "animateBy": "words", "direction": "top", "className": "mb-8 text-center sm:text-left text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:max-w-4/5 font-bold text-primary", "client:component-hydration": "only", "client:component-path": "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/BlurText", "client:component-export": "default" }), renderComponent($$result, "Button", $$Button, { "fullWidth": true }, { "default": ($$result2) => renderTemplate`LAUNCH YOUR WEBSITE` }));
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/Hero.astro", void 0);

const $$Astro$2 = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { image, name, description, icon: Icon, index, isPopular, isLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="border-2 border-zinc-100/20 overflow-hidden group rounded-xl hover:border-[#00B4FB] min-h-40 group-hover:opacity-20 hover:opacity-100 transition-all hover:-translate-y-1"> <div class="grid place-content-center overflow-hidden h-[300px]"> <img${addAttribute(image, "src")} alt=""> </div> <div class="px-10 py-4"> <h3 class="text-xl text-zinc-100 font-bold">${name}</h3> <p class="mt-2 text-secondary">${description}</p> </div> <div class="flex justify-end"> ${isLink && renderTemplate`<div class="group-hover:border-[#00B4FB] group-hover:bg-zinc-700 border-zinc-100/20 border-l-2 border-t-2 transition size-12 rounded-tl-xl grid place-content-center"> ${renderComponent($$result, "ArrowRight", $$ArrowRight, { "width": 22, "class": "text-zinc-100 -rotate-z-45" })} </div>`} </div> </article>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/ui/ServiceCard.astro", void 0);

const web = new Proxy({"src":"/_astro/webdev.0bZrFE7O.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jarndev/dev/xlynxai.vercel.app/src/assets/img/wwd/webdev.webp";
							}
							
							return target[name];
						}
					});

const ai = new Proxy({"src":"/_astro/bot-arm.DHO8ZSNI.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jarndev/dev/xlynxai.vercel.app/src/assets/img/wwd/bot-arm.webp";
							}
							
							return target[name];
						}
					});

const design = new Proxy({"src":"/_astro/design.Bv2w0vHc.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jarndev/dev/xlynxai.vercel.app/src/assets/img/wwd/design.webp";
							}
							
							return target[name];
						}
					});

const seo = new Proxy({"src":"/_astro/seo.2APzhSLk.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jarndev/dev/xlynxai.vercel.app/src/assets/img/wwd/seo.webp";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const mockData = [
    {
      name: "Web",
      description: "Performat and scalable web applications.",
      href: "/services/web-development",
      image: web.src
    },
    {
      name: "AI",
      description: "Bussiness automations powered by an artificial brain.",
      href: "/services/ai-integration",
      image: ai.src
    },
    {
      name: "Design",
      description: "Your UI made usable and beautiful.",
      href: null,
      image: design.src
    },
    {
      name: "SEO",
      description: "Get found on Google and beyond.",
      href: null,
      image: seo.src
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="rounded-tr-[200px] px-8 md:px-14 lg:px-40 xl:px-50 pb-20 pt-10 z-1 relative border-b-2 border-dashed border-gray-400/10"> <!-- <h2 class="text-3xl sm:text-7xl text-primary mb-2 text-center">What We Do</h2> --> <!-- <p class="text-secondary text-sm sm:max-w-3/4 mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus perspiciatis animi a? Nulla quisquam voluptatum doloribus provident eius dignissimos!</p> --> <div class="text-3xl md:text-7xl mt-20 sm:grid-cols-2 gap-x-4 text-center space-y-10 xl:flex flex-flow items-center justify-center"> <span class="text-primary mb-4 md:mb-0 block text-center">We make creative</span> ${renderComponent($$result, "RotatingText", null, { "client:only": true, "texts": ["websites", "AI solutions", "designs", "marketing", "apps"], "mainClassName": "px-2 md:px-4 text-theme border-t border-b border-r border-[#00b4fb]/5 py-2 overflow-hidden justify-center rounded-tr-lg rounded-br-lg", "staggerFrom": "last", "initial": { y: "100%" }, "animate": { y: 0 }, "exit": { y: "-120%" }, "staggerDuration": 0.025, "splitLevelClassName": "overflow-hidden pb-0.5 sm:pb-1 md:pb-1", "transition": { type: "spring", damping: 30, stiffness: 400 }, "rotationInterval": 2e3, "client:component-hydration": "only", "client:component-path": "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/RotatingText", "client:component-export": "default" })} </div> <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-8 mt-20"> ${mockData.map((service, index) => {
    if (service.href) {
      return renderTemplate`<a${addAttribute(service.href, "href")}> ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "name": service.name.toUpperCase(), "description": service.description, "isLink": true, "image": service.image })} </a>`;
    } else {
      return renderTemplate`${renderComponent($$result, "ServiceCard", $$ServiceCard, { "name": service.name.toUpperCase(), "description": service.description, "image": service.image })}`;
    }
  })} </div> </section>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/Services.astro", void 0);

const quotationIcon = createSvgComponent({"meta":{"src":"/_astro/quotation.xB5ptDRh.svg","width":349,"height":349,"format":"svg"},"attributes":{"fill":"#00B4FB","id":"Capa_1","viewBox":"0 0 349.078 349.078","xml:space":"preserve","stroke":"#00FAB5"},"children":"<g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g> <path d=\"M150.299,26.634v58.25c0,7.9-6.404,14.301-14.304,14.301c-28.186,0-43.518,28.909-45.643,85.966h45.643 c7.9,0,14.304,6.407,14.304,14.304v122.992c0,7.896-6.404,14.298-14.304,14.298H14.301C6.398,336.745,0,330.338,0,322.447V199.455 c0-27.352,2.754-52.452,8.183-74.611c5.568-22.721,14.115-42.587,25.396-59.048c11.608-16.917,26.128-30.192,43.16-39.44 C93.886,17.052,113.826,12.333,136,12.333C143.895,12.333,150.299,18.734,150.299,26.634z M334.773,99.186 c7.896,0,14.305-6.407,14.305-14.301v-58.25c0-7.9-6.408-14.301-14.305-14.301c-22.165,0-42.108,4.72-59.249,14.023 c-17.035,9.248-31.563,22.523-43.173,39.44c-11.277,16.461-19.824,36.328-25.393,59.054c-5.426,22.166-8.18,47.266-8.18,74.605 v122.992c0,7.896,6.406,14.298,14.304,14.298h121.69c7.896,0,14.299-6.407,14.299-14.298V199.455 c0-7.896-6.402-14.304-14.299-14.304h-44.992C291.873,128.095,306.981,99.186,334.773,99.186z\"></path> </g> </g>"});

const $$Astro$1 = createAstro();
const $$TestimonialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TestimonialCard;
  const { message, author, authorPosition, authorCompany } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="!flex flex-col sm:flex-row gap-x-10 swiper-slide"> <div class=""> <img class="w-18 sm:w-28"${addAttribute(quotationIcon.src, "src")} alt="quotation_icon"> </div> <div class="py-4 flex-1"> <p class="text-xl italic">"${message}"</p> <p class="mt-6 font-bold">${author}</p> <p class="text-sm text-secondary">${authorPosition} at ${authorCompany}</p> </div> </article>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/ui/TestimonialCard.astro", void 0);

const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const reviews = await getReviews();
  return renderTemplate`${maybeRenderHead()}<section id="reviews" class="px-8 bg-white rounded-r-full lg:px-40 xl:px-50 md:px-14 py-30 pb-20 relative z-1 border-b-2 border-dashed border-gray-400/10"> <h1 class="text-2xl sm:text-7xl text-center text- mb-10">Success Stories</h1> <div class="flex justify-center sm:*:max-w-6/8"> <div class="swiper"> <div class="swiper-wrapper"> ${reviews.length > 0 ? reviews?.map((r) => renderTemplate`${renderComponent($$result, "TestimonialCard", $$TestimonialCard, { "author": r.author, "authorPosition": r.authorPosition, "authorCompany": r.authorCompany, "message": r.message })}`) : renderTemplate`<div class="text-center py-20">
We still don't have any success cases here
</div>`} </div> </div> </div> </section> ${renderScript($$result, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/Testimonials.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/Testimonials.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "XLynx AI - Your AI Solutions Partner", "description": "XLynx AI provides cutting-edge artificial intelligence solutions and services to help businesses innovate and transform their operations. Expert consulting, custom AI development, and intelligent automation solutions." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<div class="pb-32"> ${renderComponent($$result2, "Services", $$Services, {})} </div> <div class="pb-32"> ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} </div> <div class="fixed top-0 left-0 right-0 mx-2 lg:mx-20 xl:mx-30 md:mx-6 h-full border-l-2 border-r-2 border-dashed border-l-[#00B4FB]/5 border-r-gray-400/5 z-0"></div> ` })}`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/pages/index.astro", void 0);

const $$file = "C:/Users/jarndev/dev/xlynxai.vercel.app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

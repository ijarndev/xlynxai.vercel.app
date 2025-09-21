import { e as createComponent, f as createAstro, m as maybeRenderHead, l as renderComponent, r as renderTemplate, i as spreadAttributes, h as addAttribute } from '../../chunks/astro/server_BWQvXihV.mjs';
import { w as webDevelopment, $ as $$MagnifyingGlass, a as $$BenefitCard } from '../../chunks/BenefitCard_BrWY76vq.mjs';
import { b as $$ServiceLayout, $ as $$Briefcase, a as $$Clock } from '../../chunks/ServiceLayout_Dwpc3o87.mjs';
import 'clsx';
import { a as $$ShieldCheck, $ as $$Users } from '../../chunks/ShieldCheck_BMadhh6O.mjs';
import { $ as $$Button } from '../../chunks/Layout_BYhv8hup.mjs';
import { b as getProjects } from '../../chunks/wpapi_BARwLM4G.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$8 = createAstro();
const $$GridListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$GridListItem;
  const { icon: Icon, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex items-center gap-x-4"> <div class=""> ${Icon ? renderTemplate`${renderComponent($$result, "Icon", Icon, { "class": "text-theme", "width": 42 })}` : null} </div> <div class="text-zinc-100 text-2xl">${text}</div> </article>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/GridListItem.astro", void 0);

const $$Astro$7 = createAstro();
const $$WorkFlowStep = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$WorkFlowStep;
  const { number, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative flex flex-col items-center"> <div class="flex h-14 w-14 items-center justify-center rounded-full background-theme text-xl font-bold text-zinc-100"> ${number} </div> <div class="mt-4 text-center max-w-[300px]"> <h3 class="text-xl font-bold text-zinc-100">${title}</h3> <p class="mt-2 text-zinc-300">${description}</p> </div> </div>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/services/WorkFlowStep.astro", void 0);

const $$Astro$6 = createAstro();
const $$Envelope = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Envelope;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path> </svg>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/node_modules/.pnpm/astro-heroicons@2.1.5-1/node_modules/astro-heroicons/outline/Envelope.astro", void 0);

const $$Astro$5 = createAstro();
const $$PencilSquare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PencilSquare;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path> </svg>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/node_modules/.pnpm/astro-heroicons@2.1.5-1/node_modules/astro-heroicons/outline/PencilSquare.astro", void 0);

const $$Astro$4 = createAstro();
const $$Phone = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Phone;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path> </svg>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/node_modules/.pnpm/astro-heroicons@2.1.5-1/node_modules/astro-heroicons/outline/Phone.astro", void 0);

const $$Astro$3 = createAstro();
const $$CubeTransparent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CubeTransparent;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"></path> </svg>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/node_modules/.pnpm/astro-heroicons@2.1.5-1/node_modules/astro-heroicons/outline/CubeTransparent.astro", void 0);

const $$Astro$2 = createAstro();
const $$CheckCircle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CheckCircle;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path> </svg>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/node_modules/.pnpm/astro-heroicons@2.1.5-1/node_modules/astro-heroicons/outline/CheckCircle.astro", void 0);

const $$Astro$1 = createAstro();
const $$PlanCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PlanCard;
  const { name, subtitle, description, features, ctaHref, isPopular } = Astro2.props;
  const pupularStyles = `${isPopular ? "border-2 !border-[#00B4FB]" : ""}`;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`relative ${pupularStyles} flex flex-col px-4 py-6 text-center rounded-xl border border-zinc-100/10 bg-zinc-800`, "class")}> ${isPopular ? renderTemplate`<div class="text-zinc-100 text-sm py-1 px-3 rounded-md background-theme -top-4 left-1/2 -translate-x-1/2 absolute">Most Popular</div>` : null} <div> <h2 class="text-xl text-zinc-100 font-medium">${name}</h2> <p class="mt-4 text-theme">${subtitle}</p> <p class="mt-4 text-sm text-secondary px-10">${description}</p> </div> <ul class="mt-6 flex flex-col gap-y-1 px-10"> ${features.map((feature) => renderTemplate`<li class="flex items-center gap-x-4"> ${renderComponent($$result, "CheckCircle", $$CheckCircle, { "width": 32, "class": "text-theme" })} <span class="text-zinc-100">${feature}</span> </li>`)} </ul> <a${addAttribute(ctaHref, "href")} class="*:w-full flex-1 flex items-end pt-8"> ${renderComponent($$result, "Button", $$Button, {}, { "default": ($$result2) => renderTemplate`Get Started` })} </a> </article>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/services/PlanCard.astro", void 0);

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { name, description, type, featuredImageUrl, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank"> <article class="bg-zinc-800 rounded-2xl overflow-hidden transition hover:-translate-y-1"> <img${addAttribute(featuredImageUrl, "src")}${addAttribute(name, "alt")} class="w-full h-48 object-cover" loading="lazy"> <div class="p-4 flex flex-col gap-2"> <h3 class="text-lg font-semibold text-white">${name}</h3> <p class="text-sm text-neutral-300 line-clamp-3">${description}</p> </div> </article> </a>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/services/ProjectCard.astro", void 0);

const $$WebDevelopment = createComponent(async ($$result, $$props, $$slots) => {
  const mockData = {
    serviceIncludes: [
      {
        icon: $$Briefcase,
        text: "Professional Website (WordPress or similar)"
      },
      {
        icon: $$PencilSquare,
        text: "Reponsive Design"
      },
      {
        icon: $$Envelope,
        text: "Professional Email"
      },
      {
        icon: $$MagnifyingGlass,
        text: "Basic SEO Optimization"
      },
      {
        icon: $$Phone,
        text: "Direct Integration of Any Contact Method"
      },
      {
        icon: $$ShieldCheck,
        text: "Secure and fast hosting"
      }
    ],
    benefits: [
      {
        icon: $$ShieldCheck,
        title: "Inmediate Trust",
        description: "Your clients see a serious business."
      },
      {
        icon: $$Users,
        title: "More Customers",
        description: "Your website is an open showcase 24/7."
      },
      {
        icon: $$Clock,
        title: "Time Saving",
        description: "Your customers find information about your business without a call."
      },
      {
        icon: $$CubeTransparent,
        title: "Your Brand, Your Style",
        description: "Customized and unique designs."
      }
    ],
    plans: [
      {
        name: "Landing Page",
        pages: "1 page",
        description: "Perfect for freelancers, promotions, or businesses wanting a quick start",
        features: [
          "Single page design",
          "Contact form",
          "Mobile responsive",
          "Basic SEO"
        ],
        isPopular: false
      },
      {
        name: "Corporation Website",
        pages: "3-5 pages",
        description: "For companies that need to show services, contacts, menus, etc",
        features: [
          "Multi-page structure",
          "Service page",
          "About Us",
          "Contact information",
          "Gallery/Portfolio"
        ],
        isPopular: true
      },
      {
        name: "Advanced Web Solution",
        pages: "5+ pages / Online Store",
        description: "Perfect for businesses wanting to sell products or integrate complex functions",
        features: [
          "E-Commerce capability",
          "Product catalog",
          "Payment integration",
          "User accounts",
          "Advanced features"
        ],
        isPopular: false
      }
    ]
  };
  const portfolio = await getProjects("web-development");
  return renderTemplate`${renderComponent($$result, "ServiceLayout", $$ServiceLayout, { "title": "Your Professional Website Ready in a Few Days", "subtitle": "Modern design, responsive to any device and thought so your business gains trust since the very first click", "ctaText": "I Want My Free Quote", "ctaHref": "", "heroImage": {
    src: webDevelopment.src,
    rotated: false
  }, "valueExpression": "Prices start at just <strong>$199</strong> and your website can be live in just a few days" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-20"> <h2 class="text-zinc-100 text-5xl">What Does it Include?</h2> <div class="mt-10 grid grid-cols-2 gap-10 pt-10"> ${mockData.serviceIncludes.map((include) => renderTemplate`${renderComponent($$result2, "GridListItem", $$GridListItem, { "icon": include.icon, "text": include.text })}`)} </div> </section> <section class="mt-30"> <h2 class="text-zinc-100 text-5xl text-center">Benefits</h2> <div class="mt-10 grid grid-cols-2 gap-10 pt-10"> ${mockData.benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> </section> <section class="mt-30"> <h2 class="text-zinc-100 text-5xl text-center">Web Development Plans</h2> <div class="mt-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 pt-10"> ${mockData.plans.map((plan) => renderTemplate`${renderComponent($$result2, "PlanCard", $$PlanCard, { "name": plan.name, "subtitle": plan.pages, "description": plan.description, "features": plan.features, "ctaHref": "#", "isPopular": plan.isPopular })}`)} </div> <div class="mt-30"> <div class="flex flex-col items-center w-full text-center"> <h2 class="mt-2 text-5xl text-zinc-200">Our Work Process</h2> <p class="mt-4 text-lg text-zinc-300">Simple steps to get your website live</p> </div> <div class="mt-30 grid gap-10 md:grid-cols-4 md:gap-0"> <div> ${renderComponent($$result2, "WorkFlowStep", $$WorkFlowStep, { "number": 1, "title": "Free Consultation", "description": "We analyze your needs and discuss your vision" })} </div> ${renderComponent($$result2, "WorkFlowStep", $$WorkFlowStep, { "number": 2, "title": "Design & Customization", "description": "We adapt the website to your brand and style" })} ${renderComponent($$result2, "WorkFlowStep", $$WorkFlowStep, { "number": 3, "title": "Delivery & Training", "description": "We teach you how to use it effectively" })} ${renderComponent($$result2, "WorkFlowStep", $$WorkFlowStep, { "number": 4, "title": "Initial Support", "description": "First 30 days for basic adjustments" })} </div> </div> <div class="mt-30"> <div class="flex flex-col items-center w-full text-center"> <h2 class="mt-2 text-5xl text-zinc-200">Our Work Examples</h2> <p class="mt-4 text-lg text-zinc-300">See what we can create for your business</p> </div> ${portfolio.length > 0 ? renderTemplate`<div class="grid gap-10 md:grid-cols-2 2xl:grid-cols-3 pt-20"> ${portfolio.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "name": project.name, "type": project.type, "description": project.description, "featuredImageUrl": project.featuredImageUrl, "href": project.href })}`)} </div>` : renderTemplate`<div class="text-center py-20 text-zinc-100">
We still don't have any projects here
</div>`} </div> </section> ` })}`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/pages/services/web-development.astro", void 0);

const $$file = "C:/Users/jarndev/dev/xlynxai.vercel.app/src/pages/services/web-development.astro";
const $$url = "/services/web-development";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WebDevelopment,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

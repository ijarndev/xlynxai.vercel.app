import { e as createComponent, f as createAstro, m as maybeRenderHead, i as spreadAttributes, r as renderTemplate, l as renderComponent, p as renderSlot, u as unescapeHTML } from './astro/server_BWQvXihV.mjs';
import 'clsx';
/* empty css                          */
import { a as $$Layout, $ as $$Button } from './Layout_DprA3Fpv.mjs';
import { $ as $$ArrowRight } from './ArrowRight_C3NCsPBX.mjs';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"></path> </svg>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/node_modules/.pnpm/astro-heroicons@2.1.5-1/node_modules/astro-heroicons/outline/Briefcase.astro", void 0);

const $$Astro$1 = createAstro();
const $$Clock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Clock;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path> </svg>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/node_modules/.pnpm/astro-heroicons@2.1.5-1/node_modules/astro-heroicons/outline/Clock.astro", void 0);

const $$Astro = createAstro();
const $$ServiceLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceLayout;
  const {
    title = "Service",
    subtitle = "Service description",
    heroImage,
    ctaText = "Call to action",
    valueExpression
  } = Astro2.props;
  `${heroImage.rotated ? "xl:rotate-z-10 !max-h-[600px]" : null}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${title} | XLynX AI`, "description": `${title} - ${subtitle}. Professional AI services and solutions by XLynX AI.`, "data-astro-cid-ybl4tjop": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative px-8 md:px-14 lg:px-40 xl:px-50 md:pt-50 lg:pt-40 pt-28 pb-20 bg-gradient-to-br from-[#151515] via-[#151515]/50 to-[#00B4FB]/10" data-astro-cid-ybl4tjop> <!-- hero --> <div class="absolute top-0 left-0 w-full h-full z-0" data-astro-cid-ybl4tjop> ${renderComponent($$result2, "Squares", null, { "client:only": true, "speed": 0.1, "squareSize": 80, "direction": "diagonal", "borderColor": "#00b4fb", "hoverFillColor": "#00b4fb", "client:component-hydration": "only", "data-astro-cid-ybl4tjop": true, "client:component-path": "@/components/Squares", "client:component-export": "default" })} </div> <div class="grid grid-cols-1 items-center xl:grid-cols-2 gap-10" data-astro-cid-ybl4tjop> <div class="z-1" data-astro-cid-ybl4tjop> ${valueExpression ? renderTemplate`<div class="animate-pulse text-sm border-1 border-[#00B4FB] md:text-nowrap overflow-hidden py-2 px-4 mb-6 inline-grid grid-cols-[1fr_auto] items-center gap-x-4 rounded-full bg-[#00B4FB]/10 text-white" data-astro-cid-ybl4tjop> <div class="size-3 rounded-full bg-[#00B4FB]" data-astro-cid-ybl4tjop></div> <span data-astro-cid-ybl4tjop>${unescapeHTML(valueExpression)}</span> </div>` : null} <h1 class="text-zinc-100 text-3xl md:text-5xl xl:text-7xl font-semibold" data-astro-cid-ybl4tjop> <span class="inline-block" data-astro-cid-ybl4tjop>${title}</span> </h1> <p class="mt-4 text-zinc-300 md:text-2xl w-full" data-astro-cid-ybl4tjop> <span class="inline-block" data-astro-cid-ybl4tjop>${subtitle}</span> </p> <div class="*:flex *:gap-x-2 mt-12" data-cal-link="luis-roberto-leyva-galban-kze0qq/30min" data-cal-namespace="30min" data-cal-config="{&quot;layout&quot;:&quot;month_view&quot;}" data-astro-cid-ybl4tjop> ${renderComponent($$result2, "Button", $$Button, { "data-astro-cid-ybl4tjop": true }, { "default": ($$result3) => renderTemplate`${ctaText}${renderComponent($$result3, "ArrowRight", $$ArrowRight, { "width": 22, "data-astro-cid-ybl4tjop": true })} ` })} </div> </div> </div> </section> <div class="grid markdown px-8 md:px-14 lg:px-40 xl:px-50 pb-20 relative z-1 border-b-2 border-dashed border-gray-400/10" data-astro-cid-ybl4tjop> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/layouts/ServiceLayout.astro", void 0);

export { $$Briefcase as $, $$Clock as a, $$ServiceLayout as b };

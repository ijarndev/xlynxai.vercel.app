import { e as createComponent, f as createAstro, m as maybeRenderHead, i as spreadAttributes, r as renderTemplate, l as renderComponent } from './astro/server_BWQvXihV.mjs';
import 'clsx';

const $$Astro$2 = createAstro();
const $$ArrowTrendingUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArrowTrendingUp;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"></path> </svg>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/node_modules/.pnpm/astro-heroicons@2.1.5-1/node_modules/astro-heroicons/outline/ArrowTrendingUp.astro", void 0);

const $$Astro$1 = createAstro();
const $$CurrencyDollar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CurrencyDollar;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path> </svg>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/node_modules/.pnpm/astro-heroicons@2.1.5-1/node_modules/astro-heroicons/outline/CurrencyDollar.astro", void 0);

const $$Astro = createAstro();
const $$SolutionCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SolutionCard;
  const { icon: Icon, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="text-center py-4 px-6 bg-zinc-800 border border-zinc-400/20 rounded-xl"> <div class="flex justify-center pt-2 pb-4 text-theme"> ${Icon ? renderTemplate`${renderComponent($$result, "Icon", Icon, { "width": 56 })}` : null} </div> <h4 class="text-xl text-zinc-100 font-medium">${title}</h4> <p class="text-zinc-300 text-sm mt-4">${description}</p> </article>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/services/SolutionCard.astro", void 0);

export { $$ArrowTrendingUp as $, $$CurrencyDollar as a, $$SolutionCard as b };

import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as spreadAttributes, l as renderComponent, n as renderScript } from '../chunks/astro/server_BWQvXihV.mjs';
import { $ as $$Button, a as $$Layout } from '../chunks/Layout_BYhv8hup.mjs';
import 'clsx';
import { $ as $$Bolt } from '../chunks/Bolt_CxcvgPOX.mjs';
export { renderers } from '../renderers.mjs';

const lynx = new Proxy({"src":"/_astro/lynx-lg.zFeSbJpe.png","width":500,"height":437,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jarndev/dev/xlynxai.vercel.app/src/assets/img/lynx-lg.png";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$MemberCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MemberCard;
  const { image, name, description, position } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="relative flex px-6 py-4 overflow-hidden border-2 border-zinc-800/50 bg-gradient-to-br from-transparent via-zinc-800/60 to-zinc-900 hover:!bg-gradient-to-tl transition-all flex-col justify-center"> <img${addAttribute(lynx.src, "src")} class="hover:select-none min-w-[500px] absolute -right-[200px] grayscale-100 opacity-20" alt="lynx"> <div class="overflow-hidden flex items-center justify-center size-28 bg-zinc-950 rounded-full"> ${image ? renderTemplate`<img class="w-full"${addAttribute(image, "src")}${addAttribute(name, "alt")}>` : null} </div> <div class="mt-6"> <h4 class="text-2xl text-zinc-100 font-medium">${name}</h4> <p class="text-xs text-theme">${position}</p> <p class="mt-4 text-secondary max-w-[xl]">${description}</p> </div> </article>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/about/MemberCard.astro", void 0);

const collaboration = new Proxy({"src":"/_astro/collaboration.DYXVuu0Y.png","width":3840,"height":2160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jarndev/dev/xlynxai.vercel.app/src/assets/img/collaboration.png";
							}
							
							return target[name];
						}
					});

const efficiency = new Proxy({"src":"/_astro/efficiency.BdhUpdTN.png","width":3840,"height":2160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jarndev/dev/xlynxai.vercel.app/src/assets/img/efficiency.png";
							}
							
							return target[name];
						}
					});

const innovation = new Proxy({"src":"/_astro/innovation.BYwFqsUG.png","width":3840,"height":2160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jarndev/dev/xlynxai.vercel.app/src/assets/img/innovation.png";
							}
							
							return target[name];
						}
					});

const trust = new Proxy({"src":"/_astro/trust.YjH-fHNB.png","width":3840,"height":2160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jarndev/dev/xlynxai.vercel.app/src/assets/img/trust.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Eye = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Eye;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path> </svg>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/node_modules/.pnpm/astro-heroicons@2.1.5-1/node_modules/astro-heroicons/outline/Eye.astro", void 0);

const $$Astro = createAstro();
const $$ValueTestimonial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ValueTestimonial;
  const { testimonial } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="text-center py-10 text-lg italic text-zinc-100 font-medium">
"${testimonial}"
</article>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/about/ValueTestimonial.astro", void 0);

const randy = new Proxy({"src":"/_astro/randy.CRP-BuNp.jpg","width":460,"height":460,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jarndev/dev/xlynxai.vercel.app/src/assets/img/randy.jpg";
							}
							
							return target[name];
						}
					});

const raven = new Proxy({"src":"/_astro/raven.Bl36-Ca9.jpg","width":302,"height":302,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jarndev/dev/xlynxai.vercel.app/src/assets/img/raven.jpg";
							}
							
							return target[name];
						}
					});

const lalo = new Proxy({"src":"/_astro/lalo.D1-8ZThq.jpeg","width":3464,"height":3464,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jarndev/dev/xlynxai.vercel.app/src/assets/img/lalo.jpeg";
							}
							
							return target[name];
						}
					});

const $$About$1 = createComponent(($$result, $$props, $$slots) => {
  const members = [
    {
      image: lalo.src,
      name: "Lalo",
      description: "Visionary and strategic leader, passionated by AI integration on businesses.",
      position: "CEO"
    },
    {
      image: raven.src,
      name: "Luis",
      description: "Project manager and organizer.",
      position: "Marketing Engineer"
    },
    {
      image: randy.src,
      name: "Randy",
      description: "Technical pillar, responsible for creating solid and scalable solutions.",
      position: "Senior Developer"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="about" class="px-8 md:px-14 lg:px-40 xl:px-50 mb-20 pt-10 sm:pt-20 relative z-1"> <div class="mb-32 flex justify-start"> <div class="md:max-w-6/8"> <h1 class="text-4xl sm:text-7xl text-zinc-100 mb-4">Who We Are</h1> <p class="text sm:text-md text-secondary">
We're a team based in Las Vegas that helps businesses to grow, from its very starting point through its whole consolidation in order for them to be more productive, thanks to a proper use of technologies and Artificial Intelligence.
</p> </div> </div> <div class="grid grid-cols-1 justify-items-stretch lg:grid-cols-2 2xl:grid-cols-3 gap-10 mb-32"> ${members.map((member) => renderTemplate`${renderComponent($$result, "MemberCard", $$MemberCard, { "image": member.image, "name": member.name, "description": member.description, "position": member.position })}`)} </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32"> <div class=""> <div class="mb-4 flex items-center gap-x-4"> ${renderComponent($$result, "Bolt", $$Bolt, { "width": 48, "class": "text-theme" })} <h4 class="text-4xl font-semibold text-theme">Mission</h4> </div> <p class="text-zinc-100 text-xl">At XlynX AI we get along with:</p> <p class="mt-4 text-zinc-300">
• Small Businesses → making their very first digital step with their own websites and online presence.
</p> <p class="mt-2 text-zinc-300">
• Medium and Large Businesses → helping them to automate processes, save time, enhance productivity and strengthen their position on the market.
</p> </div> <div class=""> <div class="mb-4 flex items-center gap-x-4"> ${renderComponent($$result, "Eye", $$Eye, { "width": 48, "class": "text-theme" })} <h4 class="text-4xl font-semibold text-theme">Value</h4> </div> <p class="text-zinc-100 text-xl">We're not an expend but but your business' smartest investment: The assistant that pays itself</p> <div class="swiper mt-4"> <div class="swiper-wrapper"> <div class="swiper-slide"> ${renderComponent($$result, "ValueTestimonial", $$ValueTestimonial, { "testimonial": "It's like having a receptionist what never sleeps." })} </div> <div class="swiper-slide"> ${renderComponent($$result, "ValueTestimonial", $$ValueTestimonial, { "testimonial": "Most trustable member of the team." })} </div> <div class="swiper-slide"> ${renderComponent($$result, "ValueTestimonial", $$ValueTestimonial, { "testimonial": "It's like hiring a group of assistants for the price of a single subscription." })} </div> </div> </div> </div> </div> <div class="mb-32"> <h3 class="text-4xl mb-12 text-center font-medium text-zinc-100">Our Values</h3> <div class="grid gap-y-10 grid-cols-2 md:grid-cols-4"> <div class="flex items-center flex-col gap-y-3"> <img${addAttribute(innovation.src, "src")} alt="innovation"> <p class="font-medium text-lg text-zinc-100">Innovation</p> </div> <div class="flex items-center flex-col gap-y-3"> <img${addAttribute(collaboration.src, "src")} alt="collaboration"> <p class="font-medium text-lg text-zinc-100">Collaboration</p> </div> <div class="flex items-center flex-col gap-y-3"> <img${addAttribute(efficiency.src, "src")} alt="efficiency"> <p class="font-medium text-lg text-zinc-100">Efficiency</p> </div> <div class="flex items-center flex-col gap-y-3"> <img${addAttribute(trust.src, "src")} alt="trust"> <p class="font-medium text-lg text-zinc-100">Trust</p> </div> </div> </div> <div class="mt-24"> <h3 class="text-zinc-100 mb-10 text-center text-2xl">Your business' future starts today, let us show you how.</h3> <div class="text-center"> <a href="javascript:void(0)" data-cal-link="luis-roberto-leyva-galban-kze0qq/30min" data-cal-namespace="30min" data-cal-config="{&quot;layout&quot;:&quot;month_view&quot;}"> ${renderComponent($$result, "Button", $$Button, {}, { "default": ($$result2) => renderTemplate`SEE HOW WE CAN HELP` })} </a> </div> </div> </section> ${renderScript($$result, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/About.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/About.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Who We Are | XLynx AI", "description": "Discover XLynx AI's mission, values, and the team behind our innovative AI solutions. Learn how we're working to make artificial intelligence accessible and impactful." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-20"> ${renderComponent($$result2, "AboutSection", $$About$1, {})} </div> ` })}`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/pages/about.astro", void 0);

const $$file = "C:/Users/jarndev/dev/xlynxai.vercel.app/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

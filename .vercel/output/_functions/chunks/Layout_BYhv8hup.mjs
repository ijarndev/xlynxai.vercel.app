import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, p as renderSlot, r as renderTemplate, l as renderComponent, i as spreadAttributes, n as renderScript, q as renderHead } from './astro/server_BWQvXihV.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$5 = createAstro();
const $$Anchor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Anchor;
  const { href, target } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="text-secondary hover:!text-[#00B4FB]/80 hover:!underline-offset-5 hover:!underline transition-all"${addAttribute(href, "href")}${addAttribute(target || null, "target")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/ui/Anchor.astro", void 0);

const lynx = new Proxy({"src":"/_astro/lynx.BD1Ce4aF.png","width":120,"height":120,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jarndev/dev/xlynxai.vercel.app/src/assets/img/lynx.png";
							}
							
							return target[name];
						}
					});

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<footer class="relative z-1 background-default"> <div class="px-8 lg:px-40 2xl:px-80 xl:px-60 md:px-14"> <div class="pt-30 grid gap-8 grid-cols-2 sm:grid-cols-4 "> <div> <span class="text-primary font-semibold text-4xl"> <img', ' alt="lynx_logo" class="size-18"> </span> <p class="mt-4 text-secondary text-sm max-w-7/8">Your reliable web development and AI integration.</p> </div> <div> <h4 class="text-theme font-medium">Links</h4> <ul class="mt-4 space-y-2 *:text-sm"> <li>', "</li> <li>", "</li> <li>", "</li> <li>", "</li> <li>", '</li> </ul> </div> <div> <h4 class="text-theme font-medium">Legal</h4> <ul class="mt-4 space-y-2 *:text-sm"> <li>', "</li> <li>", '</li> </ul> </div> <div> <h4 class="text-theme font-medium">Contact</h4> <ul class="mt-4 space-y-2 *:text-sm"> <li>', "</li> <li>", '</li> </ul> </div> </div> <div class="pt-5 mt-8 text-center border-t border-zinc-800"> <p class="text-sm text-secondary">&copy; All rights reserved.</p> </div> </div> <div id="particles3" class="relative h-60"> <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#151515] via-[#151515]/80 via-95% to-transparent z-4"></div> </div> </footer> <script>\n  particlesJS.load(\'particles3\', `${base}/script/particlesjs-config.json`);\n<\/script>'], ["", '<footer class="relative z-1 background-default"> <div class="px-8 lg:px-40 2xl:px-80 xl:px-60 md:px-14"> <div class="pt-30 grid gap-8 grid-cols-2 sm:grid-cols-4 "> <div> <span class="text-primary font-semibold text-4xl"> <img', ' alt="lynx_logo" class="size-18"> </span> <p class="mt-4 text-secondary text-sm max-w-7/8">Your reliable web development and AI integration.</p> </div> <div> <h4 class="text-theme font-medium">Links</h4> <ul class="mt-4 space-y-2 *:text-sm"> <li>', "</li> <li>", "</li> <li>", "</li> <li>", "</li> <li>", '</li> </ul> </div> <div> <h4 class="text-theme font-medium">Legal</h4> <ul class="mt-4 space-y-2 *:text-sm"> <li>', "</li> <li>", '</li> </ul> </div> <div> <h4 class="text-theme font-medium">Contact</h4> <ul class="mt-4 space-y-2 *:text-sm"> <li>', "</li> <li>", '</li> </ul> </div> </div> <div class="pt-5 mt-8 text-center border-t border-zinc-800"> <p class="text-sm text-secondary">&copy; All rights reserved.</p> </div> </div> <div id="particles3" class="relative h-60"> <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#151515] via-[#151515]/80 via-95% to-transparent z-4"></div> </div> </footer> <script>\n  particlesJS.load(\'particles3\', \\`\\${base}/script/particlesjs-config.json\\`);\n<\/script>'])), maybeRenderHead(), addAttribute(lynx.src, "src"), renderComponent($$result, "Anchor", $$Anchor, { "href": "/" }, { "default": ($$result2) => renderTemplate`Home` }), renderComponent($$result, "Anchor", $$Anchor, { "href": "/services/web-development" }, { "default": ($$result2) => renderTemplate`Web Development` }), renderComponent($$result, "Anchor", $$Anchor, { "href": "/services/ai-integration" }, { "default": ($$result2) => renderTemplate`AI Integration` }), renderComponent($$result, "Anchor", $$Anchor, { "href": "/about" }, { "default": ($$result2) => renderTemplate`About Us` }), renderComponent($$result, "Anchor", $$Anchor, { "href": "/blog" }, { "default": ($$result2) => renderTemplate`Blog` }), renderComponent($$result, "Anchor", $$Anchor, { "href": "/privacy" }, { "default": ($$result2) => renderTemplate`Privacy Policy` }), renderComponent($$result, "Anchor", $$Anchor, { "href": "/terms" }, { "default": ($$result2) => renderTemplate`Terms of Service` }), renderComponent($$result, "Anchor", $$Anchor, { "href": "mailto:#" }, { "default": ($$result2) => renderTemplate`contact@xlynxai.com` }), renderComponent($$result, "Anchor", $$Anchor, { "href": "tel:+155512344321" }, { "default": ($$result2) => renderTemplate`+1 (555) 1234 4321` }));
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/Footer.astro", void 0);

const $$Astro$4 = createAstro();
const $$Bars3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Bars3;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/node_modules/.pnpm/astro-heroicons@2.1.5-1/node_modules/astro-heroicons/outline/Bars3.astro", void 0);

const $$Astro$3 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  const { fullWidth = false, freeBadge = false } = Astro2.props;
  const extraClasses = fullWidth ? "w-full" : "w-fit";
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`relative py-3 px-5 bg-gradient-to-br from-[#00B4FB] via-[#00B4FB] to-[#00B4FB]/40 rounded-full text-zinc-900 hover:-translate-y-1 transition-transform cursor-pointer ${extraClasses}`, "class")}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/ui/Button.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full top-0 background-default px-8 md:px-14 lg:px-40 xl:px-50 flex justify-between items-center py-2 z-2" data-astro-cid-5blmo7yk> <a href="/" class="text-primary font-semibold text-4xl" data-astro-cid-5blmo7yk> <img${addAttribute(lynx.src, "src")} alt="lynx_logo" class="size-12 sm:size-20" data-astro-cid-5blmo7yk> </a> <nav class="xl:flex items-center hidden" data-astro-cid-5blmo7yk> <ul class="text-secondary *:flex *:items-center flex gap-x-8 *:hover:text-zinc-100 z-1 relative" data-astro-cid-5blmo7yk> <li data-astro-cid-5blmo7yk>${renderComponent($$result, "Anchor", $$Anchor, { "href": "/", "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate`Home` })}</li> <li data-astro-cid-5blmo7yk>${renderComponent($$result, "Anchor", $$Anchor, { "href": "/services/web-development", "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate`Web Development` })}</li> <li data-astro-cid-5blmo7yk>${renderComponent($$result, "Anchor", $$Anchor, { "href": "/services/ai-integration", "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate`AI Integration` })}</li> <li data-astro-cid-5blmo7yk>${renderComponent($$result, "Anchor", $$Anchor, { "href": "/about", "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate`About us` })}</li> <li data-astro-cid-5blmo7yk>${renderComponent($$result, "Anchor", $$Anchor, { "href": "/blog", "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate`Blog` })}</li> <div class="*:text-nowrap *:w-full sm:*:w-auto relative mb-8 sm:mb-0" data-astro-cid-5blmo7yk> <a href="javascript:void(0)" data-cal-link="luis-roberto-leyva-galban-kze0qq/30min" data-cal-namespace="30min" data-cal-config="{&quot;layout&quot;:&quot;month_view&quot;}" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Button", $$Button, { "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate`SCHEDULE A MEETING` })} </a> </div></ul> </nav> <button class="cursor-pointer xl:hidden menu-show-btn" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Bars3", $$Bars3, { "width": 32, "color": "#fff", "data-astro-cid-5blmo7yk": true })} </button> </header>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/components/Navbar.astro", void 0);

const $$Astro$2 = createAstro();
const $$XMark = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$XMark;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path> </svg>`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/node_modules/.pnpm/astro-heroicons@2.1.5-1/node_modules/astro-heroicons/outline/XMark.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Users/jarndev/dev/xlynxai.vercel.app/node_modules/.pnpm/@vercel+analytics@1.5.0_react@19.1.1/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/node_modules/.pnpm/@vercel+analytics@1.5.0_react@19.1.1/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><meta name="generator"', "><title>", '</title><meta name="description"', '><meta name="keywords" content="web development, AI integration, business solutions, digital transformation"><meta property="og:title" content="XLynX AI | Web Development & AI Integration for Businesses"><meta property="og:description" content="Professional web development and AI integration services for businesses. Transform your digital presence with custom solutions."><meta property="og:type" content="website"><meta name="robots" content="index, follow"><meta name="author" content="XLynX AI"><link rel="canonical"', ">", `<!-- Cal element-click embed code begins --><script type="text/javascript">
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "30min", {origin:"https://app.cal.com"});

  
  // Important: Please add the following attributes to the element that should trigger the calendar to open upon clicking.
  // \`data-cal-link="luis-roberto-leyva-galban-kze0qq/30min"\`
  // data-cal-namespace="30min"
  // \`data-cal-config='{"layout":"month_view"}'\`

  Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
  <\/script><!-- Cal element-click embed code ends --><script src="/script/particles.min.js"><\/script><script>
      const base = location.origin;
      const PARTICLES_CONFIG_URL = \`\${base}/script/particlesjs-config.json\`;
    <\/script><link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet"><script type="module">
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

      createChat({
        webhookUrl: 'https://ai-agent-sms-wp-n8n.op1tus.easypanel.host/webhook/d7abf5ec-cdc9-426f-996f-e989abb7003c/chat',
        initialMessages: [
          "Hi there! \u{1F44B}",
          "I'm the XLynX AI assistant. I work for you 24 hours a day, 7 days a week. Would you like me to show you everything I can do?"
        ],
        i18n: {
          en: {
            title: "XLynX AI Assistant",
            subtitle: "Start a chat, test our systems, have fun."
          }
        },
        theme: {
          primaryColor: '#00B4FB'
        }
      });
    <\/script>`, '</head> <body class="background-default font-regular" data-astro-cid-sckkx6r4> <aside class="bg-zinc-800/90 p-8 flex flex-col backdrop-blur-sm fixed h-[100dvh] w-4/5 z-4 -right-full transition-all side-menu" data-astro-cid-sckkx6r4> <div class="flex justify-end" data-astro-cid-sckkx6r4> <button class="text-theme menu-hide-btn" data-astro-cid-sckkx6r4>', '</button> </div> <ul class="flex-1 text-lg font-medium space-y-3 *:*:!text-zinc-100 pt-2" data-astro-cid-sckkx6r4> <li data-astro-cid-sckkx6r4>', "</li> <li data-astro-cid-sckkx6r4> ", " </li> <li data-astro-cid-sckkx6r4>", "</li> <li data-astro-cid-sckkx6r4>", "</li> <li data-astro-cid-sckkx6r4>", '</li> </ul> <div class="*:w-full *:*:w-full" data-astro-cid-sckkx6r4> <div class="*:text-nowrap *:w-full sm:*:w-auto relative mb-8 sm:mb-0" data-astro-cid-sckkx6r4> <a href="javascript:void(0)" data-cal-link="luis-roberto-leyva-galban-kze0qq/30min" data-cal-namespace="30min" data-cal-config="{&quot;layout&quot;:&quot;month_view&quot;}" data-astro-cid-sckkx6r4> ', " </a> </div> </div></aside> ", " ", " ", "  ", "</body></html>"], ['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><meta name="generator"', "><title>", '</title><meta name="description"', '><meta name="keywords" content="web development, AI integration, business solutions, digital transformation"><meta property="og:title" content="XLynX AI | Web Development & AI Integration for Businesses"><meta property="og:description" content="Professional web development and AI integration services for businesses. Transform your digital presence with custom solutions."><meta property="og:type" content="website"><meta name="robots" content="index, follow"><meta name="author" content="XLynX AI"><link rel="canonical"', ">", `<!-- Cal element-click embed code begins --><script type="text/javascript">
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "30min", {origin:"https://app.cal.com"});

  
  // Important: Please add the following attributes to the element that should trigger the calendar to open upon clicking.
  // \\\`data-cal-link="luis-roberto-leyva-galban-kze0qq/30min"\\\`
  // data-cal-namespace="30min"
  // \\\`data-cal-config='{"layout":"month_view"}'\\\`

  Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
  <\/script><!-- Cal element-click embed code ends --><script src="/script/particles.min.js"><\/script><script>
      const base = location.origin;
      const PARTICLES_CONFIG_URL = \\\`\\\${base}/script/particlesjs-config.json\\\`;
    <\/script><link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet"><script type="module">
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

      createChat({
        webhookUrl: 'https://ai-agent-sms-wp-n8n.op1tus.easypanel.host/webhook/d7abf5ec-cdc9-426f-996f-e989abb7003c/chat',
        initialMessages: [
          "Hi there! \u{1F44B}",
          "I'm the XLynX AI assistant. I work for you 24 hours a day, 7 days a week. Would you like me to show you everything I can do?"
        ],
        i18n: {
          en: {
            title: "XLynX AI Assistant",
            subtitle: "Start a chat, test our systems, have fun."
          }
        },
        theme: {
          primaryColor: '#00B4FB'
        }
      });
    <\/script>`, '</head> <body class="background-default font-regular" data-astro-cid-sckkx6r4> <aside class="bg-zinc-800/90 p-8 flex flex-col backdrop-blur-sm fixed h-[100dvh] w-4/5 z-4 -right-full transition-all side-menu" data-astro-cid-sckkx6r4> <div class="flex justify-end" data-astro-cid-sckkx6r4> <button class="text-theme menu-hide-btn" data-astro-cid-sckkx6r4>', '</button> </div> <ul class="flex-1 text-lg font-medium space-y-3 *:*:!text-zinc-100 pt-2" data-astro-cid-sckkx6r4> <li data-astro-cid-sckkx6r4>', "</li> <li data-astro-cid-sckkx6r4> ", " </li> <li data-astro-cid-sckkx6r4>", "</li> <li data-astro-cid-sckkx6r4>", "</li> <li data-astro-cid-sckkx6r4>", '</li> </ul> <div class="*:w-full *:*:w-full" data-astro-cid-sckkx6r4> <div class="*:text-nowrap *:w-full sm:*:w-auto relative mb-8 sm:mb-0" data-astro-cid-sckkx6r4> <a href="javascript:void(0)" data-cal-link="luis-roberto-leyva-galban-kze0qq/30min" data-cal-namespace="30min" data-cal-config="{&quot;layout&quot;:&quot;month_view&quot;}" data-astro-cid-sckkx6r4> ', " </a> </div> </div></aside> ", " ", " ", "  ", "</body></html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(Astro2.url, "href"), renderComponent($$result, "Analytics", $$Index, { "data-astro-cid-sckkx6r4": true }), renderHead(), renderComponent($$result, "XMark", $$XMark, { "width": 28, "stroke-width": 3, "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "Anchor", $$Anchor, { "href": "/", "data-astro-cid-sckkx6r4": true }, { "default": ($$result2) => renderTemplate`Home` }), renderComponent($$result, "Anchor", $$Anchor, { "href": "/services/web-development", "data-astro-cid-sckkx6r4": true }, { "default": ($$result2) => renderTemplate`Web Development` }), renderComponent($$result, "Anchor", $$Anchor, { "href": "/services/ai-integration", "data-astro-cid-sckkx6r4": true }, { "default": ($$result2) => renderTemplate`AI Integration` }), renderComponent($$result, "Anchor", $$Anchor, { "href": "/about", "data-astro-cid-sckkx6r4": true }, { "default": ($$result2) => renderTemplate`About Us` }), renderComponent($$result, "Anchor", $$Anchor, { "href": "/blog", "data-astro-cid-sckkx6r4": true }, { "default": ($$result2) => renderTemplate`Blog` }), renderComponent($$result, "Button", $$Button, { "data-astro-cid-sckkx6r4": true }, { "default": ($$result2) => renderTemplate`SCHEDULE A MEETING` }), renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true }), renderScript($$result, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/jarndev/dev/xlynxai.vercel.app/src/layouts/Layout.astro", void 0);

export { $$Button as $, $$Layout as a, $$Anchor as b };

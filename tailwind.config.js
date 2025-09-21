import typography from '@tailwindcss/typography'
import twAnimate from 'tw-animate-css'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte,vue}'],
  theme: {
    extend: {},
  },
  plugins: [typography, twAnimate],
}

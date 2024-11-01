/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    fontFamily: {
      'serif': ['Zen Maru Gothic', 'serif'],
      'sans': ['Zen Maru Gothic', 'sans-serif'],
      'display': ['Lilita One', 'sans-serif']
    },
    extend: {
      aspectRatio: {
        'logo': '409 / 88'
      },
      textShadow: {
        sm: '0 1px 0 var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      backgroundImage: {
        'tile': "url('/pattern.jpeg')",
        'hero': "url('/bg.webp')",
        'checked-box': "url('/checked-box.svg')",
      },
      backgroundSize: {
        'tiny': '14rem'
      },
      colors: {
        'trusty-50': '#DCEAE8',
        'trusty-100': '#D0E7E3',
        'trusty-200': '#C1DFDA',
        'trusty-300': '#0A7065',
        'trusty-400': '#043B34',
        'trusty-500': '#02231E',
        'trusty-900': '#0B1412',
        'text-black': '#090909',
        'serenity': '#DAA520',
        'serenity-shade': '#BD9113'
      },
      container: {
        screens: {
          'xl': '1024px',
          '2xl': '1024px'
        }
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

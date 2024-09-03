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
      textShadow: {
        sm: '0 1px 0 var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      backgroundImage: {
        'tile': "url('./src/images/pattern.jpeg')",
        'hero': "url('./src/images/bg.png')"
      },
      backgroundSize: {
        'tiny': '14rem'
      },
      colors: {
        'trusty-50': '#D5E6E3',
        'trusty-100': '#C9E3DE',
        'trusty-200': '#9ED1C8',
        'trusty-300': '#0C8074',
        'trusty-400': '#083D34',
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

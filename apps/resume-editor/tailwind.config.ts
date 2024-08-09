import { nextui } from '@nextui-org/react';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        dot: "url('/assets/dots.svg')",
      },
      keyframes: {
        as: {
          '0%': { opacity: '0' },
          '10%': { opacity: '.3' },
          '20%': { opacity: '.1' },
          '30%': { opacity: '.5' },
          '40%': { opacity: '0' },
          '50%': { opacity: '.8' },
          '55%': { opacity: '0' },
        },
        asd: {
          '0%': { top: '-20%' },
          '100%': { top: '100%' },
        },
        asdd: {
          '0%': { textShadow: '0 0 30px rgba(0, 0, 0, .5)' },
          '33%': { textShadow: '0 0 10px rgba(0, 0, 0, .4)' },
          '66%': { textShadow: '0 0 20px rgba(0, 0, 0, .2)' },
          '100%': { textShadow: '0 0 40px rgba(0, 0, 0, .8)' },
        },
      },
      animation: {
        as: 'as 8s linear infinite',
        asd: 'asd 12s linear infinite',
        asdd: 'asdd 2s linear infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      // addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      // defaultTheme: 'light', // default theme from the themes object
      // defaultExtendTheme: 'light', // default theme to extend on custom themes
      // layout: {}, // common layout tokens (applied to all themes)
      // themes: {
      //   light: {
      //     layout: {
      //       disabledOpacity: '0.3', // opacity-[0.3]
      //       radius: {
      //         small: '2px', // rounded-small
      //         medium: '4px', // rounded-medium
      //         large: '6px', // rounded-large
      //       },
      //       borderWidth: {
      //         small: '1px', // border-small
      //         medium: '1px', // border-medium
      //         large: '2px', // border-large
      //       },
      //     }, // light theme layout tokens
      //     colors: {}, // light theme colors
      //   },
      //   dark: {
      //     layout: {}, // dark theme layout tokens
      //     colors: {}, // dark theme colors
      //   },
      // },
    }),
  ],
};
export default config;

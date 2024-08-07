import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gray-circle':
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3e%3ccircle fill='%23262626' id='pattern-circle' cx='10' cy='10' r='3'%3e%3c/circle%3e%3c/svg%3e\")",
        'blue-circle':
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3e%3ccircle fill='%236366f1' id='pattern-circle' cx='10' cy='10' r='3'%3e%3c/circle%3e%3c/svg%3e\")"
      }
    }
  },
  plugins: []
};
export default config;

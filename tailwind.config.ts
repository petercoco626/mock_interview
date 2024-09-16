import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'system-green-light': '#00BFBF',
        'system-green': '#007D7D',
        'system-green-dark': '#005C5C',
        'system-gray': '#CECECE',
      },
    },
  },
  plugins: [],
};
export default config;

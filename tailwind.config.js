/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    // sm 640px @media (min-width: 640px) { ... }
    // md 768px @media (min-width: 768px) { ... }
    // lg 1024px @media (min-width: 1024px) { ... }
    // xl 1280px @media (min-width: 1280px) { ... }
    // 2xl 1536px @media (min-width: 1536px) { ... }
    ...defaultTheme,
  },
  plugins: [],
};

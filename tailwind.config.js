/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:     '#f5f1e8',
          dark:   '#3d4f3d',
          medium: '#6b7c5d',
          accent: '#b8824f',
          footer: '#2a3a2a',
        },
      },
    },
  },
  plugins: [],
}

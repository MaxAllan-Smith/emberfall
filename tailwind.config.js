/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        ember: {
          orange: '#F97316',
          burnt: '#C2410C',
          red: '#991B1B',
          gold: '#D4A017',
          walnut: '#2A1810',
          brown: '#3B2418',
          charcoal: '#1C1410',
          parchment: '#E8D5B5',
          cream: '#F5E6CC',
        },
      },
      boxShadow: {
        ember: '0 0 30px rgba(249, 115, 22, 0.25)',
      },
    },
  },
  plugins: [],
}

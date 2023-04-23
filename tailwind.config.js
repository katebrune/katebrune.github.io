module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'hsl(0, 91%, 67%)',
        secondary: 'hsl(0, 5%, 85%)',
        textPrimary: 'hsl(0, 50%, 10%)',
        textSecondary: 'hsl(0, 50%, 99%)',
        backgroundSlate: 'hsl(0, 5%, 10%)',
        background: 'hsl(0, 50%, 99%)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn1s: 'fadeIn 1s ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        keyframes: {
            'fade-in-down': {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(-20px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0)'
                },
            }
        },
        animation: {
            'fade-in-down': 'fade-in-down 0.1s ease-in-out'
        },
        transitionTimingFunction: {
            'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
            'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
            'fast':'cubic-bezier(0.34, 1.61, 0.7, 1)'
          }
    },
},
variants: {},
plugins: [],
}
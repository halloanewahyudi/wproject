/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        primary: '#35977D',
        primary_hover: '#4FB297',
        primary_dark: '#0D2622',
        secondary: '#973580',
        seconday_hover: '#B6439E',
        seconsary_dark: '#421035',
        semilight: '#D5F2E7',
        light: '#F3FAF8',
        text_color: '#5a5050'
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'marque': 'move 10s linear infinity'
      },
      keyframes: {
        move: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      fontFamily: ['Plus Jakarta Sans', 'system-ui'],
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [],
}


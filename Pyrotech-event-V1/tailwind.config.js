/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          red: '#DC143C',
          'red-dark': '#8B0000',
          yellow: '#FFD700',
          'yellow-orange': '#FFA500',
          'yellow-bright': '#FFEB3B',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#CCCCCC',
          muted: '#999999',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'firework': 'firework 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(255, 215, 0, 0.6)',
            transform: 'scale(1.02)'
          },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        firework: {
          '0%': { 
            opacity: '1',
            transform: 'scale(0)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(1.2)',
          },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #DC143C 0%, #FFD700 100%)',
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

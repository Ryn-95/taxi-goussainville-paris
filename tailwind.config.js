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
        // Uber exact colors
        'uber-black': '#000000',
        'uber-white': '#FFFFFF',
        'uber-gray': '#F6F6F6',
        'uber-gray-dark': '#E2E2E2',
        'uber-gray-text': '#333333',
        'uber-gray-light': '#F8F8F8',
        'uber-green': '#05944F',
        'uber-blue': '#276EF1',
        // Taxi colors
        'taxi-yellow': '#FFD700',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        'uber-xs': ['12px', '16px'],
        'uber-sm': ['14px', '20px'],
        'uber-base': ['16px', '24px'],
        'uber-lg': ['18px', '28px'],
        'uber-xl': ['20px', '32px'],
        'uber-2xl': ['24px', '36px'],
        'uber-3xl': ['28px', '40px'],
        'uber-4xl': ['36px', '52px'],
        'uber-5xl': ['48px', '64px'],
        'uber-6xl': ['60px', '80px'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'uber': '0 2px 8px rgba(0,0,0,0.1)',
        'uber-lg': '0 8px 24px rgba(0,0,0,0.12)',
        'uber-xl': '0 16px 32px rgba(0,0,0,0.16)',
      },
      borderRadius: {
        'uber': '8px',
        'uber-lg': '12px',
        'uber-xl': '16px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'gradient': 'gradient 6s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'system-ui', '-apple-system', 'Segoe UI', 'Tahoma', 'Arial', 'sans-serif'],
        display: ['Cairo', 'Tajawal', 'system-ui', 'Segoe UI', 'Tahoma', 'Arial', 'sans-serif'],
      },
      colors: {
        saud: {
          50: '#ecfdf3',
          100: '#d1fae0',
          200: '#a7f3c5',
          300: '#6ee7a3',
          400: '#34d27c',
          500: '#12a85a',
          600: '#0b7a3b',
          700: '#0a6332',
          800: '#0a4f2a',
          900: '#063d22',
        },
      },
      boxShadow: {
        glow: '0 10px 40px -10px rgba(11,122,59,0.45)',
        'glow-lg': '0 20px 60px -15px rgba(11,122,59,0.4)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(-2deg)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        spinSlow: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        spinSlow: 'spinSlow 30s linear infinite',
      },
    },
  },
  plugins: [],
};

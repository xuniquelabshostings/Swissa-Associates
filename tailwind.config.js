/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-ink': '#0B2545',
        'sky-ink-deep': '#071A33',
        'brass': '#C89B3C',
        'brass-soft': '#E0BE72',
        'cloud': '#F5F4EF',
        'dune': '#D8C7A1',
        'ink': '#10161F',
        'ink-soft': '#4A5568',
        'whatsapp-green': '#25D366',
        'line-gold': 'rgba(200, 155, 60, 0.25)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'brass-glow': '0 0 25px rgba(200, 155, 60, 0.25)',
        'brass-sm': '0 0 10px rgba(200, 155, 60, 0.2)',
        'flight-card': '0 10px 30px -10px rgba(7, 26, 51, 0.15)',
        'card-hover': '0 20px 35px -10px rgba(7, 26, 51, 0.2), 0 0 15px rgba(200, 155, 60, 0.2)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 18s linear infinite',
        'bounce-subtle': 'bounceSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 4px rgba(200, 155, 60, 0.3))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 14px rgba(200, 155, 60, 0.8))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      }
    },
  },
  plugins: [],
}

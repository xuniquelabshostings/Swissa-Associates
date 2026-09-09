/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-ink': '#0F172A',
        'sky-ink-deep': '#020617',
        'brass': '#B45309',
        'brass-soft': '#D97706',
        'cloud': '#F8FAFC',
        'dune': '#E2E8F0',
        'ink': '#0F172A',
        'ink-soft': '#475569',
        'whatsapp-green': '#16A34A',
        'line-gold': 'rgba(180, 83, 9, 0.25)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'brass-glow': '0 0 20px rgba(180, 83, 9, 0.2)',
        'brass-sm': '0 0 8px rgba(180, 83, 9, 0.15)',
        'flight-card': '0 10px 30px -10px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 20px 35px -10px rgba(15, 23, 42, 0.1), 0 0 15px rgba(180, 83, 9, 0.1)',
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Archivo', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        bg: '#070d18',
        surface: '#0e1829',
        border: '#1a2a42',
        fg: {
          DEFAULT: '#e8eef8',
          muted: '#8494ad',
        },
        accent: {
          DEFAULT: '#00e5ff',
          soft: '#67f0ff',
          dim: '#00b8d4',
        },
        teal: {
          glow: '#3b82f6',
        },
        cyan: {
          glow: '#60a5fa',
        },
      },
    },
  },
  plugins: [],
};

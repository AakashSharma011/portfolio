/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        bg2: '#080808',
        bg3: '#0f0f0f',
        bg4: '#141414',
        cyan: { DEFAULT: '#00d4ff', dark: '#00a8cc' },
        violet: { DEFAULT: '#a78bfa', dark: '#7c3aed' },
        amber: { DEFAULT: '#f59e0b' },
        t1: '#ffffff',
        t2: '#a1a1aa',
        t3: '#3f3f46',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

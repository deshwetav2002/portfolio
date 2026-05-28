/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black':   '#050508',
        'cyber-dark':    '#0a0a12',
        'cyber-navy':    '#0d0d1a',
        'neon-cyan':     '#00f5ff',
        'neon-blue':     '#0066ff',
        'neon-purple':   '#7c3aed',
        'neon-pink':     '#ff0080',
        'neon-green':    '#00ff88',
        'glass-white':   'rgba(255,255,255,0.05)',
        'glass-border':  'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        'display':  ['var(--font-display)', 'serif'],
        'mono':     ['var(--font-mono)', 'monospace'],
        'body':     ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'glow-pulse':    'glowPulse 3s ease-in-out infinite',
        'float':         'float 6s ease-in-out infinite',
        'scan-line':     'scanLine 4s linear infinite',
        'border-glow':   'borderGlow 2s ease-in-out infinite alternate',
        'particle-drift':'particleDrift 8s ease-in-out infinite',
        'text-shimmer':  'textShimmer 3s ease-in-out infinite',
        'spin-slow':     'spin 20s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 20px rgba(0,245,255,0.3), 0 0 40px rgba(0,245,255,0.1)' },
          '50%':     { boxShadow: '0 0 40px rgba(0,245,255,0.6), 0 0 80px rgba(0,245,255,0.2)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-20px)' },
        },
        scanLine: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        borderGlow: {
          '0%':   { borderColor: 'rgba(0,245,255,0.3)' },
          '100%': { borderColor: 'rgba(0,245,255,0.9)' },
        },
        particleDrift: {
          '0%,100%': { transform: 'translate(0,0) scale(1)',   opacity: 0.6 },
          '33%':     { transform: 'translate(20px,-30px) scale(1.1)', opacity: 1 },
          '66%':     { transform: 'translate(-15px,20px) scale(0.9)', opacity: 0.4 },
        },
        textShimmer: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'cyber-grid':     'linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)',
        'radial-glow':    'radial-gradient(ellipse at center, rgba(0,102,255,0.15) 0%, transparent 70%)',
        'hero-gradient':  'linear-gradient(135deg, #050508 0%, #0a0a1a 50%, #050508 100%)',
        'neon-gradient':  'linear-gradient(90deg, #00f5ff, #0066ff, #7c3aed, #ff0080)',
        'card-gradient':  'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
    },
  },
  plugins: [],
}

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

/* ─── Konami Code Easter Egg ──────────────────────────────── */
const KONAMI = [
  'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
  'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
  'b','a',
]

export default function Footer() {
  const [konami, setKonami]       = useState([])
  const [easterEgg, setEasterEgg] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      setKonami(prev => {
        const next = [...prev, e.key].slice(-KONAMI.length)
        if (JSON.stringify(next) === JSON.stringify(KONAMI)) {
          setEasterEgg(true)
          setTimeout(() => setEasterEgg(false), 3000)
        }
        return next
      })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {/* Easter egg overlay */}
      <AnimatePresence>
        {easterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-cyber-black/95 pointer-events-none"
          >
            <div className="text-center konami-flash">
              <p className="font-display text-6xl text-neon-cyan glow-text mb-4">🎮</p>
              <h2 className="font-display text-3xl font-black gradient-text mb-2">KONAMI CODE!</h2>
              <p className="font-mono text-neon-cyan text-sm tracking-widest">YOU FOUND THE SECRET!</p>
              <p className="font-mono text-slate-400 text-xs mt-2">+30 Lives Granted 😄</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="relative bg-cyber-black border-t border-glass-border py-12">
        <div className="absolute inset-0 cyber-grid-bg opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-neon-cyan/40 rounded flex items-center justify-center">
                <span className="font-display text-xs font-black text-neon-cyan/80">SD</span>
              </div>
              <span className="font-mono text-xs text-slate-500 tracking-wider">
                © {new Date().getFullYear()} Shwetav De
              </span>
            </div>

            {/* Center: copyright */}
            <p className="font-mono text-[10px] text-slate-600 tracking-wider text-center flex items-center gap-2">
              Built with <FaHeart className="text-neon-pink text-xs" /> using Next.js + Framer Motion
            </p>

            {/* Right: Social + Back to top */}
            <div className="flex items-center gap-4">
              <a href="https://github.com/shwetavde"   target="_blank" rel="noopener noreferrer"
                 className="text-slate-500 hover:text-neon-cyan transition-colors">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://linkedin.com/in/shwetavde" target="_blank" rel="noopener noreferrer"
                 className="text-slate-500 hover:text-neon-cyan transition-colors">
                <FaLinkedin className="text-lg" />
              </a>
              <Link to="hero" smooth duration={800}>
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-full border border-neon-cyan/30 flex items-center justify-center
                             text-neon-cyan/60 hover:text-neon-cyan hover:border-neon-cyan transition-all"
                >
                  <HiArrowUp className="text-sm" />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Easter egg hint */}
          <p className="text-center font-mono text-[9px] text-slate-700 mt-8 tracking-widest select-none">
            ↑↑↓↓←→←→BA — you know what to do 😉
          </p>
        </div>
      </footer>
    </>
  )
}

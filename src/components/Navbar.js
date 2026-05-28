'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'

const navItems = [
  { label: 'Home',       to: 'hero' },
  { label: 'About',      to: 'about' },
  { label: 'Skills',     to: 'skills' },
  { label: 'Projects',   to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact',    to: 'contact' },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active,     setActive]     = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cyber-black/80 backdrop-blur-xl border-b border-glass-border py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="hero" smooth duration={800} className="cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 border border-neon-cyan rounded flex items-center justify-center">
                <span className="font-display text-xs font-black text-neon-cyan">SD</span>
              </div>
              <span className="font-mono text-xs tracking-[0.2em] text-white/70 uppercase hidden sm:block">
                Shwetav.dev
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth
                  duration={800}
                  spy
                  onSetActive={() => setActive(item.to)}
                  className={`nav-link cursor-pointer ${active === item.to ? 'active' : ''}`}
                >
    
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="/resume.pdf"
            download
            className="hidden md:block btn-neon text-xs py-2 px-4"
          >
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-neon-cyan origin-center transition-all"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-neon-cyan"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-neon-cyan origin-center transition-all"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-cyber-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <Link
                  to={item.to}
                  smooth
                  duration={800}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-2xl text-white hover:text-neon-cyan transition-colors cursor-pointer tracking-widest uppercase"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <a
              href="/resume.pdf"
              download
              className="btn-neon mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

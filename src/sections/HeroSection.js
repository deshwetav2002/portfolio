'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import {
  FaGithub, FaLinkedin, FaTwitter, FaInstagram,
} from 'react-icons/fa'
import { HiDownload, HiArrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll'

const SOCIAL = [
  { icon: FaGithub,   href: 'https://github.com/deshwetav2002',   label: 'GitHub' },
  { icon: FaLinkedin, href: 'http://www.linkedin.com/in/shwetav-de-518aa8293', label: 'LinkedIn' }
]

/* ─── Particle Canvas ──────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = canvas.width  = window.innerWidth
    let H = canvas.height = window.innerHeight
    let rafId

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.6 ? '#00f5ff' : Math.random() > 0.5 ? '#0066ff' : '#7c3aed',
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
      })
      // Draw connecting lines
      ctx.globalAlpha = 1
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(0,245,255,${0.06 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      rafId = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', onResize) }
  }, [])

  return <canvas ref={canvasRef} id="particle-canvas" />
}

/* ─── Hero Section ─────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-black"
    >
      {/* Layers */}
      <div className="absolute inset-0 cyber-grid-bg" />
      <div className="absolute inset-0 bg-radial-glow" />
      <ParticleCanvas />
      <div className="scan-overlay" />

      {/* Radial gradient center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.3) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div className="order-2 lg:order-1">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-neon-cyan" style={{ boxShadow: '0 0 6px #00f5ff' }} />
            <span className="font-mono text-xs text-neon-cyan tracking-[0.3em] uppercase">
              Available for work
            </span>
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="font-display text-5xl md:text-7xl font-black text-white leading-none mb-2 tracking-tight"
          >
            SHWETAV
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="font-display text-5xl md:text-7xl font-black gradient-text leading-none mb-6 tracking-tight"
          >
            DE
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-slate-400 font-mono text-sm">{'>'}</span>
            <span className="font-mono text-lg md:text-xl text-neon-cyan glow-text">
              <TypeAnimation
                sequence={[
                  'AI Developer', 2000,
                  'Python Programmer', 2000,
                  'Full Stack Developer', 2000,
                  'ML Enthusiast', 2000,
                  'Problem Solver', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-slate-400 font-body text-base md:text-lg leading-relaxed mb-10 max-w-lg"
          >
            Final-year CS student building AI-powered applications — from conversational RAG
            pipelines to voice assistants. Passionate about turning complex problems into
            elegant, intelligent solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <Link to="projects" smooth duration={800}>
              <button className="btn-filled flex items-center gap-2">
                View Projects
              </button>
            </Link>
            <a
              href="/resume.pdf"
              download
              className="btn-neon flex items-center gap-2"
            >
              <HiDownload className="text-base" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex items-center gap-5"
          >
            {SOCIAL.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.08 }}
                className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center
                           text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/40
                           transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)]"
              >
                <Icon className="text-lg" />
              </motion.a>
            ))}
            <div className="h-px w-12 bg-glass-border ml-2" />
            <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">Follow me</span>
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-6 rounded-full border border-dashed border-neon-cyan/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-12 rounded-full border border-dashed border-neon-purple/10"
            />

            {/* Glow */}
            <div
              className="absolute -inset-4 rounded-full blur-xl opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.4) 0%, rgba(0,102,255,0.2) 50%, transparent 100%)' }}
            />

            {/* Spinning gradient border */}
            <div className="profile-glow">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative border-2 border-transparent bg-cyber-dark">
                {/* 
                  ┌──────────────────────────────────────────────────────────────────┐
                  │ INSTRUCTIONS: Replace the src below with your actual photo path. │
                  │ Place your photo at: public/images/profile.jpg                   │
                  └──────────────────────────────────────────────────────────────────┘
                */}
                <Image
                  src="/images/profile.jpg"
                  alt="Shwetav De"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-card px-3 py-2 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="font-mono text-[10px] text-neon-green tracking-wider">OPEN TO WORK</span>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 glass-card px-3 py-2"
            >
              <p className="font-mono text-[10px] text-neon-cyan tracking-wider">AI / ML DEVELOPER</p>
              <p className="font-mono text-[9px] text-slate-500">Kolkata, India</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-slate-500 tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiArrowDown className="text-neon-cyan/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

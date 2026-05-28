'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ isLoaded }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100 }
        return prev + Math.random() * 12
      })
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 cyber-grid-bg opacity-30" />
          
          {/* Corner decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-neon-cyan opacity-40" />
          <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-neon-cyan opacity-40" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-neon-cyan opacity-40" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-neon-cyan opacity-40" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo / Monogram */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'backOut' }}
              className="relative"
            >
              <div className="w-20 h-20 border border-neon-cyan rounded-full flex items-center justify-center animate-glow-pulse">
                <span className="font-display text-2xl font-black text-neon-cyan glow-text">SD</span>
              </div>
              <div className="absolute inset-0 rounded-full border border-neon-cyan opacity-30 animate-ping" />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <p className="font-mono text-xs text-neon-cyan tracking-[0.3em] uppercase mb-1">
                Initializing Portfolio
              </p>
              <h1 className="font-display text-xl font-black text-white tracking-widest">
                SHWETAV DE
              </h1>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-48"
            >
              <div className="loading-bar">
                <motion.div
                  className="loading-bar-fill"
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <p className="font-mono text-[10px] text-neon-cyan/50 text-center mt-2 tracking-widest">
                {Math.min(Math.floor(progress), 100)}%
              </p>
            </motion.div>

            {/* Status text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
              className="font-mono text-[10px] text-neon-cyan/40 tracking-[0.25em] uppercase"
            >
              Loading experience...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionTitle({ label, title, subtitle }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="text-center mb-16"
    >
      <motion.p
        initial={{ opacity: 0, letterSpacing: '0.1em' }}
        animate={inView ? { opacity: 1, letterSpacing: '0.4em' } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-mono text-xs text-neon-cyan/70 uppercase tracking-[0.4em] mb-4"
      >
        {label}
      </motion.p>

      <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-4">
        {title.split(' ').map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            className="inline-block mr-3"
          >
            {i % 2 === 1 ? (
              <span className="gradient-text">{word}</span>
            ) : word}
          </motion.span>
        ))}
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-slate-400 max-w-xl mx-auto font-body text-base"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="h-px w-32 mx-auto mt-6 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
        style={{ boxShadow: '0 0 8px rgba(0,245,255,0.4)' }}
      />
    </motion.div>
  )
}

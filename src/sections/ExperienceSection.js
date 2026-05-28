'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../components/SectionTitle'
import { HiDownload, HiAcademicCap, HiBadgeCheck, HiX, HiExternalLink } from 'react-icons/hi'

const EDUCATION = [
  {
    degree: 'B.Tech — Computer Science & Business Systems',
    institution: 'Techno Main Saltlake, Kolkata',
    period: 'Sept 2022 – Jun 2026 (Expected)',
    grade: 'CGPA: 7.0 / 10',
    courses: ['Data Structures & Algorithms', 'DBMS', 'Machine Learning', 'Operating Systems', 'Computer Networks'],
    color: '#00f5ff',
  },
  {
    degree: 'Senior Secondary (Class XII)',
    institution: 'CBSE Board',
    period: '2022',
    grade: 'Score: 90%',
    courses: [],
    color: '#0066ff',
  },
  {
    degree: 'Secondary (Class X)',
    institution: 'CBSE Board',
    period: '2020',
    grade: 'Score: 86.28%',
    courses: [],
    color: '#7c3aed',
  },
]

const CERTIFICATIONS = [
  {
    name: 'Introduction to Machine Learning',
    issuer: 'NPTEL — IIT Madras',
    period: 'Jul – Oct 2025',
    icon: '🏆',
    color: '#00f5ff',
    // Place your certificate PDF at: public/certificates/nptel-ml.pdf
    pdfPath: '/certificates/nptel-ml.pdf',
  },
]

/* ── Certificate PDF Viewer Modal ──────────────────────────── */
function CertModal({ cert, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          className="w-full max-w-4xl max-h-[90vh] flex flex-col"
          style={{
            background: 'rgba(10,10,18,0.95)',
            border: `1px solid ${cert.color}30`,
            borderRadius: '16px',
            boxShadow: `0 0 60px ${cert.color}15`,
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{ borderColor: `${cert.color}18` }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
              >
                {cert.icon}
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-white tracking-wide">{cert.name}</h3>
                <p className="font-mono text-[10px]" style={{ color: cert.color }}>{cert.issuer} · {cert.period}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Open in new tab */}
              <a
                href={cert.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-[10px] px-3 py-1.5 rounded transition-all"
                style={{
                  border: `1px solid ${cert.color}30`,
                  color: cert.color,
                  background: `${cert.color}08`,
                }}
              >
                <HiExternalLink className="text-sm" /> Open
              </a>
              {/* Download */}
              <a
                href={cert.pdfPath}
                download
                className="flex items-center gap-1.5 font-mono text-[10px] px-3 py-1.5 rounded transition-all"
                style={{
                  border: `1px solid ${cert.color}30`,
                  color: cert.color,
                  background: `${cert.color}08`,
                }}
              >
                <HiDownload className="text-sm" /> Download
              </a>
              {/* Close */}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#64748b' }}
                onMouseEnter={e => { e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='rgba(255,255,255,0.2)' }}
                onMouseLeave={e => { e.currentTarget.style.color='#64748b'; e.currentTarget.style.borderColor='rgba(255,255,255,0.08)' }}
              >
                <HiX className="text-base" />
              </button>
            </div>
          </div>

          {/* PDF Embed */}
          <div className="flex-1 p-2 overflow-hidden" style={{ minHeight: '500px' }}>
            <iframe
              src={`${cert.pdfPath}#view=FitH`}
              title={`${cert.name} Certificate`}
              className="w-full h-full rounded-lg"
              style={{
                minHeight: '500px',
                border: `1px solid ${cert.color}12`,
                background: '#fff',
              }}
            />
          </div>

          {/* Footer hint */}
          <div className="px-6 py-3 text-center">
            <p className="font-mono text-[9px] text-slate-600 tracking-widest">
              Click outside or press ESC to close
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

/* ── EduCard ──────────────────────────────────────────────────── */
function EduCard({ item, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="glass-card p-6 relative overflow-hidden"
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5"
        style={{ background: item.color, boxShadow: `0 0 12px ${item.color}60` }}
      />
      <div className="pl-3">
        <div className="flex items-start justify-between mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
          >
            <HiAcademicCap style={{ color: item.color }} className="text-xl" />
          </div>
          <span
            className="font-mono text-xs px-2 py-1 rounded"
            style={{ color: item.color, background: `${item.color}10`, border: `1px solid ${item.color}25` }}
          >
            {item.grade}
          </span>
        </div>
        <h3 className="font-display text-sm font-bold text-white mb-1 tracking-wide">{item.degree}</h3>
        <p className="font-mono text-xs mb-1" style={{ color: item.color }}>{item.institution}</p>
        <p className="font-mono text-[10px] text-slate-500 mb-4">{item.period}</p>
        {item.courses.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {item.courses.map(c => (
              <span key={c} className="tech-badge text-[9px] py-0.5 px-2">{c}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

/* ── CertCard ─────────────────────────────────────────────────── */
function CertCard({ cert, index }) {
  const [open, setOpen] = useState(false)

  // Close on Escape key
  const handleKeyDown = e => { if (e.key === 'Escape') setOpen(false) }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => setOpen(true)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`View ${cert.name} certificate`}
        className="glass-card p-5 flex items-start gap-4 cursor-pointer group relative overflow-hidden"
        style={{ border: `1px solid ${cert.color}15` }}
        whileHover={{ borderColor: `${cert.color}40`, y: -3 }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: `radial-gradient(circle at 20% 50%, ${cert.color}06, transparent 60%)` }}
        />

        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
          style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
        >
          {cert.icon}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-body font-semibold text-white text-sm mb-1">{cert.name}</h4>
          <p className="font-mono text-xs" style={{ color: cert.color }}>{cert.issuer}</p>
          <p className="font-mono text-[10px] text-slate-500 mt-1">{cert.period}</p>

          {/* Click to view hint */}
          <p
            className="font-mono text-[9px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
            style={{ color: cert.color }}
          >
            <HiExternalLink className="text-xs" /> Click to view certificate
          </p>
        </div>

        <HiBadgeCheck className="text-neon-green text-xl shrink-0 mt-1" />
      </motion.div>

      {/* Modal */}
      {open && <CertModal cert={cert} onClose={() => setOpen(false)} />}
    </>
  )
}

/* ── ExperienceSection ────────────────────────────────────────── */
export default function ExperienceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="section-padding relative bg-cyber-black">
      <div className="absolute inset-0 cyber-grid-bg" />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-5 rounded-full"
        style={{ background: 'radial-gradient(ellipse, var(--color-blue) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          label="My Journey"
          title="Education & Credentials"
          subtitle="Academic background and professional certifications that shaped my expertise."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-neon-cyan tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-neon-cyan" />
              Education
            </motion.h3>
            <div className="space-y-4">
              {EDUCATION.map((item, i) => (
                <EduCard key={item.degree} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Certs + Resume */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-neon-cyan tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-neon-cyan" />
              Certifications
            </motion.h3>

            <div className="space-y-4 mb-8">
              {CERTIFICATIONS.map((cert, i) => (
                <CertCard key={cert.name} cert={cert} index={i} />
              ))}
            </div>

            {/* Resume CTA */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass-card p-8 text-center relative overflow-hidden"
              style={{ border: '1px solid rgba(0,245,255,0.15)' }}
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{ background: 'radial-gradient(circle at center, var(--color-cyan), transparent 70%)' }}
              />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full border border-neon-cyan/30 flex items-center justify-center animate-glow-pulse">
                  <HiDownload className="text-neon-cyan text-2xl" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2 tracking-wide">
                  Get My Resume
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  Download my full CV with detailed experience, projects, and skills.
                </p>
                <a
                  href="/resume.pdf"
                  download
                  className="btn-filled inline-flex items-center gap-2"
                >
                  <HiDownload /> Download CV
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

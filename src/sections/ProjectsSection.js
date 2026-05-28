'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../components/SectionTitle'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const PROJECTS = [
  {
    id: 1,
    title: 'Jarvis — AI Voice Assistant',
    desc: 'A fully functional voice-activated AI assistant powered by OpenAI\'s Arcee-Trinity LLM. Supports web browsing, music playback, real-time news fetching, and NLP-based Q&A.',
    tags: ['Python', 'OpenAI API', 'Speech Recognition', 'TTS', 'Generative AI'],
    github: 'https://github.com/shwetavde',
    demo: null,
    accent: '#00f5ff',
    icon: '🤖',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'YouTube Video Q&A — RAG System',
    desc: 'End-to-end conversational RAG pipeline that ingests YouTube transcripts and answers questions grounded strictly in video content. Features multi-turn memory and hallucination prevention.',
    tags: ['LangChain', 'HuggingFace', 'FAISS', 'Python', 'RAG'],
    github: 'https://github.com/shwetavde',
    demo: null,
    accent: '#7c3aed',
    icon: '🎬',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'ReplyGenie — AI Auto-Reply Chatbot',
    desc: 'Intelligent chatbot that analyzes conversation history and auto-generates contextual persona-driven responses using GPT-3.5-turbo. Custom AI persona with consistent tone.',
    tags: ['Python', 'GPT-3.5-turbo', 'OpenAI API', 'Prompt Engineering'],
    github: 'https://github.com/shwetavde',
    demo: null,
    accent: '#ff0080',
    icon: '💬',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'Weather Application',
    desc: 'Responsive, mobile-friendly web app that fetches and displays real-time weather data via REST API. Features dynamic UI updates, error handling, and smooth animations.',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    github: 'https://github.com/shwetavde',
    demo: null,
    accent: '#00ff88',
    icon: '🌤️',
    status: 'Completed',
  },
  {
    id: 5,
    title: 'Customer Segmentation — ML',
    desc: 'Applied K-Means clustering and data preprocessing to segment customers based on purchasing behavior. Includes EDA, cluster visualization, and actionable business insights.',
    tags: ['Python', 'Scikit-learn', 'K-Means', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/shwetavde',
    demo: null,
    accent: '#0066ff',
    icon: '📊',
    status: 'Completed',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    desc: 'This premium futuristic portfolio — built with Next.js, Framer Motion, Three.js, and Tailwind CSS. Features cinematic animations, 3D effects, and a cyberpunk aesthetic.',
    tags: ['Next.js', 'Framer Motion', 'Three.js', 'Tailwind CSS', 'GSAP'],
    github: 'https://github.com/shwetavde',
    demo: '#',
    accent: '#00f5ff',
    icon: '🌐',
    status: 'Live',
  },
]

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect  = card.getBoundingClientRect()
    const cx    = rect.left + rect.width  / 2
    const cy    = rect.top  + rect.height / 2
    const dx    = (e.clientX - cx) / (rect.width  / 2)
    const dy    = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: dy * -8, y: dx * 8 })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
        className="glass-card p-6 h-full flex flex-col group cursor-default"
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}30` }}
          >
            {project.icon}
          </div>
          <div className="flex items-center gap-2">
            <span
              className="font-mono text-[9px] px-2 py-1 rounded-full"
              style={{
                color: project.status === 'Live' ? '#00ff88' : project.accent,
                background: project.status === 'Live' ? 'rgba(0,255,136,0.1)' : `${project.accent}10`,
                border: `1px solid ${project.status === 'Live' ? '#00ff8840' : project.accent + '30'}`,
              }}
            >
              {project.status === 'Live' ? '● LIVE' : '✓ DONE'}
            </span>
          </div>
        </div>

        {/* Content */}
        <h3
          className="font-display text-base font-bold text-white mb-3 tracking-wide group-hover:transition-colors"
          style={{ '--accent': project.accent }}
        >
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="tech-badge" style={{ color: project.accent, borderColor: `${project.accent}30`, background: `${project.accent}08` }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-glass-border">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-white transition-colors"
          >
            <FaGithub className="text-base" /> GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs hover:opacity-80 transition-opacity ml-auto"
              style={{ color: project.accent }}
            >
              Live Demo <FaExternalLinkAlt className="text-xs" />
            </a>
          )}
        </div>

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}08, transparent 70%)` }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative bg-cyber-dark">
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />
      <div
        className="absolute right-0 top-1/4 w-96 h-96 opacity-10 rounded-full"
        style={{ background: 'radial-gradient(circle, var(--color-pink) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          label="What I've Built"
          title="Featured Projects"
          subtitle="A collection of AI-powered applications and software projects I've shipped."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/shwetavde"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center gap-2"
          >
            <FaGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

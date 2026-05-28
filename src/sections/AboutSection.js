'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../components/SectionTitle'

const STATS = [
  { value: '10+', label: 'Projects Built' },
  { value: '4+',  label: 'AI/ML Projects' },
  { value: '5+',  label: 'Technologies' },
  { value: '7.0', label: 'CGPA / 10.0' },
]

const TIMELINE = [
  {
    year: '2026',
    title: 'Final Year — B.Tech CSE',
    org: 'Techno Main Saltlake, Kolkata',
    desc: 'Completing Computer Science & Business Systems. Focused on AI/ML, building production-grade projects, and actively exploring opportunities in the AI space.',
    color: 'var(--color-cyan)',
  },
  {
    year: '2025',
    title: 'ML Certification',
    org: 'NPTEL — IIT Madras',
    desc: 'Completed Introduction to Machine Learning from IIT Madras via NPTEL, deepening understanding of algorithms, model evaluation, and practical ML applications.',
    color: 'var(--color-blue)',
  },
  {
    year: '2024',
    title: 'AI Project Development',
    org: 'Self-Directed',
    desc: 'Built Jarvis AI Voice Assistant, ReplyGenie Chatbot, and YouTube RAG Q&A system. Gained deep experience with LangChain, OpenAI APIs, HuggingFace, and FAISS.',
    color: 'var(--color-purple)',
  },
  {
    year: '2022',
    title: 'Started B.Tech',
    org: 'Techno Main Saltlake, Kolkata',
    desc: 'Began Bachelor of Technology in Computer Science & Business Systems. Dove deep into Data Structures, Algorithms, DBMS, and foundational programming.',
    color: 'var(--color-pink)',
  },
]

function TimelineItem({ item, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.76, 0, 0.24, 1] }}
      className="relative pl-16 pb-10"
    >
      {/* Dot */}
      <div
        className="absolute left-[18px] top-1 w-3 h-3 rounded-full border-2 z-10"
        style={{
          borderColor: item.color,
          boxShadow: `0 0 12px ${item.color}60`,
          backgroundColor: 'var(--color-bg)',
        }}
      />

      {/* Year badge */}
      <span
        className="font-mono text-xs mb-2 block"
        style={{ color: item.color }}
      >
        {item.year}
      </span>

      <div className="glass-card p-5">
        <h3 className="font-display text-base font-bold text-white mb-1 tracking-wide">
          {item.title}
        </h3>
        <p className="font-mono text-xs mb-3" style={{ color: item.color }}>
          {item.org}
        </p>
        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  )
}

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="section-padding relative bg-cyber-dark">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-50" />
      <div
        className="absolute right-0 top-0 w-96 h-96 opacity-10 rounded-full"
        style={{ background: 'radial-gradient(circle, var(--color-purple) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          label="Who I Am"
          title="About Me"
          subtitle="A passionate developer at the intersection of AI, software engineering, and creativity."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio + Stats */}
          <div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="space-y-5 mb-10"
            >
              {[
                "I'm Shwetav De, a final-year Computer Science & Business Systems student at Techno Main Saltlake, Kolkata. My passion lies at the intersection of Artificial Intelligence and software development.",
                "I specialize in building AI-powered applications — from conversational RAG systems and voice assistants to ML pipelines. I love turning research-level ideas into working products.",
                "When I'm not coding, I'm exploring the latest advancements in LLMs, experimenting with new frameworks, and contributing to open-source projects. My goal is to join a forward-thinking team where I can build AI tools that genuinely matter.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className="text-slate-400 leading-relaxed text-base"
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="glass-card p-5 text-center"
                >
                  <p className="font-display text-3xl font-black gradient-text mb-1">{stat.value}</p>
                  <p className="font-mono text-[10px] text-slate-400 tracking-widest uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="relative">
            <div className="timeline-line" />
            {TIMELINE.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

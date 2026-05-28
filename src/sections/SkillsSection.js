'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../components/SectionTitle'
import {
  SiPython, SiJavascript, SiReact, SiStreamlit,
  SiOpenai, SiMysql, SiGithub, SiHtml5,
  SiLangchain, SiDocker,
  SiHuggingface,
  SiVectorworks,
} from 'react-icons/si'
import { FaBrain, FaServer, FaVectorSquare } from 'react-icons/fa'

const SKILL_BARS = [
  { name: 'Python',          level: 90, color: '#00f5ff' },
  { name: 'JavaScript',      level: 75, color: '#0066ff' },
  { name: 'AI / ML',         level: 82, color: '#7c3aed' },
  { name: 'LangChain / RAG', level: 78, color: '#ff0080' },
  { name: 'OpenAI APIs',     level: 85, color: '#00ff88' },
  { name: 'Database / MySQL',    level: 72, color: '#00f5ff' },
  { name: 'React / Next.js', level: 70, color: '#0066ff' },
  { name: 'Data Structures', level: 75, color: '#7c3aed' },
]

const SKILL_CARDS = [
  { icon: SiPython,     name: 'Python',      cat: 'Core Language',  color: '#00f5ff' },
  { icon: SiJavascript, name: 'JavaScript',  cat: 'Web Dev',        color: '#0066ff' },
  { icon: SiReact,      name: 'React',       cat: 'Frontend',       color: '#00d8ff' },
  { icon: SiStreamlit,  name: 'Streamlit',   cat: 'AI Apps',        color: '#ff4b4b' },
  { icon: FaBrain,      name: 'AI / ML',     cat: 'Intelligence',   color: '#7c3aed' },
  { icon: SiOpenai,     name: 'OpenAI API',  cat: 'LLM',            color: '#00ff88' },
  { icon: SiMysql,      name: 'SQL',         cat: 'Database',       color: '#00f5ff' },
  { icon: SiGithub,     name: 'Git/GitHub',  cat: 'Version Control',color: '#e2e8f0' },
  { icon: SiHtml5,      name: 'HTML/CSS',    cat: 'Web',            color: '#f06529' },
  { icon: FaServer,     name: 'REST APIs',   cat: 'Backend',        color: '#0066ff' },
  { icon: SiLangchain,  name: 'LangChain',   cat: 'AI Framework',   color: '#1c3e5c' },
  { icon: FaVectorSquare ,     name: 'FAISS',      cat: 'Vector Search',         color: '#2496ed' },
]

function SkillBar({ skill, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-xs text-slate-300 tracking-wider group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="font-mono text-xs" style={{ color: skill.color }}>
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.07 + 0.3, ease: [0.76, 0, 0.24, 1] }}
          style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
        />
      </div>
    </motion.div>
  )
}

function SkillCard({ skill, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="glass-card p-5 flex flex-col items-center gap-3 text-center cursor-default"
      style={{ '--hover-color': skill.color }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        style={{
          background: `${skill.color}15`,
          border: `1px solid ${skill.color}30`,
          color: skill.color,
          boxShadow: `0 0 20px ${skill.color}20`,
        }}
      >
        <skill.icon />
      </div>
      <div>
        <p className="text-white font-body font-semibold text-sm">{skill.name}</p>
        <p className="font-mono text-[10px] text-slate-500 tracking-wider mt-0.5">{skill.cat}</p>
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative bg-cyber-black">
      <div className="absolute inset-0 cyber-grid-bg" />
      <div
        className="absolute left-0 bottom-0 w-96 h-96 opacity-10 rounded-full"
        style={{ background: 'radial-gradient(circle, var(--color-cyan) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          label="Technical Arsenal"
          title="Skills & Technologies"
          subtitle="Tools, languages, and frameworks I use to build intelligent applications."
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-neon-cyan tracking-[0.3em] uppercase mb-8"
            >
              Proficiency Levels
            </motion.h3>
            <div className="space-y-5">
              {SKILL_BARS.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          {/* Skill Cards */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-neon-cyan tracking-[0.3em] uppercase mb-8"
            >
              Tech Stack
            </motion.h3>
            <div className="grid grid-cols-3 gap-3">
              {SKILL_CARDS.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

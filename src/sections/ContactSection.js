'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../components/SectionTitle'
import {
  FaGithub, FaLinkedin, FaTwitter,
  FaEnvelope, FaPhone, FaMapMarkerAlt,
} from 'react-icons/fa'
import { HiPaperAirplane } from 'react-icons/hi'

const CONTACT_INFO = [
  { icon: FaEnvelope,      label: 'Email',    value: 'shwetavde2002@gmail.com',      href: 'mailto:shwetavde2002@gmail.com' },
  { icon: FaPhone,         label: 'Phone',    value: '+91 7407178935',               href: 'tel:+917407178935' },
  { icon: FaMapMarkerAlt,  label: 'Location', value: 'Kolkata, West Bengal, India',  href: null },
]

const SOCIALS = [
  { icon: FaGithub,   href: 'https://github.com/deshwetav2002',      label: 'GitHub',   color: '#e2e8f0' },
  { icon: FaLinkedin, href: 'http://www.linkedin.com/in/shwetav-de-518aa8293', label: 'LinkedIn', color: '#0066ff' },
  { icon: FaTwitter,  href: 'https://twitter.com/shwetavde',     label: 'Twitter',  color: '#00f5ff' },
]

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    /*
    ┌──────────────────────────────────────────────────────────────────────┐
    │ INSTRUCTIONS: Integrate EmailJS here.                                 │
    │ 1. npm install @emailjs/browser                                       │
    │ 2. Create account at emailjs.com                                      │
    │ 3. Replace SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY below                  │
    │                                                                        │
    │  import emailjs from '@emailjs/browser'                               │
    │  await emailjs.send(                                                   │
    │    'SERVICE_ID', 'TEMPLATE_ID',                                        │
    │    { from_name: form.name, from_email: form.email,                     │
    │      subject: form.subject, message: form.message },                   │
    │    'PUBLIC_KEY'                                                         │
    │  )                                                                      │
    └──────────────────────────────────────────────────────────────────────┘
    */
    await new Promise(r => setTimeout(r, 1500)) // remove when using real EmailJS
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contact" className="section-padding relative bg-cyber-dark">
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />
      <div
        className="absolute left-0 bottom-0 w-96 h-96 opacity-10 rounded-full"
        style={{ background: 'radial-gradient(circle, var(--color-purple) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          label="Let's Connect"
          title="Get In Touch"
          subtitle="Have a project in mind or want to discuss opportunities? Let's talk."
        />

        <div className="grid lg:grid-cols-2 gap-12" ref={ref}>
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-2xl font-bold text-white mb-4 tracking-wide">
              Let's Build Something
              <span className="gradient-text block">Extraordinary</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              I'm actively seeking Software Engineer and AI/ML roles. Whether you have a project,
              a job opportunity, or just want to chat about AI — my inbox is always open.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              {CONTACT_INFO.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center shrink-0">
                    <item.icon className="text-neon-cyan text-base" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-slate-300 text-sm hover:text-neon-cyan transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-sm">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {SOCIALS.map(({ icon: Icon, href, label, color }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.08, type: 'spring' }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-12 h-12 glass-card flex items-center justify-center"
                  style={{ '--hover': color }}
                >
                  <Icon className="text-xl text-slate-400 hover:text-neon-cyan transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-[10px] text-neon-cyan/70 tracking-widest uppercase block mb-2">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-neon-cyan/70 tracking-widest uppercase block mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] text-neon-cyan/70 tracking-widest uppercase block mb-2">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="form-input"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] text-neon-cyan/70 tracking-widest uppercase block mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="form-input resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-filled w-full flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-cyber-black/50 border-t-cyber-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <HiPaperAirplane className="rotate-90" /> Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-neon-green text-center font-mono text-xs tracking-wider"
                >
                  ✓ Thanks! I'll get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiMusicNote, HiVolumeOff } from 'react-icons/hi'

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {})
    }
    setPlaying(!playing)
  }

  return (
    <>
      {/* Lofi ambient audio — replace src with your preferred track */}
      <audio ref={audioRef} loop>
        <source src="/audio/ambient.mp3" type="audio/mpeg" />
      </audio>

      <motion.button
        onClick={toggle}
        className="music-btn"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        title={playing ? 'Pause ambient music' : 'Play ambient music'}
      >
        {playing ? (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          >
            <HiMusicNote className="text-neon-cyan text-lg" />
          </motion.div>
        ) : (
          <HiVolumeOff className="text-neon-cyan/50 text-lg" />
        )}
      </motion.button>
    </>
  )
}

'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef  = useRef(null)
  const dotRef     = useRef(null)
  const glowRef    = useRef(null)
  const posRef     = useRef({ x: 0, y: 0 })
  const smoothRef  = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    const dot    = dotRef.current
    const glow   = glowRef.current
    if (!cursor || !dot || !glow) return

    const onMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }

      // Dot follows instantly
      dot.style.left = e.clientX - 2 + 'px'
      dot.style.top  = e.clientY - 2 + 'px'

      // Glow follows with offset
      glow.style.left = e.clientX + 'px'
      glow.style.top  = e.clientY + 'px'
    }

    // Smooth cursor follow using rAF
    let rafId
    const animate = () => {
      const dx = posRef.current.x - smoothRef.current.x
      const dy = posRef.current.y - smoothRef.current.y
      smoothRef.current.x += dx * 0.15
      smoothRef.current.y += dy * 0.15
      cursor.style.left = smoothRef.current.x - 10 + 'px'
      cursor.style.top  = smoothRef.current.y - 10 + 'px'
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    // Hover effects
    const addHover = () => {
      cursor.style.transform = 'scale(2.5)'
      cursor.style.borderColor = 'rgba(0,245,255,0.5)'
      cursor.style.background = 'rgba(0,245,255,0.05)'
    }
    const removeHover = () => {
      cursor.style.transform = 'scale(1)'
      cursor.style.borderColor = 'rgba(0,245,255,1)'
      cursor.style.background = 'transparent'
    }

    document.addEventListener('mousemove', onMouseMove)
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={glowRef}  className="cursor-glow" />
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef}    className="cursor-dot" />
    </>
  )
}

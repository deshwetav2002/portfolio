'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import LoadingScreen from '../components/LoadingScreen'
import CustomCursor from '../components/CustomCursor'
import ScrollProgress from '../components/ScrollProgress'
import Navbar from '../components/Navbar'
import MusicToggle from '../components/MusicToggle'
import NoiseOverlay from '../components/NoiseOverlay'

// Sections
import HeroSection     from '../sections/HeroSection'
import AboutSection    from '../sections/AboutSection'
import SkillsSection   from '../sections/SkillsSection'
import ProjectsSection from '../sections/ProjectsSection'
import ExperienceSection from '../sections/ExperienceSection'
import ContactSection  from '../sections/ContactSection'
import Footer          from '../components/Footer'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoaded(true), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <NoiseOverlay />
      <CustomCursor />
      <LoadingScreen isLoaded={loaded} />
      
      {loaded && (
        <>
          <ScrollProgress />
          <Navbar />
          <main id="main-content">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </main>
          <Footer />
          <MusicToggle />
        </>
      )}
    </>
  )
}

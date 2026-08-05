'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const yearRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      )
    }

    if (yearRef.current) {
      gsap.fromTo(
        yearRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
      )
    }
  }, [])

  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden" 
      style={{ backgroundColor: 'rgba(0, 30, 95, 0.2)', position: 'relative', zIndex: 0 }}
    >
      <div className="max-w-7xl mb-20" style={{ position: 'relative', zIndex: 60 }}>
        <h1 
          ref={titleRef}
          style={{ 
            fontFamily: 'Georgia, serif',
            letterSpacing: '-0.009em',
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            color: '#FFD82B',
            lineHeight: 0.85,
            marginBottom: '3rem',
            fontWeight: 500
          }}
        >
          Data Services
        </h1>
        <h2 

          style={{ 
            fontFamily: 'Georgia, serif',
            letterSpacing: '-0.02em',
            fontSize: 'clamp(6rem, 15vw, 14rem)',
            color: '#FFD82B',
            lineHeight: 0.85,
            marginBottom: '3rem',
            fontWeight: 500
          }}
        >
          Annual
          <br />
          Report <br />
        </h2>
        

      </div>

      <div className="absolute bottom-20 text-center" style={{ zIndex: 60 }}>
        <p className="text-lg mb-2" style={{ color: '#FFC200' }}>2025 - 2026</p>
        <p className="text-lg mb-2" style={{ color: '#E8E8E8' }}>University of Rochester Libraries <br /></p>
        
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm" style={{ color: '#BEBEBE' }}>Scroll to explore</span>
          <ChevronDown className="w-6 h-6" style={{ color: '#BEBEBE' }} />
        </div>
      </div>
    </section>
  )
}
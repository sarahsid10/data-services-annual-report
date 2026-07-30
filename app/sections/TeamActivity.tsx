'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sparkles, Users, TrendingUp, Award, Heart, BookOpen } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Introduction() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.intro-title', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
      })

      gsap.from('.stat-card', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        delay: 0.6,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex items-center justify-center py-20 px-6"
      style={{ 
        background: 'linear-gradient(180deg, #021BC3 0%, #001E5F 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div style={{ color: '#FFC200', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Part [05]
        </div>
        <h2 className="font-serif font-bold mb-4" style={{ color: '#FFD82B' }}>Team Activity</h2>
        <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #FFD82B, #FFC200)', marginBottom: '3rem' }} />


      </div>
    </section>
  )
}
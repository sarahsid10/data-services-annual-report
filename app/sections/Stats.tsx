'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [counts, setCounts] = useState([0, 0, 0])
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center+=100',
      onEnter: () => {
        if (!hasAnimated) {
          setHasAnimated(true)
          
          let count1 = 0
          const timer1 = setInterval(() => {
            count1 += 15
            if (count1 >= 350) {
              setCounts(prev => [350, prev[1], prev[2]])
              clearInterval(timer1)
            } else {
              setCounts(prev => [count1, prev[1], prev[2]])
            }
          }, 20)

          let count2 = 0
          const timer2 = setInterval(() => {
            count2 += 40
            if (count2 >= 991) {
              setCounts(prev => [prev[0], 991, prev[2]])
              clearInterval(timer2)
            } else {
              setCounts(prev => [prev[0], count2, prev[2]])
            }
          }, 20)

          let count3 = 0
          const timer3 = setInterval(() => {
            count3 += 20
            if (count3 >= 528) {
              setCounts(prev => [prev[0], prev[1], 528])
              clearInterval(timer3)
            } else {
              setCounts(prev => [prev[0], prev[1], count3])
            }
          }, 20)
        }
      },
    })

    return () => trigger.kill()
  }, [hasAnimated])

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex items-center py-20 px-6"
      style={{ backgroundColor: '#021BC3', position: 'relative', zIndex: 10 }}
    >
      <div className="max-w-6xl mx-auto w-full">

        <h2 className="font-serif font-bold mb-4" style={{ color: '#FFD82B' }}>Overview</h2>
        <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #FFD82B, #FFC200)', marginBottom: '3rem' }} />
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
          <div 
            className="rounded-2xl p-8 text-center"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <div className="text-6xl font-black mb-4" style={{ color: '#FFD82B' }}>
              {counts[0]}
            </div>
            <div className="text-base font-medium" style={{ color: '#E8E8E8' }}>
              Total Engagements
            </div>
          </div>

          <div 
            className="rounded-2xl p-8 text-center"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <div className="text-6xl font-black mb-4" style={{ color: '#FFC200' }}>
              {counts[1]}
            </div>
            <div className="text-base font-medium" style={{ color: '#E8E8E8' }}>
              Workshop Attendees
            </div>
          </div>

          <div 
            className="rounded-2xl p-8 text-center"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <div className="text-6xl font-black mb-4" style={{ color: '#FFE95F' }}>
              {counts[2]}
            </div>
            <div className="text-base font-medium" style={{ color: '#E8E8E8' }}>
              URRR Deposits
            </div>
          </div>

          <div 
            className="rounded-2xl p-8 text-center"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <div className="text-6xl font-black mb-4" style={{ color: '#B7D3FF' }}>
              55K
            </div>
            <div className="text-base font-medium" style={{ color: '#E8E8E8' }}>
              Repository Downloads
            </div>
          </div>
        </div>
    
{/* Partnership Network */}
<div className="mt-24">
  <h3 className="font-serif font-bold mb-6 text-center" style={{ color: '#FFD82B', fontSize: 'clamp(2.5rem, 5vw, 3rem)' }} >
    Partnerships
  </h3>
      <p className="text-center text-lg" style={{ color: '#B7D3FF' }}>
        Data Services continued partnerships and built new collaborations with units across the University of Rochester and beyond
      </p>
  <div className="relative h-[850px]">

    {/* SVG connector lines */}
    <svg
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    >
      {/* Library */}
      <line x1="44%" y1="45%" x2="27.5%" y2="48%" stroke="#4A90E2" strokeWidth="3"/>

      {/* University */}
      <line x1="56%" y1="40%" x2="72.5%" y2="25%" stroke="#FFD82B" strokeWidth="3"/>

      {/* External */}
      <line x1="56%" y1="50%" x2="72.5%" y2="76%" stroke="#66BB6A" strokeWidth="3"/>
    </svg>

    {/* Center */}
    <div
      className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2
                 w-52 h-52 rounded-full flex items-center justify-center
                 text-center shadow-2xl"
      style={{
        background: "#001E5F",
        border: "4px solid #FFD82B",
      }}
    >
      <div>
        <div
          className="text-2xl font-bold"
          style={{ color: "#FFD82B" }}
        >
          Data
          <br />
          Services
        </div>

        <div
          className="mt-3 text-sm"
          style={{ color: "#E8E8E8" }}
        >
          14 Partners
        </div>
      </div>

    </div>

    {/* Library */}
    <div className="absolute left-0 top-[48%] -translate-y-1/2 w-80">
      <div
        className="rounded-2xl p-6"
        style={{
          background: "rgba(74,144,226,.15)",
          border: "2px solid #4A90E2",
        }}
      >
        <h4
          className="text-xl font-bold mb-3"
          style={{ color: "#4A90E2" }}
        >
          Libraries
        </h4>

        <div
          className="text-6xl font-black"
          style={{ color: "#FFFFFF" }}
        >
          11
        </div>

        <p
          className="mt-2"
          style={{ color: "#E8E8E8" }}
        >
          Library-wide partners
        </p>
        <p style={{ color: '#B7D3FF', fontSize: '1rem', lineHeight: '1.6' }}>
        STEM Librarians, Learning Initiatives, Digital Scholarship, RBSCP, Scholarly Communications, Metadata Services, POA Library, Robbins Library, Studio X, Miner Library, Sibley Library
        </p>
      </div>
    </div>

    {/* University */}
    <div className="absolute right-0 top-[15%] w-80">
      <div
        className="rounded-2xl p-6"
        style={{
          background: "rgba(255,216,43,.15)",
          border: "2px solid #FFD82B",
        }}
      >
        <h4
          className="text-xl font-bold mb-3"
          style={{ color: "#FFD82B" }}
        >
          University
        </h4>

        <div
          className="text-6xl font-black text-white"
        >
          2
        </div>

        <p
          className="mt-2"
          style={{ color: "#E8E8E8" }}
        >
          University partners
        </p>
         <p style={{ color: '#B7D3FF', fontSize: '1rem', lineHeight: '1.6' }}> CIRC (Center for Integrated Research Computing) and ORISE (Office of Research Integrity, Stewarship & Ethics)</p>
      </div>
    </div>

    {/* External */}
    <div className="absolute right-0 bottom-[12%] w-80">
      <div
        className="rounded-2xl p-6"
        style={{
          background: "rgba(102,187,106,.15)",
          border: "2px solid #66BB6A",
        }}
      >
        <h4
          className="text-xl font-bold mb-3"
          style={{ color: "#66BB6A" }}
        >
          External
        </h4>

        <div
          className="text-6xl font-black text-white"
        >
          1
        </div>

        <p
          className="mt-2"
          style={{ color: "#E8E8E8" }}
        >
          External partner
        </p>
        <p style={{ color: '#B7D3FF', fontSize: '1rem', lineHeight: '1.6' }}>University of Leeds</p>
      </div>
    </div>

  </div>
</div>

      </div>
    </section>
  )
}
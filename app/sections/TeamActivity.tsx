'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BookSearch, Presentation, BriefcaseBusiness } from 'lucide-react'
import Image from 'next/image'


gsap.registerPlugin(ScrollTrigger)

const teamMembers = [
  {
    name: 'Publications',
    title: '',
    initials: '',
    spiritAnimal: 'BookSearch',
    description: '',
    trait: '',

  },
  {
    name: 'Presentations',
    title: '',
    initials: '',
    spiritAnimal: 'Presentation',
    description: '',
    trait: '',

  },

]

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const photosRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=50',
            end: 'top center',
            scrub: 0.5,
          },
          y: 30,
          opacity: 0,
        })
      })

      photosRef.current.forEach((photo) => {
        gsap.from(photo, {
          scrollTrigger: {
            trigger: photo,
            start: 'top bottom-=50',
            end: 'top center',
            scrub: 0.5,
          },
          x: -30,
          opacity: 0,
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex items-center py-20 px-6 relative"
      style={{ background: 'linear-gradient(180deg, #021BC3 0%, #001E5F 100%)',
        position: 'relative',
        zIndex: 10
 }}
    >
      <div className="max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 60 }}>
        <h2 className="font-serif font-bold mb-4" style={{ color: '#FFD82B' }}>Team Activity</h2>
        <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #FFD82B, #FFC200)', marginBottom: '3rem' }} />
        <div>
        <p className="text-lg mb-16 max-w-3xl" style={{ color: '#E8E8E8' }}>
        Can we get some text here?
        </p>
	</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Group Photos */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div
              ref={(el) => {
                if (el) photosRef.current[0] = el
              }}
              className="rounded-2xl overflow-hidden"
              style={{
                border: '2px solid rgba(255, 216, 43, 0.3)',
              }}
            >
              <Image
                src="/images/DSnominationcert.jpg"
                alt="Data Services Team - Group Photo 1"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>

          </div>

          {/* Right Column - Team Member Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#001E5F',
                  border: '2px solid rgba(255, 216, 43, 0.3)',
                }}
              >

                <div className="flex items-center gap-4 mb-4">

                  <div>
                    <h3 className="text-xl font-bold" style={{ color: '#FFD82B' }}>
                      {member.name}
                    </h3>

                  </div>
                </div>


                <p className="text-sm mb-3" style={{ color: '#E8E8E8' }}>
                  {member.description}
                </p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
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
      {/* Animated Background Dots */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              borderRadius: '50%',
              backgroundColor: '#FFD82B',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-16 intro-title">

          <h2 className="font-serif font-bold" style={{ color: '#FFD82B', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Director's Note
          </h2>
        </div>

        {/* Quote Section */}
        <div 
          className="rounded-3xl p-12 max-w-5xl mx-auto mb-16"
          style={{
            background: 'rgba(0, 30, 95, 0.4)',
            border: '2px solid rgba(255, 216, 43, 0.3)',
          }}
        >
          <div className="mb-8 text-center">
            <Award className="w-16 h-16 mx-auto" style={{ color: '#FFD82B' }} />
          </div>
          
          <div className="space-y-6" style={{ color: '#E8E8E8' }}>
            <p className="text-xl font-serif italic text-center" style={{ lineHeight: '1.8', color: '#FFE95F' }}>
              "This year has been an exciting period of growth and collaboration for the Data Services team. I am especially proud of how the team has embraced new opportunities to support researchers across the University of Rochester and advance the One University vision."
            </p>
            
            <p className="text-lg text-left" style={{ lineHeight: '1.7' }}>
              A key milestone was welcoming Rachel Becker from the Edward G. Miner Libraries. Rachel’s expertise enhances our ability to support researchers at the medical campus, aligning our services with the university’s mission. 
            </p>
            
            <p className="text-lg text-left" style={{ lineHeight: '1.7' }}>
              Our student employees—Tejaswini Balamurugan Kanimozhi, Nayoon (Kate) Kim, and Aabha Pandit—have been instrumental in expanding our programming by teaching workshops and promoting Data Services.
              This year, we expanded experiential learning opportunities by collaborating with colleagues across the library on data-driven projects. For example, Kate is working on a project to clean and visualize interlibrary loan data, which supports library decision-making and prepares students for future careers.
            </p>
            
            <p className="text-lg text-left" style={{ lineHeight: '1.7' }}>
             We strengthened collaborations across the university, partnering with Office of Research and Project Administration (ORPA) to introduce the NIH Data Management and Sharing template and working with Office of Research Integrity, Stewardship & Ethics (ORISE) and the university’s the inaugural Associate Vice President for Research Integrity, Sonya Hadrigan to promote responsible research practices.  
            </p>
	    
            <p className="text-lg text-left" style={{ lineHeight: '1.7' }}>
             Looking ahead, we plan to support ORISE’s Responsible and Ethical Conduct of Research training, finalize an National Science Foundation data management template, and expand technical projects that benefit the library and our students.  
            </p>

            <p className="text-lg text-center font-semibold" style={{ lineHeight: '1.7', color: '#B7D3FF' }}>
             The Data Services team remains committed to embodying the spirit of Meliora—striving to be ever better.  
            </p>
          </div>

          <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #FFD82B, #FFC200)', margin: '3rem auto 2rem' }} />
          
          <div className="text-center">
            <p style={{ color: '#FFD82B', fontSize: '1.35rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Daniel Castillo
            </p>
            <p style={{ color: '#B7D3FF', fontSize: '1rem' }}>
             Somerville Director, Science & Engineering Libraries and Research Initiatives
            </p>
          </div>
        </div>




      </div>
    </section>
  )
}
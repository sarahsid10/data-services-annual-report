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
              "This year has been an exciting period of growth and collaboration for the Data Services team. I am especially proud of how the team has come together over the past year, embracing new opportunities to support researchers across the University of Rochester and advancing the One University vision."
            </p>
            
            <p className="text-lg text-left" style={{ lineHeight: '1.7' }}>
              A key milestone was welcoming Rachel Becker from the Edward G. Miner Libraries to the team. Rachel’s expertise positions us to better identify and support the needs of researchers at the medical campus, ensuring that our services are aligned with the university’s broader mission. 
            </p>
            
            <p className="text-lg text-left" style={{ lineHeight: '1.7' }}>
              I am also proud of the continued growth of our student employees, who play a vital role in expanding our services and outreach. Tejaswini Balamurugan Kanimozhi, Nayoon (Kate) Kim, and Aabha Pandit have bolstered our programming by teaching workshops and actively promoting the UR Libraries Data Services team. This year, we began expanding experiential learning opportunities for our students by collaborating with colleagues across the library to support data-driven projects. Kate is working on a project to clean, analyze, and visualize data from our interlibrary loan service. These projects enhance internal decision-making at the library and provide our students with valuable experience to prepare them for their future studies and careers.
            </p>
            
            <p className="text-lg text-left" style={{ lineHeight: '1.7' }}>
             Our team has strengthened collaborations across the university to amplify our impact. We partnered with the Office of Research and Project Administration (ORPA) to share training opportunities and introduce the NIH Data Management and Sharing template, guiding researchers through data-sharing mandates. Collaborations with Sonya Hadrigan, the inaugural Associate Vice President for Research Integrity, and the Office of Research Integrity, Stewardship & Ethics (ORISE) have advanced initiatives promoting responsible research practices.  
            </p>
	    
            <p className="text-lg text-left" style={{ lineHeight: '1.7' }}>
             Looking ahead, we are particularly excited to continue expanding our collaborations. We plan to work with the Scholarly Communications department to support ORISE’s Fall 2026 and Spring 2027 Responsible and Ethical Conduct of Research (RECR) training program. Additionally, we will finalize a data management and sharing template for the National Science Foundation, providing valuable guidance for the university’s second-largest research funder after the NIH. Finally, we aim to identify additional technical projects that support the library’s operations while creating experiential learning opportunities for our student colleagues.  
            </p>

            <p className="text-lg text-center font-semibold" style={{ lineHeight: '1.7', color: '#B7D3FF' }}>
             As we move forward, I am confident that the Data Services team will continue to embody the spirit of Meliora—striving to be ever better in supporting the university’s research community.  
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


        {/* Key Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <div 
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(0, 30, 95, 0.3)',
              border: '2px solid rgba(255, 216, 43, 0.15)',
            }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: '#FFD82B' }}>
              Library Partners
            </h3>
            <p style={{ color: '#B7D3FF', fontSize: '1rem', lineHeight: '1.6' }}>
              Continuing to build on partnerships, library units the team worked with include Digital Scholarship, LI, STEM Librarians, RBSCP, Scholarly Communications, Metadata Services, POA Library, Robbins Library, Studio X, Miner Library, Sibley Library.

            </p>
          </div>

          <div 
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(0, 30, 95, 0.3)',
              border: '2px solid rgba(255, 194, 0, 0.15)',
            }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: '#FFC200' }}>
              Beyond the Library
            </h3>
            <p style={{ color: '#B7D3FF', fontSize: '1rem', lineHeight: '1.6' }}>
              Data Services collaborated with University offices such as CIRC (Center for Integrated Research Computing) and ORISE (Office of Research Integrity, Stewarship & Ethics. Beyond the University, the team partnered with the University of Leeds.

            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote, Sparkles, Users, TrendingUp, Award, Heart, BookOpen } from 'lucide-react'
import data from '../utils/data.json'

gsap.registerPlugin(ScrollTrigger)

export default function Workshops() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)
  const [counts1, setCounts1] = useState({ reg: 0, att: 0, events: 0 })
  const [counts2, setCounts2] = useState({ reg: 0, att: 0, events: 0 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.workshop-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 0.5,
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
      })
    }, sectionRef)

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center+=100',
      onEnter: () => {
        if (!animated) {
          setAnimated(true)
          
          let reg1 = 0
          const timer1 = setInterval(() => {
            reg1 += 4
            if (reg1 >= 240) {
              setCounts1(prev => ({ ...prev, reg: 240 }))
              clearInterval(timer1)
            } else {
              setCounts1(prev => ({ ...prev, reg: reg1 }))
            }
          }, 20)

          let att1 = 0
          const timer2 = setInterval(() => {
            att1 += 3
            if (att1 >= 155) {
              setCounts1(prev => ({ ...prev, att: 155 }))
              clearInterval(timer2)
            } else {
              setCounts1(prev => ({ ...prev, att: att1 }))
            }
          }, 20)

          setTimeout(() => {
            let ev1 = 0
            const timer3 = setInterval(() => {
              ev1 += 1
              if (ev1 >= 5) {
                setCounts1(prev => ({ ...prev, events: 5 }))
                clearInterval(timer3)
              } else {
                setCounts1(prev => ({ ...prev, events: ev1 }))
              }
            }, 100)
          }, 200)

          let reg2 = 0
          const timer4 = setInterval(() => {
            reg2 += 8
            if (reg2 >= 468) {
              setCounts2(prev => ({ ...prev, reg: 468 }))
              clearInterval(timer4)
            } else {
              setCounts2(prev => ({ ...prev, reg: reg2 }))
            }
          }, 20)

          let att2 = 0
          const timer5 = setInterval(() => {
            att2 += 4
            if (att2 >= 240) {
              setCounts2(prev => ({ ...prev, att: 240 }))
              clearInterval(timer5)
            } else {
              setCounts2(prev => ({ ...prev, att: att2 }))
            }
          }, 20)

          setTimeout(() => {
            let ev2 = 0
            const timer6 = setInterval(() => {
              ev2 += 1
              if (ev2 >= 12) {
                setCounts2(prev => ({ ...prev, events: 12 }))
                clearInterval(timer6)
              } else {
                setCounts2(prev => ({ ...prev, events: ev2 }))
              }
            }, 100)
          }, 200)
        }
      }
    })

    return () => {
      ctx.revert()
      trigger.kill()
    }
  }, [animated])

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex items-center py-20 px-6"
      style={{ backgroundColor: '#021BC3', position: 'relative', zIndex: 10 }}
    >


      <div className="max-w-6xl mx-auto w-full">
        <h2 className="font-serif font-bold mb-4" style={{ color: '#FFD82B' }}>Statistics</h2>


        <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #FFD82B, #FFC200)', marginBottom: '3rem' }} />
                <h2 className="font-serif font-bold mb-8 text-center" style={{ color: '#FFD82B', fontSize: 'clamp(2.5rem, 5vw, 3rem)' }}>
                 <br /> Workshops & Webinars
                </h2>
              {/* Stats Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div 
            className="stat-card rounded-3xl p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 62, 255, 0.3), rgba(0, 102, 253, 0.1))',
              border: '2px solid rgba(255, 216, 43, 0.3)',
            }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: 'linear-gradient(135deg, #FFD82B, #FFC200)' }}
            >
              <BookOpen className="w-8 h-8" style={{ color: '#001E5F' }} />
            </div>
            <div className="text-5xl font-black mb-3" style={{ color: '#FFD82B' }}>37</div>
            <div className="text-lg font-semibold mb-2" style={{ color: '#FFE95F' }}>Workshops</div>
            <div style={{ color: '#B7D3FF', fontSize: '0.9rem' }}>
              Data Bloom, Love Data Month, Data Skills
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className="stat-card rounded-3xl p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 102, 253, 0.3), rgba(102, 162, 255, 0.1))',
              border: '2px solid rgba(255, 194, 0, 0.3)',
            }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: 'linear-gradient(135deg, #FFC200, #FFE95F)' }}
            >
              <Users className="w-8 h-8" style={{ color: '#001E5F' }} />
            </div>
            <div className="text-5xl font-black mb-3" style={{ color: '#FFC200' }}>991</div>
            <div className="text-lg font-semibold mb-2" style={{ color: '#FFE95F' }}>Participants</div>
            <div style={{ color: '#B7D3FF', fontSize: '0.9rem' }}>
              Students, faculty, and staff engaged
            </div>
          </div>

          {/* Card 3 */}
          <div 
            className="stat-card rounded-3xl p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(102, 162, 255, 0.3), rgba(183, 211, 255, 0.1))',
              border: '2px solid rgba(255, 233, 95, 0.3)',
            }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: 'linear-gradient(135deg, #FFE95F, #B7D3FF)' }}
            >
              <Heart className="w-8 h-8" style={{ color: '#001E5F' }} />
            </div>
            <div className="text-5xl font-black mb-3" style={{ color: '#FFE95F' }}>9.1</div>
            <div className="text-lg font-semibold mb-2" style={{ color: '#FFE95F' }}>Rating</div>
            <div style={{ color: '#B7D3FF', fontSize: '0.9rem' }}>
              Average workshop rating by attendees
            </div>
          </div>
        </div>


	
	<div className="max-w-6xl mx-auto w-full"> 
        <p className="text-lg mb-16" style={{ color: '#B7D3FF' }}>
        <br /> Additional workshops included topics such as Data Management & Sharing Plans, ORCID, LabArchives on-site, protocols.io.
	</p>
	</div>
        <div 
          className="mt-12 rounded-2xl p-8"
          style={{
            backgroundColor: 'rgba(255, 216, 43, 0.05)',
            border: '2px solid rgba(255, 216, 43, 0.2)'
          }}
        >

          <h3 className="text-xl font-bold mb-8 text-center" style={{ color: '#FFD82B' }}>
            Workshop Series Registration vs Attendance
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-center" style={{ color: '#FFC200' }}>
                Data Bloom
              </h4>
              <div className="space-y-4">
              <div>
              <div
                style={{
                  width: "100%",
                  height: "28px",
                  background: "linear-gradient(90deg, #FFD82B, #FFC200)",
                  borderRadius: "6px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Attended portion */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: animated ? `${(228 / 487) * 100}%` : "0%",
                    height: "100%",
                    background: "rgba(0, 30, 95, 0.45)",
                    transition: "width 1s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  Attended: 228
                </div>
              </div>
              

              {/* Registered label below the full bar */}
              <div
                className="flex justify-between mt-2"
                style={{
                  color: "#B7D3FF",
                  fontSize: "0.85rem",
                }}
              >
                <span></span>
                <span>
                  Registered: <strong style={{ color: "#FFD82B" }}>487</strong>
                </span>
              </div>
            </div>
            </div>

              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 216, 43, 0.05)' }}>
                <div className="text-xs mb-2" style={{ color: '#66A2FF' }}>Workshop Topics:</div>
                <ul className="text-xs space-y-1" style={{ color: '#E8E8E8' }}>
                  <li>• Accessible and Appealing Visualizations</li>
                  <li>• Build Your Personal Website with Quarto</li>
                  <li>• Cleaning, Spreadsheet Design & Functions in Excel</li>
                  <li>• Composing Stories with Data and Viz in Tableau</li>
                  <li>• PivotTables, PivotCharts, and Dashboards in Excel</li>
                  <li>• Data Visualization with R</li>
                  <li>• Git Good with Data - GitHub for Version Control </li>
                  <li>• In 3D - XR for Data Visualization</li>
                  <li>• Mapping on GIS Day</li>
                  <li>• Visualize with Python</li>
                  <li>• Visualizing Data with Special Collections</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-center" style={{ color: '#FFC200' }}>
                Love Data
              </h4>
              <div className="space-y-4">
              <div>
              <div
                style={{
                  width: "100%",
                  height: "28px",
                  background: "linear-gradient(90deg, #FFD82B, #FFC200)",
                  borderRadius: "6px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Attended portion */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: animated ? `${(172 / 255) * 100}%` : "0%",
                    height: "100%",
                    background: "rgba(0, 30, 95, 0.45)",
                    transition: "width 1s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  Attended: 172
                </div>
              </div>
              

              {/* Registered label below the full bar */}
              <div
                className="flex justify-between mt-2"
                style={{
                  color: "#B7D3FF",
                  fontSize: "0.85rem",
                }}
              >
                <span></span>
                <span>
                  Registered: <strong style={{ color: "#FFD82B" }}>255</strong>
                </span>
              </div>
            </div>
            </div>

              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 216, 43, 0.05)' }}>
                <div className="text-xs mb-2" style={{ color: '#66A2FF' }}>Workshop Topics:</div>
                <ul className="text-xs space-y-1" style={{ color: '#E8E8E8' }}>
                  <li>• Beyond the Article</li>
                  <li>• Bloom Your Scholarly Profile with ORCID</li>
                  <li>• Doing Text Analysis with Python</li>
                  <li>• In 3D - XR for Data Visualization</li>
                  <li>• Metadata and Documentation</li>
                  <li>• Python Essentials</li>
                  <li>• Transatlantic Anti-Slavery Wiki Edit-a-thon</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-center" style={{ color: '#FFC200' }}>
                Data Skills 
              </h4>
              <div className="space-y-4">
              <div>
              <div
                style={{
                  width: "100%",
                  height: "28px",
                  background: "linear-gradient(90deg, #FFD82B, #FFC200)",
                  borderRadius: "6px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Attended portion */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: animated ? `${(164 / 304) * 100}%` : "0%",
                    height: "100%",
                    background: "rgba(0, 30, 95, 0.45)",
                    transition: "width 1s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  Attended: 164
                </div>
              </div>
              

              {/* Registered label below the full bar */}
              <div
                className="flex justify-between mt-2"
                style={{
                  color: "#B7D3FF",
                  fontSize: "0.85rem",
                }}
              >
                <span></span>
                <span>
                  Registered: <strong style={{ color: "#FFD82B" }}>304</strong>
                </span>
              </div>
            </div>
            </div>

              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 216, 43, 0.05)' }}>
                <div className="text-xs mb-2" style={{ color: '#66A2FF' }}>Workshop Topics:</div>
                <ul className="text-xs space-y-1" style={{ color: '#E8E8E8' }}>
                  <li>• Git Good with Data - GitHub for Version Control</li>
                  <li>• Cleaning Messy Data with OpenRefine</li>
                  <li>• Excel Efficiency</li>
                  <li>• Modeling Sea Level Rise with QGIS</li>
                  <li>• Survey Design</li>
                </ul>
              </div>

           </div>

          </div>

<div
  className="mt-16 rounded-2xl p-12"
  style={{
    background: "linear-gradient(135deg, #001E5F, #003EFF)",
  }}
>
  <div className="text-center">
    <div
      className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full"
      style={{
        background: "rgba(255, 216, 43, 0.15)",
        border: "2px solid rgba(255, 216, 43, 0.3)",
      }}
    >
      <Quote className="w-8 h-8" style={{ color: "#FFD82B" }} />
      <span
        style={{
          color: "#FFD82B",
          fontSize: "1rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
        }}
      >
        ATTENDEE FEEDBACK
      </span>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
    <blockquote
      className="text-sm leading-relaxed"
      style={{ color: "#E8E8E8" }}
    >
      <p className="font-bold mb-3">
        "I am an alumni who works in data and analytics and this was a great
        refresher on the basics and complexities of creating good reporting. I
        wish a course like this had existed at the beginning of my career."
      </p>
      <footer
        style={{
          color: "#FFD82B",
          fontWeight: 500,
        }}
      >
        — Accessible and Appealing Visualizations
      </footer>
    </blockquote>

    <blockquote
      className="text-sm leading-relaxed"
      style={{ color: "#E8E8E8" }}
    >
      <p className="font-bold mb-3">
        "Heather Owens was patient, and overall did a good job!"
      </p>
      <footer
        style={{
          color: "#FFD82B",
          fontWeight: 500,
        }}
      >
        — Creating Accessible PivotTables, PivotCharts, and Dashboards in Excel
      </footer>
    </blockquote>
  </div>
</div>
        </div>
      </div>
    </section>
  )
}
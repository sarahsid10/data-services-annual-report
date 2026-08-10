'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import data from '../utils/data.json'
import WorldHeatMap from "../components/WorldHeatMap"
import { Files } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function URRR() {
  const sectionRef = useRef<HTMLElement>(null)
  const [animated, setAnimated] = useState(false)
  const [counts, setCounts] = useState({ deposits: 0, depositors: 0, views: 0, downloads: 0 })

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center+=100',
      onEnter: () => {
        if (!animated) {
          setAnimated(true)
          
          let dep = 0
          const timer1 = setInterval(() => {
            dep += 16
            if (dep >= 528) {
              setCounts(prev => ({ ...prev, deposits: 528 }))
              clearInterval(timer1)
            } else {
              setCounts(prev => ({ ...prev, deposits: dep }))
            }
          }, 20)

          let depo = 0
          const timer2 = setInterval(() => {
            depo += 3
            if (depo >= 76) {
              setCounts(prev => ({ ...prev, depositors: 76 }))
              clearInterval(timer2)
            } else {
              setCounts(prev => ({ ...prev, depositors: depo }))
            }
          }, 30)

          let v = 0
          const timer3 = setInterval(() => {
            v += 3500
            if (v >= 116907) {
              setCounts(prev => ({ ...prev, views: 116907 }))
              clearInterval(timer3)
            } else {
              setCounts(prev => ({ ...prev, views: v }))
            }
          }, 20)

          let d = 0
          const timer4 = setInterval(() => {
            d += 1500
            if (d >= 55196) {
              setCounts(prev => ({ ...prev, downloads: 55196 }))
              clearInterval(timer4)
            } else {
              setCounts(prev => ({ ...prev, downloads: d }))
            }
          }, 20)
        }
      }
    })

    return () => trigger.kill()
  }, [animated])

  const maxUploadCount = Math.max(...data.urrr.uploads_by_type.map(item => item.count))

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex items-center py-20 px-6 relative"
      style={{ backgroundColor: 'rgba(0, 30, 95, 0.5)', position: 'relative', zIndex: 10 }}
    >
      <div className="max-w-6xl mx-auto w-full" style={{ position: 'relative', zIndex: 60 }}>
        <h2 className="font-serif font-bold mb-8 text-center" style={{ color: '#FFD82B', fontSize: 'clamp(2.5rem, 5vw, 3rem)' }}>
          URRR
        </h2>
        
        <p className="text-center text-lg mb-16 max-w-3xl mx-auto" style={{ color: '#B7D3FF' }}>
          The University of Rochester Research Repository serves as the institution's repository for scholarly materials
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div 
            className="rounded-2xl p-6 text-center"
            style={{
              backgroundColor: '#001E5F',
              border: '2px solid rgba(255, 216, 43, 0.3)'
            }}
          >
            <div className="text-sm mb-2" style={{ color: '#66A2FF' }}>TOTAL DEPOSITS</div>
            <div className="text-5xl font-black" style={{ color: '#FFD82B' }}>{counts.deposits}</div>
          </div>
          
          <div 
            className="rounded-2xl p-6 text-center"
            style={{
              backgroundColor: '#001E5F',
              border: '2px solid rgba(255, 216, 43, 0.3)'
            }}
          >
            <div className="text-sm mb-2" style={{ color: '#66A2FF' }}>DEPOSITORS</div>
            <div className="text-5xl font-black" style={{ color: '#FFD82B' }}>{counts.depositors}</div>
          </div>
          
          <div 
            className="rounded-2xl p-6 text-center"
            style={{
              backgroundColor: '#001E5F',
              border: '2px solid rgba(255, 216, 43, 0.3)'
            }}
          >
            <div className="text-sm mb-2" style={{ color: '#66A2FF' }}>TOTAL VIEWS</div>
            <div className="text-5xl font-black" style={{ color: '#FFD82B' }}>
              {counts.views.toLocaleString()}
            </div>
          </div>
          
          <div 
            className="rounded-2xl p-6 text-center"
            style={{
              backgroundColor: '#001E5F',
              border: '2px solid rgba(255, 216, 43, 0.3)'
            }}
          >
            <div className="text-sm mb-2" style={{ color: '#66A2FF' }}>DOWNLOADS</div>
            <div className="text-5xl font-black" style={{ color: '#FFD82B' }}>
              {counts.downloads.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className="rounded-2xl p-8"
            style={{
              backgroundColor: '#001E5F',
              border: '2px solid rgba(255, 216, 43, 0.3)'
            }}
          >
            <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#FFD82B' }}>
              Uploads by Item Type
            </h3>

            <div className="space-y-3">
              {data.urrr.uploads_by_type.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <span style={{ color: '#B7D3FF', fontSize: '0.75rem' }}>{item.type}</span>
                    <span style={{ color: '#FFD82B', fontWeight: 'bold', fontSize: '0.75rem' }}>
                      {item.count > 1000 ? `${(item.count / 1000).toFixed(1)}k` : item.count}
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(95, 195, 195, 0.1)', borderRadius: '4px' }}>
                    <div 
                      className="transition-all duration-1000"
                      style={{
                        width: animated ? `${(item.count / maxUploadCount) * 100}%` : '0%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #5FC3C3, #4A9D9D)',
                        borderRadius: '4px'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="rounded-2xl p-8"
            style={{
              backgroundColor: '#001E5F',
              border: '2px solid rgba(255, 216, 43, 0.3)'
            }}
          >
          
            <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2"  style={{ color: '#FFD82B' }}>
                New Collections 
             </h3>
             <div className="text-center text-sm mb-2" style={{ color: '#66A2FF' }}>
              Click on the links to some of the latest contributions to the repository<br /> <br />
              </div>
             <div className="text-lg flex mb-4 max-w-3xl mx-auto" style={{ color: '#B7D3FF' }}>
               <Files className="w-8 h-8" style={{ color: "#FFD82B" }} />
                <a href="https://doi.org/10.60593/ur.d.c.8261959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#B7D3FF] underline underline-offset-4"> 
                  Summer High School Research Program @ LLE Collection </a>
               </div>
               <div className="text-sm mb-6" style={{ color: '#66A2FF' }}>
               Project reports from the Laboratory for Laser Energetics (LLE) Summer High School Research Program, dating back to 2000.
               </div>

              <div className="text-lg flex mb-6 max-w-3xl mx-auto" style={{ color: '#B7D3FF' }}>
               <Files className="w-8 h-8" style={{ color: "#FFD82B" }} />
                <a href="https://doi.org/10.60593/ur.d.c.8439177"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#B7D3FF] underline underline-offset-4">                
                Breaking Boundaries with Video Games Collection </a>
              </div>
               <div className="text-sm mb-6" style={{ color: '#66A2FF' }}>
               Annual showcase of undergraduate research, writing, design, and multimodal scholarship involving video games at the University of Rochester.
              </div>
              
              <div className="text-lg flex mb-6 max-w-3xl mx-auto" style={{ color: '#B7D3FF' }}>
               <Files className="w-8 h-8" style={{ color: "#FFD82B" }} />
                <a href="https://doi.org/10.60593/ur.d.c.8328110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#B7D3FF] underline underline-offset-4"> 
                NSF AR/VR Student Projects Collection </a>
              </div>
              <div className="text-sm mb-6" style={{ color: '#66A2FF' }}>
               Final projects for an NSF funded program to offer training opportunities for students to apply extended reality technologies to their research across a variety of fields.
              </div>
      


          </div>
        </div>
        <div
  className="mt-16 rounded-2xl p-12"
  style={{
    background: "linear-gradient(135deg, #001E5F, #003EFF)",
  }}
>
              <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#FFD82B' }}>
              Views From Around the World
            </h3>
              <div className="text-sm text-center " style={{ color: '#66A2FF' }}>
               This past year, users from more than 20 countries viewed the content in URRR (note: Singapore is too small to view).
              </div>
            <WorldHeatMap/>

</div>
      </div>
    </section>
  )
}
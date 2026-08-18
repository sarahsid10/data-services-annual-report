'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const teamMembers = [
  {
    name: 'Rachel Becker',
    title: 'Senior Librarian, Health Sciences',
    spiritAnimal: 'Black-capped Chickadee',
    description: 'Health Sciences Librarian helping further support the needs of researchers at the medical center.',
    trait: 'Collects knowledge for dispersal and (usually) remembers where it went.',
    birdImage: '/images/Rachel_chickadee.jpg',
  },
  {
    name: 'Matthew Mariner',
    title: 'Data Curator Librarian',
    spiritAnimal: 'Anhinga',
    description: 'Data Curator Librarian managing URRR, ensuring thorough curation of all submitted data.',
    trait: 'Rather awkward on land, but flies gracefully through water',
    birdImage: '/images/anhinga.jpg',
  },
  {
    name: 'Heather Owen',
    title: 'Data Librarian',
    spiritAnimal: 'Great Gray Owl',
    description: 'Data Librarian who reviews data management plans, consults on best practices, and leads data literacy initiatives.',
    trait: 'Flies thoughtfully and silently and is very wise',
    birdImage: '/images/owl.jpg',
  },
  {
    name: 'Sarah Siddiqui',
    title: 'Reproducibility Librarian',
    spiritAnimal: 'Merlin (Petit caporal)',
    description: 'Reproducibility Librarian who recommends tools and best practices for analyzing and sharing methods, workflows, and code.',
    trait: 'Compact, judicious, and level-headed',
    birdImage: '/images/merlin.jpg',
  },

  {
    name: 'Daniel Castillo',
    title: 'Somerville Director',
    spiritAnimal: 'Columbian Hummingbird',
    description: 'Director of Science & Engineering Libraries and Research Initiatives, leading the Data Services team.',
    trait: 'Busy and quick-moving',
    birdImage: '/images/hummingbird.jpg',
  },
]

const students = [
  {
    name: 'Tejaswini Balamurugan Kanimozhi',
    title: 'Masters, Computer Science',
    spiritAnimal: 'Bower',
    description: 'Strong technical skills and helps develop workshops.',
    trait: 'Expert builder with an unmatched eye for detail.',
    birdImage: '/images/bower.png',
  },
  {
    name: 'Aabha Pandit',
    title: 'Senior, Data Science and Business',
    spiritAnimal: 'Cardinal',
    description: 'Leads Core 10, supports workshops and public events.',
    trait: 'Bright, loyal, and fearless flyer.',
    birdImage: '/images/cardinal.jpg',
  },
  {
    name: 'Nayoon (Kate) Kim',
    title: 'Sophomore, Data Science and Brain & Cognitive Science',
    spiritAnimal: 'Eurasian Magpie',
    description: 'Supports event promotion and analysis projects.',
    trait: 'Intelligent problem-solver flourishing in communities.',
    birdImage: '/images/magpie.jpg',
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
      style={{ backgroundColor: 'rgba(0, 30, 95, 0.5)', position: 'relative', zIndex: 10 }}
    >
      <div className="max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 60 }}>

        <h2 className="font-serif font-bold mb-4" style={{ color: '#FFD82B' }}>The Team</h2>
        <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #FFD82B, #FFC200)', marginBottom: '3rem' }} />

 
 {/* Core Staff */}
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-center max-w-4xl mx-auto mb-16">

  {/* Group Photo */}
  <div
    ref={(el) => {
      if (el) photosRef.current[0] = el
    }}
    className="md:col-span-3 flex justify-center"
  >
    <div className="p-3 rounded-xl bg-white/5 border border-[#FFD82B]/20 shadow-2xl">
      <Image
        src="/images/Data_team.jpg"
        alt="Picture of Staff"
        width={550}
        height={495}
        className="rounded-lg w-full h-auto"
      />
    </div>
  </div>

  {/* Photo Description */}
  <div className="md:col-span-2 text-center md:text-left">
    <h4
      className="text-2xl font-bold mb-4"
      style={{ color: '#FFD82B' }}
    >
      Core Staff
    </h4>

    <p
      className="text-lg leading-relaxed"
      style={{ color: '#E8E8E8' }}
    >
      Front row: Matthew, Daniel, Rachel <br /> Back row: Heather, Sarah
    </p>
  </div>

</div>

<br />

{/* Team Member Cards */}

{/* First row - 3 team members */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {teamMembers.slice(0, 3).map((member, index) => (
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
        <div
          className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0"
          style={{
            border: '3px solid #FFD82B',
          }}
        >
          <Image
            src={member.birdImage}
            alt={member.spiritAnimal}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3
            className="text-xl font-bold"
            style={{ color: '#FFD82B' }}
          >
            {member.name}
          </h3>

          <p
            className="text-sm"
            style={{ color: '#FFC200' }}
          >
            {member.title}
          </p>
        </div>
      </div>

      <p
        className="text-xs mb-2"
        style={{ color: '#B7D3FF' }}
      >
        <span className="font-semibold">
          Bird Archetype:
        </span>{' '}
        {member.spiritAnimal}
      </p>

      <p
        className="text-sm mb-3"
        style={{ color: '#E8E8E8' }}
      >
        {member.description}
      </p>

      <p
        className="text-xs italic border-l-2 pl-3"
        style={{
          color: '#66A2FF',
          borderColor: '#FFD82B',
        }}
      >
        {member.trait}
      </p>
    </div>
  ))}
</div>


{/* Second row - 2 centered team members */}
<div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
  {teamMembers.slice(3, 5).map((member, index) => {
    const actualIndex = index + 3

    return (
      <div
        key={actualIndex}
        ref={(el) => {
          if (el) cardsRef.current[actualIndex] = el
        }}
        className="w-full md:w-[calc(33.333%-0.75rem)] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
        style={{
          backgroundColor: '#001E5F',
          border: '2px solid rgba(255, 216, 43, 0.3)',
        }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0"
            style={{
              border: '3px solid #FFD82B',
            }}
          >
            <Image
              src={member.birdImage}
              alt={member.spiritAnimal}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3
              className="text-xl font-bold"
              style={{ color: '#FFD82B' }}
            >
              {member.name}
            </h3>

            <p
              className="text-sm"
              style={{ color: '#FFC200' }}
            >
              {member.title}
            </p>
          </div>
        </div>

        <p
          className="text-xs mb-2"
          style={{ color: '#B7D3FF' }}
        >
          <span className="font-semibold">
            Bird Archetype:
          </span>{' '}
          {member.spiritAnimal}
        </p>

        <p
          className="text-sm mb-3"
          style={{ color: '#E8E8E8' }}
        >
          {member.description}
        </p>

        <p
          className="text-xs italic border-l-2 pl-3"
          style={{
            color: '#66A2FF',
            borderColor: '#FFD82B',
          }}
        >
          {member.trait}
        </p>
      </div>
    )
  })}
</div>
            
 <br />   
        {/* Students */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-center max-w-4xl mx-auto mb-16">

          {/* Group Photo */}
          <div
            ref={(el) => {
              if (el) photosRef.current[0] = el
            }}
            className="md:col-span-3 flex justify-center"
          >
            <div className="p-3 rounded-xl bg-white/5 border border-[#FFD82B]/20 shadow-2xl">
              <Image
                src="/images/Students2.jpg"
                alt="Picture of Student Staff"
                width={550}
                height={495}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Photo Description */}
          <div className="md:col-span-2 text-center md:text-left">
            <h4
              className="text-2xl font-bold mb-4"
              style={{ color: '#FFD82B' }}
            >
              Student Leaders
            </h4>

            <p
              className="text-lg leading-relaxed"
              style={{ color: '#E8E8E8' }}
            >
              Pictured: Tejaswini, Aabha, Kate
            </p>
          </div>

        </div>

 <br />        
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {students.slice(0, 3).map((member, index) => (
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
                <div
                  className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0"
                  style={{
                    border: '3px solid #FFD82B',
                  }}
                >
                  <Image
                    src={member.birdImage}
                    alt={member.spiritAnimal}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: '#FFD82B' }}
                  >
                    {member.name}
                  </h3>

                  <p
                    className="text-sm"
                    style={{ color: '#FFC200' }}
                  >
                    {member.title}
                  </p>
                </div>
              </div>

              <p
                className="text-xs mb-2"
                style={{ color: '#B7D3FF' }}
              >
                <span className="font-semibold">
                  Bird Archetype:
                </span>{' '}
                {member.spiritAnimal}
              </p>

              <p
                className="text-sm mb-3"
                style={{ color: '#E8E8E8' }}
              >
                {member.description}
              </p>

              <p
                className="text-xs italic border-l-2 pl-3"
                style={{
                  color: '#66A2FF',
                  borderColor: '#FFD82B',
                }}
              >
                {member.trait}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
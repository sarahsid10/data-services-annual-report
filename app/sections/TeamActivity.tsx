'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  BookSearch,
  Presentation,
  BriefcaseBusiness,
  PartyPopper,
  type LucideIcon,
} from 'lucide-react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

type ActivityItem = {
  title: string
  detail: string
  url?: string
}

type ServiceItem = {
  title: string
  detail: string
}

type ServiceCategory = {
  category: string
  items: ServiceItem[]
}

type StandardActivity = {
  icon: LucideIcon
  title: 'Publications' | 'Conference talks'
  description: ActivityItem[]
  color: string
}

type ServiceActivity = {
  icon: LucideIcon
  title: 'Service'
  description: ServiceCategory[]
  color: string
}

type Activity = StandardActivity | ServiceActivity

const activities: Activity[] = [
  {
    icon: BookSearch,
    title: 'Publications',
    description: [
      {
        title:
          'From Concept to Community: The Journey of Data Services at the University of Rochester Libraries.',
        detail:
          'Heather Charlotte Owen, Sarah Siddiqui, Matthew Mariner',
        url:
          'https://researchdataq.org/editorials/from-concept-to-community-the-journey-of-data-services-at-the-university-of-rochester-libraries/',
      },
      {
        title:
          'Reduced Information Anxiety through Academic Library Data Literacy Education.',
        detail: 'Qiaoyi Liu, Heather Charlotte Owen',
        url: 'https://doi.org/10.1002/pra2.1467',
      },
      {
        title:
          'Meeting Secondary Data Needs through an Open Data Internship: The Core10 Data Collection.',
        detail:
          'Aabha Pandit, Heather Charlotte Owen, Alois Romanowski',
        url:
          'https://crln.acrl.org/index.php/crlnews/article/view/27043/34923',
      },
      {
        title:
          'Editorial for Special Issue: 2025 Research Data Access and Preservation (RDAP) Summit.',
        detail:
          'Chaput, Jennifer, Yijing Angel Tang, Wei Zakharov, and Heather Charlotte Owen',
        url: 'https://doi.org/10.7191/jeslib.1193',
      },
      {
        title:
          'Accessibility for Data and Data Repositories: Understanding and Applying the 2024 ADA Title II Rule.',
        detail: 'Emily Blumenthal, Lena Bohman, Carrie Breton,… Heather Charlotte Owen',
        url: 'https://doi.org/10.31274/isudp.rdap.300',
      },
      {
        title:
          'Animation, in Encyclopedia of Libraries, Librarianship, and Information Science.',
        detail: 'Matthew Mariner',
        url:
          'https://doi.org/10.1016/B978-0-323-95689-5.00013-4',
      },
    ],
    color: '#FFD82B',
  },

  {
    icon: Presentation,
    title: 'Conference talks',
    description: [
      {
        title:
          'IASSIST 2026: From Questions to Toolkit: Assessing Instrument and Facility PIDs Knowledge at Academic Institutions.',
        detail:
          'Moira Downey, Kassidy Hof-Mahoney, Lauren Phegley, Sarah Siddiqui',
        url: 'https://osf.io/5e3ma/overview',
      },
      {
        title:
          'RDAP 2026: RDAP Digitally Accessible Data and Data Repositories Working Group Report.',
        detail: 'Heather Charlotte Owen, Christine Nieman Hislop',
        url: 'https://rdapassociation.org/summit/schedule',
      },
      {
        title:
          'ASIS&T 2025: Reduced Information Anxiety through Academic Library Data Literacy Education.',
        detail:
          'Qiaoyi Liu, Heather Charlotte Owen, Jian Qin',
        url:
          'https://www.asist.org/meetings-events/am/am25/am25-posters/',
      },
      {
        title:
          'NERLSCD 2025 Panel: LIMS, ELNs & Everything In-Between: Tools, Tales, and Tech Truths.',
        detail:
          'Tim Bushnell (Chair), Bob Steen, Marimar Lopez, Sarah Siddiqui, Joe Salemme',
        url:
          'https://nerlscd.abrf.org/nerlscd-2025-program/',
      },
      {
        title:
          'NYSCILIB 2025: Navigating the Nelson Memo.',
        detail: 'Heather Charlotte Owen',
        url: 'https://surface.syr.edu/nyscilib/',
      },
      {
        title:
          'FAIR Facilities & Instruments Workshop 2025: PIDS Toolkit for Librarians and Data Professionals.',
        detail:
          'Moira Downey, Kassidy Hof-Mahoney, Lauren Phegley, Sarah Siddiqui',
        url: 'https://osf.io/5e3ma/overview',
      },
    ],
    color: '#FFD82B',
  },

  {
    icon: BriefcaseBusiness,
    title: 'Service',
    description: [
      {
        category: 'Professional Service',
        items: [
          {
            title:
              'Digital Library Federation - Born Digital Access Working Group',
            detail: 'Co-Chair | Matthew',
          },

          {
            title: 'RDAP Summit 2026',
            detail: 'Co-Chair | Sarah',
          },
          {
            title: 'Designing Libraries',
            detail: 'Planning Committee | Heather, Sarah',
          },
          {
            title: 'NEASIS&T Awards Committee 2026',
            detail: 'Committee Member | Sarah',
          },
          {
            title: 'RDAP Publishing Committee',
            detail:
              'Committee Member & eScience Librarianship Special Issue Editor | Heather',
          },
          {
            title:
              'RDAP Digitally Accessible Data and Data Repositories Working Group',
            detail: 'Working Group Member | Heather',
          },
          {
            title:
              'AI Trends and How It’s Being Used in Publishing and Libraries',
            detail: ' University Press and Library Publishing Summit, 2025 | Panel Facilitator - Sarah',
          },          
          {
            title: 'Northeast Carpentries Community Group',
            detail:
              'General Member & Planning Committee Member | Heather',
          },
        ],
      },
      {
        category: 'University Service',
        items: [
          {
            title: 'Scholarly Communications Taskforce',
            detail: 'Daniel, Sarah',
          },
          {
            title: 'Towers and Tabletops',
            detail: 'Heather',
          },
        ],
      },
    ],
    color: '#FFD82B',
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

  const publications = activities.find(
    (activity): activity is StandardActivity =>
      activity.title === 'Publications'
  )

  const conferenceTalks = activities.find(
    (activity): activity is StandardActivity =>
      activity.title === 'Conference talks'
  )

  const service = activities.find(
    (activity): activity is ServiceActivity =>
      activity.title === 'Service'
  )

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-6 relative"
      style={{
        background:
          'linear-gradient(180deg, #021BC3 0%, #001E5F 100%)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        className="max-w-7xl mx-auto w-full"
        style={{
          position: 'relative',
          zIndex: 60,
        }}
      >
        {/* Page heading */}
        <h2
          className="font-serif font-bold mb-4"
          style={{ color: '#FFD82B' }}
        >
          Team Activities
        </h2>

        <div
          style={{
            width: '80px',
            height: '4px',
            background:
              'linear-gradient(90deg, #FFD82B, #FFC200)',
            marginBottom: '3rem',
          }}
        />

        <p
          className="text-lg mb-16"
          style={{ color: '#E8E8E8' }}
        >
          Members of the Data Team are active in the professional
          community to keep up with the latest trends and actively
          support the research community.
        </p>

        {/* Publications + Conference Talks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Publications */}
          {publications && (
            <div
              ref={(el) => {
                if (el) cardsRef.current[0] = el
              }}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: 'rgba(0, 30, 95, 0.75)',
                border:
                  '1px solid rgba(255, 216, 43, 0.3)',
                boxShadow:
                  '0 10px 30px rgba(0, 0, 0, 0.12)',
              }}
            >
              {/* Heading */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: `${publications.color}20`,
                  }}
                >
                  <BookSearch
                    className="w-7 h-7"
                    style={{ color: publications.color }}
                  />
                </div>

                <h3
                  className="text-2xl font-bold"
                  style={{ color: '#FFD82B' }}
                >
                  Publications
                </h3>
              </div>

              {/* Publication list */}
              <div className="space-y-5">
                {publications.description.map((item, i) => (
                  <div key={i}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium leading-relaxed hover:text-[#FFD82B] transition-colors"
                      style={{ color: '#E8E8E8' }}
                    >
                      {item.title}
                    </a>

                    <div
                      className="text-sm mt-1 leading-relaxed"
                      style={{
                        color:
                          'rgba(232, 232, 232, 0.65)',
                      }}
                    >
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conference Talks */}
          {conferenceTalks && (
            <div
              ref={(el) => {
                if (el) cardsRef.current[1] = el
              }}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: 'rgba(0, 30, 95, 0.75)',
                border:
                  '1px solid rgba(255, 216, 43, 0.3)',
                boxShadow:
                  '0 10px 30px rgba(0, 0, 0, 0.12)',
              }}
            >
              {/* Heading */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: `${conferenceTalks.color}20`,
                  }}
                >
                  <Presentation
                    className="w-7 h-7"
                    style={{ color: conferenceTalks.color }}
                  />
                </div>

                <h3
                  className="text-2xl font-bold"
                  style={{ color: '#FFD82B' }}
                >
                  Conference Talks
                </h3>
              </div>

              {/* Conference list */}
              <div className="space-y-5">
                {conferenceTalks.description.map((item, i) => (
                  <div key={i}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium leading-relaxed hover:text-[#FFD82B] transition-colors"
                      style={{ color: '#E8E8E8' }}
                    >
                      {item.title}
                    </a>

                    <div
                      className="text-sm mt-1 leading-relaxed"
                      style={{
                        color:
                          'rgba(232, 232, 232, 0.65)',
                      }}
                    >
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Service - Full Width */}
        {service && (
          <div
            ref={(el) => {
              if (el) cardsRef.current[2] = el
            }}
            className="mt-8 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: 'rgba(0, 30, 95, 0.75)',
              border:
                '1px solid rgba(255, 216, 43, 0.3)',
              boxShadow:
                '0 10px 30px rgba(0, 0, 0, 0.12)',
            }}
          >
            {/* Service heading */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${service.color}20`,
                }}
              >
                <BriefcaseBusiness
                  className="w-7 h-7"
                  style={{ color: service.color }}
                />
              </div>

              <h3
                className="text-2xl font-bold"
                style={{ color: '#FFD82B' }}
              >
                Service
              </h3>
            </div>

            {/* Service categories */}
            {service.description.map(
              (category, categoryIndex) => (
                <div
                  key={category.category}
                  className={
                    categoryIndex > 0
                      ? 'mt-10 pt-8 border-t border-[#FFD82B]/20'
                      : ''
                  }
                >
                  <h4
                    className="text-sm font-bold uppercase tracking-wider mb-5"
                    style={{ color: '#FFD82B' }}
                  >
                    {category.category}
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                    {category.items.map((item, i) => (
                      <div key={i}>
                        <div
                          className="font-medium leading-relaxed"
                          style={{ color: '#E8E8E8' }}
                        >
                          {item.title}
                        </div>

                        <div
                          className="text-sm mt-1 leading-relaxed"
                          style={{
                            color:
                              'rgba(232, 232, 232, 0.65)',
                          }}
                        >
                          {item.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {/* Recognition */}
        <div className="mt-24 pt-16">
          <div className="text-center mb-10">
            <h2
              className="font-serif font-bold mb-8 flex items-center justify-center gap-3"
              style={{
                color: '#FFD82B',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              <PartyPopper className="w-7 h-7 md:w-8 md:h-8" />
              Recognition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            
            {/* Certificate */}
            <div
              ref={(el) => {
                if (el) photosRef.current[0] = el
              }}
              className="flex justify-center"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-[#FFD82B]/20 shadow-2xl">
                <Image
                  src="/images/DSnominationcert.jpg"
                  alt="Nomination Certificate for RCL Data Services Team"
                  width={450}
                  height={405}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Recognition description */}
            <div className="text-center md:text-left">
              <h4
                className="text-2xl font-bold mb-5"
                style={{ color: '#FFD82B' }}
              >
                Presidential Award Nomination
              </h4>

              <p
                className="text-lg leading-relaxed"
                style={{ color: '#E8E8E8' }}
              >
                Data Services was very excited to be nominated
                for this year's University of Rochester's
                Presidential Award for Inclusive Excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
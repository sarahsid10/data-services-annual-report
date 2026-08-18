'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'Introduction', href: '#introduction' },
    { label: 'Overview', href: '#stats' },
    { label: 'Services', href: '#workareas' },
    { label: 'Team', href: '#team' },
    { label: 'By the Numbers', href: '#workshops' },

    { label: 'Team Activities', href: '#teamactivity' },
    { label: 'Future', href: '#future' },
  ]

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 left-5 z-50 p-3 rounded-full shadow-lg transition hover:scale-105"
        style={{
          backgroundColor: '#001E5F',
          color: '#FFD82B',
        }}
      >
        <Menu size={28} />
      </button>

      {/* Dark Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Navigation Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 transform transition-transform duration-300 ease-in-out shadow-2xl ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          backgroundColor: '#001E5F',
        }}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={() => setOpen(false)}
            className="text-white hover:text-yellow-300"
          >
            <X size={28} />
          </button>
        </div>

        <div className="px-8 text-center">
          <Image
            src="/images/URlogo.png"
            alt="University of Rochester"
            width={90}
            height={90}
            className="mx-auto mb-4"
          />

          <h2
            className="text-xl font-bold"
            style={{ color: '#FFD82B' }}
          >
            Data Services
          </h2>

          <p className="text-white text-sm mb-10">
            URochester Libraries <br /> 
            2025–2026 Report
          </p>

          <nav className="space-y-3 text-left">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 px-3 rounded-md text-white hover:bg-blue-800 hover:text-yellow-300 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}
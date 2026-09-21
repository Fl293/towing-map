'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <span className="hidden sm:inline">
              <span className="text-slate-900">ELITE</span>
              <span className="text-cyan-500"> TOW</span>
              <span className="text-slate-900"> & WHEELS</span>
            </span>
            <span className="sm:hidden">
              <span className="text-slate-900">ELITE</span>
              <span className="text-cyan-500">TOW</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-slate-600 hover:text-slate-900 transition">
              Services
            </Link>
            <Link href="#wheels" className="text-slate-600 hover:text-slate-900 transition">
              Wheels & Tyres
            </Link>
            <Link href="#why-us" className="text-slate-600 hover:text-slate-900 transition">
              Why Us
            </Link>
            <Link href="#reviews" className="text-slate-600 hover:text-slate-900 transition">
              Reviews
            </Link>
            <Link href="#contact" className="text-slate-600 hover:text-slate-900 transition">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Button
            className="bg-cyan-500 hover:bg-cyan-600 text-white gap-2 ml-4"
            asChild
          >
            <a href="tel:+1-800-555-1234">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">(800) 555-1234</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

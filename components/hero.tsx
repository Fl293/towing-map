'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Phone, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 pt-20 pb-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/tow-truck-hero.png"
          alt="Heavy-duty tow truck driving on a wet highway at night with amber light trails"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
              AVAILABLE 24 HOURS · 7 DAYS A WEEK
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                WE TOW,
                <br />
                HAUL &<br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  DEAL IN WHEELS
                </span>
                .
              </h1>
              <p className="text-lg text-slate-300 max-w-md">
                Towing, logistics and transportation, plus buying and selling quality wheels and tyres. Elite Tow & Wheels keeps you moving on and off the road, one call away, day or night.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white gap-2"
                asChild
              >
                <a href="tel:+1-800-555-1234">
                  <Phone className="h-5 w-5" />
                  Call for a Tow Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 bg-transparent text-white hover:bg-white/10 gap-2"
              >
                View Services
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-2xl font-bold text-cyan-400">30 min</div>
                <div className="text-sm text-slate-400">Avg. arrival</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">500+</div>
                <div className="text-sm text-slate-400">Wheels in stock</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">24/7</div>
                <div className="text-sm text-slate-400">Live dispatch</div>
              </div>
            </div>
          </div>

          {/* Right side spacing for background image visibility */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  )
}

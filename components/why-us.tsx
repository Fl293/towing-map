'use client'

import {
  Clock,
  Shield,
  Users,
  Zap,
  Award,
  Headset,
} from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: '30-Min Average Arrival',
    description: 'Fastest response time in the area. Day or night, we&apos;re there when you need us.',
  },
  {
    icon: Shield,
    title: 'Fully Licensed & Insured',
    description: 'Complete peace of mind. All vehicles and operations fully covered by comprehensive insurance.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Trained professionals with 15+ years in towing, logistics, and wheel services.',
  },
  {
    icon: Zap,
    title: '24/7 Live Dispatch',
    description: 'Real-time tracking and live dispatch means your job is always monitored and prioritized.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'Premium wheels and tyres only. All goods inspected and tested before sale or fitting.',
  },
  {
    icon: Headset,
    title: 'Expert Customer Support',
    description: 'Knowledgeable team ready to answer questions and provide guidance on any service.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="text-sm font-semibold text-cyan-600 uppercase tracking-widest mb-2">
            WHY CHOOSE US
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Drivers Everywhere
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We&apos;ve built our reputation on reliability, quality, and customer service. Here&apos;s what
            sets Elite Tow & Wheels apart from the rest.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-slate-50 p-8 hover:border-cyan-300 hover:bg-white transition-all"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100">
                  <Icon className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-slate-900">{reason.title}</h3>
                <p className="text-slate-600">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

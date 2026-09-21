'use client'

import {
  Truck,
  Package,
  DollarSign,
  RotateCcw,
  Wrench,
  Building2,
} from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'TOWING',
    description:
      'Light, medium, and heavy-duty towing for cars, vans, and trucks. Flatbed and wheel-lift recovery for safe, damage-free transport, day or night.',
  },
  {
    icon: Package,
    title: 'LOGISTICS & TRANSPORTATION',
    description:
      'Reliable vehicle and freight transport across the region. Scheduled hauls, multi-vehicle carriers, and door-to-door delivery you can track.',
  },
  {
    icon: DollarSign,
    title: 'SELL WHEELS & TYRES',
    description:
      'Shop our huge range of alloy, forged, and off-road wheels plus performance and all-season tyres, all fitted and balanced in-house.',
  },
  {
    icon: RotateCcw,
    title: 'BUY WHEELS & TYRES',
    description:
      'Got spare rims or part-worn tyres? We buy quality used wheels and tyres for fair cash prices with instant on-the-spot quotes.',
  },
  {
    icon: Wrench,
    title: 'FITTING & BALANCING',
    description:
      'Precision mounting, computerised balancing, and TPMS reset by trained techs so your new set rolls smooth from the first mile.',
  },
  {
    icon: Building2,
    title: 'FLEET & TRADE',
    description:
      'Bulk supply, priority towing, and transport contracts for dealerships, garages, and commercial fleets at trade rates.',
  },
]

export default function WhatWeDo() {
  return (
    <section id="services" className="w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="text-sm font-semibold text-cyan-600 uppercase tracking-widest mb-2">
            WHAT WE DO
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Everything Wheels, Moved & Managed
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From roadside recovery and long-haul logistics to buying and selling quality wheels
            and tyres, Elite Tow & Wheels is your one-stop partner. Fully licensed, insured, and
            equipped for every job.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group rounded-lg border border-slate-200 bg-white p-8 hover:shadow-lg hover:border-cyan-300 transition-all"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 group-hover:bg-cyan-600 transition-colors">
                  <Icon className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-slate-900">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

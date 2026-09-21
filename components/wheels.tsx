'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Check } from 'lucide-react'

const features = [
  'Buy new & quality used alloy, forged, and off-road wheels',
  'We pay cash for your spare rims and part-worn tyres',
  'Performance, all-season & mud-terrain tyres in stock',
  'Precision fitting, balancing & TPMS reset in-house',
]

export default function Wheels() {
  return (
    <section id="wheels" className="w-full py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="text-sm font-semibold text-cyan-600 uppercase tracking-widest mb-2">
            BUY & SELL WHEELS & TYRES
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            The Wheel & Tyre Marketplace
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you&apos;re after a fresh set or cashing in your old ones, Elite Tow & Wheels is
            the place. Browse hundreds of wheels and tyres to buy, or sell us yours for a fair
            price and a flawless fit.
          </p>
        </div>

        {/* Content with Image */}
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/alloy-wheel.png"
              alt="Premium black machined-finish custom alloy wheel with performance tire"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            {/* Stats */}
            <div className="flex items-baseline gap-3">
              <div className="text-5xl font-bold text-cyan-600">500+</div>
              <div className="text-xl text-slate-600">WHEEL STYLES IN STOCK</div>
            </div>

            {/* Features List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-cyan-600" />
                  </div>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-700 text-white w-full sm:w-auto"
            >
              Get a Buy or Sell Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

export default function Cta() {
  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Get Moving?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Whether you need a tow, logistics support, or quality wheels and tyres, our team is
          ready to help. Call anytime, day or night.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-white gap-2"
            asChild
          >
            <a href="tel:+1-800-555-1234">
              <Phone className="h-5 w-5" />
              Call Now (800) 555-1234
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-white/20 hover:bg-white/30 text-white border border-white/50"
          >
            Send Us a Message
          </Button>
        </div>

        {/* Extra info */}
        <div className="mt-12 pt-12 border-t border-slate-700">
          <p className="text-slate-400 mb-6">Available 24/7 · Same-day service · Free estimates</p>
          <div className="text-sm text-slate-500">
            Elite Tow & Wheels | Licensed • Insured • Professional
          </div>
        </div>
      </div>
    </section>
  )
}

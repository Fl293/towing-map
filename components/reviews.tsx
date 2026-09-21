'use client'

import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah Mitchell',
    role: 'Small Business Owner',
    content:
      'Elite Tow & Wheels saved me during a breakdown on the highway. They arrived in 25 minutes and got my truck back on the road safely. Highly professional.',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'Fleet Manager',
    content:
      'We use their services for our entire fleet. The combination of reliable towing and competitive wheel pricing makes them our go-to partner.',
    rating: 5,
  },
  {
    name: 'Maria Rodriguez',
    role: 'Car Enthusiast',
    content:
      'Found the perfect set of custom wheels and they fitted them perfectly. The team knows their stuff and actually cares about customer satisfaction.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Truck Driver',
    content:
      'Available at 3 AM when I needed them. That&apos;s the kind of service that keeps me coming back. Worth every penny.',
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="w-full py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="text-sm font-semibold text-cyan-600 uppercase tracking-widest mb-2">
            CUSTOMER REVIEWS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Loved by Our Customers
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See what drivers and fleet managers say about Elite Tow & Wheels.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-200 bg-white p-8"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 text-slate-700 italic">{`"${review.content}"`}</p>

              {/* Author */}
              <div>
                <div className="font-semibold text-slate-900">{review.name}</div>
                <div className="text-sm text-slate-600">{review.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

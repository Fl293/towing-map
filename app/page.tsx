import Header from '@/components/header'
import Hero from '@/components/hero'
import WhatWeDo from '@/components/what-we-do'
import Wheels from '@/components/wheels'
import WhyUs from '@/components/why-us'
import Reviews from '@/components/reviews'
import Cta from '@/components/cta'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhatWeDo />
      <Wheels />
      <WhyUs />
      <Reviews />
      <Cta />
      <Footer />
    </div>
  )
}

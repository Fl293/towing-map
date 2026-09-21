'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-white mb-4">Elite Tow & Wheels</h3>
            <p className="text-sm mb-4">
              Professional towing, logistics, and wheel services available 24/7.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+1-800-555-1234" className="hover:text-white">
                  (800) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@elitetow.com" className="hover:text-white">
                  info@elitetow.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>123 Industry Ave<br />Metro City, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="hover:text-white transition">
                  Towing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition">
                  Logistics & Transport
                </Link>
              </li>
              <li>
                <Link href="#wheels" className="hover:text-white transition">
                  Buy & Sell Wheels
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition">
                  Fitting & Balancing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition">
                  Fleet Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#why-us" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Elite Tow & Wheels. All rights reserved.
          </p>
          <p className="text-sm mt-4 md:mt-0">
            Licensed • Insured • Available 24/7
          </p>
        </div>
      </div>
    </footer>
  )
}

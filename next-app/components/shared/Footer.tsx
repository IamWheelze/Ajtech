'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = {
  company: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Phone Repair', href: '/services#phone-repair' },
    { label: 'Laptop Repair', href: '/services#laptop-repair' },
    { label: 'Printer Repair', href: '/services#printer-repair' },
    { label: 'New Devices', href: '/products?filter=new' },
    { label: 'Used Devices', href: '/products?filter=used' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Warranty Policy', href: '/warranty' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: 'facebook', href: '#' },
  { name: 'Twitter', icon: 'twitter', href: '#' },
  { name: 'Instagram', icon: 'instagram', href: '#' },
  { name: 'WhatsApp', icon: 'whatsapp', href: 'https://wa.me/2348147571469' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-white/10">
      <div className="container section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-2xl font-display font-bold gradient-text">
                AJ Tech
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted tech partner in Jos, Nigeria. Professional repair services and quality devices at competitive prices.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary-600 transition-all hover:scale-110"
                  aria-label={social.name}
                  data-cursor-text="Follow"
                >
                  <span className="text-xl">{getSocialIcon(social.icon)}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-display font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-display font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Jos, Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+234 814 757 1469</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@ajtech.com.ng</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Mon - Sat: 9AM - 7PM<br />Sunday: Closed</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AJ Tech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

function getSocialIcon(name: string) {
  const icons: Record<string, string> = {
    facebook: '📘',
    twitter: '🐦',
    instagram: '📷',
    whatsapp: '💬',
  }
  return icons[name] || '🔗'
}

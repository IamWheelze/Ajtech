'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import ServiceCard from '@/components/ui/ServiceCard'
import ProductCard from '@/components/ui/ProductCard'
import TestimonialCard from '@/components/ui/TestimonialCard'

// Dynamically import 3D Scene to avoid SSR issues
const Scene3D = dynamic(() => import('@/components/three/Scene3D'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-dark-light animate-pulse rounded-lg" />,
})

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full glass border border-primary-500/30 mb-6"
              >
                <span className="text-primary-400 font-semibold">🚀 Your Trusted Tech Partner</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
              >
                Professional{' '}
                <span className="gradient-text">Tech Repairs</span>
                {' '}& Quality Devices
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Expert repair services for phones, laptops, and printers. Quality new and refurbished devices at affordable prices in Jos, Nigeria.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/services" className="btn btn-primary" data-cursor-text="Explore">
                  Our Services
                </Link>
                <Link href="/contact" className="btn btn-secondary" data-cursor-text="Contact">
                  Get in Touch
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 grid grid-cols-3 gap-6"
              >
                <div>
                  <div className="text-3xl font-display font-bold text-primary-400">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary-400">2000+</div>
                  <div className="text-sm text-gray-400">Devices Repaired</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary-400">98%</div>
                  <div className="text-sm text-gray-400">Satisfaction Rate</div>
                </div>
              </motion.div>
            </motion.div>

            {/* 3D Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[600px] hidden lg:block"
            >
              <Scene3D />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-dark-lighter">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive tech solutions for all your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon="📱"
              title="Phone Sales"
              description="Latest smartphones from top brands at competitive prices"
              features={['Latest Models', 'Official Warranty', 'Genuine Products', 'Trade-in Options']}
              color="blue"
              link="/services#phone-sales"
              index={0}
            />
            <ServiceCard
              icon="🔧"
              title="Phone Repairs"
              description="Expert phone repair services for all makes and models"
              features={['Screen Replacement', 'Battery Change', 'Water Damage', 'Software Fixes']}
              color="orange"
              link="/services#phone-repair"
              index={1}
            />
            <ServiceCard
              icon="💻"
              title="Laptop Sales"
              description="Quality laptops for work, gaming, and everyday use"
              features={['Business Laptops', 'Gaming Rigs', 'Budget Options', 'Warranty Included']}
              color="purple"
              link="/services#laptop-sales"
              index={2}
            />
            <ServiceCard
              icon="⚙️"
              title="Laptop Repairs"
              description="Professional laptop repair and upgrade services"
              features={['Hardware Upgrades', 'Screen Repairs', 'Data Recovery', 'Virus Removal']}
              color="green"
              link="/services#laptop-repair"
              index={3}
            />
            <ServiceCard
              icon="🖨️"
              title="Printer Sales"
              description="Reliable printers for home and office use"
              features={['Home Printers', 'Office Solutions', 'Multifunction', 'Ink Included']}
              color="blue"
              link="/services#printer-sales"
              index={4}
            />
            <ServiceCard
              icon="🔩"
              title="Printer Repairs"
              description="Quick and efficient printer repair services"
              features={['Paper Jam Fixes', 'Ink Issues', 'Connectivity', 'Maintenance']}
              color="orange"
              link="/services#printer-repair"
              index={5}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Why <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Trusted by thousands of customers across Jos, Nigeria
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Fast Turnaround',
                description: 'Most repairs completed within 24-48 hours',
              },
              {
                icon: '🎓',
                title: 'Certified Technicians',
                description: 'Experienced professionals with years of expertise',
              },
              {
                icon: '✅',
                title: 'Quality Guarantee',
                description: 'All repairs come with warranty for peace of mind',
              },
              {
                icon: '💰',
                title: 'Affordable Pricing',
                description: 'Best prices in Jos without compromising quality',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-8 rounded-2xl glass border border-white/10 hover:border-primary-500/50 transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section bg-dark-lighter">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-16"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Featured <span className="gradient-text">Products</span>
              </h2>
              <p className="text-xl text-gray-400">
                Browse our selection of quality devices
              </p>
            </div>
            <Link
              href="/products"
              className="hidden md:inline-flex btn btn-primary"
              data-cursor-text="View All"
            >
              View All Products
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              id="iphone-15-pro"
              name="iPhone 15 Pro Max"
              category="phone"
              condition="new"
              price={1200000}
              image="/images/phone-placeholder.jpg"
              specs={['256GB Storage', 'A17 Pro Chip', '6.7" Display']}
              inStock={true}
              index={0}
            />
            <ProductCard
              id="macbook-air-m3"
              name="MacBook Air M3"
              category="laptop"
              condition="new"
              price={1500000}
              image="/images/laptop-placeholder.jpg"
              specs={['16GB RAM', '512GB SSD', 'M3 Chip']}
              inStock={true}
              index={1}
            />
            <ProductCard
              id="hp-printer"
              name="HP LaserJet Pro"
              category="printer"
              condition="new"
              price={350000}
              image="/images/printer-placeholder.jpg"
              specs={['Wireless', 'Duplex', 'Fast Print']}
              inStock={true}
              index={2}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12 md:hidden"
          >
            <Link href="/products" className="btn btn-primary">
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real stories from satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Aisha Mohammed"
              role="Business Owner"
              avatar="/images/avatar-1.jpg"
              rating={5}
              text="AJ Tech repaired my laptop within 24 hours! Professional service and very affordable. Highly recommended!"
              date="2 weeks ago"
              index={0}
            />
            <TestimonialCard
              name="Chinedu Okafor"
              role="Student"
              avatar="/images/avatar-2.jpg"
              rating={5}
              text="Bought a refurbished iPhone from them. Works perfectly! Great quality and the warranty gives me peace of mind."
              date="1 month ago"
              index={1}
            />
            <TestimonialCard
              name="Grace Adeyemi"
              role="Teacher"
              avatar="/images/avatar-3.jpg"
              rating={5}
              text="Fixed my broken phone screen. The technicians are very skilled and the prices are the best in Jos!"
              date="3 weeks ago"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Fix Your Device?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get a free quote or visit our store in Jos. We're here to help with all your tech needs!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
                Get Free Quote
              </Link>
              <Link href="tel:+2348147571469" className="btn bg-white/10 hover:bg-white/20 text-white border-2 border-white">
                Call Us Now
              </Link>
            </div>
            <div className="mt-8 text-white/80">
              <p className="font-semibold">Open Monday - Saturday: 9AM - 7PM</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ServiceCard from '@/components/ui/ServiceCard'

export default function ServicesPage() {
  const repairServices = {
    phone: [
      'Screen Replacement',
      'Battery Replacement',
      'Water Damage Repair',
      'Charging Port Repair',
      'Camera Repair',
      'Software Issues',
      'Button Repairs',
      'Speaker & Mic Repair',
    ],
    laptop: [
      'Screen Replacement',
      'Keyboard Replacement',
      'Battery Replacement',
      'Hardware Upgrades (RAM, SSD)',
      'Virus Removal',
      'Data Recovery',
      'Hinge Repair',
      'Overheating Issues',
    ],
    printer: [
      'Paper Jam Fixes',
      'Ink Cartridge Issues',
      'Connectivity Problems',
      'Print Quality Issues',
      'Maintenance & Cleaning',
      'Driver Installation',
      'Network Setup',
      'Firmware Updates',
    ],
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Repair & Sales <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300">
              Professional tech repair services and quality devices at competitive prices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section bg-dark-lighter">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon="📱"
              title="Phone Sales"
              description="Latest smartphones from top brands"
              features={['New Devices', 'Official Warranty', 'Latest Models', 'Trade-in Available']}
              color="blue"
              link="#phone-sales"
              index={0}
            />
            <ServiceCard
              icon="🔧"
              title="Phone Repairs"
              description="Expert phone repair services"
              features={['Fast Service', 'Quality Parts', 'Warranty Included', 'All Brands']}
              color="orange"
              link="#phone-repair"
              index={1}
            />
            <ServiceCard
              icon="💻"
              title="Laptop Sales"
              description="Quality laptops for every need"
              features={['Business & Gaming', 'New & Refurbished', 'Warranty', 'Best Prices']}
              color="purple"
              link="#laptop-sales"
              index={2}
            />
            <ServiceCard
              icon="⚙️"
              title="Laptop Repairs"
              description="Professional laptop repairs"
              features={['Hardware Fixes', 'Software Solutions', 'Data Recovery', 'Upgrades']}
              color="green"
              link="#laptop-repair"
              index={3}
            />
            <ServiceCard
              icon="🖨️"
              title="Printer Sales"
              description="Reliable printers for home & office"
              features={['Home Printers', 'Office Models', 'Multifunction', 'Installation']}
              color="blue"
              link="#printer-sales"
              index={4}
            />
            <ServiceCard
              icon="🔩"
              title="Printer Repairs"
              description="Quick printer repair services"
              features={['All Brands', 'Maintenance', 'Parts Available', 'Setup Help']}
              color="orange"
              link="#printer-repair"
              index={5}
            />
          </div>
        </div>
      </section>

      {/* Detailed Repair Services */}
      <section id="phone-repair" className="section bg-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-display font-bold mb-6 text-center">
              <span className="gradient-text">Phone</span> Repair Services
            </h2>
            <p className="text-gray-400 text-center mb-12">
              We repair all phone brands including iPhone, Samsung, Tecno, Infinix, and more
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {repairServices.phone.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass p-4 rounded-xl text-center hover:border-blue-500/50 border border-white/10 transition-all"
                >
                  <p className="text-sm">{service}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="laptop-repair" className="section bg-dark-lighter">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-display font-bold mb-6 text-center">
              <span className="gradient-text">Laptop</span> Repair Services
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Expert repairs for HP, Dell, Lenovo, Apple MacBook, and all other brands
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {repairServices.laptop.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass p-4 rounded-xl text-center hover:border-purple-500/50 border border-white/10 transition-all"
                >
                  <p className="text-sm">{service}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="printer-repair" className="section bg-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-display font-bold mb-6 text-center">
              <span className="gradient-text">Printer</span> Repair Services
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Repair and maintenance for Canon, HP, Epson, and other printer brands
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {repairServices.printer.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass p-4 rounded-xl text-center hover:border-orange-500/50 border border-white/10 transition-all"
                >
                  <p className="text-sm">{service}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-dark-lighter">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-gray-400 mb-12">
              Get a free quote for your repair. We offer competitive pricing with no hidden fees.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-2xl border border-white/10">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="font-display font-bold mb-2">Phone Repairs</h3>
                <p className="text-gray-400 text-sm mb-4">Starting from</p>
                <p className="text-3xl font-bold text-primary-400">₦5,000</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <div className="text-3xl mb-4">💻</div>
                <h3 className="font-display font-bold mb-2">Laptop Repairs</h3>
                <p className="text-gray-400 text-sm mb-4">Starting from</p>
                <p className="text-3xl font-bold text-primary-400">₦10,000</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <div className="text-3xl mb-4">🖨️</div>
                <h3 className="font-display font-bold mb-2">Printer Repairs</h3>
                <p className="text-gray-400 text-sm mb-4">Starting from</p>
                <p className="text-3xl font-bold text-primary-400">₦3,000</p>
              </div>
            </div>
            <div className="mt-12">
              <Link href="/contact" className="btn btn-primary">
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-600 to-purple-600">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Need Professional Repair Service?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Visit our store or contact us for a free consultation
            </p>
            <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutPage() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!statsRef.current) return

    const stats = statsRef.current.querySelectorAll('.stat-number')

    stats.forEach((stat) => {
      const target = parseInt(stat.getAttribute('data-target') || '0')
      const suffix = stat.getAttribute('data-suffix') || ''

      gsap.from(stat, {
        textContent: 0,
        duration: 2,
        ease: 'power1.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: stat,
          start: 'top 80%',
        },
        onUpdate: function () {
          const current = Math.ceil(gsap.getProperty(stat, 'textContent') as number)
          stat.textContent = current + suffix
        },
      })
    })
  }, [])

  const team = [
    {
      name: 'Ahmad Jibril',
      role: 'Founder & Lead Technician',
      expertise: ['Phone Repairs', 'Laptop Repairs', 'Data Recovery'],
      certifications: ['Apple Certified', 'Samsung Certified'],
    },
    {
      name: 'Blessing Okon',
      role: 'Senior Technician',
      expertise: ['Screen Repairs', 'Battery Replacement', 'Hardware'],
      certifications: ['CompTIA A+', '5+ Years Experience'],
    },
    {
      name: 'David Musa',
      role: 'Sales Manager',
      expertise: ['Customer Service', 'Product Knowledge', 'Consultations'],
      certifications: ['Business Management', 'Tech Sales Expert'],
    },
  ]

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
              About <span className="gradient-text">AJ Tech</span>
            </h1>
            <p className="text-xl text-gray-300">
              Your local tech experts in Jos, Nigeria
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-dark-lighter">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  AJ Tech was founded in 2019 with a simple mission: to provide reliable, affordable tech repair services to the people of Jos, Nigeria.
                </p>
                <p>
                  What started as a small repair shop has grown into Jos's trusted destination for all things tech. We've repaired thousands of devices and helped countless customers find their perfect device.
                </p>
                <p>
                  Our commitment to quality, transparency, and customer satisfaction has made us the go-to choice for phone repairs, laptop repairs, and quality devices in Jos.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 glass" />
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                🏪
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section bg-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-xl text-gray-400">
              Numbers that speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: 5, suffix: '+', label: 'Years in Business' },
              { number: 2000, suffix: '+', label: 'Devices Repaired' },
              { number: 1500, suffix: '+', label: 'Happy Customers' },
              { number: 98, suffix: '%', label: 'Satisfaction Rate' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl glass border border-white/10"
              >
                <div
                  className="stat-number text-5xl font-display font-bold gradient-text mb-2"
                  data-target={stat.number}
                  data-suffix={stat.suffix}
                >
                  0{stat.suffix}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-dark-lighter">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '✨',
                title: 'Quality First',
                description: 'We use only genuine parts and follow industry best practices for every repair.',
              },
              {
                icon: '🤝',
                title: 'Customer Focus',
                description: 'Your satisfaction is our priority. We go above and beyond for every customer.',
              },
              {
                icon: '💚',
                title: 'Environmental Responsibility',
                description: 'We properly recycle old devices and parts to minimize environmental impact.',
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl glass border border-white/10 text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-display font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Expert technicians dedicated to your tech needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl glass border border-white/10 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-4xl">
                  👨‍💼
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">{member.name}</h3>
                <p className="text-primary-400 mb-4">{member.role}</p>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Expertise:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Certifications:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.certifications.map((cert, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Experience the AJ Tech Difference?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Visit our store in Jos or contact us today
            </p>
            <a href="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

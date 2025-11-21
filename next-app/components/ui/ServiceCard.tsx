'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
  color: 'blue' | 'purple' | 'orange' | 'green'
  link: string
  index?: number
}

const colorClasses = {
  blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-500',
  purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:border-purple-500',
  orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/30 hover:border-orange-500',
  green: 'from-green-500/20 to-green-600/20 border-green-500/30 hover:border-green-500',
}

const iconColorClasses = {
  blue: 'text-blue-500',
  purple: 'text-purple-500',
  orange: 'text-orange-500',
  green: 'text-green-500',
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  color,
  link,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={cn(
        'relative rounded-2xl p-8 glass border-2 transition-all duration-300',
        colorClasses[color]
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          'w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 text-3xl',
          colorClasses[color]
        )}
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-display font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg
              className={cn('w-5 h-5 mt-0.5 flex-shrink-0', iconColorClasses[color])}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={link}
        className={cn(
          'inline-flex items-center gap-2 font-semibold transition-all group',
          iconColorClasses[color]
        )}
        data-cursor-text="Learn More"
      >
        Learn More
        <svg
          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>

      {/* Decorative glow */}
      <div
        className={cn(
          'absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl',
          colorClasses[color]
        )}
      />
    </motion.div>
  )
}

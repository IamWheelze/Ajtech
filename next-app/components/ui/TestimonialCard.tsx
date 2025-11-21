'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface TestimonialCardProps {
  name: string
  role: string
  avatar: string
  rating: number
  text: string
  date: string
  index?: number
}

export default function TestimonialCard({
  name,
  role,
  avatar,
  rating,
  text,
  date,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative rounded-2xl p-8 glass border border-white/10 h-full flex flex-col"
    >
      {/* Quote Icon */}
      <div className="absolute top-8 right-8 text-6xl text-primary-500/20 font-serif">
        "
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-500' : 'text-gray-600'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-300 mb-6 flex-grow relative z-10 leading-relaxed">
        {text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-white/10">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary-500 to-purple-500">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-grow">
          <div className="font-display font-semibold">{name}</div>
          <div className="text-sm text-gray-400">{role}</div>
        </div>
        <div className="text-xs text-gray-500">{date}</div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/5 to-purple-500/5 rounded-2xl" />
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  id: string
  name: string
  category: 'phone' | 'laptop' | 'printer' | 'accessory'
  condition: 'new' | 'used' | 'refurbished'
  price: number
  image: string
  specs: string[]
  inStock: boolean
  index?: number
}

const conditionColors = {
  new: 'bg-green-500',
  used: 'bg-orange-500',
  refurbished: 'bg-blue-500',
}

const conditionLabels = {
  new: 'New',
  used: 'Used',
  refurbished: 'Refurbished',
}

export default function ProductCard({
  id,
  name,
  category,
  condition,
  price,
  image,
  specs,
  inStock,
  index = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl glass border border-white/10 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-64 bg-dark-light overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badge */}
        <div
          className={cn(
            'absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white',
            conditionColors[condition]
          )}
        >
          {conditionLabels[condition]}
        </div>

        {/* Stock Status */}
        {!inStock && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Out of Stock</span>
          </div>
        )}

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <Link
            href={`/products/${id}`}
            className="w-full btn btn-primary justify-center"
            data-cursor-text="View"
          >
            Quick View
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="text-sm text-primary-400 font-medium mb-2 uppercase tracking-wide">
          {category}
        </div>

        {/* Name */}
        <h3 className="text-xl font-display font-bold mb-3 line-clamp-2 group-hover:text-primary-400 transition-colors">
          {name}
        </h3>

        {/* Specs */}
        <ul className="space-y-2 mb-4">
          {specs.slice(0, 3).map((spec, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
              <svg
                className="w-4 h-4 text-primary-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {spec}
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div>
            <div className="text-sm text-gray-400">Starting from</div>
            <div className="text-2xl font-display font-bold text-primary-400">
              ₦{price.toLocaleString()}
            </div>
          </div>
          <Link
            href={`/contact?product=${id}`}
            className={cn(
              'btn btn-secondary',
              !inStock && 'opacity-50 cursor-not-allowed pointer-events-none'
            )}
            data-cursor-text="Inquire"
          >
            Inquire
          </Link>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-2xl" />
    </motion.div>
  )
}

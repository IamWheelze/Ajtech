'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from '@/components/ui/ProductCard'
import type { Product } from '@/types'

const products: Product[] = [
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro Max',
    category: 'phone',
    condition: 'new',
    price: 1200000,
    image: '/images/phone-placeholder.jpg',
    specs: ['256GB Storage', 'A17 Pro Chip', '6.7" Display', '48MP Camera'],
    inStock: true,
  },
  {
    id: 'samsung-s24',
    name: 'Samsung Galaxy S24 Ultra',
    category: 'phone',
    condition: 'new',
    price: 1100000,
    image: '/images/phone-placeholder.jpg',
    specs: ['12GB RAM', 'Snapdragon 8 Gen 3', '200MP Camera', '6.8" Display'],
    inStock: true,
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    category: 'phone',
    condition: 'used',
    price: 450000,
    image: '/images/phone-placeholder.jpg',
    specs: ['128GB Storage', 'A15 Bionic', 'Good Condition', 'Warranty'],
    inStock: true,
  },
  {
    id: 'macbook-air-m3',
    name: 'MacBook Air M3',
    category: 'laptop',
    condition: 'new',
    price: 1500000,
    image: '/images/laptop-placeholder.jpg',
    specs: ['16GB RAM', '512GB SSD', 'M3 Chip', '15" Display'],
    inStock: true,
  },
  {
    id: 'hp-pavilion',
    name: 'HP Pavilion Gaming',
    category: 'laptop',
    condition: 'new',
    price: 800000,
    image: '/images/laptop-placeholder.jpg',
    specs: ['16GB RAM', 'RTX 4050', '512GB SSD', '15.6" Display'],
    inStock: true,
  },
  {
    id: 'dell-latitude',
    name: 'Dell Latitude 7420',
    category: 'laptop',
    condition: 'refurbished',
    price: 550000,
    image: '/images/laptop-placeholder.jpg',
    specs: ['16GB RAM', 'Intel i7', '256GB SSD', 'Business Grade'],
    inStock: true,
  },
  {
    id: 'hp-laserjet',
    name: 'HP LaserJet Pro M404',
    category: 'printer',
    condition: 'new',
    price: 350000,
    image: '/images/printer-placeholder.jpg',
    specs: ['Wireless', 'Duplex Printing', 'Fast Speed', 'Toner Included'],
    inStock: true,
  },
  {
    id: 'canon-pixma',
    name: 'Canon PIXMA G6020',
    category: 'printer',
    condition: 'new',
    price: 280000,
    image: '/images/printer-placeholder.jpg',
    specs: ['Color Printing', 'Wireless', 'Tank System', 'All-in-One'],
    inStock: true,
  },
  {
    id: 'airpods-pro',
    name: 'AirPods Pro (2nd Gen)',
    category: 'accessory',
    condition: 'new',
    price: 120000,
    image: '/images/accessories-placeholder.jpg',
    specs: ['Active Noise Cancellation', 'Wireless Charging', 'H2 Chip', 'Spatial Audio'],
    inStock: true,
  },
]

type FilterType = 'all' | 'phone' | 'laptop' | 'printer' | 'accessory'
type ConditionFilter = 'all' | 'new' | 'used' | 'refurbished'

export default function ProductsPage() {
  const [categoryFilter, setCategoryFilter] = useState<FilterType>('all')
  const [conditionFilter, setConditionFilter] = useState<ConditionFilter>('all')

  const filteredProducts = products.filter((product) => {
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter
    const matchesCondition = conditionFilter === 'all' || product.condition === conditionFilter
    return matchesCategory && matchesCondition
  })

  const filters: { label: string; value: FilterType; icon: string }[] = [
    { label: 'All Products', value: 'all', icon: '📦' },
    { label: 'Phones', value: 'phone', icon: '📱' },
    { label: 'Laptops', value: 'laptop', icon: '💻' },
    { label: 'Printers', value: 'printer', icon: '🖨️' },
    { label: 'Accessories', value: 'accessory', icon: '🎧' },
  ]

  const conditionFilters: { label: string; value: ConditionFilter }[] = [
    { label: 'All', value: 'all' },
    { label: 'New', value: 'new' },
    { label: 'Used', value: 'used' },
    { label: 'Refurbished', value: 'refurbished' },
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
              Quality <span className="gradient-text">Devices</span> at Great Prices
            </h1>
            <p className="text-xl text-gray-300">
              Browse our selection of new and refurbished devices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-dark-lighter">
        <div className="container">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setCategoryFilter(filter.value)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    categoryFilter === filter.value
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/50'
                      : 'glass border border-white/10 text-gray-300 hover:border-primary-500/50'
                  }`}
                  data-cursor-text="Filter"
                >
                  <span className="mr-2">{filter.icon}</span>
                  {filter.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Condition Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-gray-400">Condition:</span>
              {conditionFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setConditionFilter(filter.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    conditionFilter === filter.value
                      ? 'bg-primary-600/20 text-primary-400 border border-primary-500/50'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-8 text-center text-gray-400"
          >
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </motion.div>

          {/* Products Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} {...product} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-display font-bold mb-2">No products found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your filters</p>
              <button
                onClick={() => {
                  setCategoryFilter('all')
                  setConditionFilter('all')
                }}
                className="btn btn-primary"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
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
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us and we'll help you find the perfect device
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn bg-white text-primary-600 hover:bg-gray-100">
                WhatsApp Us
              </a>
              <a href="tel:+234XXXXXXXXXX" className="btn bg-white/10 hover:bg-white/20 text-white border-2 border-white">
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

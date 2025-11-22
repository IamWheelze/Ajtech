'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  {
    id: '1',
    title: '10 Signs Your Phone Battery Needs Replacement',
    excerpt: 'Learn the warning signs that indicate it\'s time to replace your phone battery and extend your device\'s life.',
    image: '/images/blog-1.jpg',
    category: 'Phone Tips',
    author: 'AJ Tech Team',
    date: 'Nov 15, 2024',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'How to Speed Up Your Slow Laptop',
    excerpt: 'Simple tips and tricks to boost your laptop\'s performance without spending money on new hardware.',
    image: '/images/blog-2.jpg',
    category: 'Laptop Tips',
    author: 'Ahmad Jibril',
    date: 'Nov 10, 2024',
    readTime: '7 min read',
  },
  {
    id: '3',
    title: 'iPhone 15 vs Samsung S24: Which Should You Buy?',
    excerpt: 'A comprehensive comparison of the latest flagship phones to help you make the right choice.',
    image: '/images/blog-3.jpg',
    category: 'Product Reviews',
    author: 'David Musa',
    date: 'Nov 5, 2024',
    readTime: '10 min read',
  },
  {
    id: '4',
    title: 'Water Damage: What to Do Immediately',
    excerpt: 'Quick actions you should take if your phone or laptop gets water damaged to minimize the damage.',
    image: '/images/blog-4.jpg',
    category: 'Repair Tips',
    author: 'Blessing Okon',
    date: 'Oct 28, 2024',
    readTime: '4 min read',
  },
  {
    id: '5',
    title: 'Best Laptops for Students in 2024',
    excerpt: 'Our top picks for affordable, reliable laptops perfect for students and academic work.',
    image: '/images/blog-5.jpg',
    category: 'Buying Guide',
    author: 'AJ Tech Team',
    date: 'Oct 20, 2024',
    readTime: '8 min read',
  },
  {
    id: '6',
    title: 'How to Maintain Your Printer for Longer Life',
    excerpt: 'Essential maintenance tips to keep your printer running smoothly and avoid costly repairs.',
    image: '/images/blog-6.jpg',
    category: 'Maintenance',
    author: 'Ahmad Jibril',
    date: 'Oct 15, 2024',
    readTime: '6 min read',
  },
]

export default function BlogPage() {
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
              Tech Tips & <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-gray-300">
              Expert advice, repair tips, and product reviews from the AJ Tech team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section bg-dark-lighter">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-8">
              Featured <span className="gradient-text">Article</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 rounded-2xl glass border border-white/10 hover:border-primary-500/50 transition-all group"
          >
            <div className="relative h-80 lg:h-auto rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20" />
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                📱
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-sm font-semibold mb-4 w-fit">
                {blogPosts[0].category}
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-primary-400 transition-colors">
                {blogPosts[0].title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span>{blogPosts[0].author}</span>
                <span>•</span>
                <span>{blogPosts[0].date}</span>
                <span>•</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <Link
                href={`/blog/${blogPosts[0].id}`}
                className="btn btn-primary w-fit"
                data-cursor-text="Read"
              >
                Read Article
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section bg-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-display font-bold">
              Latest <span className="gradient-text">Articles</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl glass border border-white/10 overflow-hidden hover:border-primary-500/50 transition-all group"
              >
                {/* Image */}
                <div className="relative h-48 bg-dark-light overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center text-4xl">
                    {index % 3 === 0 ? '💻' : index % 3 === 1 ? '🔧' : '📚'}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary-500/90 backdrop-blur text-white text-xs font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary-400 font-semibold text-sm group/link"
                    data-cursor-text="Read"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
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
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section bg-dark-lighter">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-display font-bold mb-8">
              Browse by <span className="gradient-text">Category</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Phone Tips', icon: '📱', count: 12 },
                { name: 'Laptop Tips', icon: '💻', count: 8 },
                { name: 'Repair Tips', icon: '🔧', count: 15 },
                { name: 'Product Reviews', icon: '⭐', count: 10 },
                { name: 'Buying Guide', icon: '🛒', count: 6 },
                { name: 'Maintenance', icon: '🛠️', count: 7 },
              ].map((category, i) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-full glass border border-white/10 hover:border-primary-500/50 transition-all"
                  data-cursor-text="Browse"
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                  <span className="ml-2 text-xs text-gray-500">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
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
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get the latest tech tips, repair guides, and exclusive offers delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white/50 transition-colors flex-grow max-w-md"
              />
              <button type="submit" className="btn bg-white text-primary-600 hover:bg-gray-100">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}

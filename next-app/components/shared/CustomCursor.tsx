'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorText, setCursorText] = useState('')
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement

      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        setCursorVariant('hover')
        if (target.dataset.cursorText) {
          setCursorText(target.dataset.cursorText)
        } else {
          setCursorText('Click')
        }
      }
    }

    const handleMouseLeave = () => {
      setCursorVariant('default')
      setCursorText('')
    }

    window.addEventListener('mousemove', mouseMove)

    // Add event listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      scale: 2,
    },
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-primary-500 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      {cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[10000] text-xs font-semibold text-white hidden md:block"
          initial={{ opacity: 0 }}
          animate={{
            x: mousePosition.x - 20,
            y: mousePosition.y - 40,
            opacity: 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 28,
          }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  )
}

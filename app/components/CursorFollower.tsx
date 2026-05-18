'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorFollower() {
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 })

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-400/40 to-purple-500/40 blur-xl"
      style={{ x: springX, y: springY }}
    />
  )
}

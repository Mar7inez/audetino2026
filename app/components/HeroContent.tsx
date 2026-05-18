'use client'

import { motion } from "framer-motion"
import MagneticButton from "./MagneticButton"

export default function HeroContent() {
  return (
    <div className="flex-1 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 backdrop-blur-sm"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Hacemos tu idea posible
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="font-display text-5xl font-bold leading-tight text-white md:text-7xl"
      >
        Bienvenido a{" "}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Audetino
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="max-w-lg text-lg leading-relaxed text-white/60"
      >
        La plataforma que simplifica la gestión adaptativa a tus proyectos y
        recursos
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
      >
        <a href="/contacto">
          <MagneticButton>Agendar entrevista</MagneticButton>
        </a>
      </motion.div>
    </div>
  )
}

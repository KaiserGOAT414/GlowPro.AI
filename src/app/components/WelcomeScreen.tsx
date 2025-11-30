'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

type WelcomeScreenProps = {
  onStart: () => void
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b from-black via-black to-purple-950/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8 max-w-md"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center gap-3"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-50"></div>
            <Sparkles className="w-12 h-12 relative text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" strokeWidth={2} />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            GlowPro.AI
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold text-white">
            Bem-vindo(a) ao GlowPro.AI
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Antes de começar, responda um pequeno quiz para criarmos sua rotina personalizada de cuidados para o seu rosto.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="relative group w-full py-4 px-8 rounded-2xl font-semibold text-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:scale-105"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10 text-white">Começar Quiz</span>
        </motion.button>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex items-center justify-center gap-2 text-sm text-gray-500"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500/50"></div>
          <span>Análise com IA</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-pink-500/50"></div>
        </motion.div>
      </motion.div>

      {/* Background glow effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}

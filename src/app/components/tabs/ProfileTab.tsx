'use client'

import { motion } from 'framer-motion'
import { User, Mail, Calendar, Edit2, LogOut, Settings } from 'lucide-react'
import type { QuizData } from '../../page'

type ProfileTabProps = {
  quizData: QuizData
  photoData: string
}

export default function ProfileTab({ quizData, photoData }: ProfileTabProps) {
  return (
    <div className="px-6 py-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Meu Perfil
        </h1>
        <p className="text-gray-400">Gerencie suas informações</p>
      </motion.div>

      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col items-center space-y-4"
      >
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500">
            <img src={photoData} alt="Foto de perfil" className="w-full h-full object-cover" />
          </div>
          <button className="absolute bottom-0 right-0 p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
        <button className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors">
          Alterar foto de perfil
        </button>
      </motion.div>

      {/* User Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4"
      >
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <User className="w-5 h-5 text-purple-400" />
          Informações Pessoais
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-800 rounded-xl">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">usuario@exemplo.com</p>
              </div>
            </div>
            <button className="text-purple-400 hover:text-purple-300">
              <Edit2 className="w-4 h-4" />
            </button>
          </div>

          {quizData.age && (
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-xl">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Idade</p>
                  <p className="text-white font-medium">{quizData.age} anos</p>
                </div>
              </div>
              <button className="text-purple-400 hover:text-purple-300">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
          )}

          {quizData.gender && (
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-xl">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Gênero</p>
                  <p className="text-white font-medium">{quizData.gender}</p>
                </div>
              </div>
              <button className="text-purple-400 hover:text-purple-300">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Skin Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Perfil de Pele</h2>
          <button className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors">
            Refazer Quiz
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl">
            <p className="text-sm text-gray-400">Tipo de Pele</p>
            <p className="text-white font-semibold mt-1">{quizData.skinType}</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl">
            <p className="text-sm text-gray-400">Objetivo</p>
            <p className="text-white font-semibold mt-1">{quizData.mainGoal}</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl">
            <p className="text-sm text-gray-400">Água/dia</p>
            <p className="text-white font-semibold mt-1">{quizData.waterIntake}</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl">
            <p className="text-sm text-gray-400">Sono</p>
            <p className="text-white font-semibold mt-1">{quizData.sleepHours}</p>
          </div>
        </div>
      </motion.div>

      {/* Problems */}
      {quizData.problems && quizData.problems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4"
        >
          <h2 className="text-xl font-semibold text-white">Problemas Atuais</h2>
          <div className="flex flex-wrap gap-2">
            {quizData.problems.map((problem, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-400"
              >
                {problem}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-3"
      >
        <button className="w-full p-4 bg-gray-900 border border-gray-800 rounded-xl text-left hover:border-purple-500/50 transition-all duration-300 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings className="w-5 h-5 text-gray-400" />
            <span className="text-white font-medium">Configurações</span>
          </div>
          <span className="text-gray-400">›</span>
        </button>

        <button className="w-full p-4 bg-gray-900 border border-gray-800 rounded-xl text-left hover:border-red-500/50 transition-all duration-300 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogOut className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-medium">Sair</span>
          </div>
          <span className="text-gray-400">›</span>
        </button>
      </motion.div>

      {/* App Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center space-y-2 pt-4"
      >
        <p className="text-sm text-gray-500">GlowPro.AI v1.0.0</p>
        <p className="text-xs text-gray-600">Análise facial com inteligência artificial</p>
      </motion.div>
    </div>
  )
}

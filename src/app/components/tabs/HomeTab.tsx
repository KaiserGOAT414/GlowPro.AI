'use client'

import { motion } from 'framer-motion'
import { Sparkles, Star, TrendingUp, Scissors, Eye } from 'lucide-react'
import type { QuizData, AnalysisResult } from '../../page'

type HomeTabProps = {
  quizData: QuizData
  photoData: string
  analysisResult: AnalysisResult
}

export default function HomeTab({ quizData, photoData, analysisResult }: HomeTabProps) {
  return (
    <div className="px-6 py-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Sua Análise Completa
        </h1>
        <p className="text-gray-400">Resultados baseados em IA</p>
      </motion.div>

      {/* Photo Comparison */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="space-y-2">
          <div className="aspect-square rounded-2xl overflow-hidden border-2 border-gray-800">
            <img src={photoData} alt="Foto atual" className="w-full h-full object-cover" />
          </div>
          <p className="text-center text-sm text-gray-400">Foto Atual</p>
        </div>
        <div className="space-y-2">
          <div className="aspect-square rounded-2xl overflow-hidden border-2 border-purple-500 relative">
            <img src={photoData} alt="Potencial" className="w-full h-full object-cover brightness-110 contrast-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
            <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
              Potencial
            </div>
          </div>
          <p className="text-center text-sm text-gray-400">Após 3 meses</p>
        </div>
      </motion.div>

      {/* Scores */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6 space-y-2">
          <div className="flex items-center gap-2 text-purple-400">
            <Star className="w-5 h-5" />
            <span className="text-sm font-medium">Simetria</span>
          </div>
          <div className="text-4xl font-bold text-white">{analysisResult.symmetry}%</div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${analysisResult.symmetry}%` }}
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6 space-y-2">
          <div className="flex items-center gap-2 text-pink-400">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Potencial</span>
          </div>
          <div className="text-4xl font-bold text-white">{analysisResult.aestheticPotential}%</div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${analysisResult.aestheticPotential}%` }}
            />
          </div>
        </div>
      </motion.div>

      {/* Face Shape */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4"
      >
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <Eye className="w-5 h-5 text-purple-400" />
          Formato do Rosto
        </h3>
        <p className="text-2xl font-bold text-purple-400">{analysisResult.faceShape}</p>
      </motion.div>

      {/* Strengths */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4"
      >
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-400" />
          Pontos Fortes
        </h3>
        <ul className="space-y-3">
          {analysisResult.strengths.map((strength, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
              <span className="text-gray-300">{strength}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Improvements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4"
      >
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          Áreas para Melhoria
        </h3>
        <ul className="space-y-3">
          {analysisResult.improvements.map((improvement, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
              <span className="text-gray-300">{improvement}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6 space-y-4"
      >
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <Scissors className="w-5 h-5 text-purple-400" />
          Recomendações Personalizadas
        </h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-400 font-medium">Corte de Cabelo Ideal</p>
            <p className="text-white">{analysisResult.recommendations.haircut}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-400 font-medium">Estilo de Sobrancelhas</p>
            <p className="text-white">{analysisResult.recommendations.eyebrows}</p>
          </div>
          {analysisResult.recommendations.beard && (
            <div className="space-y-2">
              <p className="text-sm text-gray-400 font-medium">Estilo de Barba</p>
              <p className="text-white">{analysisResult.recommendations.beard}</p>
            </div>
          )}
          <div className="space-y-2">
            <p className="text-sm text-gray-400 font-medium">Iluminação para Selfies</p>
            <p className="text-white">{analysisResult.recommendations.lighting}</p>
          </div>
        </div>
      </motion.div>

      {/* Skin Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-6"
      >
        <h3 className="text-xl font-semibold text-white">Métricas da Pele</h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Hidratação</span>
              <span className="text-white font-semibold">{analysisResult.skinHydration}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                style={{ width: `${analysisResult.skinHydration}%` }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Poros</span>
              <span className="text-white font-semibold">{analysisResult.poresScore}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                style={{ width: `${analysisResult.poresScore}%` }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Textura</span>
              <span className="text-white font-semibold">{analysisResult.textureScore}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                style={{ width: `${analysisResult.textureScore}%` }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

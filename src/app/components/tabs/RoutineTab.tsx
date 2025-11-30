'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Sunset, CheckCircle2, Circle, ChevronDown, ChevronUp } from 'lucide-react'
import type { QuizData, AnalysisResult } from '../../page'

type RoutineTabProps = {
  quizData: QuizData
  analysisResult: AnalysisResult
}

type RoutineStep = {
  id: string
  name: string
  description: string
  completed: boolean
}

type RoutinePeriod = {
  id: string
  name: string
  icon: any
  steps: RoutineStep[]
}

export default function RoutineTab({ quizData, analysisResult }: RoutineTabProps) {
  const [routines, setRoutines] = useState<RoutinePeriod[]>([
    {
      id: 'morning',
      name: 'Manhã',
      icon: Sun,
      steps: [
        { id: '1', name: 'Limpeza Facial', description: 'Use um sabonete suave para remover impurezas', completed: false },
        { id: '2', name: 'Tônico', description: 'Aplique tônico para equilibrar o pH da pele', completed: false },
        { id: '3', name: 'Sérum Vitamina C', description: 'Protege contra radicais livres e ilumina', completed: false },
        { id: '4', name: 'Hidratante', description: 'Hidrate de acordo com seu tipo de pele', completed: false },
        { id: '5', name: 'Protetor Solar FPS 50+', description: 'ESSENCIAL - Aplique generosamente', completed: false }
      ]
    },
    {
      id: 'afternoon',
      name: 'Tarde',
      icon: Sunset,
      steps: [
        { id: '1', name: 'Reaplicar Protetor Solar', description: 'Reaplique a cada 2-3 horas', completed: false },
        { id: '2', name: 'Hidratação Extra', description: 'Se necessário, use spray hidratante', completed: false }
      ]
    },
    {
      id: 'night',
      name: 'Noite',
      icon: Moon,
      steps: [
        { id: '1', name: 'Demaquilante', description: 'Remova toda maquiagem e impurezas', completed: false },
        { id: '2', name: 'Limpeza Profunda', description: 'Limpe novamente para garantir pele limpa', completed: false },
        { id: '3', name: 'Tônico', description: 'Reaplique o tônico', completed: false },
        { id: '4', name: 'Sérum Noturno', description: 'Use sérum com retinol ou ácido hialurônico', completed: false },
        { id: '5', name: 'Hidratante Noturno', description: 'Versão mais rica para regeneração', completed: false },
        { id: '6', name: 'Creme para Olhos', description: 'Reduza olheiras e linhas finas', completed: false }
      ]
    }
  ])

  const [expandedRoutine, setExpandedRoutine] = useState<string>('morning')
  const [showFacialExercises, setShowFacialExercises] = useState(false)

  const toggleStep = (routineId: string, stepId: string) => {
    setRoutines(routines.map(routine => {
      if (routine.id === routineId) {
        return {
          ...routine,
          steps: routine.steps.map(step =>
            step.id === stepId ? { ...step, completed: !step.completed } : step
          )
        }
      }
      return routine
    }))
  }

  const getCompletionPercentage = (routine: RoutinePeriod) => {
    const completed = routine.steps.filter(s => s.completed).length
    return Math.round((completed / routine.steps.length) * 100)
  }

  return (
    <div className="px-6 py-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Sua Rotina Personalizada
        </h1>
        <p className="text-gray-400">Baseada no seu tipo de pele: {quizData.skinType}</p>
      </motion.div>

      {/* Daily Routines */}
      <div className="space-y-4">
        {routines.map((routine, index) => {
          const Icon = routine.icon
          const isExpanded = expandedRoutine === routine.id
          const completion = getCompletionPercentage(routine)

          return (
            <motion.div
              key={routine.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"
            >
              {/* Routine Header */}
              <button
                onClick={() => setExpandedRoutine(isExpanded ? '' : routine.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white">{routine.name}</h3>
                    <p className="text-sm text-gray-400">{routine.steps.length} passos</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-purple-400">{completion}%</p>
                    <p className="text-xs text-gray-400">Completo</p>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Routine Steps */}
              {isExpanded && (
                <div className="px-6 pb-6 space-y-3">
                  {routine.steps.map((step, stepIndex) => (
                    <motion.button
                      key={step.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: stepIndex * 0.05 }}
                      onClick={() => toggleStep(routine.id, step.id)}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                        step.completed
                          ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30'
                          : 'bg-gray-800 border border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {step.completed ? (
                          <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Circle className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <h4 className={`font-semibold ${step.completed ? 'text-purple-400' : 'text-white'}`}>
                            {step.name}
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">{step.description}</p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Facial Definition Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl overflow-hidden"
      >
        <button
          onClick={() => setShowFacialExercises(!showFacialExercises)}
          className="w-full p-6 flex items-center justify-between hover:bg-purple-500/5 transition-colors"
        >
          <div className="text-left">
            <h3 className="text-xl font-semibold text-white">Definição Facial (Papada e Mandíbula)</h3>
            <p className="text-sm text-gray-400 mt-1">Exercícios e técnicas especializadas</p>
          </div>
          {showFacialExercises ? (
            <ChevronUp className="w-5 h-5 text-purple-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-purple-400" />
          )}
        </button>

        {showFacialExercises && (
          <div className="px-6 pb-6 space-y-6">
            {/* Exercises */}
            <div className="space-y-3">
              <h4 className="font-semibold text-purple-400">Exercícios Faciais</h4>
              <div className="space-y-2">
                <div className="p-4 bg-gray-900 rounded-xl">
                  <p className="text-white font-medium">Alongamento do pescoço</p>
                  <p className="text-sm text-gray-400 mt-1">3x ao dia - Incline a cabeça para trás e segure por 10 segundos</p>
                </div>
                <div className="p-4 bg-gray-900 rounded-xl">
                  <p className="text-white font-medium">Beijar o teto</p>
                  <p className="text-sm text-gray-400 mt-1">Olhe para cima e faça movimento de beijo, 15 repetições</p>
                </div>
                <div className="p-4 bg-gray-900 rounded-xl">
                  <p className="text-white font-medium">Língua no céu da boca</p>
                  <p className="text-sm text-gray-400 mt-1">Empurre a língua contra o céu da boca por 30 segundos</p>
                </div>
                <div className="p-4 bg-gray-900 rounded-xl">
                  <p className="text-white font-medium">Mastigação consciente</p>
                  <p className="text-sm text-gray-400 mt-1">Mastigue devagar e use ambos os lados da boca</p>
                </div>
              </div>
            </div>

            {/* Posture */}
            <div className="space-y-3">
              <h4 className="font-semibold text-purple-400">Postura</h4>
              <div className="space-y-2">
                <div className="p-4 bg-gray-900 rounded-xl">
                  <p className="text-white font-medium">Queixo alinhado</p>
                  <p className="text-sm text-gray-400 mt-1">Mantenha o queixo paralelo ao chão</p>
                </div>
                <div className="p-4 bg-gray-900 rounded-xl">
                  <p className="text-white font-medium">Evite olhar para baixo</p>
                  <p className="text-sm text-gray-400 mt-1">Limite o tempo olhando para o celular</p>
                </div>
              </div>
            </div>

            {/* Habits */}
            <div className="space-y-3">
              <h4 className="font-semibold text-purple-400">Hábitos Saudáveis</h4>
              <div className="space-y-2">
                <div className="p-4 bg-gray-900 rounded-xl">
                  <p className="text-white font-medium">Hidratação</p>
                  <p className="text-sm text-gray-400 mt-1">Beba pelo menos 2L de água por dia</p>
                </div>
                <div className="p-4 bg-gray-900 rounded-xl">
                  <p className="text-white font-medium">Reduza sódio</p>
                  <p className="text-sm text-gray-400 mt-1">Evite alimentos processados e sal em excesso</p>
                </div>
                <div className="p-4 bg-gray-900 rounded-xl">
                  <p className="text-white font-medium">Posição para dormir</p>
                  <p className="text-sm text-gray-400 mt-1">Durma de costas, evite dormir de bruços</p>
                </div>
              </div>
            </div>

            {/* Skincare */}
            <div className="space-y-3">
              <h4 className="font-semibold text-purple-400">Skincare Específico</h4>
              <div className="space-y-2">
                <div className="p-4 bg-gray-900 rounded-xl">
                  <p className="text-white font-medium">Massageadores faciais</p>
                  <p className="text-sm text-gray-400 mt-1">Use gua sha ou roller de jade diariamente</p>
                </div>
                <div className="p-4 bg-gray-900 rounded-xl">
                  <p className="text-white font-medium">Drenagem linfática</p>
                  <p className="text-sm text-gray-400 mt-1">Massagem suave do centro para fora do rosto</p>
                </div>
                <div className="p-4 bg-gray-900 rounded-xl">
                  <p className="text-white font-medium">Creme firmador</p>
                  <p className="text-sm text-gray-400 mt-1">Aplique creme com cafeína na região do pescoço</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

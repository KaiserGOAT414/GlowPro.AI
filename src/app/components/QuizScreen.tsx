'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import type { QuizData } from '../page'

type QuizScreenProps = {
  onComplete: (data: QuizData) => void
}

const questions = [
  {
    id: 'skinType',
    question: 'Qual é o seu tipo de pele?',
    options: ['Seca', 'Oleosa', 'Mista', 'Sensível']
  },
  {
    id: 'problems',
    question: 'Quais problemas você enfrenta atualmente?',
    options: ['Espinhas', 'Manchas', 'Olheiras', 'Textura irregular', 'Poros dilatados', 'Linhas finas'],
    multiple: true
  },
  {
    id: 'waterIntake',
    question: 'Quanto de água você consome por dia?',
    options: ['Menos de 1L', '1-2L', '2-3L', 'Mais de 3L']
  },
  {
    id: 'skincareRoutine',
    question: 'Você tem uma rotina de skincare?',
    options: ['Não tenho', 'Básica (limpeza)', 'Intermediária (limpeza + hidratação)', 'Completa (limpeza + tônico + sérum + hidratação + protetor)']
  },
  {
    id: 'sleepHours',
    question: 'Quantas horas você dorme por noite?',
    options: ['Menos de 5h', '5-6h', '7-8h', 'Mais de 8h']
  },
  {
    id: 'sunExposure',
    question: 'Qual é sua exposição ao sol?',
    options: ['Mínima (fico em ambientes fechados)', 'Moderada (saio ocasionalmente)', 'Alta (trabalho ao ar livre)']
  },
  {
    id: 'mainGoal',
    question: 'Qual é seu objetivo principal?',
    options: ['Pele mais limpa', 'Aparência mais jovem', 'Definição facial', 'Redução de papada', 'Melhora na textura']
  },
  {
    id: 'currentProducts',
    question: 'Quais produtos você já usa?',
    type: 'text'
  },
  {
    id: 'age',
    question: 'Qual é a sua idade? (opcional)',
    type: 'text'
  },
  {
    id: 'gender',
    question: 'Gênero (opcional)',
    options: ['Masculino', 'Feminino', 'Prefiro não informar']
  }
]

export default function QuizScreen({ onComplete }: QuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Partial<QuizData>>({})
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const question = questions[currentQuestion]
  const isLastQuestion = currentQuestion === questions.length - 1
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleOptionSelect = (option: string) => {
    if (question.multiple) {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter(o => o !== option))
      } else {
        setSelectedOptions([...selectedOptions, option])
      }
    } else {
      setSelectedOptions([option])
    }
  }

  const handleNext = () => {
    if (question.multiple) {
      setAnswers({ ...answers, [question.id]: selectedOptions })
    } else if (question.type === 'text') {
      // Text input handled separately
    } else {
      setAnswers({ ...answers, [question.id]: selectedOptions[0] })
    }

    if (isLastQuestion) {
      onComplete(answers as QuizData)
    } else {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOptions([])
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOptions([])
    }
  }

  const handleTextInput = (value: string) => {
    setAnswers({ ...answers, [question.id]: value })
  }

  const canProceed = question.type === 'text' || selectedOptions.length > 0

  return (
    <div className="min-h-screen flex flex-col bg-black px-6 py-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Pergunta {currentQuestion + 1} de {questions.length}</span>
          <span className="text-sm text-purple-400 font-semibold">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
            {question.question}
          </h2>

          <div className="flex-1 space-y-3">
            {question.type === 'text' ? (
              <input
                type="text"
                placeholder="Digite sua resposta..."
                onChange={(e) => handleTextInput(e.target.value)}
                className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            ) : (
              question.options?.map((option, index) => (
                <motion.button
                  key={option}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full px-6 py-4 rounded-xl text-left transition-all duration-300 ${
                    selectedOptions.includes(option)
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                      : 'bg-gray-900 text-gray-300 hover:bg-gray-800 border border-gray-800'
                  }`}
                >
                  {option}
                </motion.button>
              ))
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex gap-4 mt-8">
        {currentQuestion > 0 && (
          <button
            onClick={handleBack}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-gray-300 rounded-xl hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Voltar
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={!canProceed}
          className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
            canProceed
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50'
              : 'bg-gray-800 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isLastQuestion ? 'Finalizar' : 'Próxima'}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

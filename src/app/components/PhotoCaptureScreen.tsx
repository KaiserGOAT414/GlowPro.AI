'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Upload, Loader2 } from 'lucide-react'
import type { QuizData, AnalysisResult } from '../page'

type PhotoCaptureScreenProps = {
  quizData: QuizData
  onComplete: (photo: string, analysis: AnalysisResult) => void
}

export default function PhotoCaptureScreen({ quizData, onComplete }: PhotoCaptureScreenProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [photo, setPhoto] = useState<string | null>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhoto(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = async () => {
    if (!photo) return

    setIsAnalyzing(true)

    // Simulate AI analysis (in production, this would call an actual AI API)
    await new Promise(resolve => setTimeout(resolve, 3000))

    const mockAnalysis: AnalysisResult = {
      symmetry: 85,
      aestheticPotential: 78,
      faceShape: 'Oval',
      strengths: [
        'Estrutura óssea bem definida',
        'Simetria facial equilibrada',
        'Proporções harmoniosas'
      ],
      improvements: [
        'Hidratação da pele',
        'Redução de olheiras',
        'Uniformização do tom'
      ],
      skinHydration: 65,
      poresScore: 72,
      textureScore: 68,
      recommendations: {
        haircut: 'Corte médio com volume no topo',
        eyebrows: 'Sobrancelhas naturais com leve definição',
        beard: quizData.gender === 'Masculino' ? 'Barba curta e bem aparada' : undefined,
        lighting: 'Luz natural lateral para destacar estrutura facial'
      }
    }

    onComplete(photo, mockAnalysis)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white">
            Análise Facial com IA
          </h2>
          <p className="text-gray-400">
            Agora precisamos de uma foto do seu rosto para gerar sua análise completa.
          </p>
        </div>

        {/* Photo Upload Area */}
        <div className="relative">
          {photo ? (
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-purple-500">
              <img src={photo} alt="Foto do rosto" className="w-full h-full object-cover" />
              <button
                onClick={() => setPhoto(null)}
                className="absolute top-4 right-4 px-4 py-2 bg-black/80 text-white rounded-lg text-sm hover:bg-black transition-colors"
              >
                Trocar foto
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full aspect-square border-2 border-dashed border-gray-700 rounded-2xl cursor-pointer hover:border-purple-500 transition-colors bg-gray-900/50">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Upload className="w-16 h-16 text-gray-600 mb-4" />
              <p className="text-gray-400 text-center px-4">
                Clique para fazer upload de uma foto do seu rosto
              </p>
              <p className="text-gray-600 text-sm mt-2">
                JPG, PNG ou WEBP
              </p>
            </label>
          )}
        </div>

        {/* Analyze Button */}
        {photo && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="w-full py-4 px-8 rounded-xl font-semibold text-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Analisando com IA...
              </>
            ) : (
              <>
                <Camera className="w-5 h-5" />
                Analisar Rosto
              </>
            )}
          </motion.button>
        )}

        {/* Tips */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 space-y-3">
          <h3 className="font-semibold text-white flex items-center gap-2">
            <Camera className="w-5 h-5 text-purple-400" />
            Dicas para melhor análise:
          </h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>• Use boa iluminação natural</li>
            <li>• Mantenha o rosto centralizado</li>
            <li>• Evite filtros ou maquiagem pesada</li>
            <li>• Mantenha expressão neutra</li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

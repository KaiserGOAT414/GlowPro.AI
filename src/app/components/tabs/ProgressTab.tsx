'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, TrendingUp, Calendar, ArrowUp, ArrowDown, Minus } from 'lucide-react'

type ProgressTabProps = {
  photoData: string
}

type ProgressPhoto = {
  date: string
  photo: string
  metrics: {
    texture: number
    spots: number
    oiliness: number
    uniformity: number
    facialDefinition: number
  }
}

export default function ProgressTab({ photoData }: ProgressTabProps) {
  const [photos, setPhotos] = useState<ProgressPhoto[]>([
    {
      date: '2025-01-15',
      photo: photoData,
      metrics: {
        texture: 68,
        spots: 65,
        oiliness: 70,
        uniformity: 72,
        facialDefinition: 75
      }
    }
  ])

  const handleUploadPhoto = () => {
    // Simulate photo upload
    const newPhoto: ProgressPhoto = {
      date: new Date().toISOString().split('T')[0],
      photo: photoData,
      metrics: {
        texture: 72,
        spots: 70,
        oiliness: 68,
        uniformity: 75,
        facialDefinition: 78
      }
    }
    setPhotos([...photos, newPhoto])
  }

  const getChange = (current: number, previous: number) => {
    const diff = current - previous
    if (diff > 0) return { value: diff, icon: ArrowUp, color: 'text-green-400' }
    if (diff < 0) return { value: Math.abs(diff), icon: ArrowDown, color: 'text-red-400' }
    return { value: 0, icon: Minus, color: 'text-gray-400' }
  }

  const latestPhoto = photos[photos.length - 1]
  const previousPhoto = photos.length > 1 ? photos[photos.length - 2] : null

  return (
    <div className="px-6 py-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Meu Progresso
        </h1>
        <p className="text-gray-400">Acompanhe sua evolução ao longo do tempo</p>
      </motion.div>

      {/* Upload Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={handleUploadPhoto}
        className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
      >
        <Upload className="w-5 h-5" />
        Adicionar Nova Foto
      </motion.button>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <Calendar className="w-5 h-5 text-purple-400" />
          Linha do Tempo
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="space-y-2">
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-gray-800">
                <img src={photo.photo} alt={`Foto ${photo.date}`} className="w-full h-full object-cover" />
              </div>
              <p className="text-center text-sm text-gray-400">
                {new Date(photo.date).toLocaleDateString('pt-BR')}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Metrics Comparison */}
      {previousPhoto && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-6"
        >
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            Comparação de Métricas
          </h2>

          <div className="space-y-4">
            {Object.entries(latestPhoto.metrics).map(([key, value]) => {
              const previousValue = previousPhoto.metrics[key as keyof typeof previousPhoto.metrics]
              const change = getChange(value, previousValue)
              const ChangeIcon = change.icon

              return (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 capitalize">
                      {key === 'texture' && 'Melhora na Textura'}
                      {key === 'spots' && 'Redução de Manchas'}
                      {key === 'oiliness' && 'Redução da Oleosidade'}
                      {key === 'uniformity' && 'Aparência Uniforme'}
                      {key === 'facialDefinition' && 'Definição Facial'}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">{value}%</span>
                      <div className={`flex items-center gap-1 ${change.color}`}>
                        <ChangeIcon className="w-4 h-4" />
                        <span className="text-sm">{change.value}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      )}

      {/* Progress Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6 space-y-4"
      >
        <h2 className="text-xl font-semibold text-white">Evolução Geral</h2>
        <div className="h-48 flex items-end justify-around gap-2">
          {photos.map((photo, index) => {
            const avgScore = Object.values(photo.metrics).reduce((a, b) => a + b, 0) / Object.values(photo.metrics).length
            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg transition-all duration-1000"
                  style={{ height: `${avgScore}%` }}
                />
                <span className="text-xs text-gray-400">
                  {new Date(photo.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
                </span>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4"
      >
        <h2 className="text-xl font-semibold text-white">Insights da IA</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
            <TrendingUp className="w-5 h-5 text-green-400 mt-0.5" />
            <div>
              <p className="text-green-400 font-semibold">Ótimo progresso!</p>
              <p className="text-gray-400 text-sm">Sua textura de pele melhorou 4% desde a última foto.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
            <TrendingUp className="w-5 h-5 text-purple-400 mt-0.5" />
            <div>
              <p className="text-purple-400 font-semibold">Continue assim!</p>
              <p className="text-gray-400 text-sm">A definição facial está melhorando consistentemente.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

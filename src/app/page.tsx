'use client'

import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import QuizScreen from './components/QuizScreen'
import PhotoCaptureScreen from './components/PhotoCaptureScreen'
import MainApp from './components/MainApp'

export type QuizData = {
  skinType: string
  problems: string[]
  waterIntake: string
  skincareRoutine: string
  sleepHours: string
  sunExposure: string
  mainGoal: string
  currentProducts: string
  age: string
  gender: string
}

export type AnalysisResult = {
  symmetry: number
  aestheticPotential: number
  faceShape: string
  strengths: string[]
  improvements: string[]
  skinHydration: number
  poresScore: number
  textureScore: number
  recommendations: {
    haircut: string
    eyebrows: string
    beard?: string
    lighting: string
  }
}

export default function Home() {
  const [screen, setScreen] = useState<'welcome' | 'quiz' | 'photo' | 'app'>('welcome')
  const [quizData, setQuizData] = useState<QuizData | null>(null)
  const [photoData, setPhotoData] = useState<string | null>(null)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)

  const handleStartQuiz = () => {
    setScreen('quiz')
  }

  const handleQuizComplete = (data: QuizData) => {
    setQuizData(data)
    setScreen('photo')
  }

  const handlePhotoCapture = (photo: string, analysis: AnalysisResult) => {
    setPhotoData(photo)
    setAnalysisResult(analysis)
    setScreen('app')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {screen === 'welcome' && <WelcomeScreen onStart={handleStartQuiz} />}
      {screen === 'quiz' && <QuizScreen onComplete={handleQuizComplete} />}
      {screen === 'photo' && <PhotoCaptureScreen quizData={quizData!} onComplete={handlePhotoCapture} />}
      {screen === 'app' && (
        <MainApp 
          quizData={quizData!} 
          photoData={photoData!} 
          analysisResult={analysisResult!}
        />
      )}
    </div>
  )
}

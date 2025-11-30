'use client'

import { useState } from 'react'
import { Home, TrendingUp, Package, User } from 'lucide-react'
import type { QuizData, AnalysisResult } from '../page'
import HomeTab from './tabs/HomeTab'
import ProgressTab from './tabs/ProgressTab'
import RoutineTab from './tabs/RoutineTab'
import ProductsTab from './tabs/ProductsTab'
import ProfileTab from './tabs/ProfileTab'

type MainAppProps = {
  quizData: QuizData
  photoData: string
  analysisResult: AnalysisResult
}

type Tab = 'home' | 'progress' | 'routine' | 'products' | 'profile'

export default function MainApp({ quizData, photoData, analysisResult }: MainAppProps) {
  const [activeTab, setActiveTab] = useState<Tab>('home')

  const tabs = [
    { id: 'home' as Tab, icon: Home, label: 'Início' },
    { id: 'progress' as Tab, icon: TrendingUp, label: 'Progresso' },
    { id: 'routine' as Tab, icon: Home, label: 'Rotina' },
    { id: 'products' as Tab, icon: Package, label: 'Produtos' },
    { id: 'profile' as Tab, icon: User, label: 'Perfil' }
  ]

  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Content */}
      <div className="max-w-7xl mx-auto">
        {activeTab === 'home' && (
          <HomeTab 
            quizData={quizData} 
            photoData={photoData} 
            analysisResult={analysisResult} 
          />
        )}
        {activeTab === 'progress' && (
          <ProgressTab photoData={photoData} />
        )}
        {activeTab === 'routine' && (
          <RoutineTab quizData={quizData} analysisResult={analysisResult} />
        )}
        {activeTab === 'products' && (
          <ProductsTab quizData={quizData} />
        )}
        {activeTab === 'profile' && (
          <ProfileTab quizData={quizData} photoData={photoData} />
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-purple-400'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''} transition-transform`} />
                  <span className="text-xs font-medium">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}

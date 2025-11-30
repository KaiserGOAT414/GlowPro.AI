'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Star, ShoppingCart, Sparkles } from 'lucide-react'
import type { QuizData } from '../../page'

type ProductsTabProps = {
  quizData: QuizData
}

type Product = {
  id: string
  name: string
  category: string
  description: string
  rating: number
  price: string
  reason: string
  featured?: boolean
  shopeeLink: string
}

export default function ProductsTab({ quizData }: ProductsTabProps) {
  const products: Product[] = [
    // Kit Clareador - Produtos em Destaque
    {
      id: 'kit-1',
      name: 'Água Micelar Vitamina C',
      category: 'Kit Clareador',
      description: 'Remove impurezas e maquiagem enquanto ilumina a pele com Vitamina C',
      rating: 4.9,
      price: 'Ver na Shopee',
      reason: 'Limpeza suave e eficaz que prepara a pele para absorver melhor os ativos clareadores.',
      featured: true,
      shopeeLink: 'https://s.shopee.com.br/7AW9MVEv5o'
    },
    {
      id: 'kit-2',
      name: 'Esfoliante Vitamina C',
      category: 'Kit Clareador',
      description: 'Esfoliação suave que remove células mortas e potencializa o clareamento',
      rating: 4.8,
      price: 'Ver na Shopee',
      reason: 'Renova a pele e melhora a absorção dos produtos clareadores da rotina.',
      featured: true,
      shopeeLink: 'https://s.shopee.com.br/7AW9MVEv5o'
    },
    {
      id: 'kit-3',
      name: 'Sabonete Vitamina C',
      category: 'Kit Clareador',
      description: 'Limpeza diária com ação clareadora e antioxidante',
      rating: 4.7,
      price: 'Ver na Shopee',
      reason: 'Limpa profundamente enquanto uniformiza o tom da pele com Vitamina C.',
      featured: true,
      shopeeLink: 'https://s.shopee.com.br/7AW9MVEv5o'
    },
    {
      id: 'kit-4',
      name: 'Gel Vitamina C',
      category: 'Kit Clareador',
      description: 'Gel hidratante com alta concentração de Vitamina C para luminosidade',
      rating: 4.9,
      price: 'Ver na Shopee',
      reason: 'Hidrata e ilumina a pele, reduzindo manchas e sinais de cansaço.',
      featured: true,
      shopeeLink: 'https://s.shopee.com.br/7AW9MVEv5o'
    },
    {
      id: 'kit-5',
      name: 'Sérum Clareador - Ácido Mandélico e Niacinamida',
      category: 'Kit Clareador',
      description: 'Potente combinação para clareamento profundo e uniformização da pele',
      rating: 5.0,
      price: 'Ver na Shopee',
      reason: 'Ácido Mandélico esfolia suavemente enquanto Niacinamida clareia manchas e controla oleosidade. Resultado comprovado!',
      featured: true,
      shopeeLink: 'https://s.shopee.com.br/7AW9MVEv5o'
    },
    // Produtos Complementares
    {
      id: '1',
      name: 'Protetor Solar FPS 50+',
      category: 'Proteção Solar',
      description: 'Proteção UVA/UVB de amplo espectro, textura leve',
      rating: 4.8,
      price: 'R$ 45-80',
      reason: `Essencial para ${quizData.skinType.toLowerCase()}. Previne manchas e envelhecimento precoce.`,
      shopeeLink: 'https://s.shopee.com.br/7AW9MVEv5o'
    },
    {
      id: '3',
      name: 'Ácido Hialurônico',
      category: 'Hidratante',
      description: 'Hidratação profunda, retém água na pele',
      rating: 4.9,
      price: 'R$ 50-90',
      reason: `Perfeito para ${quizData.skinType.toLowerCase()}. Mantém a pele hidratada sem oleosidade.`,
      shopeeLink: 'https://s.shopee.com.br/7AW9MVEv5o'
    },
    {
      id: '4',
      name: 'Retinol 0.5%',
      category: 'Sérum Noturno',
      description: 'Anti-idade, melhora textura e reduz linhas',
      rating: 4.6,
      price: 'R$ 70-150',
      reason: 'Renovação celular e melhora da textura da pele.',
      shopeeLink: 'https://s.shopee.com.br/7AW9MVEv5o'
    },
    {
      id: '7',
      name: 'Creme para Olhos com Cafeína',
      category: 'Área dos Olhos',
      description: 'Reduz olheiras e inchaço',
      rating: 4.5,
      price: 'R$ 45-90',
      reason: 'Trata olheiras e linhas finas ao redor dos olhos.',
      shopeeLink: 'https://s.shopee.com.br/7AW9MVEv5o'
    },
    {
      id: '8',
      name: 'Máscara de Argila',
      category: 'Máscara',
      description: 'Purifica e desintoxica a pele',
      rating: 4.6,
      price: 'R$ 30-60',
      reason: 'Limpeza profunda semanal para pele mais saudável.',
      shopeeLink: 'https://s.shopee.com.br/7AW9MVEv5o'
    }
  ]

  const categories = Array.from(new Set(products.map(p => p.category)))

  return (
    <div className="px-6 py-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Produtos Recomendados
        </h1>
        <p className="text-gray-400">Selecionados especialmente para {quizData.skinType.toLowerCase()}</p>
      </motion.div>

      {/* Featured Kit Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 border-2 border-orange-400/50 rounded-3xl p-6 space-y-4"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-orange-400" />
          <h2 className="text-2xl font-bold text-white">Kit Clareador Completo</h2>
        </div>
        <p className="text-gray-300">
          Rotina completa de clareamento com Vitamina C, Ácido Mandélico e Niacinamida. 
          Resultados visíveis em semanas!
        </p>
        <div className="flex items-center gap-2 text-sm text-orange-300">
          <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
          <span className="font-semibold">Mais vendido • Eficácia comprovada</span>
        </div>
      </motion.div>

      {/* Products by Category */}
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            {category}
            {category === 'Kit Clareador' && (
              <span className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full font-medium">
                Destaque
              </span>
            )}
          </h2>
          <div className="grid gap-4">
            {products
              .filter(p => p.category === category)
              .map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                  className={`bg-gray-900 border rounded-2xl p-6 space-y-4 hover:border-purple-500/50 transition-all duration-300 ${
                    product.featured 
                      ? 'border-orange-400/50 shadow-lg shadow-orange-500/10' 
                      : 'border-gray-800'
                  }`}
                >
                  {/* Product Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                        {product.featured && (
                          <Sparkles className="w-4 h-4 text-orange-400" />
                        )}
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{product.description}</p>
                    </div>
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                      product.featured 
                        ? 'bg-orange-500/20' 
                        : 'bg-purple-500/20'
                    }`}>
                      <Star className={`w-4 h-4 ${
                        product.featured 
                          ? 'text-orange-400 fill-orange-400' 
                          : 'text-purple-400 fill-purple-400'
                      }`} />
                      <span className={`text-sm font-semibold ${
                        product.featured 
                          ? 'text-orange-400' 
                          : 'text-purple-400'
                      }`}>{product.rating}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-gray-400" />
                    <span className="text-lg font-bold text-white">{product.price}</span>
                  </div>

                  {/* Reason */}
                  <div className={`p-4 border rounded-xl ${
                    product.featured
                      ? 'bg-orange-500/10 border-orange-500/30'
                      : 'bg-purple-500/10 border-purple-500/30'
                  }`}>
                    <p className="text-sm text-gray-300">
                      <span className={`font-semibold ${
                        product.featured ? 'text-orange-400' : 'text-purple-400'
                      }`}>Por que este produto?</span>
                      <br />
                      {product.reason}
                    </p>
                  </div>

                  {/* Buy Button */}
                  <a
                    href={product.shopeeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 ${
                      product.featured
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 hover:shadow-orange-500/50'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-purple-500/50'
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Comprar na Shopee
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
          </div>
        </motion.div>
      ))}

      {/* Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6 space-y-4"
      >
        <h3 className="text-lg font-semibold text-white">Dicas de Uso</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
            <span>Use o Kit Clareador completo para resultados máximos</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
            <span>Aplique protetor solar diariamente para manter os resultados</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
            <span>Comece com versões menores para testar na sua pele</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
            <span>Introduza novos produtos gradualmente na rotina</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
            <span>Resultados visíveis aparecem após 2-4 semanas de uso consistente</span>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}

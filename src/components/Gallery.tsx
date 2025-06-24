'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  { src: '/images/churras.png', alt: 'Churrasco na Brasa', category: 'Churrasco' },
  { src: '/images/salada.png', alt: 'Mesa de Saladas', category: 'Acompanhamentos' },
  { src: '/images/churras2.png', alt: 'Churrasco para Eventos', category: 'Churrasco' },
  { src: '/images/churras3.png', alt: 'Preparo Especial', category: 'Churrasco' },
  { src: '/images/equipe.png', alt: 'Nossa Equipe', category: 'Equipe' },
  { src: '/images/mesa.png', alt: 'Mesa Decorada', category: 'Eventos' },
  { src: '/images/mesa2.png', alt: 'Decoração de Mesa', category: 'Eventos' },
  { src: '/images/mesa3.png', alt: 'Mesa Elegante', category: 'Acompanhamentos' },
  { src: '/images/equipe2.png', alt: 'Equipe em Ação', category: 'Equipe' },
  { src: '/images/mesa4.png', alt: 'Decoração Especial', category: 'Eventos' },
  { src: '/images/churras4.png', alt: 'Cortes Especiais', category: 'Churrasco' },
  { src: '/images/churras5.png', alt: 'Churrasco Gourmet', category: 'Equipe' },
  { src: '/images/churras6.png', alt: 'Preparo na Brasa', category: 'Churrasco' },
  { src: '/images/equipe3.png', alt: 'Equipe em Ação', category: 'Equipe' },
  { src: '/images/churras7.png', alt: 'Churrasco Nobres', category: 'Churrasco' },
  { src: '/images/churras8.png', alt: 'Churrasco Premium', category: 'Churrasco' },
  { src: '/images/salada2.png', alt: 'Buffet Completo', category: 'Acompanhamentos' },
]

const categories = ['Todos', ...Array.from(new Set(images.map(img => img.category)))]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const filteredImages = images.filter(img => 
    selectedCategory === 'Todos' ? true : img.category === selectedCategory
  )

  const moveToSlide = (index: number, smooth = true) => {
    if (isTransitioning || !trackRef.current) return

    const slideWidth = trackRef.current.children[0].getBoundingClientRect().width
    const gapWidth = 24 // 1.5rem gap

    if (!smooth) {
      trackRef.current.style.transition = 'none'
    } else {
      trackRef.current.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
      setIsTransitioning(true)
    }

    trackRef.current.style.transform = `translateX(-${index * (slideWidth + gapWidth)}px)`
    setCurrentIndex(index)
  }

  const handlePrevClick = () => {
    if (currentIndex <= 0) {
      moveToSlide(filteredImages.length - 3)
    } else {
      moveToSlide(currentIndex - 1)
    }
  }

  const handleNextClick = () => {
    if (currentIndex >= filteredImages.length - 3) {
      moveToSlide(0)
    } else {
      moveToSlide(currentIndex + 1)
    }
  }

  const handleTransitionEnd = () => {
    setIsTransitioning(false)
  }

  return (
    <section id="galeria" className="section-spacing bg-gradient-to-b from-churrasco-50/30 to-white">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary mb-6">Nossa Galeria</h2>
          <p className="text-xl text-churrasco-700 max-w-2xl mx-auto">
            Confira alguns momentos especiais e pratos deliciosos que preparamos com muito carinho
          </p>
        </motion.div>

        {/* Filtro por Categorias */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-churrasco-500 text-white shadow-lg'
                  : 'bg-white text-churrasco-600 hover:bg-churrasco-50 border border-churrasco-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Carrossel de Imagens */}
        <div className="carousel-container">
          <button 
            className="carousel-button prev"
            onClick={handlePrevClick}
            aria-label="Imagem anterior"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="carousel-button next"
            onClick={handleNextClick}
            aria-label="Próxima imagem"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <motion.div 
            className="carousel-track"
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            layout
          >
            {filteredImages.map((image, index) => (
              <motion.div 
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="carousel-slide"
              >
                <div 
                  className="gallery-item overflow-hidden rounded-3xl shadow-xl cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="relative h-80 group">
                    <Image 
                      src={image.src} 
                      alt={image.alt}
                      width={400}
                      height={320}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Modal de Visualização */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-5xl w-full"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-churrasco-300 transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <Image
                  src={selectedImage}
                  alt="Imagem ampliada"
                  width={1920}
                  height={1080}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 
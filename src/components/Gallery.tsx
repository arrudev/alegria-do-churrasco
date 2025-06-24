'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const images = [
  { src: '/images/churras.png', alt: 'Churrasco' },
  { src: '/images/salada.png', alt: 'Saladas' },
  { src: '/images/churras2.png', alt: 'Evento' },
  { src: '/images/churras3.png', alt: 'Evento' },
  { src: '/images/equipe.png', alt: 'Evento' },
  { src: '/images/mesa.png', alt: 'Evento' },
  { src: '/images/churras4.png', alt: 'Evento' },
  { src: '/images/churras5.png', alt: 'Evento' },
  { src: '/images/churras6.png', alt: 'Evento' },
  { src: '/images/mesa2.png', alt: 'Evento' },
  { src: '/images/churras7.png', alt: 'Evento' },
  { src: '/images/mesa_salada.png', alt: 'Evento' },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, {
      threshold: 0.1
    })

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const moveToSlide = (index: number, smooth = true) => {
    if (isTransitioning || !trackRef.current) return

    const slideWidth = trackRef.current.children[0].getBoundingClientRect().width
    const gapWidth = 16 // 1rem gap

    if (!smooth) {
      trackRef.current.style.transition = 'none'
    } else {
      trackRef.current.style.transition = 'transform 0.5s ease-in-out'
      setIsTransitioning(true)
    }

    trackRef.current.style.transform = `translateX(-${index * (slideWidth + gapWidth)}px)`
    setCurrentIndex(index)
  }

  const handlePrevClick = () => {
    if (currentIndex <= 0) {
      moveToSlide(images.length - 3)
    } else {
      moveToSlide(currentIndex - 1)
    }
  }

  const handleNextClick = () => {
    if (currentIndex >= images.length - 3) {
      moveToSlide(0)
    } else {
      moveToSlide(currentIndex + 1)
    }
  }

  const handleTransitionEnd = () => {
    setIsTransitioning(false)
  }

  return (
    <section id="galeria" className="py-12 bg-gradient-to-b from-bege to-white px-6">
      <h2 className="text-4xl font-bold text-center text-churrasco-600 mb-12 fade-up">Nossa Galeria</h2>
      <div className="carousel-container max-w-6xl mx-auto fade-up">
        <button className="carousel-button prev" onClick={handlePrevClick}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="carousel-button next" onClick={handleNextClick}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <div 
          className="carousel-track" 
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <div className="gallery-item overflow-hidden rounded-2xl shadow-lg border border-churrasco-200 h-80">
                <Image 
                  src={image.src} 
                  alt={image.alt}
                  width={400}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
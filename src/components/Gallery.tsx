'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const originalImages = [
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

const createInfiniteArray = (arr: any) => {
  const last3 = arr.slice(-3)
  const first3 = arr.slice(0, 3)
  return [...last3, ...arr, ...first3]
}

export default function Gallery() {
  const images = createInfiniteArray(originalImages)
  const [currentIndex, setCurrentIndex] = useState(3)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const [prevTranslate, setPrevTranslate] = useState(0)
  const [animationId, setAnimationId] = useState<number | null>(null)
  const [dragDistance, setDragDistance] = useState(0)
  
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

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

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    if (trackRef.current) {
      moveToSlide(3, false)
    }
  }, [])

  const moveToSlide = (index: number, smooth = true) => {
    if (!trackRef.current) return

    const slideWidth = trackRef.current.children[0].getBoundingClientRect().width
    const gapWidth = 16
    const translateX = -index * (slideWidth + gapWidth)

    if (!smooth) {
      trackRef.current.style.transition = 'none'
    } else {
      trackRef.current.style.transition = 'transform 0.5s ease-in-out'
      setIsTransitioning(true)
    }

    trackRef.current.style.transform = `translateX(${translateX}px)`
    setCurrentIndex(index)
    setPrevTranslate(translateX)
    setCurrentTranslate(translateX)
  }

  const getPositionX = (event: MouseEvent | TouchEvent) => {
    return 'touches' in event ? event.touches[0].clientX : event.clientX
  }

  const setSliderPosition = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${currentTranslate}px)`
    }
  }

  const animation = () => {
    setSliderPosition()
    if (isDragging) {
      const id = requestAnimationFrame(animation)
      setAnimationId(id)
    }
  }

  const dragStart = (event: MouseEvent | TouchEvent) => {
    if (isTransitioning) return
    
    setIsDragging(true)
    setStartPos(getPositionX(event))
    setDragDistance(0)
    
    if (trackRef.current) {
      trackRef.current.style.transition = 'none'
    }
    
    const id = requestAnimationFrame(animation)
    setAnimationId(id)
  }

  const dragMove = (event: MouseEvent | TouchEvent) => {
    if (!isDragging) return
    
    const currentPosition = getPositionX(event)
    const diff = currentPosition - startPos
    setCurrentTranslate(prevTranslate + diff)
    setDragDistance(Math.abs(diff))
  }

  const dragEnd = () => {
    if (!isDragging) return
    
    setIsDragging(false)
    
    if (animationId) {
      cancelAnimationFrame(animationId)
      setAnimationId(null)
    }

    const movedBy = currentTranslate - prevTranslate

    if (Math.abs(movedBy) > 50) {
      if (movedBy > 0) {
        handlePrevClick()
      } else {
        handleNextClick()
      }
    } else {
      moveToSlide(currentIndex, true)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    dragStart(e.nativeEvent)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    dragMove(e.nativeEvent)
  }

  const handleMouseUp = () => {
    dragEnd()
  }

  const handleMouseLeave = () => {
    dragEnd()
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    dragStart(e.nativeEvent)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    dragMove(e.nativeEvent)
  }

  const handleTouchEnd = () => {
    dragEnd()
  }

  const openImageModal = (imageIndex: number, event: React.MouseEvent | React.TouchEvent) => {
    if (dragDistance > 10) {
      return
    }
    
    let originalIndex = imageIndex - 3
    if (originalIndex < 0) {
      originalIndex = originalImages.length + originalIndex
    } else if (originalIndex >= originalImages.length) {
      originalIndex = originalIndex - originalImages.length
    }
    setSelectedImage(originalIndex)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const nextModalImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % originalImages.length)
    }
  }

  const prevModalImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? originalImages.length - 1 : selectedImage - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') {
          closeImageModal()
        } else if (e.key === 'ArrowRight') {
          nextModalImage()
        } else if (e.key === 'ArrowLeft') {
          prevModalImage()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  const handlePrevClick = () => {
    if (isTransitioning) return
    
    if (currentIndex <= 0) {
      moveToSlide(images.length - 3)
    } else {
      moveToSlide(currentIndex - 1)
    }
  }

  const handleNextClick = () => {
    if (isTransitioning) return
    
    if (currentIndex >= images.length - 3) {
      moveToSlide(0)
    } else {
      moveToSlide(currentIndex + 1)
    }
  }

  const handleTransitionEnd = () => {
    setIsTransitioning(false)

    if (currentIndex >= images.length - 3) {
      setTimeout(() => {
        moveToSlide(3, false)
      }, 50)
    } else if (currentIndex <= 0) {
      setTimeout(() => {
        moveToSlide(originalImages.length, false)
      }, 50)
    }
  }

  return (
    <>
      <section id="galeria" className="py-12 bg-gradient-to-b from-bege to-white px-6">
        <h2 className="text-4xl font-bold text-center text-churrasco-600 mb-12 fade-up">Nossa Galeria</h2>
        <div className="carousel-container max-w-6xl mx-auto fade-up">
          {/* Setas - apenas no desktop */}
          {!isMobile && (
            <>
              <button className="carousel-button prev" onClick={handlePrevClick}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="carousel-button next" onClick={handleNextClick}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
          
          <div 
            className="carousel-track" 
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {images.map((image, index) => (
              <div key={`${image.src}-${index}`} className="carousel-slide" style={{ userSelect: 'none' }}>
                <div 
                  className="gallery-item overflow-hidden rounded-2xl shadow-lg border border-churrasco-200 h-80 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  onClick={(e) => openImageModal(index, e)}
                  onTouchEnd={(e) => {
                    if (dragDistance <= 10) {
                      openImageModal(index, e)
                    }
                  }}
                >
                  <Image 
                    src={image.src} 
                    alt={image.alt}
                    width={400}
                    height={320}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para visualização da imagem */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Botão fechar */}
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
              onClick={closeImageModal}
            >
              <i className="fas fa-times"></i>
            </button>
            
            {/* Setas de navegação no modal */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300 z-10"
              onClick={(e) => {
                e.stopPropagation()
                prevModalImage()
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300 z-10"
              onClick={(e) => {
                e.stopPropagation()
                nextModalImage()
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            
            {/* Imagem */}
            <Image
              src={originalImages[selectedImage].src}
              alt={originalImages[selectedImage].alt}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Indicador de posição */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {selectedImage + 1} / {originalImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
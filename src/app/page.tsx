'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function Home() {
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

    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault()
        const link = e.currentTarget as HTMLAnchorElement
        const targetId = link.getAttribute('href')
        const targetElement = document.querySelector(targetId || '')
        
        if (targetElement instanceof HTMLElement) {
          const windowHeight = window.innerHeight
          const elementHeight = targetElement.offsetHeight
          const offset = Math.max(0, (windowHeight - elementHeight) / 2)
          
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          })
        }
      })
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <Footer />
    </main>
  )
}

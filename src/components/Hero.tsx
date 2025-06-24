import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Onda decorativa */}
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto container-padding section-spacing relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="heading-primary mb-6">
            Alegria do Churrasco
          </h1>
          <p className="text-xl md:text-2xl text-churrasco-700 max-w-2xl mx-auto">
            A arte do churrasco perfeito para sua celebração
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem do Churrasqueiro */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <Image 
                src="/images/toshi_banner.png" 
                alt="Jorge Eduardo - Churrasqueiro" 
                width={800}
                height={600}
                className="w-full h-[600px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* Informações do Churrasqueiro */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/90 p-8 md:p-10 rounded-3xl shadow-xl backdrop-blur-md border border-churrasco-100"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <Image 
                  src="/images/toshi_profile.png" 
                  alt="Jorge Eduardo" 
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover border-2 border-churrasco-300"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-churrasco-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-churrasco-700">Jorge Eduardo</h2>
                <p className="text-churrasco-500">Churrasqueiro Profissional</p>
              </div>
            </div>

            <div className="space-y-6 text-churrasco-700">
              <p className="leading-relaxed text-lg">
                "Desde cedo, o churrasco fez parte da minha vida — primeiro nas reuniões de família, depois como paixão e, hoje, como profissão. Já são mais de 10 anos levando sabor, alegria e aquele clima gostoso de churrasco pra todo tipo de evento.
              </p>
              <p className="leading-relaxed text-lg">
                Faço tudo com dedicação, amor pela brasa e o jeitinho brasileiro de transformar cada momento em algo especial, garantindo sabores autênticos que despertam sorrisos e criam memórias inesquecíveis. Cada corte é pensado para proporcionar uma experiência única."
              </p>              
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="#contato" 
                className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-churrasco-500 hover:bg-churrasco-600 transition-all duration-300 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Fazer orçamento</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center px-4 relative bg-gradient-to-b from-bege to-white">
      {/* Onda decorativa */}
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:mt-36">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-churrasco-600 mb-4 md:-mt-12">Alegria do Churrasco</h1>
          <p className="text-xl text-churrasco-700">A arte do churrasco perfeito para sua celebração</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem do Churrasqueiro */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/toshi_banner.png" 
                alt="Jorge Eduardo - Churrasqueiro" 
                width={800}
                height={600}
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Informações do Churrasqueiro */}
          <div className="bg-white/90 p-8 rounded-3xl shadow-xl border border-churrasco-100">
            <div className="flex items-center gap-4 mb-6">
              <Image 
                src="/images/toshi_profile.png" 
                alt="Jorge Eduardo" 
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover border-2 border-churrasco-300"
              />
              <div>
                <h2 className="text-2xl font-bold text-churrasco-700">Jorge Eduardo</h2>
                <p className="text-churrasco-500">Churrasqueiro Profissional</p>
              </div>
            </div>

            <div className="space-y-4 text-churrasco-700">
              <p className="leading-relaxed italic">
                "Desde cedo, o churrasco fez parte da minha vida — primeiro nas reuniões de família, depois como paixão e, hoje, como profissão. Já são mais de 10 anos levando sabor, alegria e aquele clima gostoso de churrasco pra todo tipo de evento.
              </p>
              <p className="leading-relaxed italic">
                Faço tudo com dedicação, amor pela brasa e o jeitinho brasileiro de transformar cada momento em algo especial, garantindo sabores autênticos que despertam sorrisos e criam memórias inesquecíveis. Cada corte é pensado para proporcionar uma experiência única."
              </p>              
            </div>

            <div className="mt-8">
              <a href="#contato" className="inline-block px-8 py-4 bg-churrasco-500 hover:bg-churrasco-600 transition-all duration-300 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105">
                Fazer orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
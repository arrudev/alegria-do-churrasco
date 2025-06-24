import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Churrasco Tradicional',
    description: 'Sabor autêntico da brasa, com cortes clássicos preparados no ponto certo, trazendo à mesa a verdadeira essência do churrasco brasileiro.',
    features: ['Carnes nobres', 'Tempero especial', 'Preparo tradicional']
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
    title: 'Eventos Personalizados',
    description: 'Casamentos, aniversários, confraternizações e todo tipo de celebração ganham um toque especial, tudo pensado para tornar seu evento único e inesquecível.',
    features: ['Decoração temática', 'Equipe especializada', 'Cardápio personalizado']
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Buffet Completo',
    description: 'Uma seleção especial de acompanhamentos tradicionais e saborosos que compõem o clássico almoço de churrasco com qualidade e variedade.',
    features: ['Saladas variadas', 'Guarnições especiais', 'Sobremesas']
  }
]

export default function Services() {
  return (
    <section id="servicos" className="section-spacing bg-gradient-to-b from-white to-churrasco-50/30">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary mb-6">Nossos Serviços</h2>
          <p className="text-xl text-churrasco-700 max-w-2xl mx-auto">
            Oferecemos uma experiência completa de churrasco para seu evento, com qualidade e sabor incomparáveis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card rounded-3xl overflow-hidden"
            >
              <div className="p-8">
                <div className="text-churrasco-500 mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-churrasco-700 mb-4">{service.title}</h3>
                <p className="text-churrasco-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-churrasco-600">
                      <svg className="h-5 w-5 text-churrasco-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
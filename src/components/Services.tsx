export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-white to-bege px-6 text-center">
      <h2 className="text-4xl font-bold text-churrasco-600 mb-12 fade-up">Nossos Serviços</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="service-card bg-white/90 p-8 rounded-2xl shadow-lg fade-up border border-churrasco-200">
          <div className="text-4xl text-churrasco-500 mb-4">
            <i className="fas fa-fire"></i>
          </div>
          <h3 className="text-2xl font-semibold text-churrasco-600 mb-4">Churrasco Tradicional</h3>
          <p className="text-churrasco-700 leading-relaxed">Sabor autêntico da brasa, com cortes clássicos preparados no ponto certo, trazendo à mesa a verdadeira essência do churrasco brasileiro.</p>
        </div>
        <div className="service-card bg-white/90 p-8 rounded-2xl shadow-lg fade-up border border-churrasco-200">
          <div className="text-4xl text-churrasco-500 mb-4">
            <i className="fas fa-glass-cheers"></i>
          </div>
          <h3 className="text-2xl font-semibold text-churrasco-600 mb-4">Eventos Personalizados</h3>
          <p className="text-churrasco-700 leading-relaxed">Casamentos, aniversários, confraternizações e todo tipo de celebração ganham um toque especial, tudo pensado para tornar seu evento único e inesquecível.</p>
        </div>
        <div className="service-card bg-white/90 p-8 rounded-2xl shadow-lg fade-up border border-churrasco-200">
          <div className="text-4xl text-churrasco-500 mb-4">
            <i className="fas fa-utensils"></i>
          </div>
          <h3 className="text-2xl font-semibold text-churrasco-600 mb-4">Buffet Completo</h3>
          <p className="text-churrasco-700 leading-relaxed">
            Uma seleção especial de acompanhamentos tradicionais e saborosos que compõem o clássico almoço de churrasco com qualidade e variedade.
          </p>
        </div>
      </div>
    </section>
  )
} 
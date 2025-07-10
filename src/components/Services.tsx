import { useState } from 'react';

export default function Services() {
  const [openModal, setOpenModal] = useState(null);

  const services = [
    {
      id: 'tradicional',
      icon: 'fas fa-fire',
      title: 'Churrasco Tradicional',
      description: 'Sabor autêntico da brasa, com cortes clássicos preparados no ponto certo, trazendo à mesa a verdadeira essência do churrasco brasileiro.',
      details: {
        subtitle: 'A Tradição na Brasa',
        content: `Nosso churrasco tradicional é preparado com os melhores cortes de carne, seguindo técnicas ancestrais que garantem o sabor autêntico da brasa. 
        
        Oferecemos uma seleção premium de carnes que inclui:
        • Picanha premium assada na brasa
        • Costela bovina no ponto perfeito
        • Fraldinha suculenta e macia
        • Linguiça artesanal defumada
        • Coração de frango temperado
        
        Cada corte é cuidadosamente selecionado e preparado por nossos churrasqueiros experientes, garantindo que chegue à sua mesa com o sabor e textura ideais. O tempero é simples e tradicional, realçando o sabor natural da carne.`
      }
    },
    {
      id: 'eventos',
      icon: 'fas fa-glass-cheers',
      title: 'Eventos Personalizados',
      description: 'Casamentos, aniversários, confraternizações e todo tipo de celebração ganham um toque especial, tudo pensado para tornar seu evento único e inesquecível.',
      details: {
        subtitle: 'Seu Evento, Nossa Especialidade',
        content: `Transformamos qualquer ocasião em um momento especial e memorável. Nossa equipe especializada cuida de cada detalhe para que você possa aproveitar sua celebração sem preocupações.
        
        Serviços inclusos:
        • Planejamento personalizado do cardápio
        • Decoração temática e ambientação
        • Equipe completa de garçons e churrasqueiros
        • Estrutura completa (mesas, cadeiras, tendas)
        • Sistema de som e iluminação
        • Coordenação geral do evento
        
        Atendemos desde pequenas reuniões familiares até grandes eventos corporativos, sempre com o mesmo nível de excelência e atenção aos detalhes. Cada evento é único e merece um tratamento especial.`
      }
    },
    {
      id: 'buffet',
      icon: 'fas fa-utensils',
      title: 'Buffet Completo',
      description: 'Uma seleção especial de acompanhamentos tradicionais e saborosos que compõem o clássico almoço de churrasco com qualidade e variedade.',
      details: {
        subtitle: 'Acompanhamentos de Qualidade',
        content: `Nosso buffet completo oferece uma variedade de pratos tradicionais que complementam perfeitamente o churrasco, garantindo uma refeição completa e satisfatória.
        
        Nosso buffet inclui:
        • Arroz carreteiro tradicional
        • Feijão tropeiro mineiro
        • Farofa de banana crocante
        • Salada verde fresca
        • Vinagrete temperado
        • Pão de alho artesanal
        • Maionese caseira
        • Queijo coalho grelhado
        
        Todos os pratos são preparados com ingredientes frescos e receitas tradicionais, mantendo o sabor autêntico que você espera. O buffet é constantemente reabastecido para garantir que todos os convidados sejam bem servidos.`
      }
    }
  ];

  const toggleModal = (id: any) => {
    setOpenModal(openModal === id ? null : id);
  };

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-white to-bege px-6 text-center">
      <h2 className="text-4xl font-bold text-churrasco-600 mb-12 fade-up">Nossos Serviços</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="service-card bg-white/90 p-8 rounded-2xl shadow-lg fade-up border border-churrasco-200 cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => toggleModal(service.id)}
          >
            <div className="text-4xl text-churrasco-500 mb-4">
              <i className={service.icon}></i>
            </div>
            <h3 className="text-2xl font-semibold text-churrasco-600 mb-4">{service.title}</h3>
            <p className="text-churrasco-700 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Modais */}
      {openModal && services.map((service) => (
        service.id === openModal && (
          <dialog 
            key={service.id}
            open={true}
            className="fixed inset-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setOpenModal(null)}
          >
            <div 
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 mx-auto overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-4xl text-churrasco-500 mr-4">
                  <i className={service.icon}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-churrasco-600">{service.title}</h3>
                  <h4 className="text-xl text-churrasco-500 mt-2">{service.details.subtitle}</h4>
                </div>
                <button 
                  onClick={() => setOpenModal(null)}
                  className="text-gray-500 hover:text-churrasco-600 text-2xl ml-4"
                >
                  &times;
                </button>
              </div>
              
              <div className="text-churrasco-700 leading-relaxed text-left whitespace-pre-line">
                {service.details.content}
              </div>
              
            </div>
          </dialog>
        )
      ))}
    </section>
  )
}
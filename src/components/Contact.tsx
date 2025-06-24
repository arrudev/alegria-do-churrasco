export default function Contact() {
  return (
    <section id="contato" className="py-16 bg-gradient-to-b from-white to-bege px-6">
      <div className="max-w-2xl mx-auto text-center fade-up">
        <h2 className="text-4xl font-bold text-churrasco-600 mb-6">Fale Conosco</h2>
        <p className="text-xl text-churrasco-700 mb-8">Entre em contato e leve o melhor do churrasco para sua festa!</p>
        <div className="flex justify-center md:space-x-6 flex-wrap gap-y-4">
          <a 
            href="https://wa.me/5521975739186" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-churrasco-500 hover:bg-churrasco-600 px-6 py-3 rounded-full text-white text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <i className="fab fa-whatsapp mr-2"></i> WhatsApp
          </a>
          <a 
            href="https://www.instagram.com/alegria.churrasco" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-churrasco-500 hover:bg-churrasco-600 px-6 py-3 rounded-full text-white text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <i className="fab fa-instagram mr-2"></i> Instagram
          </a>
        </div>
      </div>
    </section>
  )
} 
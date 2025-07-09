export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-bege text-churrasco-700 py-16">
      {/* Borda superior completa */}
      <div className="border-t border-churrasco-100">
        {/* Container principal com padding personalizado */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          {/* Grid com deslocamento para alinhar com o meio das fotos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm ml-12 md:ml-24 lg:ml-36">
            
            {/* Coluna 1 - Localização */}
            <div>
              <h4 className="font-bold text-churrasco-600 mb-4">Localização</h4>
              <ul className="space-y-2">
                <li>Rio de Janeiro</li>
                <li>Região Metropolitana</li>
              </ul>
            </div>

            {/* Coluna 2 - Contato */}
            <div>
              <h4 className="font-bold text-churrasco-600 mb-4">Fale com a gente</h4>
              <p className="mb-2">📞 (21) 97573-9186</p>
              <p className="mb-2">✉️ alegria.churrasco@gmail.com</p>
            </div>

            {/* Coluna 3 - Redes Sociais */}
            <div>
              <h4 className="font-bold text-churrasco-600 mb-4">Siga nas redes</h4>
              <div className="flex space-x-4 text-2xl">
                <a href="https://www.instagram.com/alegria.churrasco" target="_blank" rel="noopener noreferrer" className="hover:text-churrasco-500">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://wa.me/5521975739186" target="_blank" rel="noopener noreferrer" className="hover:text-churrasco-500">
                  <i className="fab fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>

          {/* Rodapé inferior centralizado */}
          <div className="mt-12 text-xs text-center text-churrasco-500">
            <p>© 2025 Alegria Churrasco. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
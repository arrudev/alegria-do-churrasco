export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 nav-blur bg-churrasco-400/90 shadow-md top-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Alinhado à esquerda (Futura Logo) */}
          <div className="text-white font-medium text-base px-2">
            Futura Logo
          </div>

          {/* Alinhado à direita */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-12">
              <a
                href="#inicio"
                className="text-white hover:text-churrasco-100 px-2 py-2 rounded-md text-base font-medium transition"
              >
                Início
              </a>
              <a
                href="#servicos"
                className="text-white hover:text-churrasco-100 px-2 py-2 rounded-md text-base font-medium transition"
              >
                Serviços
              </a>
              <a
                href="#galeria"
                className="text-white hover:text-churrasco-100 px-2 py-2 rounded-md text-base font-medium transition"
              >
                Galeria
              </a>
              <a
                href="#contato"
                className="text-white hover:text-churrasco-100 px-2 py-2 rounded-md text-base font-medium transition"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

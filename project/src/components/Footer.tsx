import React from 'react';
import { Instagram, Linkedin, MessageCircle, Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">ADMPLAN</span>
            </div>
            <p className="text-gray-400">
              Gestão profissional e personalizada para o seu condomínio
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white">Início</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white">Sobre Nós</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-white">Serviços</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white">Prédios</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>(11) 1234-5678</li>
              <li>contato@admplan.com.br</li>
              <li>Av. Exemplo, 1000</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 ADMPLAN. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src='https://github.com/PedroVazN/Portoflio_LuisCarlos/blob/main/project/src/images/logoadnplam.png?raw=true' className='h-10 w-auto' />
            <span className="ml-2 text-xl font-bold text-gray-900">ADMPLAN</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-700">Início</a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-700">Sobre Nós</a>
            <a href="#servicos" className="text-gray-700 hover:text-blue-700">Serviços</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-700">Prédios</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-700">Contato</a>
          </nav>

          <button className="hidden md:block bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
            Fale com o Síndico
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Início</a>
            <a href="#sobre" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Sobre Nós</a>
            <a href="#servicos" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Serviços</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Prédios</a>
            <a href="#contato" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Contato</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
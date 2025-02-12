import React, { useState } from 'react';
import { Menu, X, Building2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-gray-800">Luis Carlos</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">Home</Link>
            <Link to="/sobre" className="text-gray-600 hover:text-emerald-600 transition-colors">Sobre</Link>
            <Link to="/servicos" className="text-gray-600 hover:text-emerald-600 transition-colors">Serviços</Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-emerald-600 transition-colors">Portfólio</Link>
            <Link to="/contato" className="text-gray-600 hover:text-emerald-600 transition-colors">Contato</Link>
            <a 
              href="https://wa.me/5511999999999" 
              className="bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-emerald-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Fale Conosco</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-emerald-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Home</Link>
            <Link to="/sobre" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Sobre</Link>
            <Link to="/servicos" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Serviços</Link>
            <Link to="/portfolio" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Portfólio</Link>
            <Link to="/contato" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Contato</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
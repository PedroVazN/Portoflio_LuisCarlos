import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('sobre');
    if (aboutSection) {
      const headerOffset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/p/AF1QipOH4Si9wSl2L62jlwqDtm9ggS6OOYpKWGjm7RS3=s1360-w1360-h1020")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 mb-8"
          >
            <img src='https://github.com/PedroVazN/Portoflio_LuisCarlos/blob/main/project/src/images/logoadnplam.png?raw=true' className='h-10 w-auto' />
            <div className="h-0.5 w-12 bg-blue-500" />
            <span className="text-xl text-blue-500 font-medium tracking-wide">ADMPLAN</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Gestão profissional e personalizada para o seu{' '}
            <span className="text-blue-500">condomínio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl"
          >
            Soluções eficientes para administração, manutenção e valorização do seu patrimônio,
            com expertise e compromisso com a excelência.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button
              onClick={scrollToAbout}
              className="group relative px-8 py-4 bg-blue-600 text-white rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative">Conheça Nossa História</span>
            </button>
            <button 
            onClick={scrollToAbout}
            className="px-8 py-4 bg-white/10 text-white rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              Nossos Serviços
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center cursor-pointer"
        onClick={scrollToAbout}
      >
        <span className="text-sm font-medium mb-2">Saiba mais</span>
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
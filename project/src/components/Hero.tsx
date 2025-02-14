import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://github.com/PedroVazN/Portoflio_LuisCarlos/blob/main/project/src/images/banner.png?raw=true")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Gestão profissional e personalizada para o seu condomínio
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Soluções eficientes para administração, manutenção e valorização do seu patrimônio
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-800 transition-colors">
              Conheça Nossos Serviços
            </button>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-md text-lg hover:bg-gray-100 transition-colors">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
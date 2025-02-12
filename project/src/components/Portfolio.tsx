import React from 'react';

const buildings = [
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Edifício Aurora',
    location: 'Centro',
    units: '120 unidades'
  },
  {
    image: 'https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Residencial Vitória',
    location: 'Jardins',
    units: '80 unidades'
  },
  {
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Condomínio Park View',
    location: 'Zona Sul',
    units: '150 unidades'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Prédios Administrados pela ADMPLAN</h2>
          <p className="mt-4 text-xl text-gray-600">
            Conheça alguns dos empreendimentos que confiam em nossa gestão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {buildings.map((building, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={building.image}
                  alt={building.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {building.name}
                </h3>
                <p className="text-gray-600 mb-1">Localização: {building.location}</p>
                <p className="text-gray-600">{building.units}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-700 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-800 transition-colors">
            Veja Outros Prédios
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
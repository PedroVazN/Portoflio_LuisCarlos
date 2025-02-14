import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Building } from '../types/building';

export const buildings: Building[] = [
  {
    id: 'danubio',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Ed. Danúbio',
    location: 'Centro',
    details: {
      aluguel: 'R$ 1.500,00',
      compra: 'R$ 225.000,00',
      condominio: 'R$ 595,00',
      iptu: 'R$ 8,00/mês',
      areas: ['55m²', '70m²'],
      images: ['https://www.quintoandar.com.br/img/640x0/filters:quality(85)/894538700-267.11607354026864894105471284.5530317658458IMG3075.jpg',
        'https://www.quintoandar.com.br/img/384x0/filters:quality(85)/894536471-846.4075433241162892884074711.7998539530573MG1925.jpeg', 'https://www.quintoandar.com.br/img/384x0/filters:quality(85)/893721763-423.696504017900520220723090325.jpg',
        'https://www.quintoandar.com.br/img/384x0/filters:quality(85)/893721763-423.696504017900520220723090325.jpg', 'https://www.quintoandar.com.br/img/384x0/filters:quality(85)/893721763-342.5503272041139620220723090308.jpg', 'https://www.quintoandar.com.br/img/384x0/filters:quality(85)/893721763-342.5503272041139620220723090308.jpg',
        'https://www.quintoandar.com.br/img/xxl/894538700-982.9710453424715QuintoAndar356.jpg', 'https://www.quintoandar.com.br/img/xxl/894538700-472.7074489194497QuintoAndar355.jpg',
        'https://www.quintoandar.com.br/img/xxl/894538700-286.8006721129924QuintoAndar339.jpg',
        'https://www.quintoandar.com.br/img/xxl/894379181-545.2546547790432893721763423.696504017900520220723090325.jpg',
        'https://www.quintoandar.com.br/img/xxl/893364257-162.16130378247195893287730240.06307268149374IMG8726.jpg',
        'https://www.quintoandar.com.br/img/xxl/893693428-158.88329022874814IMG1923.jpg',
        'https://www.quintoandar.com.br/img/xxl/894538700-714.6437116230449893693428158.88329022874814IMG1923.jpg',
        'https://www.quintoandar.com.br/img/xxl/894536471-75.03397882994156893693428158.88329022874814IMG1923.jpg',
        'https://www.quintoandar.com.br/img/xxl/893905187-43.26144961061862893721763423.696504017900520220723090325.jpg',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ]
    }
  },
  {
    id: 'artdesign',
    image: 'https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Art Design',
    location: 'Jardins',
    details: {
      aluguel: 'R$ 3.200,00',
      compra: 'R$ 580.000,00',
      condominio: 'R$ 950,00',
      iptu: 'R$ 3.100,00/ano',
      areas: ['25m²', '50m²', '75m²'],
      images: ['',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ]
    }
  },
  {
    id: 'valedosol',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Vale do Sol',
    location: 'Zona Sul',
    details: {
      aluguel: 'R$ 2.800,00',
      compra: 'R$ 520.000,00',
      condominio: 'R$ 850,00',
      iptu: 'R$ 2.800,00/ano',
      areas: ['25m²', '50m²', '75m²'],
      images: ['',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ]
    }
  },
  {
    id: 'ibiza',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Residencial Ibiza',
    location: 'Zona Leste',
    details: {
      aluguel: 'R$ 2.900,00',
      compra: 'R$ 540.000,00',
      condominio: 'R$ 900,00',
      iptu: 'R$ 2.900,00/ano',
      areas: ['25m²', '50m²', '75m²'],
      images: ['',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ]
    }
  },
  {
    id: 'montjuic',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Residencial Montjuic F',
    location: 'Zona Oeste',
    details: {
      aluguel: 'R$ 3.100,00',
      compra: 'R$ 560.000,00',
      condominio: 'R$ 920,00',
      iptu: 'R$ 3.000,00/ano',
      areas: ['25m²', '50m²', '75m²'],
      images: ['',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ]
    }
  },
  {
    id: 'cavalcante',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Ed. Cavalcante',
    location: 'Centro',
    details: {
      aluguel: 'R$ 2.700,00',
      compra: 'R$ 490.000,00',
      condominio: 'R$ 870,00',
      iptu: 'R$ 2.600,00/ano',
      areas: ['25m²', '50m²', '75m²'],
      images: ['',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ]
    }
  }
];

const Portfolio = () => {
  const navigate = useNavigate();

  const handleBuildingClick = (building: Building) => {
    navigate(`/portfolio/${building.id}`);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">Imóveis Administrados pela ADNPLAM</h2>
          <p className="mt-4 text-xl text-gray-600">
            Conheça alguns dos empreendimentos que confiam em nossa gestão
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {buildings.map((building, index) => (
            <motion.div
              key={building.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={() => handleBuildingClick(building)}
            >
              <div className="relative h-64">
                <img
                  src={building.image}
                  alt={building.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {building.name}
                </h3>
                <p className="text-gray-600 mb-1">Localização: {building.location}</p>
                <p className="text-blue-600 font-medium mt-4 group-hover:underline">
                  Ver detalhes →
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
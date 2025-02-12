import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const buildings = [
  {
    name: "Residencial Jardins",
    location: "Moema, São Paulo",
    description: "Condomínio de alto padrão com 120 unidades, 4 torres e completa infraestrutura de lazer.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Academia", "Piscina", "Salão de Festas", "Playground"]
  },
  {
    name: "Edifício Central Park",
    location: "Itaim Bibi, São Paulo",
    description: "Torre comercial com 25 andares e moderna infraestrutura de segurança e tecnologia.",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577587230708-187fdbef4d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Auditório", "Coworking", "Restaurante", "Estacionamento"]
  },
  {
    name: "Residencial Vista Verde",
    location: "Morumbi, São Paulo",
    description: "Condomínio clube com 3 torres, 180 unidades e ampla área verde com paisagismo premiado.",
    images: [
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Quadra Poliesportiva", "Spa", "Brinquedoteca", "Jardim Zen"]
  },
  {
    name: "Edifício Sky Tower",
    location: "Vila Olímpia, São Paulo",
    description: "Empreendimento comercial AAA com 30 andares e certificação LEED Gold.",
    images: [
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Heliporto", "Centro de Convenções", "Restaurantes", "Segurança 24h"]
  },
  {
    name: "Residencial Parque das Flores",
    location: "Brooklin, São Paulo",
    description: "Condomínio residencial com 2 torres, 96 unidades e conceito de sustentabilidade.",
    images: [
      "https://images.unsplash.com/photo-1580041065738-e72ab8275c1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Horta Comunitária", "Coleta Seletiva", "Energia Solar", "Reúso de Água"]
  },
  {
    name: "Edifício Manhattan Square",
    location: "Jardins, São Paulo",
    description: "Torre residencial de alto luxo com 20 andares e apenas 40 unidades exclusivas.",
    images: [
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Piscina Aquecida", "Wine Cellar", "Spa", "Pet Place"]
  },
  {
    name: "Residencial Costa Verde",
    location: "Pinheiros, São Paulo",
    description: "Condomínio com 150 unidades distribuídas em 3 torres e completa área de lazer.",
    images: [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Quadra de Tênis", "Cinema", "Salão de Jogos", "Espaço Gourmet"]
  },
  {
    name: "Edifício Premium Office",
    location: "Berrini, São Paulo",
    description: "Centro empresarial com 35 andares e moderna infraestrutura corporativa.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Centro de Negócios", "Auditório", "Heliponto", "Estacionamento VIP"]
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Prédios Administrados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos empreendimentos que confiam em nossa gestão profissional
          </p>
        </motion.div>

        <div className="grid gap-12">
          {buildings.map((building, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{building.name}</h3>
                  <p className="text-gray-600 mb-6">{building.location}</p>
                  <p className="text-gray-600 mb-6">{building.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Infraestrutura:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {building.features.map((feature, i) => (
                        <li key={i} className="text-gray-600">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="relative h-[400px]">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="h-full"
                  >
                    {building.images.map((image, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={image}
                          alt={`${building.name} - Imagem ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
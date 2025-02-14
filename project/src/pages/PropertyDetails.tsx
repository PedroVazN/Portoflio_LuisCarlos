import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Camera, DollarSign, Building2, Maximize2, Map, Info, Calendar } from 'lucide-react';
import { buildings } from '../components/Portfolio';
import { Building } from '../types/building';

interface Tab {
  id: string;
  label: string;
  icon: React.FC<{ className?: string }>;
}

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedTab, setSelectedTab] = useState<string>('info');

  const building = buildings.find(b => b.id === id);

  if (!building) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Imóvel não encontrado</h2>
          <Link to="/portfolio" className="text-blue-600 hover:text-blue-700">
            Voltar para lista de imóveis
          </Link>
        </div>
      </div>
    );
  }

  const tabs: Tab[] = [
    { id: 'info', label: 'Informações', icon: Info },
    { id: 'photos', label: 'Fotos', icon: Camera },
    { id: 'location', label: 'Localização', icon: Map },
    { id: 'schedule', label: 'Agendar Visita', icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Voltar para lista de imóveis
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900">{building.name}</h1>
            <p className="text-xl text-gray-600 mt-2">{building.location}</p>
          </div>

          <div className="border-b border-gray-200">
            <nav className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center px-6 py-4 text-sm font-medium ${
                    selectedTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {selectedTab === 'info' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="flex items-center mb-4">
                      <DollarSign className="h-6 w-6 text-blue-600" />
                      <h3 className="text-lg font-semibold ml-2">Valores</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-700">Aluguel: {building.details.aluguel}</p>
                      <p className="text-gray-700">Venda: {building.details.compra}</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="flex items-center mb-4">
                      <Building2 className="h-6 w-6 text-blue-600" />
                      <h3 className="text-lg font-semibold ml-2">Taxas</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-700">Condomínio: {building.details.condominio}</p>
                      <p className="text-gray-700">IPTU: {building.details.iptu}</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="flex items-center mb-4">
                      <Maximize2 className="h-6 w-6 text-blue-600" />
                      <h3 className="text-lg font-semibold ml-2">Áreas Disponíveis</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {building.details.areas.map((area: string, idx: number) => (
                        <div
                          key={idx}
                          className="bg-blue-50 p-3 rounded-lg text-center text-blue-700 font-medium"
                        >
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <img
                      src={building.details.images[selectedImage]}
                      alt={building.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="grid grid-cols-6 gap-2 mt-4">
                      {building.details.images.slice(0, 6).map((img: string, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(idx)}
                          className={`relative aspect-square rounded-lg overflow-hidden ${
                            selectedImage === idx ? 'ring-2 ring-blue-600' : ''
                          }`}
                        >
                          <img src={img} alt="" className="object-cover w-full h-full" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedTab === 'photos' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {building.details.images.map((img: string, idx: number) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img src={img} alt="" className="object-cover w-full h-full" />
                  </div>
                ))}
              </motion.div>
            )}

            {selectedTab === 'location' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <p className="text-gray-500">Mapa será carregado aqui</p>
              </motion.div>
            )}

            {selectedTab === 'schedule' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto"
              >
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                      Data preferencial
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Agendar Visita
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
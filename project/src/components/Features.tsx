import React from 'react';
import { Shield, UserCheck, LineChart, Building2 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Transparência na Gestão',
    description: 'Prestação de contas clara e detalhada para todos os condôminos.'
  },
  {
    icon: UserCheck,
    title: 'Experiência Comprovada',
    description: 'Anos de expertise em administração de condomínios.'
  },
  {
    icon: Building2,
    title: 'Atendimento Personalizado',
    description: 'Soluções adaptadas às necessidades específicas do seu condomínio.'
  },
  {
    icon: LineChart,
    title: 'Tecnologia e Inovação',
    description: 'Sistemas modernos para uma gestão eficiente e transparente.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Nossos Diferenciais</h2>
          <p className="mt-4 text-xl text-gray-600">
            Compromisso com a excelência em cada aspecto da gestão condominial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
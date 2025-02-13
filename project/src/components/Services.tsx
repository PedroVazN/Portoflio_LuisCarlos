import React from 'react';
import { Building2, Users, Wallet, Scale, PenTool as Tool } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Gestão de Condomínio',
    description: 'Administração completa do condomínio, incluindo cobrança de taxas, pagamento de fornecedores e gestão de funcionários.'
  },
  {
    icon: Users,
    title: 'Assessoria para Síndicos',
    description: 'Apoio técnico e estratégico para síndicos, com orientações sobre legislação, finanças e gestão de conflitos.'
  },
  {
    icon: Wallet,
    title: 'Consultoria Financeira',
    description: 'Planejamento e controle das finanças do condomínio, com relatórios detalhados e transparentes.'
  },
  {
    icon: Scale,
    title: 'Consultoria Jurídica',
    description: 'Assessoria em questões legais, como cobrança de inadimplentes e mediação de conflitos.'
  },
  {
    icon: Tool,
    title: 'Manutenção Preventiva',
    description: 'Cuidamos da infraestrutura do seu prédio, com planejamento e execução de manutenções preventivas.'
  },
  {
    icon: Users ,
    title: "Gestão de Pessoas",
    description: "Administração de funcionários, treinamentos e desenvolvimento de equipe."
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Serviços Prestados</h2>
          <p className="mt-4 text-xl text-gray-600">
            Soluções completas para uma gestão eficiente do seu condomínio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-700 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-700 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-800 transition-colors">
            Entre em contato para saber mais!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
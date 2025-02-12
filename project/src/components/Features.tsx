import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, HeartHandshake, Laptop } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-8 w-8 text-emerald-600" />,
    title: 'Transparência na Gestão',
    description: 'Prestação de contas clara e detalhada para todos os condôminos.'
  },
  {
    icon: <Shield className="h-8 w-8 text-emerald-600" />,
    title: 'Experiência Comprovada',
    description: 'Anos de experiência na administração de condomínios de alto padrão.'
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-emerald-600" />,
    title: 'Atendimento Personalizado',
    description: 'Suporte dedicado e atendimento humanizado para cada condomínio.'
  },
  {
    icon: <Laptop className="h-8 w-8 text-emerald-600" />,
    title: 'Tecnologia e Inovação',
    description: 'Sistemas modernos para uma gestão eficiente e transparente.'
  }
];

const Features = () => {
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Diferenciais</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os pilares que fazem nossa gestão condominial ser referência no mercado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
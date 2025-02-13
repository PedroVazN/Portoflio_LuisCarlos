import React from 'react';
import { motion } from 'framer-motion';
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
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-gray-900"
          >
            Nossos <span className="text-blue-600">Diferenciais</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-xl text-gray-600"
          >
            Compromisso com a excelência em cada aspecto da gestão condominial
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.2 }}
                className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300"
              >
                <feature.icon className="h-8 w-8 text-blue-600" />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                className="text-xl font-semibold text-gray-900 mb-4 text-center"
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.6 }}
                className="text-gray-600 text-center"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
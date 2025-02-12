import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Building2, Users,  } from 'lucide-react';

const achievements = [
  {
    icon: <Building2 className="h-8 w-8 text-blue-600" />,
    number: "50+",
    text: "Condomínios Administrados"
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    number: "5000+",
    text: "Moradores Atendidos"
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    number: "15+",
    text: "Anos de Experiência"
  },
  {
    icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    number: "20+",
    text: "Certificações"
  }
];

const Luis = () => {
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Sobre Luis Carlos</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-2/3 text-left order-2 md:order-1">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-gray-600 mb-6"
                >
                  Com mais de 15 anos de experiência em gestão condominial, Luis Carlos é referência no mercado de administração de condomínios de alto padrão. Sua abordagem única combina expertise técnica com um olhar humanizado para as necessidades de cada comunidade.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-gray-600"
                >
                  Formado em Administração com especialização em Gestão Condominial, possui diversas certificações na área e está em constante atualização para oferecer as melhores soluções aos seus clientes.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:w-1/3 order-1 md:order-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Luis Carlos"
                  className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{achievement.number}</h3>
                <p className="text-gray-600">{achievement.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};


export default Luis;
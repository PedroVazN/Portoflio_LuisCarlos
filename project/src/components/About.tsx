import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, ThumbsUp, Users } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Experiência",
    description: "Profissionais com ampla bagagem no setor imobiliário, comprometidos com o sucesso dos nossos clientes."
  },
  {
    icon: <Target className="h-8 w-8 text-blue-600" />,
    title: "Objetivos",
    description: "Ser referência em excelência no mercado imobiliário de São Paulo, garantindo a satisfação total dos nossos clientes."
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: "Qualidade",
    description: "Consultoria imobiliária de alta qualidade, focada em proporcionar as melhores experiências e resultados."
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-blue-600" />,
    title: "Compromisso",
    description: "Comprometimento total em entender e atender as necessidades reais de cada cliente."
  }
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-20"
        >
          <div className="mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sobre a <span className="text-blue-600">ADMPLAN</span>
              </h2>
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  A Admplan Imóveis (Administrada por Luis Carlos) tem a experiência de profissionais com ampla bagagem no setor imobiliário, 
                  comprometidos em fazer com que nossos clientes fechem bons negócios, entendendo suas necessidades 
                  e buscando as melhores oportunidades no mercado.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  Nosso objetivo é garantir que cada processo - seja compra, venda, aluguel, administração ou 
                  avaliação - seja concluído com excelência, deixando nossos clientes plenamente satisfeitos 
                  e confiantes em nossa estrutura e profissionais.
                </motion.p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-2 transition-transform group-hover:rotate-3"></div>
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipOPK_q1y_G6AIxOF0wiCNzFVl216QAKmCKI7R90=s1360-w1360-h1020"
              alt="Equipe ADNPLAM"
              className="relative rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
            Conheça Nossa Equipe
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
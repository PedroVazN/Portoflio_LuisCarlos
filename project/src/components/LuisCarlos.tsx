import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Building2, Users, GraduationCap, Briefcase } from 'lucide-react';

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

const education = [
  {
    period: "1999 - 2003",
    degree: "Direito",
    institution: "Universidade Paulista",
    skills: "Desenvolvimento de negócios · Administração de escritórios · Análise financeira"
  },
  {
    period: "1993 - 1997",
    degree: "Bacharelado em Administração, Finanças",
    institution: "Universidade Paulista",
    skills: "Gestão Financeira · Administração"
  },
  {
    period: "1990 - 1994",
    degree: "Bacharelado em Direito, Gestão Imobiliária",
    institution: "Universidade Paulista",
    skills: "Direito Imobiliário · Gestão de Propriedades"
  }
];

const Luis = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              Sobre <span className="text-blue-600">Luis Carlos</span>
            </motion.span>
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/3 order-2 md:order-1"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-100 rounded-lg transform -rotate-2 transition-transform group-hover:rotate-1"></div>
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Luis Carlos"
                  className="relative rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform group-hover:scale-105"
                />
              </div>
            </motion.div>
            <div className="md:w-2/3 text-left order-1 md:order-2">
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-700 leading-relaxed mb-6"
              >
                Com mais de 15 anos de experiência em gestão condominial, Luis Carlos é referência no mercado de administração de condomínios de alto padrão. Sua abordagem única combina expertise técnica com um olhar humanizado para as necessidades de cada comunidade.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Formado em Administração com especialização em Gestão Condominial, possui diversas certificações na área e está em constante atualização para oferecer as melhores soluções aos seus clientes.
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            <GraduationCap className="inline-block h-8 w-8 text-blue-600 mr-2 mb-1" />
            Formação Acadêmica
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-50 rounded-full p-2">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="ml-2 text-blue-600 font-medium">{edu.period}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{edu.degree}</h4>
                <p className="text-blue-700 font-medium mb-3">{edu.institution}</p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Competências:</span> {edu.skills}
                </p>
              </motion.div>
            ))}
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
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <motion.div 
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                  {achievement.icon}
                </div>
              </motion.div>
              <motion.h3 
                className="text-3xl font-bold text-gray-800 mb-2 text-center"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.2 }}
              >
                {achievement.number}
              </motion.h3>
              <p className="text-gray-600 text-center font-medium">{achievement.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Luis;
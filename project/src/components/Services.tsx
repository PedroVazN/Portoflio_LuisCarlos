import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  Users,
  Wrench,
  Calculator,
  Shield,
  FileText,
  Building,
  Phone
} from 'lucide-react';

const services = [
  {
    icon: <ClipboardCheck className="h-12 w-12 text-emerald-600" />,
    title: "Gestão Administrativa",
    description: "Administração completa do condomínio, incluindo documentação, contratos e assembleias."
  },
  {
    icon: <Calculator className="h-12 w-12 text-emerald-600" />,
    title: "Gestão Financeira",
    description: "Controle financeiro, prestação de contas e planejamento orçamentário."
  },
  {
    icon: <Wrench className="h-12 w-12 text-emerald-600" />,
    title: "Manutenção Preventiva",
    description: "Planejamento e execução de manutenções para preservar o patrimônio."
  },
  {
    icon: <Users className="h-12 w-12 text-emerald-600" />,
    title: "Gestão de Pessoas",
    description: "Administração de funcionários, treinamentos e desenvolvimento de equipe."
  },
  {
    icon: <Shield className="h-12 w-12 text-emerald-600" />,
    title: "Segurança Patrimonial",
    description: "Implementação de protocolos de segurança e monitoramento."
  },
  {
    icon: <FileText className="h-12 w-12 text-emerald-600" />,
    title: "Consultoria Legal",
    description: "Orientação jurídica e adequação às normas condominiais."
  },
  {
    icon: <Building className="h-12 w-12 text-emerald-600" />,
    title: "Projetos de Melhorias",
    description: "Planejamento e execução de melhorias na infraestrutura."
  },
  {
    icon: <Phone className="h-12 w-12 text-emerald-600" />,
    title: "Suporte 24/7",
    description: "Atendimento disponível 24 horas para emergências."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para garantir a excelência na gestão do seu condomínio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
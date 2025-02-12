import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Silva",
    role: "Síndica do Condomínio Jardins",
    text: "A gestão do Luis Carlos transformou nosso condomínio. Sua experiência e profissionalismo são incomparáveis.",
    rating: 5
  },
  {
    name: "Roberto Santos",
    role: "Conselheiro do Ed. Central Park",
    text: "Excelente trabalho na gestão financeira e transparência nas prestações de contas.",
    rating: 5
  },
  {
    name: "Maria Oliveira",
    role: "Moradora do Residencial Flores",
    text: "O atendimento é sempre muito atencioso e as demandas são resolvidas com agilidade.",
    rating: 5
  }
];

const Testimonials = () => {
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Depoimentos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            O que nossos clientes dizem sobre nosso trabalho
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
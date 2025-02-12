import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre a ADMPLAN</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                A ADMPLAN é especializada em gestão condominial, consultoria para síndicos
                e administração de condomínios. Oferecemos soluções completas para garantir
                a eficiência e a valorização do seu patrimônio.
              </p>
              <p>
                Com anos de experiência no setor condominial, a ADMPLAN se consolidou como
                referência em gestão profissional e personalizada. Nosso síndico profissional,
                Luis Carlos, traz expertise e dedicação para cada condomínio que administramos.
              </p>
              <p>
                Nossa missão é proporcionar tranquilidade e segurança aos condôminos, com
                transparência, ética e eficiência. Valorizamos a confiança e o relacionamento
                próximo com nossos clientes.
              </p>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Equipe ADMPLAN"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const cards = [
    { num: '01', title: 'Inspiração', text: 'Projetos que unem criatividade, emoção e funcionalidade.' },
    { num: '02', title: 'Conexão', text: 'Experiências criadas para potencializar cada espaço.' },
    { num: '03', title: 'Experiência', text: 'Mais de 17 anos no mercado trazendo segurança técnica.' }
  ];

  return (
    <section className="py-24 md:py-28 bg-[#08080c]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/5] max-w-md mx-auto shadow-2xl">
              <img 
                src="https://luguerra.com/wp-content/uploads/2024/05/lu-guerra-foto.png" 
                alt="Lu Guerra Lighting Designer" 
                className="w-full h-full object-cover grayscale brightness-90 transition-all duration-1000"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-4 bg-[#6b4a9a] p-8 rounded-full text-white z-20 shadow-2xl hidden md:flex flex-col items-center justify-center min-w-[120px]"
            >
              <div className="text-3xl font-bold font-serif leading-none">17+</div>
              <div className="text-[8px] font-bold uppercase tracking-widest mt-1 text-center leading-tight">Anos de<br/>Experiência</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight uppercase font-serif">
              Lu Guerra: <br /><span className="text-[#8a70c0]">A Estrategista da Luz</span>
            </h2>
            <div className="space-y-6">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                Lu Guerra é Arquiteta e Urbanista especialista em iluminação, com foco na transição para a carreira solo e na criação da metodologia própria.
              </p>
              
              <div className="border-l-2 border-[#6b4a9a] pl-6 py-2 italic">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                  "Desde 2018, defendo que a luz é o elemento mais importante de qualquer espaço. Minha missão é formar profissionais que não apenas 'colocam lâmpadas', mas que criam atmosferas e cuidam da saúde das pessoas através da iluminação."
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-3">Diferencial Técnico:</h3>
                {["Autoridade para marcas globais e projetos de luxo", "Metodologia exclusiva de cálculo e sensibilidade", "Mais de 2.500 alunos formados"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-xl hover:border-[#6b4a9a]/30 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6b4a9a]" />
                    <span className="text-gray-400 text-xs font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

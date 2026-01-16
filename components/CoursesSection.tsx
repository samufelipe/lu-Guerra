
import React from 'react';
import { motion } from 'framer-motion';
import { COURSES } from '../constants';

const CoursesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#08080c] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight uppercase font-serif"
          >
            A Escada <br /><span className="text-[#8a70c0]">de Valor</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base font-light leading-relaxed"
          >
            Escolha o nível da sua jornada. Do essencial ao domínio absoluto da iluminação.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {COURSES.map((course, idx) => (
            <motion.div 
              key={course.id}
              id={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col p-8 rounded-[2rem] transition-all duration-500 h-full relative group scroll-mt-24 ${
                course.highlighted 
                ? 'bg-[#12121e] border-2 border-[#6b4a9a] shadow-[0_30px_60px_rgba(107,74,154,0.2)] lg:scale-110 lg:z-10' 
                : 'bg-[#111119] border border-white/5 lg:scale-95'
              }`}
            >
              {course.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6b4a9a] text-white text-[9px] font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                  O Combo Definitivo
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-3 font-serif ${course.highlighted ? 'text-white' : 'text-gray-300'}`}>
                  {course.title}
                </h3>
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${course.highlighted ? 'bg-[#25D366]' : 'bg-[#8a70c0]'}`}></div>
                  <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Inscrições Abertas</span>
                </div>
              </div>

              <p className="text-gray-400 text-[12px] mb-12 flex-grow font-light leading-relaxed">
                {course.description}
              </p>
              
              <div className="mt-auto">
                 <a 
                  href={`https://hotmart.com/product/${course.id}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-5 rounded-xl font-bold text-[9px] uppercase tracking-[0.2em] transition-all active:scale-95 ${
                    course.highlighted 
                    ? 'bg-[#6b4a9a] text-white hover:bg-[#8a70c0] hover:shadow-[0_10px_30px_rgba(107,74,154,0.4)]' 
                    : 'bg-white/5 text-white hover:bg-[#6b4a9a] border border-white/10'
                  }`}
                >
                  {course.ctaText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

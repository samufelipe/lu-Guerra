import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    filter: 'blur(4px)'
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)'
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    filter: 'blur(4px)'
  })
};

const Testimonials: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const currentIndex = Math.abs(page % TESTIMONIALS.length);

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  return (
    <section className="py-24 bg-[#08080c] relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#6b4a9a]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#6b4a9a]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase font-serif leading-[1.1] mb-2"
          >
            QUEM VIVE A
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white/20 tracking-tight uppercase font-serif leading-[1.1]"
          >
            EXPERIÊNCIA LU GUERRA
          </motion.h2>
        </div>

        <div className="relative max-w-3xl mx-auto px-4">
          <div className="relative h-[420px] md:h-[340px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 15, mass: 1 }, // Efeito elástico (bounce)
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.4 }
                }}
                className="w-full"
              >
                <div className="bg-[#0f0f16] border border-white/5 rounded-[2.5rem] p-10 md:p-14 relative shadow-2xl text-center backdrop-blur-md">
                  <div className="flex justify-center mb-6">
                    <Quote 
                      size={44} 
                      className="text-[#6b4a9a] opacity-30" 
                      strokeWidth={1.5}
                    />
                  </div>
                  
                  <p className="text-sm md:text-lg text-gray-300 leading-relaxed font-light mb-10 italic max-w-2xl mx-auto">
                    "{TESTIMONIALS[currentIndex].content}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <h4 className="font-bold text-white text-base tracking-wider uppercase mb-1">
                      {TESTIMONIALS[currentIndex].name}
                    </h4>
                    <p className="text-[#8a70c0] text-[9px] uppercase tracking-[0.3em] font-bold">
                      {TESTIMONIALS[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-8 mt-10">
            <button 
              onClick={() => paginate(-1)} 
              className="w-11 h-11 rounded-full border border-white/5 text-white flex items-center justify-center bg-white/5 hover:bg-[#6b4a9a] transition-all group active:scale-90 shadow-lg"
              aria-label="Anterior"
            >
              <ChevronLeft size={22} className="group-hover:scale-110 transition-transform" />
            </button>
            
            <div className="flex gap-3">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const diff = idx - currentIndex;
                    if (diff !== 0) {
                      paginate(diff);
                    }
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 active:scale-90 ${idx === currentIndex ? 'w-10 bg-[#6b4a9a]' : 'w-2 bg-white/10 hover:bg-white/30'}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={() => paginate(1)} 
              className="w-11 h-11 rounded-full border border-white/5 text-white flex items-center justify-center bg-white/5 hover:bg-[#6b4a9a] transition-all group active:scale-90 shadow-lg"
              aria-label="Próximo"
            >
              <ChevronRight size={22} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

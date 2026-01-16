
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCIENCE_PILARS } from '../constants';
import { Info } from 'lucide-react';

const ScienceSection: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#08080c] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6b4a9a]/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight uppercase font-serif leading-tight"
          >
            A luz que <br /><span className="text-[#8a70c0]">transforma a vida.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-lg leading-relaxed font-light opacity-80"
          >
            A iluminação não é apenas estética; é física, biologia e saúde. <br className="hidden md:block" />
            Entenda os pilares que guiam o nosso trabalho.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {SCIENCE_PILARS.map((pilar, idx) => (
            <motion.div 
              key={pilar.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-10 glass-card rounded-[2.5rem] light-border-hover transition-all duration-500 flex flex-col items-center text-center relative group"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white font-bold mb-8 text-sm group-hover:bg-[#6b4a9a] group-hover:scale-110 transition-all duration-500 shadow-lg">
                0{pilar.id}
              </div>
              
              <div 
                className="relative cursor-help mb-5"
                onMouseEnter={() => setActiveTooltip(pilar.id)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <h3 className="text-lg md:text-xl font-bold font-serif text-white uppercase leading-tight flex items-center justify-center gap-2 group-hover:text-[#8a70c0] transition-colors duration-300 min-h-[3rem]">
                  {pilar.title}
                  <Info size={14} className="opacity-20 group-hover:opacity-100 transition-opacity" />
                </h3>

                <AnimatePresence>
                  {activeTooltip === pilar.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-72 p-6 bg-[#0d0d12] border border-[#6b4a9a]/40 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 pointer-events-none backdrop-blur-2xl"
                    >
                      <p className="text-[12px] text-gray-300 font-light leading-relaxed">
                        {pilar.tooltip}
                      </p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[10px] border-transparent border-t-[#0d0d12]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <p className="text-gray-500 text-[14px] leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                {pilar.text}
              </p>

              <div className="absolute inset-0 bg-gradient-to-b from-[#6b4a9a]/0 to-[#6b4a9a]/0 group-hover:from-[#6b4a9a]/5 group-hover:to-transparent rounded-[2.5rem] transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;

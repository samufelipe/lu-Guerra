
import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

const StatsSection: React.FC = () => {
  return (
    <div className="relative z-10 -mt-16 container mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {STATS.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#0b0b0f] border border-white/5 p-6 md:p-10 rounded-[1.5rem] text-center group hover:border-[#6b4a9a]/30 transition-all shadow-xl"
          >
            <div className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tighter transition-transform group-hover:scale-105 duration-500">
              {stat.value}
            </div>
            <div className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.25em] text-gray-500 group-hover:text-gray-300 transition-colors">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;

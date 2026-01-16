import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { X, ArrowUpRight } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<'Tudo' | 'Residencial' | 'Comercial' | 'Público'>('Tudo');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'Tudo' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-[#08080c]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight font-serif uppercase"
            >
              Projetos <br /><span className="text-[#8a70c0]">Autorais</span>
            </h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-sm md:text-base font-light leading-relaxed"
            >
              Cada projeto é uma narrativa única onde a luz esculpe o espaço e define a experiência.
            </motion.p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['Tudo', 'Residencial', 'Comercial', 'Público'].map((cat: any) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 ${
                  filter === cat 
                  ? 'bg-[#6b4a9a] text-white shadow-md' 
                  : 'bg-white/5 text-gray-500 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <motion.div 
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="group relative overflow-hidden rounded-[2rem] aspect-video cursor-pointer border border-white/5 transition-transform active:scale-[0.98]"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.imageUrl} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <div>
                   <span className="text-[#8a70c0] text-[8px] font-bold uppercase tracking-[0.3em] mb-2 block">{project.category}</span>
                   <h3 className="text-2xl md:text-3xl font-serif text-white">{project.title}</h3>
                </div>
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Modal update to match refined aesthetic */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-[#08080c]/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-[#111119] rounded-[2.5rem] overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl relative border border-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 z-30 p-2 bg-black/40 rounded-full text-white transition-all active:scale-90" 
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img src={selectedProject.imageUrl} className="h-64 md:h-full object-cover" />
                <div className="p-10 flex flex-col justify-center">
                  <span className="text-[#8a70c0] text-[8px] font-bold uppercase tracking-widest mb-3 block">{selectedProject.category}</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">{selectedProject.title}</h2>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">{selectedProject.description}</p>
                  <a 
                    href="https://wa.me/5500000000000" 
                    className="bg-[#6b4a9a] text-white py-4 rounded-xl font-bold uppercase text-[10px] tracking-widest text-center transition-all active:scale-95 shadow-lg"
                  >
                    Consultoria Exclusiva
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
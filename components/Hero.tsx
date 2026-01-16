
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Otimizado */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,8,12,0.7), rgba(8,8,12,1)), url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Efeitos de Iluminação */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#6b4a9a]/20 blur-[150px] rounded-full animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#8a70c0]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
        >
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.5em] text-[#8a70c0] mb-8 block">
            Estrategista da Luz • Autoridade Técnica
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-white uppercase font-serif [text-wrap:balance] mx-auto">
            Iluminar é mais do que <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#8a70c0] to-white/60">
              escolher luminária.
            </span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sm md:text-lg lg:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed [text-wrap:balance] opacity-90"
        >
          Projetos que emocionam e formações que transformam. Unimos a 
          precisão técnica do cálculo à sensibilidade do olhar humano.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a 
            href="#projetos" 
            onClick={(e) => handleLinkClick(e, '#projetos')}
            className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-white/10 hover:border-white/40 active:scale-95 backdrop-blur-sm"
          >
            Conhecer Projetos
          </a>
          <a 
            href="#cursos" 
            onClick={(e) => handleLinkClick(e, '#cursos')}
            className="w-full sm:w-auto px-12 py-5 bg-[#6b4a9a] text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-[#8a70c0] cta-glow active:scale-95 flex items-center justify-center gap-2"
          >
            Quero ser Aluno
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={() => {
          const elem = document.getElementById('ciencia');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#6b4a9a] via-[#8a70c0] to-transparent" />
      </motion.div>
    </div>
  );
};

export default Hero;

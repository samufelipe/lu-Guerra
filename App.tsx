import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ScienceSection from './components/ScienceSection';
import Testimonials from './components/Testimonials';
import CoursesSection from './components/CoursesSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#6b4a9a] selection:text-white bg-[#08080c]">
      <Header />
      <main>
        <section id="home">
          <Hero />
          <StatsSection />
        </section>
        
        <motion.section 
          id="ciencia"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ScienceSection />
        </motion.section>

        <motion.section 
          id="sobre"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <AboutSection />
        </motion.section>

        <motion.section 
          id="projetos"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <PortfolioSection />
        </motion.section>
        
        <motion.section 
          id="prova-social"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Testimonials />
        </motion.section>
        
        <motion.section 
          id="cursos"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <CoursesSection />
        </motion.section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
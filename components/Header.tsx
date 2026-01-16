
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Laboratório PRISMA', href: '#laboratorio-prisma' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0d0d12]/90 backdrop-blur-xl py-3 border-b border-white/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo className="scale-90 md:scale-100 origin-left" />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400 hover:text-white transition-all relative group active:scale-95 inline-block"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#6b4a9a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="https://wa.me/5500000000000"
            className="bg-[#6b4a9a] hover:bg-[#8a70c0] text-white px-6 py-3 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95 cta-glow"
          >
            Falar com Especialista
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden text-white p-2 relative z-[110] transition-transform active:scale-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 w-full h-screen bg-[#0d0d12] z-[100] transition-all duration-500 ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-8">
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-2xl font-serif text-white uppercase tracking-wider transition-transform active:scale-95 text-center"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <a 
            href="https://wa.me/5500000000000" 
            className="w-full text-center bg-[#6b4a9a] text-white py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all active:scale-95 shadow-lg"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

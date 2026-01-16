import React from 'react';
import { Instagram, Youtube, Mail, Music2 } from 'lucide-react';

const Footer: React.FC = () => {
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
    <footer className="bg-[#0d0d12] pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
             <span className="text-2xl font-serif font-bold tracking-[0.2em] text-white mb-8 block">
              LU<span className="text-[#6b4a9a]">GUERRA</span>
            </span>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs font-light">
              Estrategista da Luz e Lighting Designer focada em autoridade técnica e conversão de alto padrão.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-500 text-xs font-light">
              <li>
                <a 
                  href="#cursos" 
                  onClick={(e) => handleLinkClick(e, '#cursos')}
                  className="hover:text-[#8a70c0] transition-all active:scale-95 inline-block"
                >
                  Cursos
                </a>
              </li>
              <li>
                <a 
                  href="#projetos" 
                  onClick={(e) => handleLinkClick(e, '#projetos')}
                  className="hover:text-[#8a70c0] transition-all active:scale-95 inline-block"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8a70c0] transition-all active:scale-95 inline-block"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8">Redes Sociais</h4>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.instagram.com/luguerra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#6b4a9a] hover:text-white transition-all active:scale-90 shadow-md border border-white/5 hover:border-[#6b4a9a]/50" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://www.youtube.com/@LuzcomLuGuerra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#6b4a9a] hover:text-white transition-all active:scale-90 shadow-md border border-white/5 hover:border-[#6b4a9a]/50" aria-label="YouTube">
                <Youtube size={16} />
              </a>
              <a href="https://www.tiktok.com/@luguerrald" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#6b4a9a] hover:text-white transition-all active:scale-90 shadow-md border border-white/5 hover:border-[#6b4a9a]/50" aria-label="TikTok">
                <Music2 size={16} />
              </a>
              <a href="https://br.pinterest.com/luguerrald/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#6b4a9a] hover:text-white transition-all active:scale-90 shadow-md border border-white/5 hover:border-[#6b4a9a]/50" aria-label="Pinterest">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.289 2C6.617 2 2 6.617 2 12.289c0 4.332 2.674 8.013 6.457 9.535-.092-.81-.174-2.053.036-2.937.19-.792 1.226-5.197 1.226-5.197s-.312-.623-.312-1.543c0-1.444.838-2.523 1.88-2.523.887 0 1.314.665 1.314 1.463 0 .891-.566 2.223-.859 3.457-.245 1.034.52 1.877 1.54 1.877 1.847 0 3.268-1.948 3.268-4.759 0-2.488-1.787-4.228-4.341-4.228-2.957 0-4.694 2.219-4.694 4.512 0 .894.344 1.852.774 2.373.085.101.097.19.072.3-.078.328-.255 1.037-.29 1.176-.046.183-.151.222-.35.13-1.307-.607-2.124-2.515-2.124-4.045 0-3.293 2.392-6.319 6.901-6.319 3.623 0 6.44 2.582 6.44 6.033 0 3.6-2.269 6.497-5.42 6.497-1.058 0-2.053-.55-2.394-1.198l-.652 2.482c-.236.908-.874 2.048-1.3 2.744 1.024.315 2.112.486 3.24.486 5.672 0 10.289-4.617 10.289-10.289C22.578 6.617 17.961 2 12.289 2z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8">Suporte</h4>
            <a href="mailto:suporte@luguerra.com" className="flex items-center gap-3 text-gray-500 hover:text-white transition-all active:scale-95 text-xs font-light inline-flex group">
              <Mail size={16} className="group-hover:text-[#6b4a9a] transition-colors" />
              suporte@luguerra.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[9px] uppercase tracking-widest font-medium">
            © 2026 Lu Guerra - Todos os direitos reservados.
          </p>
          <div className="text-[9px] text-gray-600 uppercase tracking-widest font-medium">
            Desenvolvido por: <a href="https://samucads.com.br" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#8a70c0] transition-colors font-bold">samucads</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
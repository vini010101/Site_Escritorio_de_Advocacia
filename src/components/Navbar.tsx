import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="bg-olive fixed w-full z-50 shadow-md">
  <div className="container mx-auto flex justify-between items-center px-4 md:px-6 py-4">
    <div className="flex flex-col items-center gap-20"> {/* Aumentei o gap para 6 (pode ajustar conforme necessário) */}
      <div className="flex items-center gap-10"> {/* Flex para alinhar imagem e linha */}
        <div className="text-white">
          {/* Substitua pelo caminho da sua imagem SVG */}
          <img src="lovable-uploads/najjar-capdeville.svg" alt="Logo" width="250" height="80" />
        </div>
        <div className="border-t-2 border-white w-80"></div> {/* Linha horizontal ao lado da imagem */}
      </div>
      <div className="font-display uppercase tracking-widest text-copper">
        <h2>Neque poro quisqam est<br /> qui dolore ipsum</h2> {/* O texto vai ficar abaixo da imagem */}
      </div>
          
        </div>
        <nav className="hidden md:flex flex-col items-start space-y-4">
        <Link to="/" className="text-white nav-link">Quem somos</Link>
        <Link to="/" className="text-white nav-link">Serviços</Link>
        <Link to="/" className="text-white nav-link">Blog</Link>
        <Link to="/" className="text-white nav-link">CONTATO</Link>
        <Link to="/" className="text-white nav-link border-b border-white pb-1">Agendamento</Link>
</nav>


        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

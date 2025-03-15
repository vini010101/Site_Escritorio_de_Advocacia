
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
    className={`fixed w-full z-50 ${
    scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' : 'bg-white py-6'
    }`}
  >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="text-olive">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2L2 38H38L20 2Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="font-display uppercase tracking-widest text-olive">
            <div className="text-sm font-medium">Najjar</div>
            <div className="text-xs tracking-[0.3em]">Capdeville</div>
          </div>
        </div>
        
        <nav className="hidden md:flex flex-col items-start space-y-4">
        <Link to="/" className="nav-link">Quem somos</Link>
        <Link to="/" className="nav-link">Serviços</Link>
        <Link to="/" className="nav-link">Blog</Link>
        <Link to="/" className="nav-link">CONTATO</Link>
        <Link to="/" className="nav-link border-b border-copper pb-1">Agendamento</Link>
        </nav>

        
        <div className="md:hidden">
          <button className="text-olive">
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

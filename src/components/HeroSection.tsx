
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }
    
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-entry');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          el.classList.add('animate-fade-in-up');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative bg-olive py-40 md:py-48 lg:py-56 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-sand text-center md:text-left opacity-0 transition-opacity duration-700"
          >
            Neque poro quisqam est qui dolore ipsum.
          </h1>
        </div>
      </div>
      <div 
        className="absolute inset-0 bg-geometric-lines opacity-20 mix-blend-overlay"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default HeroSection;

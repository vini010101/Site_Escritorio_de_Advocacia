
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
      <img 
        src="/lovable-uploads/f077a551-6876-4d16-9452-b4a1600c9a2a.png" 
        alt="Woman looking at laptop" 
        className="w-full h-auto object-cover absolute top-0 left-0 opacity-20 mix-blend-overlay"
      />
    </section>
  );
};

export default HeroSection;

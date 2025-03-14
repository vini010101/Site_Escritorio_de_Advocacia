
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
          <p className="text-sand/80 mt-6 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae erat et dolor.
          </p>
        </div>
      </div>
      <div 
        className="absolute inset-0 bg-blend-overlay opacity-20"
        style={{
          backgroundImage: "url('/lovable-uploads/f2002e61-43c2-44e6-8f57-5e411548667e.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default HeroSection;

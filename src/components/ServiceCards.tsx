import { useState, useEffect } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  delay: number;
  bgColor: string; // Nova prop para definir a cor de fundo
}

const ServiceCard = ({ title, description, delay, bgColor }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`opacity-0 transition-opacity duration-700 ${isVisible ? 'opacity-100' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`p-10 h-80 w-full transition-all duration-300 rounded-lg shadow-lg ${isHovered ? 'translate-y-[-5px] shadow-xl' : ''} ${bgColor}`}
      >
        <h3 className="text-xl font-display text-olive mb-3">
          {title}
        </h3>
        <p className="text-olive text-sm leading-relaxed"> {/* Alterei para text-olive */}
          {description}
        </p>
      </div>
    </div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      title: "Dignissim libero",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae erat et dolor finibus feugiat. Nullam mattis urna. Nulla in leo nec felis.",
      bgColor: "bg-copper", // Cor para o primeiro card (Copper)
    },
    {
      title: "Dignissim libero",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae erat et dolor finibus feugiat. Nullam mattis urna. Nulla in leo nec felis.",
      bgColor: "bg-gray-300", // Cor para o segundo card (Cinza)
    },
    {
      title: "Dignissim libero",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae erat et dolor finibus feugiat. Nullam mattis urna. Nulla in leo nec felis.",
      bgColor: "bg-white", // Cor para o terceiro card (Branco)
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              delay={index * 200}
              bgColor={service.bgColor} // Passa a cor para o card
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;

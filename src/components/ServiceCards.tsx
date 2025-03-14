
import { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ title, description, delay }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="animate-entry opacity-0"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`bg-sand p-8 transition-all duration-300 ${isHovered ? 'translate-y-[-5px] shadow-md' : ''}`}>
        <h3 className="text-xl font-display text-olive mb-3">
          Dignissim libero
        </h3>
        <p className="text-olive-light text-sm leading-relaxed">
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae erat et dolor finibus feugiat. Nullam mattis urna. Nulla in leo nec felis."
    },
    {
      title: "Dignissim libero",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae erat et dolor finibus feugiat. Nullam mattis urna. Nulla in leo nec felis."
    },
    {
      title: "Dignissim libero",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae erat et dolor finibus feugiat. Nullam mattis urna. Nulla in leo nec felis."
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;

import { useState, useEffect } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  delay: number;
  bgColor: string;
}

const ServiceCard = ({ title, description, delay, bgColor }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="flex flex-col items-center">
      <div
        className={`opacity-0 transition-opacity duration-700 ${isVisible ? "opacity-100" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`p-10 h-80 w-80 transition-all duration-300 rounded-lg shadow-lg 
          ${isHovered ? "translate-y-[-5px] shadow-xl" : ""} ${bgColor}`}
        >
          <h3 className="text-xl font-display text-olive mb-3 text-center">{title}</h3>
        </div>
      </div>

      {/* Texto abaixo do card */}
      <p className="mt-4 text-olive text-sm leading-relaxed text-center w-80">
        {description}
      </p>
    </div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      title: "Dignissim libero",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-gray-300",
    },
    {
      title: "Dignissim libero",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgColor: "bg-white",
    },
  ];

  return (
    <section className="relative min-h-[90vh] md:min-h-[120vh] py-32 overflow-hidden">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/lovable-uploads/pattern-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
          zIndex: -2, // Mantém a imagem no fundo
        }}
      ></div>
  
      {/* Imagem sobreposta (banner) */}
      <div className="absolute top-1/2 left-0 w-full flex justify-center z-0 transform -translate-y-1/2">
        <img
          src="/lovable-uploads/consultorias.png"
          alt="Consultoria"
          className="w-full max-w-[1200px] h-[300px] md:h-[400px] object-cover"
        />  
      </div>

      {/* Container para os cards */}
      <div className="relative container mx-auto px-4 md:px-6 flex flex-col items-center">
      <div className="absolute bottom-[-865px] left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row justify-center items-center gap-8 z-20 mt-[150px]">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              delay={index * 200}
              bgColor={service.bgColor}
            />
          ))}
        </div>

        {/* Botão único abaixo dos cards */}
        <button className="absolute bottom-[-1000px] left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row justify-center items-center gap-8 z-20   lef mt-8 bg-olive text-white py-3 px-8 rounded-lg text-lg transition duration-300 hover:bg-olive-dark">
          Clique aqui para agendar a sua consultoria
        </button>
      </div>
    </section>
  );
};

export default ServiceCards;

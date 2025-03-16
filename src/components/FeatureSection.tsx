import { useState, useEffect } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  delay: number;
}


const FeatureItem = ({ title, description }: { title: string; description: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`mb-10 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h3 className="text-xl font-display text-olive mb-3">
        {title}
      </h3>
      <p className="text-olive-light text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
  <div 
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/lovable-uploads/pattern-background.png')", // Caminho da imagem de fundo
      backgroundSize: "cover", // Faz a imagem de fundo cobrir toda a área
      backgroundPosition: "center", // Centraliza a imagem de fundo
      backgroundRepeat: "no-repeat",
      height: "100%", // Garante que a imagem de fundo ocupe toda a altura da seção
      zIndex: -1
    }}
  ></div>
  
  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="flex justify-center items-center"> {/* Centraliza horizontal e verticalmente */}
      <div className="w-full md:w-1/2">
        <div className="relative overflow-hidden" style={{ height: '400px' }}> {/* Aumenta a altura da imagem */}
          <img 
            src="/lovable-uploads/consultorias.png"
            alt="Consultoria"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }} // Centraliza a imagem e permite o corte
          />
          
          {/* Cards sobre a imagem */}
          <div className="absolute inset-0 flex justify-between items-center px-4 md:px-12 z-20">
              <div className="w-full md:w-1/2 lg:w-1/2 bg-white p-8 shadow-lg rounded-lg opacity-90">
              <h3 className="text-xl font-semibold mb-4">Cras dignissim, aptops text sassdd</h3>
              <p>edjefkjifkrfkimf
              keddokdklfdkfdkifdk
              fkdfkedfdkfedkfjdkfd
              kfkdfkdfkdkj</p>
               </div>
              <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-8 shadow-lg rounded-lg opacity-90">
              <h3 className="text-xl font-semibold mb-4">Card 2</h3>
              <p>Descrição do card 2.</p>
              </div>
              </div>

          
        </div>
      </div>
    </div>
  </div>
</section>
  
  );
};

export default FeatureSection;

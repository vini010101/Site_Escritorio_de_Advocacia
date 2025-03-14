
const FeatureItem = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="mb-10 animate-entry opacity-0">
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
    <section className="py-20 bg-offwhite relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/lovable-uploads/8f0d8260-0f53-4c1a-9f92-24a8ff288d3e.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="h-full w-full min-h-[320px] relative overflow-hidden">
              <img 
                src="/lovable-uploads/3d2836e7-05cb-410c-bbb1-8d0e5288a717.png"
                alt="NC Office with lawyers" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <div className="max-w-md">
              <FeatureItem 
                title="Cras dignissim dignissim libero et faucibus" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae erat et dolor finibus feugiat. Nullam mattis urna. Nulla in leo nec felis elementum pellentesque. In hac habitasse platea."
              />
              
              <FeatureItem 
                title="Cras dignissim dignissim libero et faucibus" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae erat et dolor finibus feugiat. Nullam mattis urna. Nulla in leo nec felis elementum pellentesque. In hac habitasse platea."
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-10">
        <button className="bg-olive text-white py-3 px-8 uppercase tracking-wider text-sm hover:bg-olive-dark transition-colors duration-300 mx-auto">
          Clique aqui para agendar sua consultoria
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;

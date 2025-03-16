import { useEffect, useRef } from "react";

const HeroSection = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("animate-fade-in");
    }
  }, []);

  return (
    <section className="relative pt-20 bg-white text-white">
      {/* Container do Banner */}
      <div className="relative w-full flex items-center justify-center">
        {/* Imagem fixa */}
        <div className="w-2/3">
          <img
            src="/lovable-uploads/mulher.png"
            alt="Banner"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Texto ao lado da imagem */}
        <div className="w-1/3 p-8">
        <h1 ref={titleRef} className="text-olive text-3xl font-bold opacity-0 transition-opacity duration-700">
        Neque porro quisquam est qui dolore ipsum.
        </h1>
        <p className="text-olive/80 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae erat et dolor.
        </p>
        <button className="mt-6 px-6 py-3 bg-olive text-white font-semibold rounded-lg shadow-md hover:bg-olive/80 transition-all">
        Saiba mais
        </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

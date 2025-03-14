
import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  label: string;
  symbol?: string;
  duration?: number;
}

const Counter = ({ end, label, symbol = '', duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };
    
    animationFrameId = window.requestAnimationFrame(step);
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, isVisible]);

  return (
    <div ref={counterRef} className="flex flex-col items-center">
      <span className="text-5xl md:text-6xl font-display text-copper mb-2">
        {count}{symbol}
      </span>
      <span className="text-sm uppercase tracking-wider text-olive-light">{label}</span>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-10 md:mb-0 md:w-1/2">
            <span className="text-xs uppercase tracking-wider text-copper">Quem somos</span>
            <h2 className="text-3xl md:text-4xl font-display text-olive mt-2 mb-6">
              Pellentesque at arcu felis elementum et ante.
            </h2>
            <p className="text-olive-light mb-6 max-w-xl">
              Fusce dignissim magna vehicula, consequat ligula nec, dignissim nulla. Donec vestibulum justo sed enim volutpat, in suscipit nisi posuere. Vivamus id nibh ut nisl.
            </p>
            <button className="btn-outline">Saiba mais</button>
          </div>
          
          <div className="grid grid-cols-2 gap-12 md:w-1/3">
            <Counter end={8} label="Advogados parceiros" />
            <Counter end={47} label="Empresas Parceiras" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

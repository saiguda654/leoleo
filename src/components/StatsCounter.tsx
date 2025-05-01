import React, { useState, useEffect, useRef } from 'react';

interface StatProps {
  number: number;
  label: string;
  suffix?: string;
  icon?: string;
}

const StatsCounter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a365d 0%, #2563eb 100%)",
        boxShadow: "inset 0 0 50px rgba(0, 0, 0, 0.2)"
      }}
    >
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(5px)"
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Impact in Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Stat number={500} label="Training Programs Conducted" icon="🎓" />
          <Stat number={10000} label="Support Hours Delivered" icon="⏱️" />
          <Stat number={75} label="AI Projects Completed" icon="🤖" />
        </div>
      </div>
    </section>
  );
};

const Stat: React.FC<StatProps> = ({ number, label, suffix = '+', icon }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // ms
  const countRef = useRef<HTMLSpanElement>(null);
  const startTime = useRef<number | null>(null);
  const requestRef = useRef<number>();

  const animate = (timestamp: number) => {
    if (!startTime.current) {
      startTime.current = timestamp;
    }

    const progress = timestamp - startTime.current;
    const progressRatio = Math.min(progress / duration, 1);
    
    // Easing function: easeOutQuad
    const easedProgress = 1 - (1 - progressRatio) * (1 - progressRatio);
    
    setCount(Math.floor(easedProgress * number));

    if (progressRatio < 1) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [number]);

  return (
    <div className="text-center bg-white/5 backdrop-blur-sm p-8 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="text-5xl font-bold mb-2 flex items-center justify-center text-white">
        <span ref={countRef}>{count.toLocaleString()}</span>
        <span className="text-blue-300">{suffix}</span>
      </h3>
      <p className="text-xl text-gray-200">{label}</p>
    </div>
  );
};

export default StatsCounter;
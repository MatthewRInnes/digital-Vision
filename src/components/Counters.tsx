
import { useEffect, useState, useRef } from 'react';
import { counters } from '../data/counters';
import { Coffee, Book, Smile } from 'lucide-react';

// Animated counter component that displays statistics with icons
const Counters = () => {
  // References to observe elements for animation
  const containerRef = useRef<HTMLDivElement>(null);
  // Track if counter animation has been triggered
  const [hasAnimated, setHasAnimated] = useState(false);
  // State to hold current count values during animation
  const [currentCounts, setCurrentCounts] = useState(counters.map(() => 0));
  
  useEffect(() => {
    // Observer to trigger animation when section is visible
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateCounters();
      }
    }, { threshold: 0.3 });
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);
  
  // Animate the counter numbers when visible
  const animateCounters = () => {
    // Animation duration in ms
    const duration = 2000;
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = duration / frameRate;
    
    let frame = 0;
    
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      // Calculate current count based on animation progress
      const newCounts = counters.map(counter => 
        Math.floor(Math.min(counter.count * progress, counter.count))
      );
      
      setCurrentCounts(newCounts);
      
      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameRate);
  };
  
  // Helper function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'coffee':
        return <Coffee size={48} className="text-agency-orange" />;
      case 'book':
        return <Book size={48} className="text-agency-blue" />;
      case 'smile':
        return <Smile size={48} className="text-green-500" />;
      default:
        return null;
    }
  };
  
  return (
    <section className="py-20 bg-agency-light-gray">
      <div 
        ref={containerRef}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {counters.map((counter, index) => (
            <div 
              key={counter.id}
              className={`text-center p-8 rounded-lg bg-white shadow-lg transform transition-all duration-500 ${
                hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4">
                {renderIcon(counter.icon)}
              </div>
              
              <h3 className="text-5xl font-bold mb-2 text-agency-blue">
                {currentCounts[index]}+
              </h3>
              
              <p className="text-xl text-gray-600">{counter.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;

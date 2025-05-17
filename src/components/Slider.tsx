import { useState, useEffect, useRef } from 'react';
import { portfolioItems } from '../data/portfolio';
import { ChevronLeft, ChevronRight, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Portfolio image slider component for showcasing our work
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  
  // Function to navigate to the next slide
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(prev => 
      prev === portfolioItems.length - 1 ? 0 : prev + 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  // Function to navigate to the previous slide
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(prev => 
      prev === 0 ? portfolioItems.length - 1 : prev - 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  // Set up automatic slide transitions
  useEffect(() => {
    // Start auto-sliding timer
    slideTimerRef.current = setInterval(nextSlide, 5000);
    
    // Clear timer when component is unmounted
    return () => {
      if (slideTimerRef.current) {
        clearInterval(slideTimerRef.current);
      }
    };
  }, []);
  
  // Reset timer when user manually changes slide
  const resetSlideTimer = () => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
      slideTimerRef.current = setInterval(nextSlide, 5000);
    }
  };
  
  // Handle dot navigation click
  const goToSlide = (index: number) => {
    if (currentSlide === index || isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    resetSlideTimer();
    
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  // Animation for slides entering view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        slidesRef.current?.classList.add('animate-fade-in');
      }
    }, { threshold: 0.2 });
    
    if (slidesRef.current) {
      observer.observe(slidesRef.current);
    }
    
    return () => {
      if (slidesRef.current) {
        observer.unobserve(slidesRef.current);
      }
    };
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-r from-agency-blue/10 to-agency-light-blue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-agency-blue">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of our recent work showcasing our expertise and creativity.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Slides Container */}
          <div 
            ref={slidesRef}
            className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-xl"
          >
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute w-full h-full slider-transition ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0 z-10'
                    : index < currentSlide
                      ? 'opacity-0 -translate-x-full z-0'
                      : 'opacity-0 translate-x-full z-0'
                }`}
              >
                <div className="relative w-full h-full bg-gray-100 flex items-center justify-center rounded-xl overflow-hidden group">
                  {/* Image placeholder with icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <Image size={64} className="text-gray-400" />
                  </div>
                  
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <Button 
            onClick={() => { prevSlide(); resetSlideTimer(); }}
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-2 bg-white/80 hover:bg-white text-agency-blue z-20"
            size="icon"
          >
            <ChevronLeft />
          </Button>
          
          <Button 
            onClick={() => { nextSlide(); resetSlideTimer(); }}
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-2 bg-white/80 hover:bg-white text-agency-blue z-20"
            size="icon"
          >
            <ChevronRight />
          </Button>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {portfolioItems.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-agency-blue w-6' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;

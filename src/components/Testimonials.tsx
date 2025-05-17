
import { useState, useEffect, useRef } from 'react';
import { testimonials } from '../data/testimonials';
import { User } from 'lucide-react';

// Testimonial carousel component displaying customer reviews
const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentTestimonial]);
  
  // Function to navigate to next testimonial
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentTestimonial(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  // Function to navigate to previous testimonial
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentTestimonial(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  // Animation for testimonials entering view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        carouselRef.current?.classList.add('animate-fade-in');
      }
    }, { threshold: 0.2 });
    
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    
    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);
  
  return (
    <section id="testimonials" className="py-20 bg-agency-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div 
          ref={carouselRef}
          className="max-w-3xl mx-auto relative opacity-0"
        >
          {/* Testimonial Cards */}
          <div className="relative h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full h-full transition-all duration-500 ${
                  index === currentTestimonial
                    ? 'opacity-100 translate-x-0'
                    : index < currentTestimonial
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white rounded-lg p-8 shadow-lg text-agency-dark-gray h-full flex flex-col">
                  {/* Testimonial content */}
                  <div className="flex-grow">
                    <p className="text-lg mb-6 italic">"{testimonial.review}"</p>
                  </div>
                  
                  {/* Author info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <User className="text-gray-500" />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={`testimonial-dot-${index}`}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial 
                    ? 'bg-white w-6' 
                    : 'bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

// Hero section with animated elements and a gradient background
const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Animation sequence for the hero elements
  useEffect(() => {
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const button = buttonRef.current;

    if (heading && subheading && button) {
      heading.classList.add('animate-fade-in');
      setTimeout(() => {
        subheading.classList.add('animate-fade-in');
      }, 300);
      setTimeout(() => {
        button.classList.add('animate-fade-in');
      }, 600);
    }
  }, []);

  // Smooth scrolling to the services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-centre overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>

      {/* Content container */}
      <div className="container mx-auto px-4 text-centre relative z-10">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-bold mb-6 text-white opacity-0"
        >
          Crafting Digital <span className="text-yellow-200">Experiences</span>
        </h1>

        <p
          ref={subheadingRef}
          className="text-xl md:text-2xl mb-10 text-white opacity-0 max-w-2xl mx-auto"
        >
          Web Developer & Digital Designer based in the UK
        </p>

        <div ref={buttonRef} className="opacity-0">
          <Button
            onClick={scrollToServices}
            size="lg"
            className="bg-agency-orange hover:bg-orange-500 text-white px-8 py-6 text-lg rounded-md transition-all transform hover:scale-105"
          >
            View My Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useState, useEffect } from 'react';

// Navigation bar component that adapts its style based on scroll position
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to track scrolling and update navbar style
  useEffect(() => {
    const handleScroll = () => {
      // Apply scrolled styles when page is scrolled down
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo: Always visible on all screen sizes */}
        <a href="#" className="flex items-center">
          <img 
            src="/assets/newmi.png" 
            alt="Site Logo" 
            className="h-12 w-auto"
          />
        </a>
        
        {/* Desktop Navigation: Hidden on mobile */}
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-agency-dark-gray hover:text-agency-blue transition-colours">
            Services
          </a>
          <a href="#portfolio" className="text-agency-dark-gray hover:text-agency-blue transition-colours">
            Portfolio
          </a>
          <a href="#testimonials" className="text-agency-dark-gray hover:text-agency-blue transition-colours">
            Testimonials
          </a>
          <a href="#contact" className="text-agency-dark-gray hover:text-agency-blue transition-colours">
            Contact
          </a>
        </div>
        
        {/* Hamburger Button: Only visible on mobile */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-agency-dark-gray p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Hamburger icon: 3 lines */}
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown: Only visible when hamburger is open */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed top-[72px] left-0 right-0 bg-white shadow-lg z-40"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col items-center space-y-4">
            <a 
              href="#services" 
              className="text-agency-dark-gray hover:text-agency-blue transition-colours py-2 text-center w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className="text-agency-dark-gray hover:text-agency-blue transition-colours py-2 text-center w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#testimonials" 
              className="text-agency-dark-gray hover:text-agency-blue transition-colours py-2 text-center w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-agency-dark-gray hover:text-agency-blue transition-colours py-2 text-center w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

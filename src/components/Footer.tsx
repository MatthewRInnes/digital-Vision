
import { ArrowUp, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Footer component with social links and back-to-top button
const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="bg-agency-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">DigitalVision</h2>
            <p className="text-gray-300">Crafting digital experiences since 2023</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
          
          <Button 
            onClick={scrollToTop}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-3"
            size="icon"
          >
            <ArrowUp size={20} />
          </Button>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} DigitalVision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

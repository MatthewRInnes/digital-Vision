import { products } from '../data/products';
import { Button } from '@/components/ui/button';
import { Monitor, CreditCard, ShoppingBasket } from 'lucide-react';
import { useEffect, useRef } from 'react';

// Products/Services section component showcasing our digital solutions
const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Animate products when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { 
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px' // Adjust this value to trigger animation earlier
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Helper function to render the appropriate icon for each service
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'monitor':
        return <Monitor size={48} className="text-agency-blue" />;
      case 'business-card':
        return <CreditCard size={48} className="text-agency-blue" />;
      case 'shopping-basket':
        return <ShoppingBasket size={48} className="text-agency-blue" />;
      default:
        return null;
    }
  };
  
  return (
    <section id="services" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-agency-blue">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bespoke digital solutions crafted to elevate your brand and engage your audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="product-card bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 flex justify-center">
                {renderIcon(product.icon)}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-agency-blue">
                {product.name}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {product.description}
              </p>
              
              <p className="text-xl font-semibold mb-6 text-agency-orange">
                {product.price}
              </p>
              
              <Button 
                className="w-full bg-agency-blue hover:bg-blue-700 text-white"
              >
                {product.ctaText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

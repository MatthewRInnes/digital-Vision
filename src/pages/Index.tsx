/**
 * Main Index Page
 * 
 * The primary landing page of the portfolio website.
 * Composes all major sections of the site into a single cohesive layout.
 * Includes navigation, hero section, counters, products, portfolio slider,
 * testimonials, contact form, and footer.
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Counters from "@/components/Counters";
import Products from "@/components/Products";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

// Main index page assembling all sections of the portfolio site
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation bar for site navigation */}
      <Navbar />
      
      {/* Hero section with main call-to-action */}
      <Hero />
      
      {/* Animated counters displaying key statistics */}
      <Counters />
      
      {/* Products and services showcase */}
      <Products />
      
      {/* Portfolio slider with project examples */}
      <Slider />
      
      {/* Customer testimonials section */}
      <Testimonials />
      
      {/* Contact form for enquiries */}
      <ContactForm />
      
      {/* Footer with additional links and information */}
      <Footer />
    </div>
  );
};

export default Index;

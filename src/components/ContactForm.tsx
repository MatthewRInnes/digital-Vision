
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

// Contact form component with validation
const ContactForm = () => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Validation state
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  
  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Animate form on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        formRef.current?.classList.add('animate-fade-in');
      }
    }, { threshold: 0.2 });
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);
  
  // Validate email format
  const isValidEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  
  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    
    // Validate name
    if (name.trim() === '') {
      setNameError('Please enter your name');
      isValid = false;
    } else {
      setNameError('');
    }
    
    // Validate email
    if (email.trim() === '') {
      setEmailError('Please enter your email address');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }
    
    // Validate message
    if (message.trim() === '') {
      setMessageError('Please enter your message');
      isValid = false;
    } else {
      setMessageError('');
    }
    
    return isValid;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
        setIsSubmitting(false);
        
        // Show success toast
        toast({
          title: "Message sent!",
          description: "Cheers! We'll be in touch shortly.",
        });
      }, 1500);
    }
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-agency-blue">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your digital journey? Send us a message and we'll get back to you.
          </p>
        </div>
        
        <div 
          ref={formRef}
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 opacity-0"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={`${nameError ? 'border-red-500' : ''}`}
              />
              {nameError && (
                <p className="mt-1 text-sm text-red-500">{nameError}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className={`${emailError ? 'border-red-500' : ''}`}
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-500">{emailError}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message here..."
                rows={5}
                className={`${messageError ? 'border-red-500' : ''}`}
              />
              {messageError && (
                <p className="mt-1 text-sm text-red-500">{messageError}</p>
              )}
            </div>
            
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-agency-blue hover:bg-blue-700 text-white py-3 flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

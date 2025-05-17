/**
 * Testimonials Data Module
 * 
 * Defines the data structure and mock data for customer testimonials.
 * Each testimonial represents a customer review with associated details.
 * Used to display social proof and build trust with potential clients.
 */

// Define types for our testimonials data
export interface Testimonial {
  id: number;      // Unique identifier for each testimonial
  name: string;    // Customer's full name
  role: string;    // Customer's role or position
  image: string;   // Path to customer's profile image
  review: string;  // Customer's testimonial text
}

// Mock data for testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mark Johnson",
    role: "Freelancer",
    image: "/placeholder.svg",
    review: "Exceptional service and top-tier design. Highly recommended!"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Small Business Owner",
    image: "/placeholder.svg",
    review: "Their team transformed our online presence. The website they created has significantly increased our customer engagement."
  },
  {
    id: 3,
    name: "James Thompson",
    role: "Marketing Director",
    image: "/placeholder.svg",
    review: "Professional, responsive, and incredibly talented. Our new branding looks brilliant!"
  },
  {
    id: 4,
    name: "Emma Davies",
    role: "Startup Founder",
    image: "/placeholder.svg",
    review: "Brilliant work on our logo and website. They understood our vision perfectly."
  }
];

/**
 * Products Data Module
 * 
 * Defines the data structure and mock data for products and services offered.
 * Each product represents a service or offering with pricing and call-to-action details.
 * Used to display available services and encourage customer engagement.
 */

// Define types for our products data
export interface Product {
  id: number;          // Unique identifier for each product
  name: string;        // Name of the product or service
  description: string; // Brief description of the offering
  price: string;       // Price range or starting price
  icon: string;        // Icon identifier for visual representation
  ctaText: string;     // Call-to-action text for the product
}

// Mock data for products/services
export const products: Product[] = [
  {
    id: 1,
    name: "Websites",
    description: "Modern, mobile-first websites tailored for your brand.",
    price: "From £499",
    icon: "monitor",
    ctaText: "Enquire Now"
  },
  {
    id: 2,
    name: "Business Cards",
    description: "Elegant, custom business cards to leave a lasting impression.",
    price: "From £59",
    icon: "business-card", 
    ctaText: "Get a Quote"
  },
  {
    id: 3,
    name: "Other Digital Products",
    description: "Logos, social media graphics, e-books and more.",
    price: "From £99",
    icon: "shopping-basket",
    ctaText: "Discover More"
  }
];

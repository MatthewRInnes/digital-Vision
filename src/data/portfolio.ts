/**
 * Portfolio Data Module
 * 
 * Defines the data structure and mock data for portfolio/slider items.
 * Each portfolio item represents a project or case study with associated details.
 * Used to showcase previous work and project examples in a carousel format.
 */

// Define types for our portfolio/slider data
export interface PortfolioItem {
  id: number;          // Unique identifier for each portfolio item
  title: string;       // Project title or name
  description: string; // Brief description of the project
  image: string;       // Path to the project's featured image
}

// Mock data for portfolio items
export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A modern online shop with seamless checkout experience",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Corporate Branding",
    description: "Complete rebrand for a financial services company",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Mobile App Design",
    description: "UI/UX design for a fitness tracking application",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Marketing Campaign",
    description: "Integrated digital marketing for product launch",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Restaurant Website",
    description: "Responsive website with online booking system",
    image: "/placeholder.svg"
  }
];

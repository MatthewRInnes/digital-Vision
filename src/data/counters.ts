/**
 * Counters Data Module
 * 
 * Defines the data structure and mock data for achievement counters displayed on the website.
 * Each counter represents a key metric or achievement with an associated icon.
 * Used to showcase important statistics and milestones.
 */

// Define types for our counter data
export interface Counter {
  id: number;      // Unique identifier for each counter
  title: string;   // Display title of the counter
  count: number;   // Numerical value to be displayed
  icon: string;    // Icon identifier for visual representation
}

// Mock data for counters
export const counters: Counter[] = [
  {
    id: 1,
    title: "Coffees Drank",
    count: 100,
    icon: "coffee"
  },
  {
    id: 2,
    title: "Hours Studied",
    count: 1000,
    icon: "book"
  },
  {
    id: 3,
    title: "Happy Customers",
    count: 100,
    icon: "smile"
  }
];

/**
 * Utility Functions
 * 
 * A collection of utility functions for common operations.
 * Currently includes a class name merging utility that combines Tailwind CSS classes
 * with custom classes while handling conflicts appropriately.
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names into a single string, handling Tailwind CSS class conflicts.
 * Uses clsx for conditional class names and tailwind-merge for resolving Tailwind conflicts.
 * 
 * @param inputs - Array of class names or class name objects
 * @returns Merged class name string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

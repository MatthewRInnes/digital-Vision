/**
 * Application Entry Point
 * 
 * The main entry point for the React application.
 * Initialises the root React component and renders it into the DOM.
 * Imports global styles and the main App component.
 */

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create and render the root React component
createRoot(document.getElementById("root")!).render(<App />);

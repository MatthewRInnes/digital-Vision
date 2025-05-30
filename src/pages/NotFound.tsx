/**
 * 404 Not Found Page
 * 
 * A custom error page displayed when users attempt to access non-existent routes.
 * Includes error logging for monitoring invalid route access attempts.
 * Provides a clear way for users to return to the home page.
 */

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  // Get the current location for error logging
  const location = useLocation();

  // Log the 404 error when the component mounts
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

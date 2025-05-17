/**
 * Mobile Detection Hook
 * 
 * A custom React hook for detecting mobile devices based on screen width.
 * Uses a breakpoint of 768px to determine if the current viewport is mobile.
 * Provides real-time updates when the viewport size changes.
 */

import * as React from "react"

// Define the breakpoint for mobile devices (in pixels)
const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // State to track whether the current viewport is mobile
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Create a media query listener for the mobile breakpoint
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Handler for viewport size changes
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Add event listener and set initial state
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Cleanup: remove event listener on unmount
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

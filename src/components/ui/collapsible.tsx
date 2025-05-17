/**
 * Collapsible Components
 * 
 * A collection of components for creating expandable/collapsible sections.
 * Built using Radix UI's Collapsible primitive with additional styling.
 * Supports animations, keyboard navigation, and custom styling.
 */
import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

import { cn } from "@/lib/utils"

// Collapsible component for creating expandable sections
const Collapsible = CollapsiblePrimitive.Root

// Collapsible trigger component for toggling content
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

// Collapsible content component for expandable content
const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleContent
    ref={ref}
    className={cn(
      "data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden",
      className
    )}
    {...props}
  />
))
CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName

export { Collapsible, CollapsibleTrigger, CollapsibleContent }

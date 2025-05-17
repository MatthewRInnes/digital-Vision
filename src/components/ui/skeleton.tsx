/**
 * Skeleton Components
 * 
 * A collection of components for creating loading placeholders.
 * Built using Tailwind CSS animations for smooth loading states.
 * Supports custom styling, animations, and responsive layouts.
 */
import { cn } from "@/lib/utils"

// Skeleton component for creating loading placeholders
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }

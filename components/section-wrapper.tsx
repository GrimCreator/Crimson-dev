import { cn } from "@/lib/utils"
import type React from "react"

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function SectionWrapper({ children, className, ...props }: SectionWrapperProps) {
  return (
    <div
      className={cn(
        "mb-8 p-4 rounded-none border-2 lightning-border bg-klar-neon-black-bg/50 backdrop-blur-sm",
        "nuclear-glow animate-electric-pulse smooth-transition",
        "hover:bg-klar-neon-black-bg/70 hover:border-klar-neon-white",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

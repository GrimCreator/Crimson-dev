"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Book, ExternalLink, Play, ArrowRight } from "lucide-react"
import type React from "react"

interface TutorialCardProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: "video" | "book"
  title: string
  linkText: string
  external?: boolean
  onCardClick?: () => void
}

export function TutorialCard({ icon, title, linkText, external, onCardClick, className, ...props }: TutorialCardProps) {
  const iconComponent =
    icon === "video" ? (
      <Play className="w-6 h-6 text-klar-neon-white edgy-transition group-hover:scale-125 group-hover:rotate-12 neon-text" />
    ) : (
      <Book className="w-6 h-6 text-klar-neon-white edgy-transition group-hover:scale-125 group-hover:-rotate-12 neon-text" />
    )

  return (
    <Button
      className={cn(
        "group flex flex-col items-start justify-center gap-2 p-4 h-32 rounded-none w-full",
        "border-2 lightning-border bg-klar-neon-black-bg nuclear-glow",
        "aggressive-hover brutal-hover",
        "hover:border-klar-neon-white hover:bg-klar-neon-black-bg/60",
        "active:scale-90 active:-rotate-1",
        "animate-electric-pulse",
        className,
      )}
      variant="ghost"
      onClick={onCardClick}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="animate-aggressive-float">{iconComponent}</div>
        <span className="text-klar-neon-white text-lg font-bold edgy-transition group-hover:text-white neon-text animate-neon-flicker">
          {title}
        </span>
      </div>
      <div
        className={cn(
          "flex items-center gap-1 text-sm text-klar-neon-white edgy-transition group-hover:text-white neon-text",
        )}
      >
        {linkText}
        {external ? (
          <ExternalLink className="w-4 h-4 edgy-transition group-hover:scale-125 group-hover:rotate-45" />
        ) : (
          <ArrowRight className="w-4 h-4 edgy-transition group-hover:translate-x-2 group-hover:scale-125" />
        )}
      </div>
    </Button>
  )
}

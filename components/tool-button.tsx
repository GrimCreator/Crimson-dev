import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Bell, Cookie, ShoppingCart, MessageSquare } from "lucide-react"
import type React from "react"

interface ToolButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: "bell" | "cookie" | "cart" | "message"
  title: string
}

export function ToolButton({ icon, title, className, ...props }: ToolButtonProps) {
  const iconComponent =
    icon === "bell" ? (
      <Bell className="w-6 h-6 text-crimson-neon-red edgy-transition group-hover:scale-125 group-hover:rotate-12 group-hover:animate-pulse neon-text" />
    ) : icon === "cookie" ? (
      <Cookie className="w-6 h-6 text-crimson-neon-red edgy-transition group-hover:scale-125 group-hover:rotate-45 neon-text" />
    ) : icon === "cart" ? (
      <ShoppingCart className="w-6 h-6 text-crimson-neon-red edgy-transition group-hover:scale-125 group-hover:-rotate-12 neon-text" />
    ) : (
      <MessageSquare className="w-6 h-6 text-crimson-neon-red edgy-transition group-hover:scale-125 group-hover:rotate-12 neon-text" />
    )

  return (
    <Button
      className={cn(
        "group flex flex-col items-center justify-center gap-2 p-4 h-32 w-full rounded-none",
        "border-2 lightning-border bg-klar-neon-black-bg nuclear-glow",
        "aggressive-hover brutal-hover",
        "hover:border-crimson-neon-red hover:bg-klar-neon-black-bg/60",
        "active:scale-90 active:rotate-2",
        "animate-electric-pulse",
        className,
      )}
      variant="ghost"
      {...props}
    >
      <div className="animate-aggressive-float">{iconComponent}</div>
      <span className="text-crimson-neon-red text-sm font-bold text-center edgy-transition group-hover:text-crimson-neon-red neon-text animate-neon-flicker">
        {title}
      </span>
    </Button>
  )
}

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link, RefreshCcw } from "lucide-react"
import type React from "react"

interface GeneratorCardProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: "link" | "hyperlink"
  title: string
}

export function GeneratorCard({ icon, title, className, ...props }: GeneratorCardProps) {
  const iconComponent =
    icon === "link" ? (
      <Link className="w-8 h-8 text-crimson-neon-red edgy-transition group-hover:scale-125 group-hover:rotate-12 neon-text" />
    ) : (
      <RefreshCcw className="w-8 h-8 text-crimson-neon-red edgy-transition group-hover:scale-125 group-hover:rotate-[360deg] neon-text" />
    )

  // Determine the href based on the title
  let href = "#" // Default href
  if (title === "Link Generator") {
    href = "https://app.genn.lu/auth/CrimsonBeams"
  } else if (title === "Hyperlink") {
    href = "https://crimson-hyperlink.vercel.app"
  }

  const openInNewTab = href !== "#" // Open in new tab if it's a real link

  return (
    <Button
      asChild
      className={cn(
        "group flex flex-col items-center justify-center gap-2 p-4 h-32 rounded-none",
        "border-2 lightning-border bg-klar-neon-black-bg nuclear-glow",
        "aggressive-hover brutal-hover",
        "hover:border-crimson-neon-red hover:bg-klar-neon-black-bg/60",
        "active:scale-90 active:rotate-1",
        "animate-electric-pulse",
        className,
      )}
      variant="ghost"
      {...props}
    >
      <a
        href={href}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        className="flex flex-col items-center justify-center gap-2 w-full h-full"
      >
        <div className="animate-aggressive-float">{iconComponent}</div>
        <span className="text-crimson-neon-red text-lg font-bold edgy-transition group-hover:text-crimson-neon-red neon-text animate-neon-flicker">
          {title}
        </span>
      </a>
    </Button>
  )
}

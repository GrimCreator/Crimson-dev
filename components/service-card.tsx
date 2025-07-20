import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Scissors, ArrowRight, DollarSign } from "lucide-react"
import type React from "react"

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  buttonText: string
  icon: "scissors" | "dollar"
}

export function ServiceCard({ title, description, buttonText, icon, className, ...props }: ServiceCardProps) {
  const buttonIcon = icon === "scissors" ? <Scissors className="w-5 h-5" /> : <DollarSign className="w-5 h-5" />

  return (
    <div
      className={cn(
        "flex flex-col items-start justify-center gap-4 p-4 rounded-none w-full", // Edgy: remove rounded corners
        "border border-klar-neon-border bg-klar-neon-black-bg shadow-klar-glow",
        "transition-all duration-300",
        className,
      )}
      {...props}
    >
      <h3 className="text-klar-neon-white text-xl font-bold flex items-center gap-2">
        {icon === "scissors" ? (
          <>
            <span className="text-klar-neon-white">
              <video className="inline-block w-6 h-6" autoPlay loop muted playsInline>
                <source src="/placeholder.svg?height=24&width=24" type="image/svg+xml" />
              </video>
            </span>
            {title}
            <span className="text-klar-neon-white">
              <video className="inline-block w-6 h-6" autoPlay loop muted playsInline>
                <source src="/placeholder.svg?height=24&width=24" type="image/svg+xml" />
              </video>
            </span>
          </>
        ) : (
          <>
            <span className="text-klar-neon-white">$</span>
            {title}
            <span className="text-klar-neon-white">$</span>
          </>
        )}
      </h3>
      <p className="text-klar-gray text-sm">{description}</p>
      <Button
        className={cn(
          "w-full bg-klar-neon-white text-klar-dark py-6 rounded-none hover:bg-klar-neon-white/80 transition-colors duration-300", // Edgy: remove rounded corners
          "shadow-klar-glow hover:shadow-klar-glow-hover flex items-center justify-center gap-2", // Updated hover glow
        )}
      >
        {buttonIcon}
        {buttonText}
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  )
}

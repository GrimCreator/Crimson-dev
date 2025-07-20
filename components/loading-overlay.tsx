"use client"

import { useEffect, useState } from "react"
import { Check, Star } from "lucide-react"

interface LoadingOverlayProps {
  isVisible: boolean
  onComplete: () => void
}

export function LoadingOverlay({ isVisible, onComplete }: LoadingOverlayProps) {
  const [stage, setStage] = useState<"loading" | "success" | "complete">("loading")

  useEffect(() => {
    if (!isVisible) return

    const timer1 = setTimeout(() => {
      setStage("success")
    }, 2000)

    const timer2 = setTimeout(() => {
      setStage("complete")
      onComplete()
    }, 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [isVisible, onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        {/* Loading Stage */}
        {stage === "loading" && (
          <div className="flex flex-col items-center gap-6 fade-in-up">
            <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            <div className="text-white text-xl font-bold loading-shimmer">Loading...</div>
          </div>
        )}

        {/* Success Stage */}
        {stage === "success" && (
          <div className="flex flex-col items-center gap-6 scale-in">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center nuclear-glow animate-intense-pulse-glow">
              <Check className="w-10 h-10 text-white animate-aggressive-float" />
            </div>
            <div className="text-white text-xl font-bold neon-text animate-neon-flicker">Success!</div>
          </div>
        )}

        {/* Complete Stage */}
        {stage === "complete" && (
          <div className="flex flex-col items-center gap-6 scale-in">
            <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center plasma-glow animate-electric-pulse">
              <Star className="w-12 h-12 text-white fill-white animate-aggressive-float" />
            </div>
            <div className="text-white text-2xl font-bold neon-text animate-neon-flicker">Welcome!</div>
          </div>
        )}
      </div>
    </div>
  )
}

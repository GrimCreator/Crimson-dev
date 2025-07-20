"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { PocketKnifeIcon as Knife, Users, Star, Download, Clock, CheckCircle, Zap } from "lucide-react"
import type React from "react"

interface MethodListItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void
}

export function MethodListItem({ onClick, className, ...props }: MethodListItemProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-start p-4 h-auto rounded-none w-full text-left",
        "border border-klar-neon-border bg-klar-neon-black-bg shadow-klar-glow hover:shadow-klar-glow-hover",
        "transition-all duration-300",
        className,
      )}
      variant="ghost"
      {...props}
    >
      {/* Top Badges and Icon */}
      <div className="flex items-center justify-between w-full mb-2">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full bg-klar-neon-white/10 flex items-center justify-center border border-klar-neon-border">
            <Knife className="w-6 h-6 text-klar-neon-white" />
            <Badge className="absolute -top-1 -right-1 bg-klar-neon-white text-klar-dark text-[0.6rem] font-bold px-1 py-0.5 rounded-none">
              NEW
            </Badge>
          </div>
        </div>
        <Badge className="bg-klar-neon-white/20 text-klar-neon-white text-xs font-bold px-2 py-1 rounded-none border border-klar-neon-border flex items-center gap-1">
          <Users className="w-3 h-3" />
          social
        </Badge>
      </div>

      {/* Title and Description */}
      <h3 className="text-klar-neon-white text-xl font-bold mb-1">MM2 Method</h3>
      <p className="text-klar-gray text-sm mb-4">
        Game-specific approach targeting Murder Mystery 2 players through exclusive item offers and trading scams...
      </p>

      {/* Effectiveness */}
      <div className="flex items-center gap-2 mb-2">
        <Zap className="w-4 h-4 text-klar-neon-white" />
        <span className="text-klar-neon-white text-sm font-medium">Effectiveness:</span>
        <div className="flex items-center ml-1">
          {[...Array(3)].map((_, i) => (
            <Star key={`filled-${i}`} className="w-4 h-4 text-klar-neon-white fill-klar-neon-white" />
          ))}
          {[...Array(2)].map((_, i) => (
            <Star key={`empty-${i}`} className="w-4 h-4 text-klar-neon-white" />
          ))}
          <span className="text-klar-gray text-sm ml-1">(3.0)</span>
        </div>
      </div>

      {/* Success Rate */}
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-4 h-4 text-klar-neon-white" />
        <span className="text-klar-neon-white text-sm font-medium">Success Rate:</span>
        <Badge className="bg-klar-neon-white/20 text-klar-neon-white text-xs font-bold px-2 py-1 rounded-none border border-klar-neon-border">
          50-65%
        </Badge>
      </div>

      {/* Key Features */}
      <div className="mb-4 w-full">
        <span className="text-klar-neon-white text-sm font-medium flex items-center gap-1 mb-2">
          <CheckCircle className="w-4 h-4 text-klar-neon-white" /> Key Features:
        </span>
        <ul className="text-klar-gray text-sm space-y-1 list-none pl-0">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-klar-neon-white rounded-full flex-shrink-0"></span>MM2 server targeting
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-klar-neon-white rounded-full flex-shrink-0"></span>Rare item bait tactics
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-klar-neon-white rounded-full flex-shrink-0"></span>+ 4 more features
          </li>
        </ul>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge className="bg-klar-neon-white/20 text-klar-neon-white text-xs font-bold px-2 py-1 rounded-none border border-klar-neon-border">
          mm2
        </Badge>
        <Badge className="bg-klar-neon-white/20 text-klar-neon-white text-xs font-bold px-2 py-1 rounded-none border border-klar-neon-border">
          game-specific
        </Badge>
        <Badge className="bg-klar-neon-white/20 text-klar-neon-white text-xs font-bold px-2 py-1 rounded-none border border-klar-neon-border">
          trading
        </Badge>
        <Badge className="bg-klar-neon-white/20 text-klar-neon-white text-xs font-bold px-2 py-1 rounded-none border border-klar-neon-border">
          +1
        </Badge>
      </div>

      {/* Downloads and Date */}
      <div className="flex items-center justify-between w-full text-klar-gray text-xs">
        <div className="flex items-center gap-1">
          <Download className="w-3 h-3 text-klar-neon-white" />
          8,432
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-klar-neon-white" />
          08/04/2025
          <Badge className="bg-klar-neon-white text-klar-dark text-[0.6rem] font-bold px-1 py-0.5 rounded-none ml-1">
            beginner
          </Badge>
        </div>
      </div>
    </Button>
  )
}

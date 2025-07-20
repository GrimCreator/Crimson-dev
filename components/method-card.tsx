"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  Users,
  Star,
  Download,
  Clock,
  CheckCircle,
  Zap,
  Bolt,
  Flame,
  DollarSign,
  PawPrint,
  UserPlus,
  Home,
  Lock,
  Headphones,
  Monitor,
} from "lucide-react"
import type React from "react"

// Define types for structured method content
export type MethodContentBlock = {
  type: "paragraph" | "list" | "numbered-list" | "heading" | "tip" | "warning" | "credits"
  text?: string
  items?: string[]
  title?: string
  icon?: "check" | "info" | "lightbulb" | "alert-triangle" | "number"
}

// Define a type for the method data
export type Method = {
  id: string
  title: string
  description: string
  icon: "bolt" | "flame" | "dollar" | "paw" | "user-plus" | "home" | "lock" | "headphones" | "monitor"
  category: string
  isNew?: boolean
  effectivenessRating: number
  successRate: string
  keyFeatures: string[]
  tags: string[]
  downloads: number
  difficulty: "beginner" | "intermediate" | "advanced"
  author?: string
  dateAdded: string
  content?: MethodContentBlock[]
  credits?: string
}

interface MethodCardProps extends React.HTMLAttributes<HTMLButtonElement> {
  method: Method
  onClick: (method: Method) => void
}

export function MethodCard({ method, onClick, className, ...props }: MethodCardProps) {
  const IconComponent =
    method.icon === "lock"
      ? Lock
      : method.icon === "headphones"
        ? Headphones
        : method.icon === "monitor"
          ? Monitor
          : method.icon === "bolt"
            ? Bolt
            : method.icon === "flame"
              ? Flame
              : method.icon === "dollar"
                ? DollarSign
                : method.icon === "paw"
                  ? PawPrint
                  : method.icon === "user-plus"
                    ? UserPlus
                    : Home

  return (
    <Button
      onClick={() => onClick(method)}
      className={cn(
        "group relative flex flex-col items-start p-4 h-auto rounded-none w-full text-left",
        "border-2 lightning-border bg-klar-neon-black-bg nuclear-glow",
        "aggressive-hover brutal-hover",
        "hover:border-klar-neon-white hover:bg-klar-neon-black-bg/60",
        "active:scale-95 active:rotate-1",
        "animate-electric-pulse",
        className,
      )}
      variant="ghost"
      {...props}
    >
      {/* Top Badges and Icon */}
      <div className="flex items-center justify-between w-full mb-2">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full bg-klar-neon-white/10 flex items-center justify-center border-2 lightning-border nuclear-glow animate-aggressive-float">
            <IconComponent className="w-6 h-6 text-klar-neon-white neon-text edgy-transition group-hover:scale-125 group-hover:rotate-12" />
            {method.isNew && (
              <Badge className="absolute -top-1 -right-1 bg-klar-neon-white text-klar-dark text-[0.6rem] font-bold px-1 py-0.5 rounded-none animate-intense-pulse-glow">
                NEW
              </Badge>
            )}
          </div>
        </div>
        <Badge className="bg-klar-neon-white/20 text-klar-neon-white text-xs font-bold px-2 py-1 rounded-none border-2 lightning-border flex items-center gap-1 nuclear-glow">
          {method.category === "social" && <Users className="w-3 h-3 animate-aggressive-float" />}
          {method.category === "technical" && <Zap className="w-3 h-3 animate-aggressive-float" />}
          {method.category}
        </Badge>
      </div>

      {/* Title and Description */}
      <h3 className="text-klar-neon-white text-xl font-bold mb-1 neon-text animate-neon-flicker edgy-transition group-hover:text-white group-hover:scale-105">
        {method.title}
      </h3>
      <p className="text-klar-gray text-sm mb-4 edgy-transition group-hover:text-klar-neon-white">
        {method.description}
      </p>

      {/* Effectiveness */}
      <div className="flex items-center gap-2 mb-2">
        <Zap className="w-4 h-4 text-klar-neon-white neon-text animate-aggressive-float" />
        <span className="text-klar-neon-white text-sm font-medium neon-text">Effectiveness:</span>
        <div className="flex items-center ml-1">
          {[...Array(Math.floor(method.effectivenessRating))].map((_, i) => (
            <Star
              key={`filled-${i}`}
              className="w-4 h-4 text-klar-neon-white fill-klar-neon-white neon-text animate-aggressive-float"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
          {[...Array(5 - Math.floor(method.effectivenessRating))].map((_, i) => (
            <Star key={`empty-${i}`} className="w-4 h-4 text-klar-neon-white neon-text" />
          ))}
          <span className="text-klar-gray text-sm ml-1 edgy-transition group-hover:text-klar-neon-white">
            ({method.effectivenessRating.toFixed(1)})
          </span>
        </div>
      </div>

      {/* Success Rate */}
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-4 h-4 text-klar-neon-white neon-text animate-aggressive-float" />
        <span className="text-klar-neon-white text-sm font-medium neon-text">Success Rate:</span>
        <Badge className="bg-klar-neon-white/20 text-klar-neon-white text-xs font-bold px-2 py-1 rounded-none border lightning-border nuclear-glow animate-intense-pulse-glow">
          {method.successRate}
        </Badge>
      </div>

      {/* Key Features */}
      <div className="mb-4 w-full">
        <span className="text-klar-neon-white text-sm font-medium flex items-center gap-1 mb-2 neon-text">
          <CheckCircle className="w-4 h-4 text-klar-neon-white animate-aggressive-float" /> Key Features:
        </span>
        <ul className="text-klar-gray text-sm space-y-1 list-none pl-0">
          {method.keyFeatures.slice(0, 2).map((feature, index) => (
            <li key={index} className="flex items-center gap-2 edgy-transition group-hover:text-klar-neon-white">
              <span className="w-1.5 h-1.5 bg-klar-neon-white rounded-full flex-shrink-0 nuclear-glow animate-electric-pulse"></span>
              {feature}
            </li>
          ))}
          {method.keyFeatures.length > 2 && (
            <li className="flex items-center gap-2 edgy-transition group-hover:text-klar-neon-white">
              <span className="w-1.5 h-1.5 bg-klar-neon-white rounded-full flex-shrink-0 nuclear-glow animate-electric-pulse"></span>
              + {method.keyFeatures.length - 2} more features
            </li>
          )}
        </ul>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {method.tags.slice(0, 3).map((tag, index) => (
          <Badge
            key={index}
            className="bg-klar-neon-white/20 text-klar-neon-white text-xs font-bold px-2 py-1 rounded-none border lightning-border nuclear-glow animate-electric-pulse"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {tag}
          </Badge>
        ))}
        {method.tags.length > 3 && (
          <Badge className="bg-klar-neon-white/20 text-klar-neon-white text-xs font-bold px-2 py-1 rounded-none border lightning-border nuclear-glow animate-intense-pulse-glow">
            +{method.tags.length - 3}
          </Badge>
        )}
      </div>

      {/* Downloads and Date */}
      <div className="flex items-center justify-between w-full text-klar-gray text-xs">
        <div className="flex items-center gap-1 edgy-transition group-hover:text-klar-neon-white">
          <Download className="w-3 h-3 text-klar-neon-white neon-text animate-aggressive-float" />
          {method.downloads.toLocaleString()}
        </div>
        <div className="flex items-center gap-1 edgy-transition group-hover:text-klar-neon-white">
          <Clock className="w-3 h-3 text-klar-neon-white neon-text animate-aggressive-float" />
          {method.dateAdded}
          <Badge className="bg-klar-neon-white text-klar-dark text-[0.6rem] font-bold px-1 py-0.5 rounded-none ml-1 nuclear-glow animate-electric-pulse">
            {method.difficulty}
          </Badge>
        </div>
      </div>
    </Button>
  )
}

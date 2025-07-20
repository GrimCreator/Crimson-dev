"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Info, Star, Download, Play, X, Zap, Pencil, List, Lightbulb, CheckCircle, AlertTriangle } from "lucide-react"
import type { Method, MethodContentBlock } from "./method-card" // Import Method and MethodContentBlock types

interface MethodDetailDialogProps {
  isOpen: boolean
  onClose: () => void
  method: Method | null // Now accepts a Method object
}

export function MethodDetailDialog({ isOpen, onClose, method }: MethodDetailDialogProps) {
  if (!method) return null // Don't render if no method is provided

  const renderContentBlock = (block: MethodContentBlock, index: number) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={index} className="text-klar-gray text-sm">
            {block.text}
          </p>
        )
      case "heading":
        const HeadingIcon =
          block.icon === "check"
            ? CheckCircle
            : block.icon === "info"
              ? Info
              : block.icon === "lightbulb"
                ? Lightbulb
                : block.icon === "alert-triangle"
                  ? AlertTriangle
                  : null
        return (
          <h3 key={index} className="text-crimson-neon-red text-lg font-bold flex items-center gap-2 mt-4">
            {HeadingIcon && <HeadingIcon className="w-5 h-5" />}
            {block.title}
          </h3>
        )
      case "list":
        return (
          <ul key={index} className="text-klar-gray text-sm space-y-1 list-none pl-0">
            {block.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-crimson-neon-red mt-1 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )
      case "numbered-list":
        return (
          <ol key={index} className="text-klar-gray text-sm space-y-1 list-decimal list-inside">
            {block.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-crimson-neon-red font-bold">{i + 1}.</span> {item}
              </li>
            ))}
          </ol>
        )
      case "tip":
        return (
          <div
            key={index}
            className="p-3 border border-klar-neon-border bg-klar-neon-black-bg/50 rounded-none shadow-klar-inner-glow mt-4"
          >
            <h4 className="text-crimson-neon-red text-base font-bold flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5" />
              {block.title}
            </h4>
            <ul className="text-klar-gray text-sm space-y-1 list-disc list-inside">
              {block.items?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )
      case "warning":
        return (
          <div
            key={index}
            className="p-3 border border-klar-neon-border bg-klar-neon-black-bg/50 rounded-none shadow-klar-inner-glow mt-4"
          >
            <h4 className="text-crimson-neon-red text-base font-bold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              {block.title}
            </h4>
            <ul className="text-klar-gray text-sm space-y-1 list-disc list-inside">
              {block.items?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )
      case "credits":
        return (
          <p key={index} className="text-klar-gray text-xs text-right mt-4">
            {block.text}
          </p>
        )
      default:
        return null
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "w-full max-w-md md:max-w-lg lg:max-w-xl p-0 border border-klar-neon-border bg-klar-neon-black-bg shadow-klar-glow",
          "rounded-none overflow-hidden", // Edgy: remove rounded corners
        )}
      >
        {/* DialogTitle as a direct child of DialogContent for accessibility */}
        <DialogTitle className="sr-only">{method.title}</DialogTitle>

        {/* Custom Header for visual elements and close button */}
        <div className="p-4 border-b border-klar-neon-border flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Pencil className="w-6 h-6 text-crimson-neon-red" />
            <span className="text-crimson-neon-red text-xl font-bold">{method.title}</span> {/* Visible title */}
            {method.isNew && (
              <Badge className="bg-crimson-neon-red text-klar-dark text-xs font-bold px-2 py-1 rounded-none">New</Badge>
            )}
            {method.title.includes("(OP)") && (
              <Badge className="bg-crimson-neon-red text-klar-dark text-xs font-bold px-2 py-1 rounded-none">OP</Badge>
            )}
          </div>
          <Button
            variant="ghost"
            onClick={onClose}
            className="p-2 rounded-none text-crimson-neon-red hover:bg-klar-neon-black-bg/50"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-4 space-y-6 overflow-y-auto max-h-[80vh] method-dialog-scrollbar">
          {/* Information Section - Only if content is not provided */}
          {!method.content && (
            <div className="space-y-2">
              <h3 className="text-crimson-neon-red text-lg font-bold flex items-center gap-2">
                <Info className="w-5 h-5" />
                Information
              </h3>
              <div className="text-klar-gray text-sm space-y-1">
                {method.author && (
                  <p>
                    <strong className="text-crimson-neon-red">Author:</strong> {method.author}
                  </p>
                )}
                <p>
                  <strong className="text-crimson-neon-red">Downloads:</strong> {method.downloads.toLocaleString()}
                </p>
                <p className="flex items-center gap-1">
                  <strong className="text-crimson-neon-red">Rating:</strong> {method.effectivenessRating.toFixed(1)}{" "}
                  {[...Array(5)].map(
                    (
                      _,
                      i, // Always show 5 stars for rating
                    ) => (
                      <Star key={i} className="w-4 h-4 text-crimson-neon-red fill-crimson-neon-red" />
                    ),
                  )}
                </p>
                <p>
                  <strong className="text-crimson-neon-red">Difficulty:</strong>{" "}
                  <span className="text-crimson-neon-red capitalize">{method.difficulty}</span>
                </p>
                <p>
                  <strong className="text-crimson-neon-red">Category:</strong>{" "}
                  <span className="text-crimson-neon-red capitalize">{method.category}</span>
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons - Only if content is not provided */}
          {!method.content && (
            <div className="flex flex-col gap-3">
              {/* Removed tutorialLink and downloadLink from Method type, assuming they are part of content now */}
              <Button
                className="w-full bg-crimson-neon-red text-klar-dark text-lg py-6 rounded-none hover:bg-crimson-neon-red/80 transition-colors duration-300
                       shadow-klar-glow hover:shadow-klar-glow-hover flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                View Tutorial
              </Button>
              <Button
                className="w-full bg-transparent text-crimson-neon-red text-lg py-6 rounded-none border border-klar-neon-border hover:bg-klar-neon-black-bg/50 transition-colors duration-300
                       shadow-klar-glow hover:shadow-klar-glow-hover flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Method
              </Button>
            </div>
          )}

          {/* Effectiveness Rating Section - Only if content is not provided */}
          {!method.content && (
            <div className="space-y-2">
              <h3 className="text-crimson-neon-red text-lg font-bold flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Effectiveness Rating
              </h3>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-crimson-neon-red fill-crimson-neon-red" />
                ))}
                <span className="text-klar-gray ml-2">5/5</span>
              </div>
              <Badge className="bg-crimson-neon-red text-klar-dark text-sm font-bold px-3 py-1 rounded-none">
                Success Rate: {method.successRate}
              </Badge>
            </div>
          )}

          {/* Features Section - Always render if keyFeatures exist */}
          {method.keyFeatures && method.keyFeatures.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-crimson-neon-red text-lg font-bold flex items-center gap-2">
                <List className="w-5 h-5" />
                Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-klar-gray text-sm">
                {method.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-crimson-neon-red mt-1 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dynamic Content Rendering */}
          {method.content && method.content.map((block, index) => renderContentBlock(block, index))}

          {/* Tags Section - Always render if tags exist */}
          {method.tags && method.tags.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-crimson-neon-red text-lg font-bold flex items-center gap-2">
                <Info className="w-5 h-5" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {method.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    className="bg-klar-neon-white/20 text-crimson-neon-red text-xs font-bold px-2 py-1 rounded-none border border-klar-neon-border"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {method.credits && <p className="text-klar-gray text-xs text-right mt-4">{method.credits}</p>}
        </div>
      </DialogContent>
    </Dialog>
  )
}

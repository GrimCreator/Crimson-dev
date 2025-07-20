"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge" // Assuming you have a Badge component
import { cn } from "@/lib/utils"
import { Info, Star, Download, Play, X, Zap, Pencil, List, Lightbulb } from "lucide-react"

interface Mm2MethodDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function Mm2MethodDialog({ isOpen, onClose }: Mm2MethodDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "w-full max-w-md md:max-w-lg lg:max-w-xl p-0 border border-klar-neon-border bg-klar-neon-black-bg shadow-klar-glow",
          "rounded-none overflow-hidden", // Edgy: remove rounded corners
        )}
      >
        <DialogHeader className="p-4 border-b border-klar-neon-border flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Pencil className="w-6 h-6 text-klar-neon-white" />
            <DialogTitle className="text-klar-white text-xl font-bold">MM2 Method</DialogTitle>
            <Badge
              className="bg-klar-neon-white text-klar-dark text-xs font-bold px-2 py-1 rounded-none" // Edgy: remove rounded corners
            >
              New
            </Badge>
          </div>
          <Button
            variant="ghost"
            onClick={onClose}
            className="p-2 rounded-none text-klar-neon-white hover:bg-klar-neon-black-bg/50"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </Button>
        </DialogHeader>

        <div className="p-4 space-y-6 overflow-y-auto max-h-[80vh] custom-scrollbar">
          {/* Information Section */}
          <div className="space-y-2">
            <h3 className="text-klar-neon-white text-lg font-bold flex items-center gap-2">
              <Info className="w-5 h-5" />
              Information
            </h3>
            <div className="text-klar-gray text-sm space-y-1">
              <p>
                <strong className="text-klar-white">Author:</strong>GameScammer
              </p>
              <p>
                <strong className="text-klar-white">Downloads:</strong> 8,432
              </p>
              <p className="flex items-center gap-1">
                <strong className="text-klar-white">Rating:</strong> 4.2{" "}
                <Star className="w-4 h-4 text-klar-neon-white fill-klar-neon-white" />
              </p>
              <p>
                <strong className="text-klar-white">Difficulty:</strong>{" "}
                <span className="text-klar-neon-white">Beginner</span>
              </p>
              <p>
                <strong className="text-klar-white">Category:</strong>{" "}
                <span className="text-klar-neon-white">Social</span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <Button
              className="w-full bg-klar-neon-white text-klar-dark text-lg py-6 rounded-none hover:bg-klar-neon-white/80 transition-colors duration-300
                         shadow-klar-glow hover:shadow-klar-glow-hover flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              View Tutorial
            </Button>
            <Button
              className="w-full bg-transparent text-klar-neon-white text-lg py-6 rounded-none border border-klar-neon-border hover:bg-klar-neon-black-bg/50 transition-colors duration-300
                         shadow-klar-glow hover:shadow-klar-glow-hover flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Method
            </Button>
          </div>

          {/* Effectiveness Rating Section */}
          <div className="space-y-2">
            <h3 className="text-klar-neon-white text-lg font-bold flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Effectiveness Rating
            </h3>
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-klar-neon-white fill-klar-neon-white" />
              ))}
              {[...Array(2)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-klar-neon-white" />
              ))}
              <span className="text-klar-gray ml-2">3/5</span>
            </div>
            <Badge
              className="bg-klar-neon-white text-klar-dark text-sm font-bold px-3 py-1 rounded-none" // Edgy: remove rounded corners
            >
              Success Rate: 50-65%
            </Badge>
          </div>

          {/* Features Section */}
          <div className="space-y-2">
            <h3 className="text-klar-neon-white text-lg font-bold flex items-center gap-2">
              <List className="w-5 h-5" />
              Features
            </h3>
            <ul className="text-klar-gray text-sm space-y-1 list-disc list-inside">
              <li>MM2 server targeting</li>
              <li>Rare item bait tactics</li>
              <li>Free godly item offers</li>
              <li>Mass messaging techniques</li>
              <li>Trading server optimization</li>
              <li>High-volume approach</li>
            </ul>
          </div>

          {/* Implementation Instructions Section */}
          <div className="space-y-2">
            <h3 className="text-klar-neon-white text-lg font-bold flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Implementation Instructions
            </h3>
            <p className="text-klar-gray text-sm">
              Deploy the MM2 method in Murder Mystery 2 trading servers following the detailed guide. Utilize the mass
              messaging approach and exclusive item offers to maximize engagement and conversion rates.
            </p>
          </div>

          {/* Tags Section (Optional, based on screenshot) */}
          <div className="space-y-2">
            <h3 className="text-klar-neon-white text-lg font-bold flex items-center gap-2">
              <Info className="w-5 h-5" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
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
                godly
              </Badge>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

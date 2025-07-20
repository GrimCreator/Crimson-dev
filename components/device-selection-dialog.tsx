"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { X, Smartphone, Monitor, Apple } from "lucide-react"

interface DeviceSelectionDialogProps {
  isOpen: boolean
  onClose: () => void
  tutorialType: "webhook" | "cookie" | null
  onDeviceSelect: (device: "ios" | "android" | "pc") => void
}

export function DeviceSelectionDialog({ isOpen, onClose, tutorialType, onDeviceSelect }: DeviceSelectionDialogProps) {
  const getTutorialTitle = () => {
    if (tutorialType === "webhook") return "HOW TO MAKE A WEBHOOK"
    if (tutorialType === "cookie") return "HOW TO COOKIE LOG"
    return "Tutorial"
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "w-full max-w-md p-0 border border-crimson-neon-red bg-crimson-black shadow-2xl",
          "rounded-none overflow-hidden", // Edgy: remove rounded corners
        )}
      >
        <DialogHeader className="p-6 border-b border-crimson-neon-red flex flex-row items-center justify-between">
          <div className="flex flex-col items-center w-full">
            <DialogTitle className="text-crimson-neon-red text-2xl font-bold text-center neon-text animate-neon-flicker">
              SELECT YOUR DEVICE
            </DialogTitle>
            <p className="text-crimson-gray text-sm mt-2 text-center">Choose your device for {getTutorialTitle()}</p>
          </div>
          <Button
            variant="ghost"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-none text-crimson-neon-red hover:bg-crimson-neon-red/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </Button>
        </DialogHeader>

        <div className="p-6 space-y-4">
          {/* iOS Option */}
          <Button
            onClick={() => onDeviceSelect("ios")}
            className="w-full bg-transparent text-crimson-neon-red text-lg py-6 rounded-none border-2 border-crimson-neon-red hover:bg-crimson-neon-red hover:text-crimson-black transition-all duration-300
                       shadow-lg hover:shadow-crimson-neon-red/50 flex items-center justify-center gap-3 group"
          >
            <Apple className="w-6 h-6 group-hover:animate-pulse" />
            <span className="font-bold">iOS</span>
          </Button>

          {/* Android Option */}
          <Button
            onClick={() => onDeviceSelect("android")}
            className="w-full bg-transparent text-crimson-neon-red text-lg py-6 rounded-none border-2 border-crimson-neon-red hover:bg-crimson-neon-red hover:text-crimson-black transition-all duration-300
                       shadow-lg hover:shadow-crimson-neon-red/50 flex items-center justify-center gap-3 group"
          >
            <Smartphone className="w-6 h-6 group-hover:animate-pulse" />
            <span className="font-bold">ANDROID</span>
          </Button>

          {/* PC Option */}
          <Button
            onClick={() => onDeviceSelect("pc")}
            className="w-full bg-transparent text-crimson-neon-red text-lg py-6 rounded-none border-2 border-crimson-neon-red hover:bg-crimson-neon-red hover:text-crimson-black transition-all duration-300
                       shadow-lg hover:shadow-crimson-neon-red/50 flex items-center justify-center gap-3 group"
          >
            <Monitor className="w-6 h-6 group-hover:animate-pulse" />
            <span className="font-bold">PC</span>
          </Button>
        </div>

        <div className="p-4 border-t border-crimson-neon-red/30 bg-crimson-black/50">
          <p className="text-crimson-gray text-xs text-center">Select the device you want to use for this tutorial</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

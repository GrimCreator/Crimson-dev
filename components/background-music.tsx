"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Set up audio properties
    audio.loop = true
    audio.volume = 0.3 // Set to 30% volume to not be too loud

    // Try to play audio when component mounts
    const playAudio = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (error) {
        // Auto-play was blocked, user needs to interact first
        console.log("Auto-play blocked, waiting for user interaction")
      }
    }

    playAudio()

    // Add event listeners
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)

    return () => {
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("pause", handlePause)
    }
  }, [])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (isPlaying) {
        audio.pause()
      } else {
        await audio.play()
      }
    } catch (error) {
      console.error("Error toggling audio:", error)
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = !audio.muted
    setIsMuted(audio.muted)
  }

  return (
    <>
      {/* Hidden audio element */}
      <audio ref={audioRef} preload="auto" crossOrigin="anonymous">
        <source src="/audio/song-bsDiyQDgHKt8EYIyB_GF_.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating music controls */}
      <div className="fixed bottom-4 right-4 z-50 flex gap-2">
        <Button
          onClick={togglePlay}
          variant="ghost"
          size="icon"
          className="bg-klar-neon-black-bg/80 border border-klar-neon-border text-klar-neon-white hover:bg-klar-neon-black-bg rounded-none shadow-klar-glow"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <div className="w-4 h-4 flex gap-1">
              <div className="w-1 h-4 bg-klar-neon-white"></div>
              <div className="w-1 h-4 bg-klar-neon-white"></div>
            </div>
          ) : (
            <div className="w-4 h-4 relative">
              <div className="absolute left-0 top-0 w-0 h-0 border-l-[12px] border-l-klar-neon-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
            </div>
          )}
        </Button>

        <Button
          onClick={toggleMute}
          variant="ghost"
          size="icon"
          className="bg-klar-neon-black-bg/80 border border-klar-neon-border text-klar-neon-white hover:bg-klar-neon-black-bg rounded-none shadow-klar-glow"
          aria-label={isMuted ? "Unmute music" : "Mute music"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>
      </div>
    </>
  )
}

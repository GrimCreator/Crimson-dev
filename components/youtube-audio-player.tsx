"use client"

import { useState, useEffect } from "react"

interface YouTubeAudioPlayerProps {
  videoId: string
  onPlay?: () => void
  onStop?: () => void
}

export function YouTubeAudioPlayer({ videoId, onPlay, onStop }: YouTubeAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Function to play YouTube video in background (audio only)
  const playYouTubeAudio = () => {
    // Create an iframe to embed the YouTube video
    const iframe = document.createElement("iframe")
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`
    iframe.style.position = "fixed"
    iframe.style.top = "-1000px"
    iframe.style.left = "-1000px"
    iframe.style.width = "1px"
    iframe.style.height = "1px"
    iframe.style.opacity = "0"
    iframe.style.pointerEvents = "none"
    iframe.id = "youtube-audio-player"
    iframe.allow = "autoplay"

    document.body.appendChild(iframe)
    setIsPlaying(true)
    onPlay?.()
  }

  // Function to stop YouTube audio
  const stopYouTubeAudio = () => {
    const existingIframe = document.getElementById("youtube-audio-player")
    if (existingIframe) {
      existingIframe.remove()
    }
    setIsPlaying(false)
    onStop?.()
  }

  // Toggle play/stop
  const toggleAudio = () => {
    if (isPlaying) {
      stopYouTubeAudio()
    } else {
      playYouTubeAudio()
    }
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      const existingIframe = document.getElementById("youtube-audio-player")
      if (existingIframe) {
        existingIframe.remove()
      }
    }
  }, [])

  return {
    isPlaying,
    toggleAudio,
    playYouTubeAudio,
    stopYouTubeAudio,
  }
}

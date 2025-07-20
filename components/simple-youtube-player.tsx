"use client"

import { useState } from "react"

export function SimpleYouTubePlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  // King Von - When I Die video details
  const videoUrl = "https://youtu.be/5dY_wsyJZSs?si=-RKLT5FoXCy4AauL"
  const videoId = "5dY_wsyJZSs"

  const toggleMusic = () => {
    if (isPlaying) {
      // Stop music by removing any existing players
      const existingPlayers = document.querySelectorAll(".youtube-audio-player")
      existingPlayers.forEach((player) => player.remove())
      setIsPlaying(false)
    } else {
      // Start music by opening YouTube video
      // Since we can't directly extract audio from YouTube due to CORS,
      // we'll open it in a new tab or use YouTube's embed API

      // Option 1: Open in new tab (most reliable)
      window.open(videoUrl, "_blank")

      // Option 2: Try to embed hidden iframe (may not work due to YouTube policies)
      try {
        const iframe = document.createElement("iframe")
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&loop=1&playlist=${videoId}`
        iframe.className = "youtube-audio-player"
        iframe.style.position = "fixed"
        iframe.style.top = "-1000px"
        iframe.style.left = "-1000px"
        iframe.style.width = "1px"
        iframe.style.height = "1px"
        iframe.style.opacity = "0"
        iframe.style.pointerEvents = "none"
        iframe.allow = "autoplay"

        document.body.appendChild(iframe)
        setIsPlaying(true)
      } catch (error) {
        console.error("Failed to embed YouTube player:", error)
        // Fallback to opening in new tab
        window.open(videoUrl, "_blank")
      }
    }
  }

  return {
    isPlaying,
    toggleMusic,
    videoUrl,
    videoId,
  }
}

"use client"

import { useEffect, useRef, useCallback } from "react"

export function ParticleSystem() {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement[]>([])

  const createParticles = useCallback(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Clear existing particles
    particlesRef.current.forEach((particle) => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle)
      }
    })
    particlesRef.current = []

    // Create fewer particles for better performance
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"

      // Simplified particle types
      const types = ["particle-star", "particle-dot"]
      const animations = ["particle-float-1", "particle-float-2"]

      particle.classList.add(types[Math.floor(Math.random() * types.length)])
      particle.classList.add(animations[Math.floor(Math.random() * animations.length)])

      // Less frequent glow effect
      if (Math.random() > 0.8) {
        particle.classList.add("particle-glow")
      }

      // Random position
      particle.style.left = Math.random() * 100 + "%"
      particle.style.top = Math.random() * 100 + "%"

      // Random animation delay
      particle.style.animationDelay = Math.random() * 3 + "s"

      container.appendChild(particle)
      particlesRef.current.push(particle)
    }
  }, [])

  useEffect(() => {
    createParticles()

    return () => {
      particlesRef.current.forEach((particle) => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      })
      particlesRef.current = []
    }
  }, [createParticles])

  return <div ref={containerRef} className="particle-system" />
}

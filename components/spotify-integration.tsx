"use client"

import { useState, useEffect } from "react"

// Spotify Web API integration component
// Note: This requires Spotify Developer App setup and authentication
export function SpotifyIntegration() {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [playlistTracks, setPlaylistTracks] = useState<any[]>([])

  // Spotify playlist ID from the URL
  const playlistId = "1cG2yAnYZHLm3GkU4Umvre"

  // Get Spotify access token (requires client credentials)
  const getSpotifyToken = async () => {
    try {
      const response = await fetch("/api/spotify/token")
      if (!response.ok) throw new Error("Failed to obtain Spotify token")
      const { access_token } = await response.json()
      setAccessToken(access_token)
      return access_token
    } catch (error) {
      console.error("Failed to get Spotify token:", error)
      return null
    }
  }

  // Fetch playlist tracks from Spotify
  const fetchPlaylistTracks = async (token: string) => {
    try {
      const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await response.json()
      setPlaylistTracks(data.items)
      return data.items
    } catch (error) {
      console.error("Failed to fetch playlist tracks:", error)
      return []
    }
  }

  // Initialize Spotify integration
  useEffect(() => {
    const initSpotify = async () => {
      const token = await getSpotifyToken()
      if (token) {
        await fetchPlaylistTracks(token)
      }
    }

    initSpotify()
  }, [])

  // Return null to render nothing (this component is for data fetching only)
  return null
}

// Spotify Web Playback SDK integration
export function useSpotifyWebPlayback() {
  const [player, setPlayer] = useState<any>(null)
  const [deviceId, setDeviceId] = useState<string | null>(null)

  useEffect(() => {
    // Load Spotify Web Playback SDK
    const script = document.createElement("script")
    script.src = "https://sdk.scdn.co/spotify-player.js"
    script.async = true
    document.body.appendChild(script)

    // Initialize player when SDK loads
    window.onSpotifyWebPlaybackSDKReady = () => {
      const spotifyPlayer = new window.Spotify.Player({
        name: "Klar Music Player",
        getOAuthToken: (cb: (token: string) => void) => {
          // Get OAuth token for user authentication
          // This requires user login flow
          cb("your_oauth_token_here")
        },
        volume: 0.7,
      })

      // Player event listeners
      spotifyPlayer.addListener("ready", ({ device_id }: { device_id: string }) => {
        console.log("Ready with Device ID", device_id)
        setDeviceId(device_id)
      })

      spotifyPlayer.addListener("not_ready", ({ device_id }: { device_id: string }) => {
        console.log("Device ID has gone offline", device_id)
      })

      spotifyPlayer.addListener("player_state_changed", (state: any) => {
        if (!state) return

        console.log("Player state changed:", state)
      })

      // Connect to the player
      spotifyPlayer.connect()
      setPlayer(spotifyPlayer)
    }

    return () => {
      if (player) {
        player.disconnect()
      }
    }
  }, [])

  return { player, deviceId }
}

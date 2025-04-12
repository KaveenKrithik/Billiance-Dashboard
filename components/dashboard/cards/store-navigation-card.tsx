"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Users, Clock } from "lucide-react"
import Link from "next/link"

export function StoreNavigationCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Store layout
    const storeWidth = canvas.width * 0.9
    const storeHeight = canvas.height * 0.8
    const storeX = (canvas.width - storeWidth) / 2
    const storeY = (canvas.height - storeHeight) / 2

    // Draw store outline
    ctx.strokeStyle = "#e2e8f0"
    ctx.lineWidth = 2
    ctx.strokeRect(storeX, storeY, storeWidth, storeHeight)

    // Draw aisles
    const aisleCount = 5
    const aisleWidth = storeWidth * 0.15
    const aisleGap = (storeWidth - aisleCount * aisleWidth) / (aisleCount + 1)

    for (let i = 0; i < aisleCount; i++) {
      const x = storeX + aisleGap + i * (aisleWidth + aisleGap)
      const y = storeY + storeHeight * 0.2
      const height = storeHeight * 0.6

      ctx.fillStyle = "#f1f5f9"
      ctx.fillRect(x, y, aisleWidth, height)
      ctx.strokeRect(x, y, aisleWidth, height)
    }

    // Draw heatmap
    const hotspots = [
      { x: storeX + storeWidth * 0.2, y: storeY + storeHeight * 0.3, radius: 30, intensity: 0.8 },
      { x: storeX + storeWidth * 0.7, y: storeY + storeHeight * 0.4, radius: 40, intensity: 0.9 },
      { x: storeX + storeWidth * 0.5, y: storeY + storeHeight * 0.7, radius: 35, intensity: 0.7 },
    ]

    hotspots.forEach((spot) => {
      const gradient = ctx.createRadialGradient(spot.x, spot.y, 0, spot.x, spot.y, spot.radius)
      gradient.addColorStop(0, `rgba(239, 68, 68, ${spot.intensity})`)
      gradient.addColorStop(0.5, `rgba(239, 68, 68, ${spot.intensity * 0.5})`)
      gradient.addColorStop(1, "rgba(239, 68, 68, 0)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(spot.x, spot.y, spot.radius, 0, Math.PI * 2)
      ctx.fill()
    })

    // Draw customer paths
    const paths = [
      [
        { x: storeX + storeWidth * 0.1, y: storeY + storeHeight * 0.9 },
        { x: storeX + storeWidth * 0.2, y: storeY + storeHeight * 0.3 },
        { x: storeX + storeWidth * 0.5, y: storeY + storeHeight * 0.7 },
        { x: storeX + storeWidth * 0.9, y: storeY + storeHeight * 0.9 },
      ],
      [
        { x: storeX + storeWidth * 0.1, y: storeY + storeHeight * 0.1 },
        { x: storeX + storeWidth * 0.7, y: storeY + storeHeight * 0.4 },
        { x: storeX + storeWidth * 0.9, y: storeY + storeHeight * 0.1 },
      ],
    ]

    paths.forEach((path) => {
      ctx.strokeStyle = "rgba(59, 130, 246, 0.6)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(path[0].x, path[0].y)

      for (let i = 1; i < path.length; i++) {
        ctx.lineTo(path[i].x, path[i].y)
      }

      ctx.stroke()

      // Draw dots at each point
      path.forEach((point) => {
        ctx.fillStyle = "rgba(59, 130, 246, 0.8)"
        ctx.beginPath()
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2)
        ctx.fill()
      })
    })

    // Draw entrance/exit
    ctx.fillStyle = "#10b981"
    ctx.fillRect(storeX + storeWidth * 0.45, storeY + storeHeight, storeWidth * 0.1, 5)

    // Add legend
    ctx.fillStyle = "#1e293b"
    ctx.font = "12px sans-serif"
    ctx.fillText("Entrance/Exit", storeX + storeWidth * 0.45, storeY + storeHeight + 20)
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200">
            Live View
          </Badge>
          <span className="text-sm text-muted-foreground">Last updated: 2 minutes ago</span>
        </div>

        <Tabs defaultValue="heatmap" className="w-[300px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="heatmap">
              <Eye className="mr-1 h-3.5 w-3.5" />
              Heatmap
            </TabsTrigger>
            <TabsTrigger value="traffic">
              <Users className="mr-1 h-3.5 w-3.5" />
              Traffic
            </TabsTrigger>
            <TabsTrigger value="time">
              <Clock className="mr-1 h-3.5 w-3.5" />
              Time
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-video w-full rounded-lg border overflow-hidden"
      >
        <canvas ref={canvasRef} className="w-full h-full" />

        <div className="absolute bottom-4 right-4">
          <Button asChild size="sm" className="bg-white text-black hover:bg-white/90">
            <Link href="/store/navigation">View Detailed Analysis</Link>
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-none shadow-md">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Average Time Spent</p>
              <p className="text-2xl font-bold">24 min</p>
            </div>
            <Clock className="h-8 w-8 text-amber-500" />
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Customer Flow</p>
              <p className="text-2xl font-bold">342</p>
            </div>
            <Users className="h-8 w-8 text-amber-500" />
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Hotspot Areas</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <Eye className="h-8 w-8 text-amber-500" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreVertical, Play, TrendingUp } from "lucide-react"

export function InventoryValueCard() {
  return (
    <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-none">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Value of Managed Inventory</h3>
          <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex items-baseline">
            <span className="text-xl">₹</span>
            <motion.span
              className="text-5xl font-bold tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              5,69,54,889
            </motion.span>
          </div>
        </motion.div>

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="h-6 w-6 rounded-full bg-white/10 p-0 hover:bg-white/20">
              <Play className="h-3 w-3 fill-current" />
            </Button>
            <span className="text-sm">From All Product Categories</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-indigo-200">Inventory sold worth</span>
            <div className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4 text-yellow-300" />
              <span className="font-medium text-yellow-300">₹62,53,345</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

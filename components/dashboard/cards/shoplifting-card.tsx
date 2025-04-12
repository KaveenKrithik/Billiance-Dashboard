"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MoreVertical, Play, AlertTriangle } from "lucide-react"
import Link from "next/link"

export function ShopliftingCard() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <h3 className="text-lg font-medium text-red-500">No. Of Shoplifting</h3>
        </div>
        <Button asChild variant="ghost" size="icon">
          <Link href="/notifications/security">
            <MoreVertical className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <motion.div
        className="mt-6 flex justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <span className="text-6xl font-bold text-red-500">2</span>
      </motion.div>

      <div className="mt-6 space-y-2">
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" className="h-6 w-6 rounded-full bg-red-50 p-0">
            <Play className="h-3 w-3 fill-current text-red-500" />
          </Button>
          <span className="text-sm">From 01/02/2025 to 27/02/2025</span>
        </div>

        <div className="text-sm text-muted-foreground">WhatsApp notification triggered</div>
      </div>
    </div>
  )
}

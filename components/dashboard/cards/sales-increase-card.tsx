"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MoreVertical, Play, TrendingUp } from "lucide-react"
import Link from "next/link"

export function SalesIncreaseCard() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-500" />
          <h3 className="text-lg font-medium text-muted-foreground">Increase in sales due to PPRSBPPH</h3>
        </div>
        <Button asChild variant="ghost" size="icon">
          <Link href="/reports/sales-increase">
            <MoreVertical className="h-4 w-4" />
          </Link>
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
            className="text-5xl font-bold tracking-tighter text-blue-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            41,233
          </motion.span>
        </div>
      </motion.div>

      <div className="mt-6 space-y-2">
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" className="h-6 w-6 rounded-full bg-blue-50 p-0">
            <Play className="h-3 w-3 fill-current text-blue-600" />
          </Button>
          <span className="text-sm">From Cosmetics and Skincare</span>
        </div>

        <div className="text-sm text-muted-foreground">WhatsApp notification triggered</div>
      </div>
    </div>
  )
}

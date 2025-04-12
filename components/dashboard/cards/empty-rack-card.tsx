"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export function EmptyRackCard() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="h-5 w-5 text-orange-500" />
        <h3 className="text-lg font-medium text-orange-500">Empty Rack Detection</h3>
      </div>

      <div className="mt-4 space-y-4">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Link href="/store/aisles/4" className="block group">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm group-hover:text-blue-600 transition-colors">Aisle 4 - Beverages</span>
              <span className="text-xs font-medium text-orange-500">78%</span>
            </div>
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.5, duration: 1 }}>
              <Progress value={78} className="h-2" indicatorClassName="bg-gradient-to-r from-orange-400 to-red-500" />
            </motion.div>
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Link href="/store/aisles/2" className="block group">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm group-hover:text-blue-600 transition-colors">Aisle 2 - Dairy</span>
              <span className="text-xs font-medium text-orange-500">45%</span>
            </div>
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.7, duration: 1 }}>
              <Progress
                value={45}
                className="h-2"
                indicatorClassName="bg-gradient-to-r from-yellow-400 to-orange-500"
              />
            </motion.div>
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Link href="/store/aisles/7" className="block group">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm group-hover:text-blue-600 transition-colors">Aisle 7 - Snacks</span>
              <span className="text-xs font-medium text-red-500">92%</span>
            </div>
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.9, duration: 1 }}>
              <Progress value={92} className="h-2" indicatorClassName="bg-gradient-to-r from-red-500 to-red-600" />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <div className="mt-4 text-right">
        <span className="text-xs text-muted-foreground">Last updated: 10 minutes ago</span>
      </div>
    </div>
  )
}

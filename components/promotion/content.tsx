"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PromotionList } from "@/components/promotion/promotion-list"
import { PromotionMetrics } from "@/components/promotion/promotion-metrics"
import { Plus } from "lucide-react"

export function PromotionContent() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
      <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Promotion
          </h2>
          <p className="text-muted-foreground">Manage marketing campaigns and promotions</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <Plus className="mr-2 h-4 w-4" />
          Create Campaign
        </Button>
      </motion.div>

      <motion.div variants={item}>
        <Card className="overflow-hidden border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardTitle>Campaign Performance</CardTitle>
            <CardDescription>Key metrics for active campaigns</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <PromotionMetrics />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="overflow-hidden border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20">
            <CardTitle>Active Campaigns</CardTitle>
            <CardDescription>Currently running promotional campaigns</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <PromotionList />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

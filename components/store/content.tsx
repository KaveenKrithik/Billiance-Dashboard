"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StoreNavigationCard } from "@/components/dashboard/cards/store-navigation-card"
import { StoreInventory } from "@/components/store/store-inventory"
import { Map } from "lucide-react"
import Link from "next/link"

export function StoreContent() {
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
            My Store
          </h2>
          <p className="text-muted-foreground">Store management and analytics</p>
        </div>
        <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <Link href="/store/navigation">
            <Map className="mr-2 h-4 w-4" />
            Store Navigation
          </Link>
        </Button>
      </motion.div>

      <motion.div variants={item}>
        <Card className="overflow-hidden border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20">
            <CardTitle>Store Navigation</CardTitle>
            <CardDescription>Intelligent store navigation and heatmap</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <StoreNavigationCard />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="overflow-hidden border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardTitle>Inventory Status</CardTitle>
            <CardDescription>Current inventory levels and alerts</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <StoreInventory />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

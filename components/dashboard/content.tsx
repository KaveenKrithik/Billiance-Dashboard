"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BestsellingProductChart } from "@/components/dashboard/charts/bestselling-product-chart"
import { EmployeeAnalysisChart } from "@/components/dashboard/charts/employee-analysis-chart"
import { InventoryValueCard } from "@/components/dashboard/cards/inventory-value-card"
import { ShopliftingCard } from "@/components/dashboard/cards/shoplifting-card"
import { SalesIncreaseCard } from "@/components/dashboard/cards/sales-increase-card"
import { EmptyRackCard } from "@/components/dashboard/cards/empty-rack-card"
import { RecommendationCard } from "@/components/dashboard/cards/recommendation-card"
import { StoreNavigationCard } from "@/components/dashboard/cards/store-navigation-card"
import Link from "next/link"

export function DashboardContent() {
  const [timeframe, setTimeframe] = useState("month")

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
      <motion.div variants={item} className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Bestselling Product
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by</span>
          <Tabs defaultValue="month" className="w-[200px]">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="week" onClick={() => setTimeframe("week")}>
                Week
              </TabsTrigger>
              <TabsTrigger value="month" onClick={() => setTimeframe("month")}>
                Month
              </TabsTrigger>
              <TabsTrigger value="year" onClick={() => setTimeframe("year")}>
                Year
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </motion.div>

      <motion.div variants={item}>
        <Card className="overflow-hidden border-none shadow-lg">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6">
              <BestsellingProductChart />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <motion.div variants={item} className="col-span-2">
          <Card className="h-full overflow-hidden border-none shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
              <div>
                <CardTitle>Demand Prediction</CardTitle>
                <CardDescription>Market influence analysis</CardDescription>
              </div>
              <Button asChild variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm">
                <Link href="/reports/demand-prediction">See Details</Link>
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <InventoryValueCard />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full overflow-hidden border-none shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
              <CardTitle>Theft Prevention</CardTitle>
              <CardDescription>Instant notification system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 p-6">
              <ShopliftingCard />
              <EmptyRackCard />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={item}>
          <Card className="h-full overflow-hidden border-none shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20">
              <div>
                <CardTitle>Employee Analysis</CardTitle>
                <CardDescription>Performance tracking</CardDescription>
              </div>
              <Button asChild variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm">
                <Link href="/team/performance">Read More</Link>
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <EmployeeAnalysisChart />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full overflow-hidden border-none shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <CardTitle>Personalized Recommendations</CardTitle>
              <CardDescription>Based on past purchases</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 p-6">
              <SalesIncreaseCard />
              <RecommendationCard />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div variants={item}>
        <Card className="overflow-hidden border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20">
            <CardTitle>Intelligent Store Navigation</CardTitle>
            <CardDescription>Customer flow and hotspot analysis</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <StoreNavigationCard />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

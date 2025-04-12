"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { StatisticsChart } from "@/components/statistics/statistics-chart"
import { StatisticsMetrics } from "@/components/statistics/statistics-metrics"
import Link from "next/link"

export function StatisticsContent() {
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
          Statistics Overview
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Time Period</span>
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
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>Key performance indicators across all services</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <StatisticsMetrics />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="overflow-hidden border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 flex flex-row items-center justify-between">
            <div>
              <CardTitle>Trend Analysis</CardTitle>
              <CardDescription>Historical data and projections</CardDescription>
            </div>
            <Button asChild variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm">
              <Link href="/reports/trends">Export Data</Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="bg-white p-6">
              <StatisticsChart />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

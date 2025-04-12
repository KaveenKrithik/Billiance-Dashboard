"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DatabaseList } from "@/components/database/database-list"
import { DatabaseMetrics } from "@/components/database/database-metrics"
import { Plus } from "lucide-react"

export function DatabaseContent() {
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
            Database
          </h2>
          <p className="text-muted-foreground">Manage your data connections and sources</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <Plus className="mr-2 h-4 w-4" />
          Add New Connection
        </Button>
      </motion.div>

      <motion.div variants={item}>
        <Card className="overflow-hidden border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardTitle>Database Metrics</CardTitle>
            <CardDescription>Performance and usage statistics</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <DatabaseMetrics />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="overflow-hidden border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20">
            <CardTitle>Connected Databases</CardTitle>
            <CardDescription>Active data connections</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <DatabaseList />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

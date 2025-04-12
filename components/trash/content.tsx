"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrashList } from "@/components/trash/trash-list"
import { Trash2, RefreshCw } from "lucide-react"

export function TrashContent() {
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
            Trash
          </h2>
          <p className="text-muted-foreground">Deleted items and recovery</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Restore All
          </Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Empty Trash
          </Button>
        </div>
      </motion.div>

      <motion.div variants={item}>
        <Card className="overflow-hidden border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
            <CardTitle>Deleted Items</CardTitle>
            <CardDescription>Items will be permanently deleted after 30 days</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <TrashList />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

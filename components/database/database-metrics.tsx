"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

export function DatabaseMetrics() {
  const metrics = [
    {
      title: "Storage Usage",
      current: 256,
      max: 500,
      unit: "GB",
      percentage: 51,
    },
    {
      title: "Query Performance",
      current: 120,
      max: 200,
      unit: "ms",
      percentage: 60,
      inverted: true,
    },
    {
      title: "Data Integrity",
      current: 99.8,
      max: 100,
      unit: "%",
      percentage: 99.8,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="rounded-lg border bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">{metric.title}</h3>
              <p className="text-sm font-medium">
                {metric.current} / {metric.max} {metric.unit}
              </p>
            </div>
            <Progress
              value={metric.percentage}
              className="h-2"
              indicatorClassName={
                metric.inverted
                  ? metric.percentage > 80
                    ? "bg-red-500"
                    : metric.percentage > 60
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  : metric.percentage > 90
                    ? "bg-green-500"
                    : metric.percentage > 70
                      ? "bg-yellow-500"
                      : "bg-red-500"
              }
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

"use client"

import { motion } from "framer-motion"

export function StatisticsMetrics() {
  const metrics = [
    {
      title: "Total Sales",
      value: "₹8.2M",
      change: "+12.5%",
      positive: true,
    },
    {
      title: "Customer Retention",
      value: "78%",
      change: "+5.3%",
      positive: true,
    },
    {
      title: "Theft Prevention",
      value: "98.7%",
      change: "+2.1%",
      positive: true,
    },
    {
      title: "Inventory Accuracy",
      value: "99.2%",
      change: "+1.5%",
      positive: true,
    },
    {
      title: "Employee Efficiency",
      value: "87%",
      change: "+8.2%",
      positive: true,
    },
    {
      title: "Recommendation Accuracy",
      value: "92%",
      change: "+4.7%",
      positive: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="rounded-lg border bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm"
        >
          <div className="flex flex-col space-y-1.5">
            <h3 className="text-sm font-medium text-muted-foreground">{metric.title}</h3>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold">{metric.value}</p>
              <p className={`text-sm font-medium ${metric.positive ? "text-green-500" : "text-red-500"}`}>
                {metric.change}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

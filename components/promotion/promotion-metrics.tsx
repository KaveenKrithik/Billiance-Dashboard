"use client"

import { motion } from "framer-motion"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, type ChartData } from "chart.js"

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend)

export function PromotionMetrics() {
  const data: ChartData<"doughnut"> = {
    labels: ["Social Media", "Email", "In-Store", "Website", "Partner"],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          "rgba(79, 70, 229, 0.8)",
          "rgba(147, 51, 234, 0.8)",
          "rgba(59, 130, 246, 0.8)",
          "rgba(16, 185, 129, 0.8)",
          "rgba(245, 158, 11, 0.8)",
        ],
        borderColor: [
          "rgba(79, 70, 229, 1)",
          "rgba(147, 51, 234, 1)",
          "rgba(59, 130, 246, 1)",
          "rgba(16, 185, 129, 1)",
          "rgba(245, 158, 11, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          boxHeight: 10,
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        titleColor: "#1e293b",
        bodyColor: "#475569",
        borderColor: "rgba(226, 232, 240, 0.8)",
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          label: (context: any) => {
            const label = context.label || ""
            const value = context.raw || 0
            return `${label}: ${value}%`
          },
        },
      },
    },
    cutout: "60%",
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  }

  const metrics = [
    {
      title: "Total Reach",
      value: "1.2M",
      change: "+15%",
      positive: true,
    },
    {
      title: "Conversion Rate",
      value: "3.8%",
      change: "+0.5%",
      positive: true,
    },
    {
      title: "ROI",
      value: "285%",
      change: "+12%",
      positive: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="h-[300px]">
          <Doughnut data={data} options={options} />
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-lg border bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm"
          >
            <div className="flex flex-col space-y-1">
              <h3 className="text-sm font-medium text-muted-foreground">{metric.title}</h3>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className={`text-sm font-medium ${metric.positive ? "text-green-500" : "text-red-500"}`}>
                  {metric.change}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

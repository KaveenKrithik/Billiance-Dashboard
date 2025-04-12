"use client"

import { useRef, useEffect } from "react"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, type ChartData } from "chart.js"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend)

export function EmployeeAnalysisChart() {
  const chartRef = useRef<ChartJS<"doughnut">>(null)

  const data: ChartData<"doughnut"> = {
    labels: ["Female staff", "Male staff"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["rgba(99, 102, 241, 0.8)", "rgba(79, 70, 229, 0.8)"],
        borderColor: ["rgba(99, 102, 241, 1)", "rgba(79, 70, 229, 1)"],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          boxWidth: 6,
          boxHeight: 6,
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
        usePointStyle: true,
      },
    },
    cutout: "70%",
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  }

  useEffect(() => {
    const chart = chartRef.current
    if (chart) {
      // Add shadow to the chart
      const originalDraw = chart.draw
      chart.draw = function () {
        originalDraw.apply(this, arguments)

        const width = this.width
        const height = this.height
        const ctx = this.ctx

        ctx.save()
        ctx.shadowColor = "rgba(0, 0, 0, 0.2)"
        ctx.shadowBlur = 10
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 4
        ctx.restore()
      }
    }
  }, [])

  // Staff visualization with animated icons
  const staffIcons = Array(10)
    .fill(null)
    .map((_, i) => (i < 7 ? "female" : "male"))

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {staffIcons.map((type, i) => (
          <motion.span
            key={i}
            className={`text-2xl ${type === "female" ? "text-indigo-400" : "text-indigo-600"}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: i * 0.1,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            {type === "female" ? "👩" : "👨"}
          </motion.span>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-none shadow-lg">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <motion.div
            className="relative h-32 w-32"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            <Doughnut ref={chartRef} data={data} options={options} />
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-3xl font-bold">70%</span>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-sm text-indigo-100">On average,</p>
            <p className="text-sm text-indigo-100">7 out of 10 staffs are</p>
            <span className="mt-1 inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm">
              Female
            </span>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  )
}

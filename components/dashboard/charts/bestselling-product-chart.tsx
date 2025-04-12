"use client"

import { useEffect, useRef } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export function BestsellingProductChart() {
  const chartRef = useRef<ChartJS<"line">>(null)

  const data: ChartData<"line"> = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Clothing and Accessories",
        data: [0, 12, 38, 30],
        borderColor: "rgb(79, 70, 229)",
        backgroundColor: "rgba(79, 70, 229, 0.5)",
        tension: 0.4,
      },
      {
        label: "Cosmetics and Skincare",
        data: [12, 5, 20, 15],
        borderColor: "rgb(147, 51, 234)",
        backgroundColor: "rgba(147, 51, 234, 0.5)",
        tension: 0.4,
      },
      {
        label: "Others",
        data: [18, 30, 25, 40],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.4,
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
        boxPadding: 6,
        usePointStyle: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(226, 232, 240, 0.5)",
        },
        ticks: {
          padding: 10,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 10,
        },
      },
    },
    animation: {
      duration: 2000,
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6,
      },
      line: {
        borderWidth: 3,
      },
    },
  }

  // Animation effect
  useEffect(() => {
    const chart = chartRef.current

    if (chart) {
      const originalDraw = chart.draw

      chart.draw = function () {
        originalDraw.apply(this, arguments)

        const ctx = chart.ctx
        const _stroke = ctx.stroke
        ctx.stroke = function () {
          ctx.save()
          ctx.shadowColor = "rgba(0, 0, 0, 0.1)"
          ctx.shadowBlur = 10
          ctx.shadowOffsetX = 0
          ctx.shadowOffsetY = 4
          _stroke.apply(this, arguments)
          ctx.restore()
        }
      }
    }
  }, [])

  return (
    <div className="h-[400px] w-full">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  )
}

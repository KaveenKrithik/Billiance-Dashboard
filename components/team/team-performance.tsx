"use client"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function TeamPerformance() {
  const data: ChartData<"bar"> = {
    labels: ["Sarah J.", "Michael C.", "Jessica P.", "David W."],
    datasets: [
      {
        label: "Sales Performance",
        data: [95, 82, 75, 80],
        backgroundColor: "rgba(79, 70, 229, 0.8)",
        borderColor: "rgba(79, 70, 229, 1)",
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: "Customer Satisfaction",
        data: [90, 85, 70, 88],
        backgroundColor: "rgba(147, 51, 234, 0.8)",
        borderColor: "rgba(147, 51, 234, 1)",
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: "Task Completion",
        data: [98, 80, 85, 92],
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
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
        max: 100,
        grid: {
          color: "rgba(226, 232, 240, 0.5)",
        },
        ticks: {
          padding: 10,
          callback: (value: any) => value + "%",
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
  }

  return (
    <div className="h-[400px] w-full">
      <Bar data={data} options={options} />
    </div>
  )
}

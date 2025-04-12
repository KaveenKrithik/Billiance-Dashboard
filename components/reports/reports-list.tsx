"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Eye, FileText } from "lucide-react"
import Link from "next/link"

export function ReportsList() {
  const reports = [
    {
      id: "rep-001",
      title: "Monthly Performance Report - March 2025",
      date: "April 1, 2025",
      size: "2.4 MB",
      type: "PDF",
    },
    {
      id: "rep-002",
      title: "Employee Efficiency Analysis - Q1 2025",
      date: "March 31, 2025",
      size: "3.8 MB",
      type: "PDF",
    },
    {
      id: "rep-003",
      title: "Inventory Turnover Report - March 2025",
      date: "March 30, 2025",
      size: "1.7 MB",
      type: "XLSX",
    },
    {
      id: "rep-004",
      title: "Customer Behavior Analysis - Q1 2025",
      date: "March 28, 2025",
      size: "4.2 MB",
      type: "PDF",
    },
    {
      id: "rep-005",
      title: "Sales Forecast - April 2025",
      date: "March 25, 2025",
      size: "2.1 MB",
      type: "PDF",
    },
  ]

  return (
    <div className="space-y-4">
      {reports.map((report, index) => (
        <motion.div
          key={report.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border p-4 hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-start gap-3">
            <div className="rounded-md bg-blue-100 p-2 text-blue-700">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">{report.title}</h3>
              <div className="flex flex-wrap gap-x-4 text-sm text-muted-foreground">
                <span>Generated: {report.date}</span>
                <span>{report.size}</span>
                <span>{report.type}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 self-end sm:self-center">
            <Button asChild variant="outline" size="sm">
              <Link href={`/reports/${report.id}`}>
                <Eye className="mr-1 h-4 w-4" />
                View
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={`/reports/${report.id}/download`}>
                <Download className="mr-1 h-4 w-4" />
                Download
              </Link>
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

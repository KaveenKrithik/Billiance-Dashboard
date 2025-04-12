"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Edit, BarChart } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export function PromotionList() {
  const campaigns = [
    {
      id: "camp-001",
      name: "Spring Collection Launch",
      status: "Active",
      startDate: "Mar 15, 2025",
      endDate: "Apr 15, 2025",
      progress: 65,
      budget: "₹50,000",
      spent: "₹32,500",
    },
    {
      id: "camp-002",
      name: "Loyalty Customer Discount",
      status: "Active",
      startDate: "Mar 1, 2025",
      endDate: "Mar 31, 2025",
      progress: 90,
      budget: "₹25,000",
      spent: "₹22,500",
    },
    {
      id: "camp-003",
      name: "New Customer Acquisition",
      status: "Scheduled",
      startDate: "Apr 1, 2025",
      endDate: "Apr 30, 2025",
      progress: 0,
      budget: "₹75,000",
      spent: "₹0",
    },
    {
      id: "camp-004",
      name: "Clearance Sale",
      status: "Draft",
      startDate: "TBD",
      endDate: "TBD",
      progress: 0,
      budget: "₹40,000",
      spent: "₹0",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Active</Badge>
      case "Scheduled":
        return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Scheduled</Badge>
      case "Draft":
        return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Draft</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-4">
      {campaigns.map((campaign, index) => (
        <motion.div
          key={campaign.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col gap-4 rounded-lg border p-4 hover:bg-slate-50 transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{campaign.name}</h3>
                {getStatusBadge(campaign.status)}
              </div>
              <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                <span>
                  {campaign.startDate} - {campaign.endDate}
                </span>
              </div>
            </div>
            <div className="flex gap-2 self-end sm:self-center">
              <Button asChild variant="outline" size="sm">
                <Link href={`/promotion/${campaign.id}/edit`}>
                  <Edit className="mr-1 h-4 w-4" />
                  Edit
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href={`/promotion/${campaign.id}/analytics`}>
                  <BarChart className="mr-1 h-4 w-4" />
                  Analytics
                </Link>
              </Button>
            </div>
          </div>

          {campaign.status !== "Draft" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Budget utilization</span>
                <span className="font-medium">
                  {campaign.spent} / {campaign.budget}
                </span>
              </div>
              <Progress value={campaign.progress} className="h-2" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

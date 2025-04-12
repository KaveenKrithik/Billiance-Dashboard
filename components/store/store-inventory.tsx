"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, RefreshCw } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export function StoreInventory() {
  const inventory = [
    {
      id: "inv-001",
      category: "Clothing",
      stockLevel: 85,
      status: "Good",
      lastUpdated: "10 minutes ago",
    },
    {
      id: "inv-002",
      category: "Cosmetics",
      stockLevel: 72,
      status: "Good",
      lastUpdated: "15 minutes ago",
    },
    {
      id: "inv-003",
      category: "Electronics",
      stockLevel: 45,
      status: "Warning",
      lastUpdated: "20 minutes ago",
    },
    {
      id: "inv-004",
      category: "Groceries",
      stockLevel: 25,
      status: "Critical",
      lastUpdated: "5 minutes ago",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Good":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Good</Badge>
      case "Warning":
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">Warning</Badge>
      case "Critical":
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-200">Critical</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Good":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "Warning":
      case "Critical":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Last inventory check:</span>
          <span className="text-sm font-medium">Today, 10:30 AM</span>
        </div>
        <Button variant="outline" size="sm" className="gap-1">
          <RefreshCw className="h-3.5 w-3.5" />
          Refresh
        </Button>
      </div>

      <div className="space-y-4">
        {inventory.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col gap-3 rounded-lg border p-4 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {getStatusIcon(item.status)}
                <div>
                  <h3 className="font-medium">{item.category}</h3>
                  <p className="text-sm text-muted-foreground">Updated {item.lastUpdated}</p>
                </div>
              </div>
              <div>{getStatusBadge(item.status)}</div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Stock Level</span>
                <span className="font-medium">{item.stockLevel}%</span>
              </div>
              <Progress
                value={item.stockLevel}
                className="h-2"
                indicatorClassName={
                  item.stockLevel > 70 ? "bg-green-500" : item.stockLevel > 40 ? "bg-yellow-500" : "bg-red-500"
                }
              />
            </div>

            <div className="flex justify-end">
              <Button asChild variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                <Link href={`/store/inventory/${item.id}`}>View Details</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

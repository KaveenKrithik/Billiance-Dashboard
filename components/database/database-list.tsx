"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Database, Settings, BarChart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function DatabaseList() {
  const databases = [
    {
      id: "db-001",
      name: "Product Inventory",
      type: "PostgreSQL",
      status: "Connected",
      lastSync: "5 minutes ago",
    },
    {
      id: "db-002",
      name: "Customer Data",
      type: "MongoDB",
      status: "Connected",
      lastSync: "10 minutes ago",
    },
    {
      id: "db-003",
      name: "Sales Transactions",
      type: "MySQL",
      status: "Connected",
      lastSync: "15 minutes ago",
    },
    {
      id: "db-004",
      name: "Employee Records",
      type: "PostgreSQL",
      status: "Disconnected",
      lastSync: "1 day ago",
    },
  ]

  return (
    <div className="space-y-4">
      {databases.map((db, index) => (
        <motion.div
          key={db.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border p-4 hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-start gap-3">
            <div
              className={`rounded-md p-2 ${db.status === "Connected" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
            >
              <Database className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">{db.name}</h3>
              <div className="flex flex-wrap gap-x-4 text-sm text-muted-foreground">
                <span>Type: {db.type}</span>
                <span>Last sync: {db.lastSync}</span>
                <Badge
                  variant={db.status === "Connected" ? "outline" : "destructive"}
                  className={db.status === "Connected" ? "bg-green-50 text-green-700 border-green-200" : ""}
                >
                  {db.status}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex gap-2 self-end sm:self-center">
            <Button asChild variant="outline" size="sm">
              <Link href={`/database/${db.id}/settings`}>
                <Settings className="mr-1 h-4 w-4" />
                Settings
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={`/database/${db.id}/analytics`}>
                <BarChart className="mr-1 h-4 w-4" />
                Analytics
              </Link>
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

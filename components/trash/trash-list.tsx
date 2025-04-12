"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Trash2, FileText, ShoppingCart, Package, Users } from "lucide-react"

export function TrashList() {
  const deletedItems = [
    {
      id: "item-001",
      name: "Monthly Report - January 2025",
      type: "Report",
      deletedAt: "2 days ago",
      daysLeft: 28,
      icon: FileText,
    },
    {
      id: "item-002",
      name: "Order #54321",
      type: "Order",
      deletedAt: "5 days ago",
      daysLeft: 25,
      icon: ShoppingCart,
    },
    {
      id: "item-003",
      name: "Inventory Batch #A123",
      type: "Inventory",
      deletedAt: "1 week ago",
      daysLeft: 23,
      icon: Package,
    },
    {
      id: "item-004",
      name: "Employee Record - John Doe",
      type: "Employee",
      deletedAt: "2 weeks ago",
      daysLeft: 16,
      icon: Users,
    },
  ]

  const getItemIcon = (icon: any) => {
    const Icon = icon
    return <Icon className="h-5 w-5" />
  }

  const getItemTypeBadge = (type: string) => {
    switch (type) {
      case "Report":
        return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">{type}</Badge>
      case "Order":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-200">{type}</Badge>
      case "Inventory":
        return <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">{type}</Badge>
      case "Employee":
        return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">{type}</Badge>
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  if (deletedItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Trash2 className="h-12 w-12 text-gray-300 mb-4" />
        <h3 className="text-lg font-medium">Trash is empty</h3>
        <p className="text-sm text-muted-foreground">No deleted items to display</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {deletedItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border p-4 hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
              {getItemIcon(item.icon)}
            </div>
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <div className="flex items-center gap-2">
                {getItemTypeBadge(item.type)}
                <span className="text-xs text-muted-foreground">Deleted {item.deletedAt}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 self-end sm:self-center">
            <span className="text-xs text-muted-foreground">
              {item.daysLeft > 20 ? (
                <span className="text-green-600">Expires in {item.daysLeft} days</span>
              ) : item.daysLeft > 10 ? (
                <span className="text-amber-600">Expires in {item.daysLeft} days</span>
              ) : (
                <span className="text-red-600">Expires in {item.daysLeft} days</span>
              )}
            </span>
            <Button variant="outline" size="sm" className="h-8">
              <RefreshCw className="mr-1 h-3.5 w-3.5" />
              Restore
            </Button>
            <Button variant="destructive" size="sm" className="h-8">
              <Trash2 className="mr-1 h-3.5 w-3.5" />
              Delete
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

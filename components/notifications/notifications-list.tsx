"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Bell, ShoppingCart, Package, Users } from "lucide-react"
import Link from "next/link"

interface NotificationsListProps {
  filter?: "all" | "unread"
}

export function NotificationsList({ filter = "all" }: NotificationsListProps) {
  const notifications = [
    {
      id: "notif-001",
      title: "Shoplifting Alert",
      message: "Potential shoplifting detected in Aisle 3",
      time: "5 minutes ago",
      type: "alert",
      read: false,
      icon: AlertTriangle,
      iconColor: "text-red-500",
      href: "/notifications/security",
    },
    {
      id: "notif-002",
      title: "Empty Rack Alert",
      message: "Dairy section (Aisle 2) needs restocking",
      time: "20 minutes ago",
      type: "alert",
      read: false,
      icon: AlertTriangle,
      iconColor: "text-orange-500",
      href: "/notifications/inventory",
    },
    {
      id: "notif-003",
      title: "Sales Milestone",
      message: "Monthly sales target achieved",
      time: "1 hour ago",
      type: "success",
      read: true,
      icon: CheckCircle,
      iconColor: "text-green-500",
      href: "/notifications/sales",
    },
    {
      id: "notif-004",
      title: "New Order",
      message: "Order #12345 has been placed",
      time: "2 hours ago",
      type: "info",
      read: true,
      icon: ShoppingCart,
      iconColor: "text-blue-500",
      href: "/notifications/orders",
    },
    {
      id: "notif-005",
      title: "Inventory Update",
      message: "New shipment arrived for Electronics",
      time: "3 hours ago",
      type: "info",
      read: true,
      icon: Package,
      iconColor: "text-purple-500",
      href: "/notifications/inventory",
    },
    {
      id: "notif-006",
      title: "Team Meeting",
      message: "Reminder: Team meeting at 3:00 PM",
      time: "4 hours ago",
      type: "info",
      read: true,
      icon: Users,
      iconColor: "text-indigo-500",
      href: "/notifications/team",
    },
  ]

  const filteredNotifications = filter === "unread" ? notifications.filter((n) => !n.read) : notifications

  if (filteredNotifications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Bell className="h-12 w-12 text-gray-300 mb-4" />
        <h3 className="text-lg font-medium">No notifications</h3>
        <p className="text-sm text-muted-foreground">You're all caught up!</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {filteredNotifications.map((notification, index) => {
        const Icon = notification.icon

        return (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex gap-4 rounded-lg border p-4 ${notification.read ? "bg-white" : "bg-blue-50"} hover:bg-slate-50 transition-colors`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${notification.read ? "bg-gray-100" : `bg-${notification.iconColor.split("-")[1]}-100`}`}
            >
              <Icon className={`h-5 w-5 ${notification.iconColor}`} />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className={`font-medium ${notification.read ? "" : "text-blue-600"}`}>{notification.title}</h3>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                </div>
                {!notification.read && (
                  <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                    New
                  </Badge>
                )}
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{notification.time}</span>
                <div className="flex gap-2">
                  <Button asChild variant="ghost" size="sm" className="h-8 text-xs">
                    <Link href={notification.href}>View</Link>
                  </Button>
                  {!notification.read && (
                    <Button variant="outline" size="sm" className="h-8 text-xs">
                      Mark as Read
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

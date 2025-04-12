"use client"

import { useState } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function NotificationBell() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Shoplifting Alert",
      message: "Potential shoplifting detected in Aisle 3",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: 2,
      title: "Empty Rack Alert",
      message: "Dairy section (Aisle 2) needs restocking",
      time: "20 minutes ago",
      read: false,
    },
    {
      id: 3,
      title: "Sales Milestone",
      message: "Monthly sales target achieved",
      time: "1 hour ago",
      read: true,
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <AnimatePresence>
            {unreadCount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -right-1 -top-1"
              >
                <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  {unreadCount}
                </Badge>
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead} className="h-auto text-xs px-2">
              Mark all as read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <DropdownMenuItem
              key={notification.id}
              className="flex flex-col items-start p-3 cursor-pointer"
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex w-full items-start justify-between">
                <span className={`font-medium ${notification.read ? "" : "text-blue-600"}`}>{notification.title}</span>
                <span className="text-xs text-muted-foreground">{notification.time}</span>
              </div>
              <span className="text-sm text-muted-foreground">{notification.message}</span>
              {!notification.read && (
                <div className="mt-1 self-end">
                  <Badge variant="outline" className="text-xs bg-blue-50 text-blue-600 hover:bg-blue-100">
                    New
                  </Badge>
                </div>
              )}
            </DropdownMenuItem>
          ))
        ) : (
          <div className="p-4 text-center text-muted-foreground">No new notifications</div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

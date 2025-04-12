"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { UserNav } from "@/components/dashboard/user-nav"
import { motion } from "framer-motion"
import { NotificationBell } from "@/components/dashboard/notification-bell"

interface DashboardHeaderProps {
  heading: string
  text?: string
}

export function DashboardHeader({ heading, text }: DashboardHeaderProps) {
  return (
    <motion.div
      className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <motion.h1
          className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {heading}
        </motion.h1>
        {text && (
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {text}
          </motion.p>
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="relative w-full md:w-[300px]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search here"
            className="w-full pl-8 md:w-[300px] bg-white/10 backdrop-blur-sm border-zinc-200/30 focus-visible:ring-blue-500"
          />
        </div>
        <NotificationBell />
        <UserNav />
      </div>
    </motion.div>
  )
}

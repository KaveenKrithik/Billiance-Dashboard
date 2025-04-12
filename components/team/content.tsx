"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TeamList } from "@/components/team/team-list"
import { TeamPerformance } from "@/components/team/team-performance"
import { UserPlus } from "lucide-react"

export function TeamContent() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
      <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Team
          </h2>
          <p className="text-muted-foreground">Manage your team and track performance</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <UserPlus className="mr-2 h-4 w-4" />
          Add Team Member
        </Button>
      </motion.div>

      <motion.div variants={item}>
        <Card className="overflow-hidden border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardTitle>Team Performance</CardTitle>
            <CardDescription>Monthly performance metrics</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <TeamPerformance />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="overflow-hidden border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Active team members and roles</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <TeamList />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

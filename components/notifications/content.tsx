"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { NotificationsList } from "@/components/notifications/notifications-list"
import { Bell } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NotificationsContent() {
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
            Notifications
          </h2>
          <p className="text-muted-foreground">System notifications and alerts</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <Bell className="mr-2 h-4 w-4" />
          Mark All as Read
        </Button>
      </motion.div>

      <motion.div variants={item}>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <Card className="overflow-hidden border-none shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                <CardTitle>All Notifications</CardTitle>
                <CardDescription>View all system notifications</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <NotificationsList filter="all" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="unread" className="mt-4">
            <Card className="overflow-hidden border-none shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                <CardTitle>Unread Notifications</CardTitle>
                <CardDescription>View unread notifications</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <NotificationsList filter="unread" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <Card className="overflow-hidden border-none shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage your notification preferences</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Card className="border shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Email Notifications</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Security Alerts</span>
                            <label className="relative inline-flex cursor-pointer items-center">
                              <input type="checkbox" defaultChecked className="peer sr-only" />
                              <div className="h-5 w-9 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-focus:outline-none"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Inventory Alerts</span>
                            <label className="relative inline-flex cursor-pointer items-center">
                              <input type="checkbox" defaultChecked className="peer sr-only" />
                              <div className="h-5 w-9 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-focus:outline-none"></div>
                            </label>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Push Notifications</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Sales Updates</span>
                            <label className="relative inline-flex cursor-pointer items-center">
                              <input type="checkbox" defaultChecked className="peer sr-only" />
                              <div className="h-5 w-9 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-focus:outline-none"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Team Messages</span>
                            <label className="relative inline-flex cursor-pointer items-center">
                              <input type="checkbox" defaultChecked className="peer sr-only" />
                              <div className="h-5 w-9 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-focus:outline-none"></div>
                            </label>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}

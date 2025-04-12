"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

export function SettingsForm() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="appearance">Appearance</TabsTrigger>
      </TabsList>

      <TabsContent value="general">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder-user.jpg" alt="Admin" />
                <AvatarFallback className="text-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                  AD
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                Change Avatar
              </Button>
            </div>

            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" defaultValue="Admin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" defaultValue="User" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="admin@billiance.ai" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select defaultValue="admin">
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </TabsContent>

      <TabsContent value="security">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="two-factor">Two-Factor Authentication</Label>
              <Select defaultValue="disabled">
                <SelectTrigger id="two-factor">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="disabled">Disabled</SelectItem>
                  <SelectItem value="app">Authenticator App</SelectItem>
                  <SelectItem value="sms">SMS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            >
              {isLoading ? "Saving..." : "Update Security Settings"}
            </Button>
          </div>
        </form>
      </TabsContent>

      <TabsContent value="appearance">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Theme</Label>
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer rounded-lg border-2 border-blue-600 p-4 text-center"
              >
                <div className="mb-2 h-20 rounded bg-white"></div>
                <span className="text-sm font-medium">Light</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer rounded-lg border-2 border-transparent p-4 text-center"
              >
                <div className="mb-2 h-20 rounded bg-gray-900"></div>
                <span className="text-sm font-medium">Dark</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer rounded-lg border-2 border-transparent p-4 text-center"
              >
                <div className="mb-2 h-20 rounded bg-gradient-to-b from-white to-gray-900"></div>
                <span className="text-sm font-medium">System</span>
              </motion.div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Accent Color</Label>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="h-8 w-8 cursor-pointer rounded-full bg-blue-600 ring-2 ring-blue-600 ring-offset-2"
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="h-8 w-8 cursor-pointer rounded-full bg-purple-600"
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="h-8 w-8 cursor-pointer rounded-full bg-pink-600"
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="h-8 w-8 cursor-pointer rounded-full bg-green-600"
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="h-8 w-8 cursor-pointer rounded-full bg-amber-600"
              ></motion.div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Save Appearance</Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

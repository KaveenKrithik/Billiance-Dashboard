"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MoreHorizontal } from "lucide-react"
import Link from "next/link"

export function TeamList() {
  const teamMembers = [
    {
      id: "tm-001",
      name: "Tamil Aadhavan",
      role: "Store Manager",
      email: "tamil.a@billiance.ai",
      phone: "123-4567",
      performance: "Excellent",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: "tm-002",
      name: "Tharun S",
      role: "Assistant Manager",
      email: "ts@billiance.ai",
      phone: " 234-5678",
      performance: "Good",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: "tm-003",
      name: "Kaveen Krithik",
      role: "Sales Associate",
      email: "kk@billiance.ai",
      phone: "345-6789",
      performance: "Average",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: "tm-004",
      name: "Murugan",
      role: "Inventory Specialist",
      email: "murugan@billiance.ai",
      phone: "456-7890",
      performance: "Good",
      avatar: "/placeholder-user.jpg",
    },
  ]

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case "Excellent":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Excellent</Badge>
      case "Good":
        return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Good</Badge>
      case "Average":
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">Average</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-4">
      {teamMembers.map((member, index) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border p-4 hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
              <AvatarFallback>
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 self-end sm:self-center">
            {getPerformanceBadge(member.performance)}
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <Link href={`mailto:${member.email}`}>
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <Link href={`tel:${member.phone}`}>
                <Phone className="h-4 w-4" />
                <span className="sr-only">Call</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <Link href={`/team/${member.id}`}>
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

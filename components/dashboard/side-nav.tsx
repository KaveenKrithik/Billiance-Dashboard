"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  BarChart3,
  Database,
  FileText,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Megaphone,
  Settings,
  Store,
  Trash2,
  Users,
  Bell,
  Sparkles,
} from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Statistics",
    href: "/statistics",
    icon: BarChart3,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Database",
    href: "/database",
    icon: Database,
  },
  {
    title: "Team",
    href: "/team",
    icon: Users,
  },
  {
    title: "Promotion",
    href: "/promotion",
    icon: Megaphone,
  },
  {
    title: "My Store",
    href: "/store",
    icon: Store,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Trash",
    href: "/trash",
    icon: Trash2,
  },
]

export function SideNav() {
  const pathname = usePathname()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="hidden border-r bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-800 text-white md:block md:w-64">
      <div className="flex h-full flex-col">
        <motion.div
          className="flex h-16 items-center border-b border-zinc-800 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
              <div className="absolute inset-0.5 rounded-full bg-zinc-900 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-blue-400" />
              </div>
            </div>
            <motion.span
              className="font-bold text-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{
                backgroundPosition: isHovered ? ["0% 50%", "100% 50%"] : "0% 50%",
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              style={{ backgroundSize: "200% 100%" }}
            >
              Billiance AI
            </motion.span>
          </Link>
        </motion.div>
        <ScrollArea className="flex-1 py-4">
          <nav className="grid gap-1 px-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Button
                  asChild
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href
                      ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30"
                      : "text-zinc-400 hover:bg-zinc-800 hover:text-white",
                  )}
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-5 w-5" />
                    {item.title}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </nav>
        </ScrollArea>
        <div className="mt-auto border-t border-zinc-800 p-4">
          <Button
            asChild
            variant="ghost"
            className="w-full justify-start text-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            <Link href="/login">
              <LogOut className="mr-2 h-5 w-5" />
              Log Out
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="w-full justify-start text-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            <Link href="/help">
              <HelpCircle className="mr-2 h-5 w-5" />
              Help
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

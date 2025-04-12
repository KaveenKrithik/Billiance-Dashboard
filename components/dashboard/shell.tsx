"use client"

import type React from "react"
import { useEffect } from "react"
import { SideNav } from "@/components/dashboard/side-nav"
import { motion } from "framer-motion"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  // Initialize smooth scroll
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"

    // Initialize AOS-like scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      document.documentElement.style.scrollBehavior = ""
      observer.disconnect()
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="flex flex-1">
        <SideNav />
        <motion.div className="flex-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">{children}</div>
        </motion.div>
      </div>
    </div>
  )
}

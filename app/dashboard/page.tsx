import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { DashboardContent } from "@/components/dashboard/content"

export const metadata: Metadata = {
  title: "Dashboard | BillianceAI",
  description: "Intelligent retail analytics and management dashboard",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Welcome to your BillianceAI dashboard" />
      <DashboardContent />
    </DashboardShell>
  )
}

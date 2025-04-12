import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { StatisticsContent } from "@/components/statistics/content"

export const metadata: Metadata = {
  title: "Statistics | BillianceAI",
  description: "Detailed statistics and analytics",
}

export default function StatisticsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Statistics" text="Detailed analytics and performance metrics" />
      <StatisticsContent />
    </DashboardShell>
  )
}

import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { ReportsContent } from "@/components/reports/content"

export const metadata: Metadata = {
  title: "Reports | BillianceAI",
  description: "Generated reports and insights",
}

export default function ReportsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Reports" text="Generated reports and insights" />
      <ReportsContent />
    </DashboardShell>
  )
}

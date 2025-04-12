import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { DatabaseContent } from "@/components/database/content"

export const metadata: Metadata = {
  title: "Database | BillianceAI",
  description: "Database management and insights",
}

export default function DatabasePage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Database" text="Manage your data and connections" />
      <DatabaseContent />
    </DashboardShell>
  )
}

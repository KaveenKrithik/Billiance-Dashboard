import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { TrashContent } from "@/components/trash/content"

export const metadata: Metadata = {
  title: "Trash | BillianceAI",
  description: "Deleted items and recovery",
}

export default function TrashPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Trash" text="Deleted items and recovery" />
      <TrashContent />
    </DashboardShell>
  )
}

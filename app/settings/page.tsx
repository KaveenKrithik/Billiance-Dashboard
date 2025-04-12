import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { SettingsContent } from "@/components/settings/content"

export const metadata: Metadata = {
  title: "Settings | BillianceAI",
  description: "System settings and preferences",
}

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Settings" text="System settings and preferences" />
      <SettingsContent />
    </DashboardShell>
  )
}

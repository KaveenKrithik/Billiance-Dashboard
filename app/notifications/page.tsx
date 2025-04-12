import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { NotificationsContent } from "@/components/notifications/content"

export const metadata: Metadata = {
  title: "Notifications | BillianceAI",
  description: "System notifications and alerts",
}

export default function NotificationsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Notifications" text="System notifications and alerts" />
      <NotificationsContent />
    </DashboardShell>
  )
}

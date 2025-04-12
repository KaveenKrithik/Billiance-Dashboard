import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { TeamContent } from "@/components/team/content"

export const metadata: Metadata = {
  title: "Team | Billiance AI",
  description: "Team management and performance",
}

export default function TeamPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Team" text="Manage your team and track performance" />
      <TeamContent />
    </DashboardShell>
  )
}

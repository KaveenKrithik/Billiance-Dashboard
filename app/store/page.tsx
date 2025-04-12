import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { StoreContent } from "@/components/store/content"

export const metadata: Metadata = {
  title: "My Store | BillianceAI",
  description: "Store management and analytics",
}

export default function StorePage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="My Store" text="Manage your store and inventory" />
      <StoreContent />
    </DashboardShell>
  )
}

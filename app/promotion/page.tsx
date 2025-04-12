import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { PromotionContent } from "@/components/promotion/content"

export const metadata: Metadata = {
  title: "Promotion | Billiance AI",
  description: "Marketing and promotion tools",
}

export default function PromotionPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Promotion" text="Marketing campaigns and promotional tools" />
      <PromotionContent />
    </DashboardShell>
  )
}

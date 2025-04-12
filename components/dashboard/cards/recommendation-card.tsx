"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function RecommendationCard() {
  const recommendations = [
    {
      product: "Hydrating Face Serum",
      category: "Skincare",
      confidence: 92,
      href: "/store/products/hydrating-face-serum",
    },
    {
      product: "Vitamin C Moisturizer",
      category: "Skincare",
      confidence: 87,
      href: "/store/products/vitamin-c-moisturizer",
    },
    {
      product: "Silk Pillowcase",
      category: "Home",
      confidence: 76,
      href: "/store/products/silk-pillowcase",
    },
  ]

  return (
    <div className="mt-4">
      <h3 className="mb-4 text-lg font-medium">Top Recommendations</h3>

      <div className="space-y-3">
        {recommendations.map((item, index) => (
          <motion.div
            key={item.product}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            <Link href={item.href}>
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-200">
                <CardContent className="flex items-center justify-between p-3 bg-gradient-to-r from-white to-blue-50 hover:from-blue-50 hover:to-blue-100 transition-colors duration-200">
                  <div>
                    <p className="font-medium">{item.product}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs bg-blue-50 text-blue-600 border-blue-200">
                        {item.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{item.confidence}% match</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-blue-500" />
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

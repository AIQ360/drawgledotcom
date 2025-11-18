import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MiniAreaChart } from "@/components/dashboard/mini-stats"
import { cn } from "@/lib/utils"
import { commonPageMetadata } from '@/lib/seo'

export const metadata: Metadata = commonPageMetadata.dashboard()

export default function DashboardPage() {
  return (
    <div className={cn("grid gap-4", "md:grid-cols-2 lg:grid-cols-4")}>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground">Revenue</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">$82,450</CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground">Orders</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">1,284</CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground">Customers</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">3,912</CardContent>
      </Card>

      <Card className="lg:col-span-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground">Conversion</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">3.7%</CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-3">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">Revenue (Last 7 days)</CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <MiniAreaChart />
        </CardContent>
      </Card>
    </div>
  )
}
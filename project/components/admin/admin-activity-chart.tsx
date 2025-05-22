"use client"

import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  LineChart, 
  Line, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts"

// Mock data - would come from API in production
const dailyActivityData = [
  { name: "Mon", users: 120, points: 5400, tasks: 340 },
  { name: "Tue", users: 132, points: 6200, tasks: 362 },
  { name: "Wed", users: 101, points: 4900, tasks: 290 },
  { name: "Thu", users: 134, points: 6800, tasks: 375 },
  { name: "Fri", users: 190, points: 8700, tasks: 401 },
  { name: "Sat", users: 230, points: 9600, tasks: 465 },
  { name: "Sun", users: 210, points: 8400, tasks: 432 }
]

const weeklyActivityData = [
  { name: "Week 1", users: 845, points: 35000, tasks: 2240 },
  { name: "Week 2", users: 967, points: 42000, tasks: 2562 },
  { name: "Week 3", users: 1123, points: 48000, tasks: 2790 },
  { name: "Week 4", users: 1231, points: 52000, tasks: 3075 }
]

const monthlyActivityData = [
  { name: "Jan", users: 3200, points: 145000, tasks: 9340 },
  { name: "Feb", users: 3800, points: 162000, tasks: 10200 },
  { name: "Mar", users: 4100, points: 189000, tasks: 11500 },
  { name: "Apr", users: 4700, points: 210000, tasks: 12400 },
  { name: "May", users: 5100, points: 245000, tasks: 13600 }
]

export function AdminActivityChart() {
  const [mounted, setMounted] = useState(false)
  
  // Handle hydration mismatch with Recharts
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Platform Activity</CardTitle>
          <CardDescription>Loading chart data...</CardDescription>
        </CardHeader>
        <CardContent className="h-[350px] flex items-center justify-center">
          Loading chart...
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Activity</CardTitle>
        <CardDescription>
          Visualize user engagement, points awarded, and tasks completed
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="daily">
          <TabsList className="mb-4">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          
          <TabsContent value="daily" className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyActivityData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="users" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={{ strokeWidth: 2 }} />
                <Line yAxisId="right" type="monotone" dataKey="tasks" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={{ strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="weekly" className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyActivityData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="users" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={{ strokeWidth: 2 }} />
                <Line yAxisId="right" type="monotone" dataKey="tasks" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={{ strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="monthly" className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyActivityData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="users" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={{ strokeWidth: 2 }} />
                <Line yAxisId="right" type="monotone" dataKey="tasks" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={{ strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
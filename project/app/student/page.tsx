"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { StudentStats } from "@/components/student/student-stats"
import { RecommendedJobs } from "@/components/student/recommended-jobs"
import { TasksList } from "@/components/student/tasks-list"
import { RecentActivities } from "@/components/student/recent-activities"

export default function StudentDashboardPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  
  useEffect(() => {
    if (!loading && (!user || user.role !== "student")) {
      router.push("/sign-in")
    }
  }, [user, loading, router])

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (!user || user.role !== "student") {
    return null
  }

  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Student Dashboard" 
        text="Welcome back! Here's an overview of your progress and opportunities."
      />
      
      <div className="grid gap-6">
        <StudentStats />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TasksList />
          <RecentActivities />
        </div>
        
        <RecommendedJobs />
      </div>
    </DashboardShell>
  )
}
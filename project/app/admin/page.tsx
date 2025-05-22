"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { AdminStats } from "@/components/admin/admin-stats"
import { UserManagementSummary } from "@/components/admin/user-management-summary"
import { JobManagementSummary } from "@/components/admin/job-management-summary"
import { AdminActivityChart } from "@/components/admin/admin-activity-chart"

export default function AdminDashboardPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  
  useEffect(() => {
    if (!loading && (!user || user.role !== "admin")) {
      router.push("/sign-in")
    }
  }, [user, loading, router])

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (!user || user.role !== "admin") {
    return null
  }

  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Admin Dashboard" 
        text="Monitor platform activity and manage users and content."
      />
      
      <div className="grid gap-6">
        <AdminStats />
        
        <div className="grid grid-cols-1 gap-6">
          <AdminActivityChart />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UserManagementSummary />
            <JobManagementSummary />
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
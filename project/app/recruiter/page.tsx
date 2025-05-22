"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { RecruiterStats } from "@/components/recruiter/recruiter-stats"
import { JobsList } from "@/components/recruiter/jobs-list"
import { ApplicantsSummary } from "@/components/recruiter/applicants-summary"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function RecruiterDashboardPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  
  useEffect(() => {
    if (!loading && (!user || user.role !== "recruiter")) {
      router.push("/sign-in")
    }
  }, [user, loading, router])

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (!user || user.role !== "recruiter") {
    return null
  }

  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Recruiter Dashboard" 
        text="Manage your job postings and view applicant information."
      >
        <Link href="/recruiter/post-job">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Post a Job
          </Button>
        </Link>
      </DashboardHeader>
      
      <div className="grid gap-6">
        <RecruiterStats />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <JobsList />
          <ApplicantsSummary />
        </div>
      </div>
    </DashboardShell>
  )
}
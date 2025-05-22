"use client"

import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, X, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data - would come from API in production
const jobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    status: "approved",
    submittedDate: "May 15, 2023"
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "DataSystems",
    status: "pending",
    submittedDate: "May 18, 2023"
  },
  {
    id: "3",
    title: "UI/UX Designer",
    company: "DesignHub",
    status: "pending",
    submittedDate: "May 19, 2023"
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudTech",
    status: "rejected",
    submittedDate: "May 14, 2023"
  }
]

export function JobManagementSummary() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Job Management</CardTitle>
        <CardDescription>Review and approve job listings</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {jobs.map((job) => (
            <div key={job.id} className="flex items-center gap-4 p-4">
              <div className={`rounded-full p-1.5 ${
                job.status === "approved" ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400" :
                job.status === "pending" ? "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400" :
                "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400"
              }`}>
                {job.status === "approved" ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : job.status === "pending" ? (
                  <Clock className="h-4 w-4" />
                ) : (
                  <X className="h-4 w-4" />
                )}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">{job.title}</p>
                  <Badge variant={
                    job.status === "approved" ? "default" :
                    job.status === "pending" ? "secondary" : 
                    "destructive"
                  }>
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                  </Badge>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>{job.company}</span>
                  <span className="mx-1">•</span>
                  <span>Submitted: {job.submittedDate}</span>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {job.status === "pending" && (
                    <>
                      <DropdownMenuItem>Approve Job</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Reject Job</DropdownMenuItem>
                    </>
                  )}
                  {job.status === "approved" && (
                    <DropdownMenuItem className="text-destructive">Remove Job</DropdownMenuItem>
                  )}
                  {job.status === "rejected" && (
                    <DropdownMenuItem>Reconsider Job</DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-6 py-3">
        <Button variant="ghost" className="w-full justify-start text-sm font-medium" asChild>
          <Link href="/admin/jobs">View All Jobs</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
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
import { Calendar, Users, Eye, MoreHorizontal } from "lucide-react"
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
    location: "San Francisco, CA (Remote)",
    status: "active",
    datePosted: "May 15, 2023",
    applicants: 24,
    views: 346
  },
  {
    id: "2",
    title: "Backend Engineer",
    location: "New York, NY (Hybrid)",
    status: "active",
    datePosted: "May 10, 2023",
    applicants: 18,
    views: 289
  },
  {
    id: "3",
    title: "Full Stack Developer",
    location: "Austin, TX (On-site)",
    status: "active",
    datePosted: "May 5, 2023",
    applicants: 32,
    views: 512
  },
  {
    id: "4",
    title: "UI/UX Designer",
    location: "Chicago, IL (Remote)",
    status: "expired",
    datePosted: "April 20, 2023",
    applicants: 15,
    views: 245
  }
]

export function JobsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Job Postings</CardTitle>
        <CardDescription>Manage your active and past job listings</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {jobs.map((job) => (
            <div key={job.id} className="p-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{job.title}</h3>
                    <Badge variant={job.status === "active" ? "default" : "secondary"}>
                      {job.status === "active" ? "Active" : "Expired"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
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
                    <DropdownMenuItem>Edit Job</DropdownMenuItem>
                    <DropdownMenuItem>View Applicants</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {job.status === "active" ? (
                      <DropdownMenuItem className="text-destructive">Close Listing</DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem>Repost Job</DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Posted: {job.datePosted}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  <span>{job.applicants} applicants</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" />
                  <span>{job.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-6 py-3">
        <Button variant="ghost" className="w-full justify-start text-sm font-medium" asChild>
          <Link href="/recruiter/jobs">View All Jobs</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
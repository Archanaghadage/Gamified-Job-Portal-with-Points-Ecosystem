"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { JobCard } from "@/components/job-card"

// Mock job data - would come from an API in production
const mockJobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA (Remote)",
    salary: "$90k - $110k",
    postedDate: "2 days ago",
    description: "We are looking for a skilled Frontend Developer proficient in React, TypeScript, and modern web technologies.",
    skillsRequired: ["React", "TypeScript", "Tailwind CSS"],
    applicants: 24
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "DataSystems",
    location: "New York, NY (Hybrid)",
    salary: "$100k - $130k",
    postedDate: "5 days ago",
    description: "Join our team as a Backend Engineer to develop scalable APIs and microservices using Node.js.",
    skillsRequired: ["Node.js", "Express", "MongoDB"],
    applicants: 18
  },
  {
    id: "3",
    title: "Full Stack Developer",
    company: "GrowthLabs",
    location: "Austin, TX (On-site)",
    salary: "$85k - $120k",
    postedDate: "1 week ago",
    description: "Looking for a Full Stack Developer to work on our flagship product using modern JavaScript frameworks.",
    skillsRequired: ["React", "Node.js", "PostgreSQL"],
    applicants: 32
  }
]

export function RecommendedJobs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Jobs</CardTitle>
        <CardDescription>Personalized job recommendations based on your profile</CardDescription>
      </CardHeader>
      <CardContent className="px-2 sm:px-6">
        <div className="grid gap-4">
          {mockJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-6 py-3">
        <Button variant="ghost" className="w-full justify-start text-sm font-medium" asChild>
          <Link href="/jobs">View All Jobs</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
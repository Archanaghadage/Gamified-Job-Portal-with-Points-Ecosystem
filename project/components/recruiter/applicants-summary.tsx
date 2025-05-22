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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Award } from "lucide-react"

// Mock data - would come from API in production
const applicants = [
  {
    id: "1",
    name: "Alex Johnson",
    position: "Frontend Developer",
    avatar: "https://i.pravatar.cc/150?img=1",
    points: 3200,
    status: "new"
  },
  {
    id: "2",
    name: "Sarah Miller",
    position: "Backend Engineer",
    avatar: "https://i.pravatar.cc/150?img=2",
    points: 4500,
    status: "reviewed"
  },
  {
    id: "3",
    name: "David Lee",
    position: "Full Stack Developer",
    avatar: "https://i.pravatar.cc/150?img=3",
    points: 2800,
    status: "new"
  },
  {
    id: "4",
    name: "Emma Wilson",
    position: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=4",
    points: 3700,
    status: "contacted"
  }
]

export function ApplicantsSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Applicants</CardTitle>
        <CardDescription>View candidates who recently applied to your jobs</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {applicants.map((applicant) => (
            <div key={applicant.id} className="flex items-center gap-4 p-4">
              <Avatar>
                <AvatarImage src={applicant.avatar} alt={applicant.name} />
                <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{applicant.name}</p>
                  <Badge variant={
                    applicant.status === "new" ? "default" :
                    applicant.status === "reviewed" ? "secondary" : 
                    "outline"
                  }>
                    {applicant.status === "new" ? "New" : 
                     applicant.status === "reviewed" ? "Reviewed" : "Contacted"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{applicant.position}</p>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium">
                <Award className="h-4 w-4 text-amber-500" />
                <span>{applicant.points} pts</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-6 py-3">
        <Button variant="ghost" className="w-full justify-start text-sm font-medium" asChild>
          <Link href="/recruiter/applicants">View All Applicants</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
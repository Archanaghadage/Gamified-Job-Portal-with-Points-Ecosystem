"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, DollarSign, Clock, Users } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface JobCardProps {
  job: {
    id: string
    title: string
    company: string
    location: string
    salary: string
    postedDate: string
    description: string
    skillsRequired: string[]
    applicants: number
  }
}

export function JobCard({ job }: JobCardProps) {
  const { toast } = useToast()
  const [isApplied, setIsApplied] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const handleApply = () => {
    setIsApplied(true)
    toast({
      title: "Application Submitted!",
      description: `You've earned 5 points for applying to ${job.title} at ${job.company}.`,
      variant: "default",
    })
  }

  const handleSave = () => {
    setIsSaved(!isSaved)
    toast({
      title: isSaved ? "Job Removed" : "Job Saved",
      description: isSaved 
        ? `Removed ${job.title} from your saved jobs.` 
        : `Saved ${job.title} to your job list for later.`,
      variant: "default",
    })
  }

  return (
    <div className="rounded-lg border bg-card p-5 shadow-sm transition-all hover:shadow">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="space-y-2">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg">{job.title}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Briefcase className="h-3.5 w-3.5" />
                <span>{job.company}</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                <span>{job.location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {job.skillsRequired.map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground">{job.description}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-1">
            <div className="flex items-center gap-1">
              <DollarSign className="h-3.5 w-3.5" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{job.postedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              <span>{job.applicants} applicants</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-row md:flex-col gap-2 self-end md:self-center">
          <Button
            onClick={handleApply}
            disabled={isApplied}
            className="transition-all"
          >
            {isApplied ? "Applied" : "Apply"}
          </Button>
          <Button
            variant="outline"
            onClick={handleSave}
            className="transition-all"
          >
            {isSaved ? "Saved" : "Save"}
          </Button>
        </div>
      </div>
    </div>
  )
}
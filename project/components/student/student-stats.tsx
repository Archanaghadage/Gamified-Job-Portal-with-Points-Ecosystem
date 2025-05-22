"use client"

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@/components/auth-provider"
import { 
  Award, 
  CheckCircle2, 
  Briefcase, 
  Users,
  TrendingUp
} from "lucide-react"

export function StudentStats() {
  const { user } = useAuth()
  const points = user?.points || 0
  
  // Calculate progress to next milestone (e.g., 5000 points)
  const nextMilestone = 5000
  const progress = Math.min(Math.round((points / nextMilestone) * 100), 100)
  
  // Mock data - would come from real API in production
  const rank = 42
  const appliedJobs = 15
  const completedTasks = 24
  const successfulReferrals = 3

  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Progress Overview</CardTitle>
          <CardDescription>
            You are {progress}% of the way to your next milestone
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{points} points</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Goal: {nextMilestone} points
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Leaderboard Rank
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#{rank}</div>
            <p className="text-xs text-muted-foreground">
              Top 5% of all students
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Applied Jobs
            </CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{appliedJobs}</div>
            <p className="text-xs text-muted-foreground">
              +3 in the last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Tasks
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedTasks}</div>
            <p className="text-xs text-muted-foreground">
              +5 in the last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Successful Referrals
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{successfulReferrals}</div>
            <p className="text-xs text-muted-foreground">
              +1 in the last month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
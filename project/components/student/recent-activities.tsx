"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { 
  Briefcase, 
  CheckCircle2, 
  Upload, 
  Users, 
  Clock 
} from "lucide-react"

// Mock data - would come from an API in production
const activities = [
  {
    id: "1",
    type: "task_completed",
    title: "Daily Sign-In",
    points: 10,
    date: "Today, 9:30 AM",
    icon: <CheckCircle2 className="h-4 w-4" />
  },
  {
    id: "2",
    type: "job_applied",
    title: "Frontend Developer at TechCorp",
    points: 5,
    date: "Yesterday, 2:15 PM",
    icon: <Briefcase className="h-4 w-4" />
  },
  {
    id: "3",
    type: "profile_updated",
    title: "Profile Photo Updated",
    points: 0,
    date: "Yesterday, 11:00 AM",
    icon: <Upload className="h-4 w-4" />
  },
  {
    id: "4",
    type: "referral_signup",
    title: "Sarah joined via your referral",
    points: 200,
    date: "2 days ago",
    icon: <Users className="h-4 w-4" />
  },
  {
    id: "5",
    type: "job_applied",
    title: "Full Stack Developer at GrowthLabs",
    points: 5,
    date: "3 days ago",
    icon: <Briefcase className="h-4 w-4" />
  }
]

export function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>Your activity history from the past week</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 p-4">
              <div className={`rounded-full p-2 ${
                activity.type === "task_completed" ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400" :
                activity.type === "job_applied" ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400" :
                activity.type === "referral_signup" ? "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400" :
                "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              }`}>
                {activity.icon}
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium">{activity.title}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>{activity.date}</span>
                </div>
              </div>
              {activity.points > 0 && (
                <div className="text-sm font-medium text-green-600 dark:text-green-400">
                  +{activity.points} pts
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-6 py-3">
        <div className="flex w-full justify-between items-center text-sm">
          <span className="text-muted-foreground">Total Points This Week:</span>
          <span className="font-medium">+220 pts</span>
        </div>
      </CardFooter>
    </Card>
  )
}
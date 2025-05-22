"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckCircle2, Clock, PlusCircle, Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type Task = {
  id: string
  title: string
  description: string
  points: number
  completed: boolean
  type: "daily" | "one-time" | "repeatable"
}

export function TasksList() {
  const { toast } = useToast()
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Daily Sign-In",
      description: "Check in once per day",
      points: 10,
      completed: true,
      type: "daily"
    },
    {
      id: "2",
      title: "Upload Resume",
      description: "Add or update your resume PDF",
      points: 20,
      completed: false,
      type: "one-time"
    },
    {
      id: "3",
      title: "Complete Profile",
      description: "Fill out all profile fields",
      points: 50,
      completed: false,
      type: "one-time"
    },
    {
      id: "4",
      title: "Apply for a Job",
      description: "Click Apply on a job listing",
      points: 5,
      completed: false,
      type: "repeatable"
    },
    {
      id: "5",
      title: "Refer a Peer",
      description: "Share your unique referral link",
      points: 200,
      completed: false,
      type: "repeatable"
    }
  ])

  const completeTask = (taskId: string) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const updatedTask = { ...task, completed: true }
        toast({
          title: "Task Completed!",
          description: `You earned ${task.points} points for completing "${task.title}"`,
          variant: "default",
        })
        return updatedTask
      }
      return task
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Tasks</CardTitle>
        <CardDescription>Complete tasks to earn points</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {tasks.map((task) => (
            <div 
              key={task.id}
              className={`flex items-center justify-between p-4 ${
                task.completed ? "bg-muted/50" : ""
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {task.completed ? (
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  ) : (
                    task.type === "daily" ? (
                      <Clock className="h-4 w-4 text-amber-500" />
                    ) : task.type === "one-time" ? (
                      <PlusCircle className="h-4 w-4 text-blue-500" />
                    ) : (
                      <Upload className="h-4 w-4 text-green-500" />
                    )
                  )}
                  <p className={`font-medium ${task.completed ? "text-muted-foreground line-through" : ""}`}>
                    {task.title}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{task.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm font-medium">
                  +{task.points} pts
                </div>
                {!task.completed && (
                  <Button 
                    onClick={() => completeTask(task.id)} 
                    size="sm"
                    variant="outline"
                  >
                    Complete
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-6 py-3">
        <Button variant="ghost" className="w-full justify-start text-sm font-medium">
          View All Tasks
        </Button>
      </CardFooter>
    </Card>
  )
}
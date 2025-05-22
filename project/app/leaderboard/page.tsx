"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search, Award, Medal } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data - would come from API in production
const leaderboardData = [
  {
    id: "1",
    name: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    points: 5250,
    rank: 1,
    school: "Stanford University",
    skills: ["React", "TypeScript", "Node.js"],
    referrals: 8
  },
  {
    id: "2",
    name: "Sarah Miller",
    avatar: "https://i.pravatar.cc/150?img=2",
    points: 4800,
    rank: 2,
    school: "MIT",
    skills: ["Python", "Django", "Machine Learning"],
    referrals: 6
  },
  {
    id: "3",
    name: "David Lee",
    avatar: "https://i.pravatar.cc/150?img=3",
    points: 4650,
    rank: 3,
    school: "UC Berkeley",
    skills: ["JavaScript", "React", "CSS"],
    referrals: 5
  },
  {
    id: "4",
    name: "Emma Wilson",
    avatar: "https://i.pravatar.cc/150?img=4",
    points: 4200,
    rank: 4,
    school: "Harvard University",
    skills: ["Java", "Spring Boot", "SQL"],
    referrals: 4
  },
  {
    id: "5",
    name: "Michael Brown",
    avatar: "https://i.pravatar.cc/150?img=5",
    points: 3950,
    rank: 5,
    school: "Cornell University",
    skills: ["C++", "Python", "Data Structures"],
    referrals: 3
  },
  {
    id: "6",
    name: "Jessica Taylor",
    avatar: "https://i.pravatar.cc/150?img=6",
    points: 3800,
    rank: 6,
    school: "UCLA",
    skills: ["UX Design", "Figma", "UI Development"],
    referrals: 7
  },
  {
    id: "7",
    name: "Ryan Garcia",
    avatar: "https://i.pravatar.cc/150?img=7",
    points: 3650,
    rank: 7,
    school: "University of Michigan",
    skills: ["DevOps", "AWS", "Docker"],
    referrals: 2
  },
  {
    id: "8",
    name: "Olivia Martinez",
    avatar: "https://i.pravatar.cc/150?img=8",
    points: 3500,
    rank: 8,
    school: "Columbia University",
    skills: ["Mobile Development", "React Native", "Flutter"],
    referrals: 4
  },
  {
    id: "9",
    name: "Daniel Kim",
    avatar: "https://i.pravatar.cc/150?img=9",
    points: 3350,
    rank: 9,
    school: "University of Washington",
    skills: ["Data Science", "Python", "TensorFlow"],
    referrals: 3
  },
  {
    id: "10",
    name: "Sophia Chen",
    avatar: "https://i.pravatar.cc/150?img=10",
    points: 3200,
    rank: 10,
    school: "Georgia Tech",
    skills: ["Cybersecurity", "Network Security", "Ethical Hacking"],
    referrals: 2
  }
];

export default function LeaderboardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [skillFilter, setSkillFilter] = useState("")
  const [schoolFilter, setSchoolFilter] = useState("")
  
  const filteredLeaderboard = leaderboardData.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSkill = !skillFilter || user.skills.some(skill => 
      skill.toLowerCase().includes(skillFilter.toLowerCase())
    )
    const matchesSchool = !schoolFilter || user.school.toLowerCase().includes(schoolFilter.toLowerCase())
    
    return matchesSearch && matchesSkill && matchesSchool
  })

  return (
    <div className="container py-8">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mb-4">
          <Award className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Student Leaderboard</h1>
        <p className="text-muted-foreground max-w-[600px] mt-2">
          Top performers based on points earned through tasks, job applications, and referrals
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Points Leaderboard</CardTitle>
              <CardDescription>
                Rankings are updated in real-time as students earn points
              </CardDescription>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="relative w-full md:w-[240px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="weekly">Weekly Top</TabsTrigger>
                <TabsTrigger value="monthly">Monthly Top</TabsTrigger>
              </TabsList>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Select value={skillFilter} onValueChange={setSkillFilter}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Filter by skill" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Skills</SelectItem>
                    <SelectItem value="React">React</SelectItem>
                    <SelectItem value="Python">Python</SelectItem>
                    <SelectItem value="JavaScript">JavaScript</SelectItem>
                    <SelectItem value="DevOps">DevOps</SelectItem>
                    <SelectItem value="UX Design">UX Design</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={schoolFilter} onValueChange={setSchoolFilter}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Filter by school" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Schools</SelectItem>
                    <SelectItem value="Stanford">Stanford</SelectItem>
                    <SelectItem value="MIT">MIT</SelectItem>
                    <SelectItem value="Berkeley">UC Berkeley</SelectItem>
                    <SelectItem value="Harvard">Harvard</SelectItem>
                    <SelectItem value="UCLA">UCLA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <TabsContent value="all" className="m-0">
              <div className="relative overflow-x-auto rounded-md border">
                <table className="w-full text-sm">
                  <thead className="bg-muted text-muted-foreground">
                    <tr>
                      <th className="w-[60px] px-4 py-3 text-center">Rank</th>
                      <th className="px-4 py-3 text-left">Student</th>
                      <th className="px-4 py-3 text-left hidden md:table-cell">School</th>
                      <th className="px-4 py-3 text-left hidden lg:table-cell">Skills</th>
                      <th className="px-4 py-3 text-center hidden sm:table-cell">Referrals</th>
                      <th className="px-4 py-3 text-center">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeaderboard.map((user, index) => (
                      <tr 
                        key={user.id} 
                        className={`border-b bg-card hover:bg-muted/50 ${
                          index < 3 ? "bg-amber-50/50 dark:bg-amber-950/10" : ""
                        }`}
                      >
                        <td className="px-4 py-3 text-center">
                          {index < 3 ? (
                            <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground">
                              <Medal className="h-3.5 w-3.5" />
                            </div>
                          ) : (
                            <span className="font-medium">{user.rank}</span>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 hidden md:table-cell text-muted-foreground">
                          {user.school}
                        </td>
                        <td className="px-4 py-3 hidden lg:table-cell">
                          <div className="flex flex-wrap gap-1">
                            {user.skills.slice(0, 2).map((skill, i) => (
                              <span 
                                key={i} 
                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                              >
                                {skill}
                              </span>
                            ))}
                            {user.skills.length > 2 && (
                              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                                +{user.skills.length - 2}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-center hidden sm:table-cell">
                          {user.referrals}
                        </td>
                        <td className="px-4 py-3 text-center font-bold">
                          {user.points.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="weekly" className="m-0">
              <div className="p-6 text-center border rounded-md bg-muted/50">
                <p className="text-muted-foreground">Weekly rankings data will be displayed here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="monthly" className="m-0">
              <div className="p-6 text-center border rounded-md bg-muted/50">
                <p className="text-muted-foreground">Monthly rankings data will be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="border-t px-6 py-4 bg-muted/50">
          <div className="text-xs text-muted-foreground">
            Leaderboard last updated: {new Date().toLocaleString()}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
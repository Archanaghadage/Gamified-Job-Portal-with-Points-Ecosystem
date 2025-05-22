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
import { MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data - would come from API in production
const users = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "student",
    status: "active",
    avatar: "https://i.pravatar.cc/150?img=1",
    joinDate: "May 15, 2023"
  },
  {
    id: "2",
    name: "Sarah Miller",
    email: "sarah@example.com",
    role: "student",
    status: "active",
    avatar: "https://i.pravatar.cc/150?img=2",
    joinDate: "May 10, 2023"
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael@techcorp.com",
    role: "recruiter",
    status: "active",
    avatar: "https://i.pravatar.cc/150?img=3",
    joinDate: "April 28, 2023"
  },
  {
    id: "4",
    name: "Emma Wilson",
    email: "emma@example.com",
    role: "student",
    status: "inactive",
    avatar: "https://i.pravatar.cc/150?img=4",
    joinDate: "April 15, 2023"
  }
]

export function UserManagementSummary() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>User Management</CardTitle>
        <CardDescription>Recent user registrations and account statuses</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {users.map((user) => (
            <div key={user.id} className="flex items-center gap-4 p-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">{user.name}</p>
                  <Badge variant={
                    user.role === "admin" ? "default" :
                    user.role === "recruiter" ? "secondary" : 
                    "outline"
                  }>
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </Badge>
                  {user.status === "inactive" && (
                    <Badge variant="destructive">Inactive</Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{user.email}</p>
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
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Edit User</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {user.status === "active" ? (
                    <DropdownMenuItem className="text-destructive">Suspend User</DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem>Activate User</DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-6 py-3">
        <Button variant="ghost" className="w-full justify-start text-sm font-medium" asChild>
          <Link href="/admin/users">View All Users</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
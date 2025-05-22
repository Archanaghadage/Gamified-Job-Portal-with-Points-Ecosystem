import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Medal, Briefcase, GraduationCap, TrendingUp, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Level Up Your Career with <span className="text-primary">TalentHub</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Earn points, climb the leaderboard, and connect with top companies through our gamified job portal.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link href="/sign-up">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/leaderboard">
                <Button variant="outline" size="lg">View Leaderboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                How It Works
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                A simple but powerful approach to revolutionize your job search
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border">
                <div className="rounded-full p-3 bg-primary/10 mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Complete Tasks</h3>
                <p className="text-muted-foreground">
                  Sign in daily, upload your resume, apply for jobs, and refer friends to earn points.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border">
                <div className="rounded-full p-3 bg-primary/10 mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Climb the Ranks</h3>
                <p className="text-muted-foreground">
                  Accumulate points to rise on the leaderboard and unlock achievements and milestones.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border">
                <div className="rounded-full p-3 bg-primary/10 mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Stand Out to Recruiters</h3>
                <p className="text-muted-foreground">
                  High scores make your profile more visible to companies looking for top talent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points System Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Earn Points Through Actions
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Every career-focused activity brings you closer to your next opportunity
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start p-6 bg-card rounded-lg shadow-sm border">
              <div className="flex-shrink-0 mr-4">
                <div className="rounded-full h-10 w-10 flex items-center justify-center bg-primary/10">
                  <span className="font-bold text-primary">10</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Daily Sign-In</h3>
                <p className="text-sm text-muted-foreground">Check in once per day to maintain your streak</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-card rounded-lg shadow-sm border">
              <div className="flex-shrink-0 mr-4">
                <div className="rounded-full h-10 w-10 flex items-center justify-center bg-primary/10">
                  <span className="font-bold text-primary">200</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Refer a Peer</h3>
                <p className="text-sm text-muted-foreground">Unique referral link generates points on signup</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-card rounded-lg shadow-sm border">
              <div className="flex-shrink-0 mr-4">
                <div className="rounded-full h-10 w-10 flex items-center justify-center bg-primary/10">
                  <span className="font-bold text-primary">5</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Apply for a Job</h3>
                <p className="text-sm text-muted-foreground">Click "Apply" on a job listing via portal</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-card rounded-lg shadow-sm border">
              <div className="flex-shrink-0 mr-4">
                <div className="rounded-full h-10 w-10 flex items-center justify-center bg-primary/10">
                  <span className="font-bold text-primary">20</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Upload Resume</h3>
                <p className="text-sm text-muted-foreground">Add or update your resume PDF/profile document</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-card rounded-lg shadow-sm border">
              <div className="flex-shrink-0 mr-4">
                <div className="rounded-full h-10 w-10 flex items-center justify-center bg-primary/10">
                  <span className="font-bold text-primary">50</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Complete Profile</h3>
                <p className="text-sm text-muted-foreground">Fill out all profile fields (education, skills)</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-card rounded-lg shadow-sm border border-dashed">
              <div className="flex-shrink-0 mr-4">
                <div className="rounded-full h-10 w-10 flex items-center justify-center bg-primary/10">
                  <span className="font-bold text-primary">?</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Bonus Points</h3>
                <p className="text-sm text-muted-foreground">Special challenges and milestones unlock additional rewards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Recruiters Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                For Recruiters
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Connect with motivated candidates who are actively improving their skills and demonstrating their commitment through our points system.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Medal className="h-5 w-5 text-primary mt-0.5" />
                  <span>Access a leaderboard of the most engaged candidates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Medal className="h-5 w-5 text-primary mt-0.5" />
                  <span>Filter applicants by points, skills, and other criteria</span>
                </li>
                <li className="flex items-start gap-2">
                  <Medal className="h-5 w-5 text-primary mt-0.5" />
                  <span>Post jobs and reach the most motivated talent</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/sign-up">
                  <Button>Join as Recruiter</Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Latest Student Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Alex J. reached 5000 points</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Sarah M. referred 5 friends</p>
                    <p className="text-sm text-muted-foreground">Yesterday</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">David L. completed 20 job applications</p>
                    <p className="text-sm text-muted-foreground">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Job Search?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Join thousands of students and recruiters already using TalentHub.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link href="/sign-up">
                <Button size="lg" variant="secondary">Create Your Account</Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="outline" size="lg">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
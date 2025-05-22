import Link from 'next/link'
import { Briefcase } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between py-6 md:py-8">
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">TalentHub</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Gamified job portal connecting students and recruiters
          </p>
        </div>

        <div className="mt-6 md:mt-0 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">For Students</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/jobs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Browse Jobs
              </Link>
              <Link href="/leaderboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Leaderboard
              </Link>
              <Link href="/referrals" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Referrals
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">For Recruiters</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/post-job" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Post a Job
              </Link>
              <Link href="/find-talent" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Find Talent
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <h3 className="text-sm font-medium">Legal</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
      
      <div className="border-t py-4">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TalentHub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
"use client"

import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

type User = {
  id: string
  name: string
  email: string
  image?: string
  role: 'student' | 'recruiter' | 'admin'
  points?: number
}

type AuthContextType = {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, role: 'student' | 'recruiter') => Promise<void>
  signOut: () => Promise<void>
  googleSignIn: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Mock authentication functions for demo purposes
  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      // Mock successful sign in
      setUser({
        id: '1',
        name: 'John Doe',
        email: email,
        role: 'student',
        points: 1250
      })
      router.push('/student')
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string, role: 'student' | 'recruiter') => {
    setLoading(true)
    try {
      // Mock successful sign up
      setUser({
        id: '2',
        name: 'New User',
        email: email,
        role: role,
        points: role === 'student' ? 50 : undefined
      })
      router.push(role === 'student' ? '/student' : '/recruiter')
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    setUser(null)
    router.push('/')
  }

  const googleSignIn = async () => {
    setLoading(true)
    try {
      // Mock successful Google sign in
      setUser({
        id: '3',
        name: 'Google User',
        email: 'google@example.com',
        image: 'https://i.pravatar.cc/150?img=3',
        role: 'student',
        points: 750
      })
      router.push('/student')
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Mock checking for existing session
    const checkSession = () => {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
      setLoading(false)
    }

    checkSession()
  }, [])

  useEffect(() => {
    // Save user to localStorage when it changes
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut, googleSignIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
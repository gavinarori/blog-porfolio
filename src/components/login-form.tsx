"use client"

import { useState } from "react"
import { signIn} from 'next-auth/react'
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const userLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setLoading(true)
    const result = await signIn('credentials', { ...data, redirect: false })

    if (result?.error) {
      toast({
        title: "Error",
        description: "Failed to login.",
      })
    } else if (result?.ok) {
      toast({
        title: "Success",
        description: "Logged in successfully.",
      })
    }
    setLoading(false) 
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={userLogin} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              type="password"
              required
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, Brain, Shield, Clock, Heart, Eye, Activity, Glasses, Menu, X } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <Glasses className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold">LifeLens</span>
            </Link>
          </div>
          <div className="flex items-center">
            {/* Hamburger menu for mobile */}
            <button onClick={toggleMobileMenu} className="md:hidden">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                How It Works
              </Link>
              <Link href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Testimonials
              </Link>
              <Link href="/request-demo" passHref>
                <Button size="sm" asChild>
                  <a>Request Demo</a>
                </Button>
              </Link>
            </nav>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} absolute top-16 left-0 right-0 bg-background border-b`}
        >
          <nav className="container py-4 flex flex-col space-y-4">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Testimonials
            </Link>
            <Link href="/request-demo" passHref>
              <Button size="sm" className="w-full" asChild>
                <a>Request Demo</a>
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Caring for your loved ones with dignity and privacy
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    LifeLens helps families monitor and care for elders with dementia while preserving their
                    privacy and independence.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/request-demo" passHref>
                    <Button size="lg" asChild>
                      <a className="gap-1">
                        Get Started <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </Link>
                  <Link href="/request-demo" passHref>
                    <Button size="lg" variant="outline" asChild>
                      <a>Learn More</a>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lifelens-glasses-side-view-HkEQhcw3FWC4BevpMZ1NAheOKCYJXm.png"
                  alt="LifeLens smart glasses - Side view showing sleek profile and integrated technology"
                  className="aspect-auto w-full max-w-[600px] h-auto object-contain"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Challenge</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Existing monitoring solutions for elderly parents with dementia are invasive, lack privacy, and don't
                  provide the specific support needed for daily activities.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-8">
              <Card className="border-none shadow-none bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Privacy Concerns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Camera-based solutions invade privacy and dignity, making both elderly parents and family members
                    uncomfortable.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-none bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Incomplete Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Current solutions don't track critical daily activities like medication adherence, eating, and
                    personal care.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-none bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Lack of Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Families need more than just video feeds—they need actionable insights about their loved one's
                    condition and care needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Solution</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  LifeLens's smart glasses provide a revolutionary approach to elder care that respects privacy while
                  ensuring safety.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 mt-8 items-center">
              <div className="flex justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lifelens-glasses-front-k0kODvX9azGRwGIa1JI7lq6XSRnmCY.png"
                  alt="LifeLens ecosystem - Smart glasses and companion app interface showing activity tracking and care insights"
                  className="aspect-auto w-full max-w-[800px] h-auto object-contain"
                  width={800}
                  height={400}
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Smart Glasses That Make a Difference</h3>
                <p className="text-muted-foreground">
                  Unlike traditional monitoring systems, LifeLens's smart glasses have outward-facing cameras that let
                  families see what their loved ones see, not invasive footage of them.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Preserves dignity and privacy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>AI-powered activity monitoring and reminders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Medication adherence tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Location tracking for safety</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Comprehensive analytics and insights</span>
                  </li>
                </ul>
                <Link href="/request-demo" passHref>
                  <Button className="mt-4" asChild>
                    <a>Learn About Our Technology</a>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  LifeLens combines innovative hardware with powerful AI to provide comprehensive care solutions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-8">
              <Card>
                <CardHeader>
                  <Brain className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>AI-Powered Analytics</CardTitle>
                  <CardDescription>
                    Advanced algorithms analyze daily activities and provide insights on health and behavior patterns.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our proprietary AI learns over time, providing increasingly accurate predictions and recommendations
                    for care.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Privacy-First Design</CardTitle>
                  <CardDescription>
                    Outward-facing cameras preserve dignity while still providing necessary monitoring.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Families can see what their loved ones see, not invasive footage of them in private moments.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Daily Task Assistance</CardTitle>
                  <CardDescription>
                    Gentle reminders for medication, meals, and other important daily activities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Smart glasses provide timely prompts to help maintain routines and independence.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Activity className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Health Monitoring</CardTitle>
                  <CardDescription>
                    Track vital signs and activity levels to detect potential health issues early.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Receive alerts when patterns change or when potential health concerns are detected.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Eye className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Remote Monitoring</CardTitle>
                  <CardDescription>Access real-time and recorded snippets through our secure web app.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Check in on your loved ones anytime, anywhere, with our easy-to-use interface.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Heart className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Care Services</CardTitle>
                  <CardDescription>
                    Request professional care services directly through the LifeLens platform.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our vetted care providers can be dispatched when needed, with full transparency and reporting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A simple process designed with both caregivers and elderly parents in mind.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Setup</h3>
                <p className="text-sm text-muted-foreground">
                  Your loved one receives comfortable, lightweight smart glasses that are easy to wear all day.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Monitor</h3>
                <p className="text-sm text-muted-foreground">
                  The glasses track daily activities and provide reminders while our AI analyzes patterns and behaviors.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Connect</h3>
                <p className="text-sm text-muted-foreground">
                  Access insights, video snippets, and care options through our secure web app, staying connected from
                  anywhere.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/request-demo" passHref>
                <Button size="lg" asChild>
                  <a>Schedule a Demo</a>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Families Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from families who have experienced the difference LifeLens makes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div>
                      <CardTitle className="text-lg">Sarah J.</CardTitle>
                      <CardDescription>Daughter of LifeLens user</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "LifeLens has given me peace of mind while respecting my mother's privacy. The medication reminders
                    alone have made a huge difference in her health."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div>
                      <CardTitle className="text-lg">Michael T.</CardTitle>
                      <CardDescription>Son of LifeLens user</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The insights we get from LifeLens have helped us understand dad's condition better. We can now
                    provide more targeted support when he needs it most."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div>
                      <CardTitle className="text-lg">Elena R.</CardTitle>
                      <CardDescription>LifeLens user</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "I was hesitant at first, but these glasses are comfortable and help me remember important things. I
                    feel more independent, and my children worry less."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Elder Care?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the families who have discovered a better way to care for their loved ones with dementia.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/request-demo" passHref>
                  <Button size="lg" variant="secondary" asChild>
                    <a className="gap-1">Request a Demo</a>
                  </Button>
                </Link>
                <Link href="/request-demo" passHref>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <a>Contact Sales</a>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Glasses className="h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground">© 2024 LifeLens. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


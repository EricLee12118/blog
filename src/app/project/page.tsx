'use client'

import React, { useEffect, useRef, useState, useMemo } from 'react'
import Navbar from '@/components/main_page/Navbar'
import Footer from '@/components/main_page/Footer'
import { Button } from '@/components/ui/button'
import { ChevronDown, LineChart, MessageSquare, Server, User, Globe, Cpu, Shield } from 'lucide-react'

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.disconnect()
    }
  }, [delay])
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  )
}

const ExperiencePage: React.FC = () => {  
  const [typedText, setTypedText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  
  const texts = useMemo(() => [
    "Building real-time multiplayer game logic",
    "Implementing socket-based communication",
    "Creating secure user authentication systems"
  ], []);
  
  useEffect(() => {
    const currentText = texts[textIndex]
    let charIndex = 0
    
    const typingInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setTypedText(currentText.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typingInterval)
        
        setTimeout(() => {
          const eraseInterval = setInterval(() => {
            if (charIndex > 0) {
              charIndex--
              setTypedText(currentText.slice(0, charIndex))
            } else {
              clearInterval(eraseInterval)
              setTextIndex((prev) => (prev + 1) % texts.length)
            }
          }, 30)
        }, 2000)
      }
    }, 100)
    
    return () => clearInterval(typingInterval)
  }, [textIndex, texts])
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
            
      <section className="relative h-[70vh] flex items-center justify-center text-center p-4">
        <div className="absolute inset-0 bg-primary/5 backdrop-blur-sm z-0"></div>
        <div className="container z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500">
            Werewolf Game Server
          </h1>
          
          <div className="h-16 flex items-center justify-center mb-8">
            <p className="text-xl md:text-2xl text-foreground/80">
              {typedText}
              <span className="border-r-2 border-primary ml-1 animate-blink"></span>
            </p>
          </div>
          
          <Button 
            size="lg" 
            onClick={() => {
              document.getElementById('project-details')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Explore Project
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
      
      <section id="project-details" className="py-20">
        <div className="container px-4 mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500">
              Project Overview
            </h2>
            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-16">
              A sophisticated backend system for the classic social deduction game &quot;Werewolf&quot;, supporting real-time multiplayer 
              gameplay, user authentication, and game state management using Node.js and Socket.IO.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <FadeIn delay={200} className="space-y-10">
              <h3 className="text-2xl font-semibold mb-6">Project Timeline</h3>
              
              <div className="space-y-6 border-l-2 border-primary/30 pl-6">
                {[
                  { title: "Initial Planning", date: "January 2021", description: "Designed game rules and server architecture" },
                  { title: "Core Development", date: "February-March 2021", description: "Implemented user authentication and game room systems" },
                  { title: "Game Logic", date: "April-May 2021", description: "Developed game state management and role-specific actions" },
                  { title: "Socket Integration", date: "June 2021", description: "Implemented real-time communication between players" },
                  { title: "Testing & Deployment", date: "July 2021", description: "Conducted stress tests and deployed on cloud infrastructure" }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[31px] mt-1.5 w-3.5 h-3.5 bg-primary rounded-full"></div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="font-medium text-primary/80 mb-1">{item.date}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={300} className="space-y-10">
              <h3 className="text-2xl font-semibold mb-6">Technical Challenges</h3>
              
              <div className="space-y-6">
                {[
                  { 
                    title: "Real-time Synchronization", 
                    description: "Ensuring all players receive game state updates simultaneously with minimal latency, even under network fluctuations.",
                    icon: <Globe className="h-8 w-8 text-violet-500" />
                  },
                  { 
                    title: "State Management", 
                    description: "Building a robust state machine to handle complex game phases, role interactions, and voting mechanics.",
                    icon: <Cpu className="h-8 w-8 text-violet-500" /> 
                  },
                  { 
                    title: "Connection Reliability", 
                    description: "Handling player disconnections gracefully while maintaining game integrity through reconnection mechanisms.",
                    icon: <Server className="h-8 w-8 text-violet-500" /> 
                  },
                  { 
                    title: "Security Implementation", 
                    description: "Preventing cheating by securing communication channels and validating all player actions server-side.",
                    icon: <Shield className="h-8 w-8 text-violet-500" /> 
                  }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500">
              Results & Achievements
            </h2>
            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-16">
              The Werewolf Game Server successfully delivered a seamless and engaging multiplayer experience with high performance and reliability.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { number: "500+", label: "Concurrent Players", icon: <User className="h-8 w-8 text-primary" /> },
              { number: "100ms", label: "Average Latency", icon: <Server className="h-8 w-8 text-primary" /> },
              { number: "10K+", label: "Games Hosted", icon: <MessageSquare className="h-8 w-8 text-primary" /> }
            ].map((stat, i) => (
              <FadeIn key={i} delay={200 + i * 100}>
                <div className="bg-card p-6 rounded-lg border border-border flex items-center shadow-sm">
                  <div className="mr-4 p-3 rounded-full bg-primary/10">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={400}>
            <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border p-8">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <LineChart className="h-6 w-6 mr-3 text-primary" />
                Key Features
              </h3>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Advanced Role System",
                    description: "Implemented 12 unique character roles with special abilities, each with its own game logic and interaction rules."
                  },
                  {
                    title: "Custom Game Settings",
                    description: "Flexible configuration system allowing hosts to customize game rules, role distribution, and time limits for each phase."
                  },
                  {
                    title: "Anti-Cheat Mechanisms",
                    description: "Server-side validation for all game actions and encrypted communication to prevent players from gaining unfair advantages."
                  },
                  {
                    title: "Spectator Mode",
                    description: "Real-time spectating functionality for eliminated players and observers with delayed information to maintain game integrity."
                  }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="border-l-4 border-primary/70 pl-6 transition-all duration-300 hover:bg-primary/5 rounded-r-md"
                  >
                    <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <section className="py-20 bg-primary/5">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500">
              Technical Skills Developed
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                "Node.js", "Socket.IO", "Express", "MongoDB", 
                "JWT Authentication", "State Machines", "WebSockets", 
                "Redis", "Docker", "AWS Deployment", "Load Balancing", "Game Logic"
              ].map((skill, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-colors text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <p className="text-lg text-muted-foreground mb-10">
              This project demonstrated proficiency in creating scalable real-time applications with complex state management.
              The architecture and patterns implemented have applications beyond gaming, including for chat systems,
              collaborative tools, and other interactive web applications requiring real-time communication.
            </p>
            
            <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                View Full Project
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ExperiencePage
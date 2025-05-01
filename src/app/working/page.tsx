'use client'

import React, { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/main_page/Navbar'
import Footer from '@/components/main_page/Footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Code, 
  Languages, 
  LineChart, 
  MessageSquare, 
  Building,
  GitBranch,
  GitCommit,
  GitPullRequest,
} from 'lucide-react'
import * as echarts from 'echarts/core'
import { BarChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import GallerySection from '@/components/working/gallerySection'

echarts.use([
  BarChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  CanvasRenderer
])

const FadeIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}> = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
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

  const transforms = {
    up: `translateY(${isVisible ? 0 : 40}px)`,
    down: `translateY(${isVisible ? 0 : -40}px)`,
    left: `translateX(${isVisible ? 0 : 40}px)`,
    right: `translateX(${isVisible ? 0 : -40}px)`
  }
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: transforms[direction]
      }}
    >
      {children}
    </div>
  )
}

const WorkExperiencePage: React.FC = () => {  
  const chartRef = useRef<HTMLDivElement>(null)
    
  // Skills data
  const skills = [
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Tailwind CSS", level: 65 },
    { name: "Prisma", level: 60 },
  ]
  
  // GitLab contribution data
  const gitlabStats = {
    commits: 87,
    mergeRequests: 27,
    issues: 9,
    codeAdditions: "18,94 lines",
    codeDeletions: "3,27 lines",
    repositoriesContributed: 3
  }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const monthlyContributions = [
    { month: "Feb", commits: 12 },
    { month: "Mar", commits: 42 },
    { month: "Apr", commits: 23 },
  ]
  
  useEffect(() => {
    // 确保DOM已经渲染
    if (!chartRef.current) return;
    
    // 初始化图表
    const chartInstance = echarts.init(chartRef.current);
    
    // 定义图表配置
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: '{b}: {c} commits'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        top: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: monthlyContributions.map(item => item.month),
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          lineStyle: {
            color: '#888'
          }
        },
        axisLabel: {
          color: '#888',
          fontSize: 12
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: 'rgba(150, 150, 150, 0.2)'
          }
        },
        axisLabel: {
          color: '#888',
          fontSize: 10
        }
      },
      series: [
        {
          name: 'Commits',
          type: 'bar',
          barWidth: '60%',
          data: monthlyContributions.map(item => item.commits),
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(118, 106, 252, 0.8)' },
                { offset: 1, color: 'rgba(118, 106, 252, 0.4)' }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          emphasis: {
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(118, 106, 252, 1)' },
                  { offset: 1, color: 'rgba(118, 106, 252, 0.7)' }
                ]
              }
            }
          },
          animationDelay: function(idx: number) {
            return idx * 100;
          }
        }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function(idx: number) {
        return idx * 5;
      }
    } as echarts.EChartsCoreOption; 
    
    chartInstance.setOption(option);
    
    const handleResize = () => {
      chartInstance.resize();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      chartInstance.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, [monthlyContributions]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <Badge className="mb-4 text-xs px-3 py-1" variant="outline">Current Position</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Software Development Engineer
              </h1>
              <div className="flex items-center mb-6 text-muted-foreground">
                <Building className="h-5 w-5 mr-2" />
                <span className="text-lg">eBram International Online Arbitration Center</span>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Working on multilingual online arbitration video conference real-time translation platform using 
                React.js, developing core functionality modules including multi-language editing panel with 
                synchronized scrolling and auto-switching subtitle system.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["React.js", "Tailwind CSS", "OpenAI API", "Azure", "Frontend Development"].map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Company logo/image placeholder */}
            <div className="md:w-1/2 flex justify-center">
              <div 
                className="relative w-full max-w-md h-80 bg-card rounded-xl overflow-hidden shadow-lg border border-border"
                style={{
                  backgroundImage: "url('/images/working/ebram.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <Building className="h-24 w-24 text-primary opacity-20" />
                  <div className="absolute bottom-6 left-6 z-20 text-white">
                    <h3 className="text-xl font-bold">eBram International</h3>
                    <p className="text-sm opacity-80">Online Arbitration Center</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <GallerySection />
      
      {/* Responsibilities Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Key Responsibilities</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              My core responsibilities and contributions to the multilingual online arbitration platform
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: <Code className="h-10 w-10 text-primary" />,
                title: "Frontend Development",
                description: "Developing core functionality modules using React.js including multi-language editing panel with synchronized scrolling and subtitle interface."
              },
              {
                icon: <Languages className="h-10 w-10 text-primary" />,
                title: "Code Quality Improvement",
                description: "Optimizing real-time synchronization logic for participant status, implementing adaptive text wrapping, and refactoring code to improve maintainability."
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-primary" />,
                title: "API Integration",
                description: "Assisting team with OpenAI translation service integration, developing middleware API for contract and legal document translation between Chinese, English and Cantonese."
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100} className="h-full">
                <Card className="h-full border-border hover:border-primary/50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 p-2 rounded-full w-16 h-16 flex items-center justify-center bg-primary/10">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* GitLab Contributions Section - NEW */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">GitLab Contributions</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Code contributions and development activity metrics
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <FadeIn delay={100} direction="right">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <GitBranch className="h-5 w-5 mr-2 text-primary" />
                    Contribution Statistics
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <GitCommit className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{gitlabStats.commits}</div>
                        <div className="text-sm text-muted-foreground">Total Commits</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <GitPullRequest className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{gitlabStats.mergeRequests}</div>
                        <div className="text-sm text-muted-foreground">Merge Requests</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{gitlabStats.issues}</div>
                        <div className="text-sm text-muted-foreground">Issues</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{gitlabStats.repositoriesContributed}</div>
                        <div className="text-sm text-muted-foreground">Repositories</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Code Added</span>
                      <span className="text-sm font-medium text-green-500">{gitlabStats.codeAdditions}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Code Removed</span>
                      <span className="text-sm font-medium text-red-500">{gitlabStats.codeDeletions}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
            
            <FadeIn delay={200} direction="left">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <LineChart className="h-5 w-5 mr-2 text-primary" />
                    Monthly Activity
                  </h3>
                  
                  {/* ECharts 柱状图 */}
                  <div className="h-60" ref={chartRef}></div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
      
            
      
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">MileStones & Skills</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              An overview of the projects I have contributed to and the skills I have developed
            </p>
          </FadeIn>
          
          <Tabs defaultValue="projects" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="projects">MileStones</TabsTrigger>
              <TabsTrigger value="skills">Technical Skills</TabsTrigger>
            </TabsList>
            
            <TabsContent value="projects" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Multi-language Editing System",
                    description: "Developed synchronized scrolling multi-language editing panel system for real-time translation during arbitration video conferences.",
                    technologies: ["React.js", "Tailwind CSS", "Context API"],
                    highlight: "Improved translation workflow efficiency by 40%"
                  },
                  {
                    title: "OpenAI Translation Integration",
                    description: "Assisted in developing middleware API for integrating OpenAI translation services for contract and legal documents in Chinese, English and Cantonese.",
                    technologies: ["OpenAI API", "Azure", "Node.js"],
                    highlight: "Achieved translation response time under 10ms"
                  }
                ].map((project, i) => (
                  <FadeIn key={i} delay={i * 100} direction="up">
                    <Card className="h-full border-border hover:border-primary/50 transition-colors duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, j) => (
                            <Badge key={j} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm font-medium text-primary">{project.highlight}</p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="skills" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {skills.map((skill, i) => (
                  <FadeIn key={i} delay={i * 50}>
                    <div className="mb-2">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%`, transitionDelay: `${i * 100}ms` }}
                        ></div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
                
                <FadeIn delay={300} className="md:col-span-2 mt-6">
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Additional Skills & Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Git & Version Control", "API Integration", "OpenAI",
                          "UI/UX Design", "React Native", "Vue.js",
                          "MongoDB", "Firebase", "Supabase",
                          "Prisma", "MySQL", "PostgreSQL"
                        ].map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs px-3 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Key Achievements</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Highlights of my contributions and accomplishments during my work
            </p>
          </FadeIn>
          
          <div className="space-y-8">
            {[
              {
                title: "Multi-language Support System",
                description: "Developed synchronized scrolling multi-language editing panel with automatic language switching subtitle interface for arbitration video conferences."
              },
              {
                title: "Code Quality Improvement",
                description: "Optimized participant status real-time synchronization logic, implemented adaptive text wrapping for different screen sizes, and refactored code to separate business logic, UI components and utility functions."
              },
              {
                title: "OpenAI Translation Integration",
                description: "Assisted in integrating OpenAI translation services through middleware API development, supporting real-time translation of contract and legal documents between Chinese, English and Cantonese."
              },
              {
                title: "Azure Cloud Optimization",
                description: "Helped configure Azure cloud services to optimize translation response speed, controlling translation delay within 10ms for real-time video conference use."
              }
            ].map((achievement, i) => (
              <FadeIn key={i} delay={i * 100} direction="left">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default WorkExperiencePage
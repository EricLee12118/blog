'use client'
import React from 'react';
import { Cpu, Code, Database, Zap, GitBranch } from 'lucide-react';
import SectionHeader from '@/components/main_page/SectionHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';

interface SkillData {
  name: string;
  level: number;
  description: string;
}

const ProficiencyDots: React.FC<{ level: number }> = ({ level }) => (
  <div className="flex items-center mt-1.5">
    {[...Array(5)].map((_, i) => (
      <span 
        key={i} 
        className={`inline-block w-2.5 h-2.5 rounded-full mx-0.5 ${
          i < level 
            ?  'bg-black'
            : 'bg-muted'
        }`} 
      />
    ))}
  </div>
);

interface BadgeProps {
  variant: 'default' | 'secondary' | 'outline';
  className?: string;
  children: React.ReactNode;
}
const SkillBubble: React.FC<SkillData> = ({ name, level, description }) => {
  const getVariant = (level: number): BadgeProps['variant'] => {
    if (level >= 4) return 'default';
    if (level >= 3) return 'secondary';
    return 'outline';
  };
  
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Badge 
            variant={getVariant(level)}
            className="mr-2.5 mb-2.5 cursor-pointer transition-transform hover:scale-105 text-sm px-3 py-1 font-medium"
          >
            {name}
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="w-72 p-4 bg-white">
            <h4 className="font-semibold text-base border-b pb-1.5 mb-2 text-black">{name}</h4>
            <p className="text-sm leading-relaxed text-black">{description}</p>
            <div className="flex items-center mt-3">
              <span className="text-sm mr-2 font-medium text-black">Proficiency:</span>
              <ProficiencyDots level={level} />
            </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// Main component
const SkillsSection: React.FC = () => {
  // Combined skill data
  const skillCategories = [
    {
      title: "Frontend Development", 
      icon: <Code className="h-6 w-6 mr-3 text-primary" />,
      description: "Focus on modern frameworks and responsive design for user-friendly interfaces",
      skills: [
        { name: "React.js", level: 4, description: "Proficient in building modern web applications with React, including Hooks, Context API, and performance optimization." },
        { name: "Next.js", level: 4, description: "Experienced in developing SSR and SSG applications with Next.js, implemented for personal blog systems and various websites." },
        { name: "Tailwind CSS", level: 3, description: "Comfortable with Tailwind CSS for responsive layout design, applied across multiple projects." },
        { name: "Vue", level: 2, description: "Familiar with Vue basics, used Vue 2 to develop a real-time map information query system." },
        { name: "React Native", level: 2, description: "Basic understanding of React Native architecture, capable of developing simple mobile applications like chat apps." }
      ]
    },
    {
      title: "Backend Development",
      icon: <Zap className="h-6 w-6 mr-3 text-primary" />,
      description: "Building high-performance, scalable backend services and APIs",
      skills: [
        { name: "Node.js", level: 4, description: "Proficient in building backend services with Node.js, including RESTful APIs and real-time applications." },
        { name: "Python", level: 4, description: "Strong skills in Python for backend development, automated testing, and tool development." },
        { name: "Flask", level: 3, description: "Familiar with building RESTful APIs using Flask, applied in mobile chat application projects." },
        { name: "Java", level: 2, description: "Basic understanding of Java language fundamentals and object-oriented programming." },
        { name: "Go", level: 2, description: "Basic knowledge of Go, used to develop an online Werewolf game backend." }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6 mr-3 text-primary" />,
      description: "Designing and managing database systems for application data storage",
      skills: [
        { name: "Prisma", level: 4, description: "Proficient in using Prisma ORM for database operations and model design." },
        { name: "MySQL", level: 2, description: "Basic understanding of MySQL relational database operations and design." },
        { name: "PostgreSQL", level: 2, description: "Basic knowledge of PostgreSQL, used in mobile chat application projects." },
        { name: "MongoDB", level: 2, description: "Familiar with MongoDB basics and NoSQL database concepts." },
        { name: "Supabase", level: 2, description: "Basic understanding of Supabase as a Firebase alternative." },
        { name: "Firebase", level: 2, description: "Knowledge of Firebase's real-time database and authentication features." }
      ]
    },
    {
      title: "Tools & Other Skills",
      icon: <GitBranch className="h-6 w-6 mr-3 text-primary" />,
      description: "Development tools, version control, and additional capabilities",
      skills: [
        { name: "Git", level: 4, description: "Proficient in Git version control, including branch management, merging, and conflict resolution." },
        { name: "GitHub Actions", level: 3, description: "Familiar with configuring CI/CD workflows and implementing automated deployments." },
        { name: "Socket.IO", level: 3, description: "Comfortable building real-time communication applications with Socket.IO." },
        { name: "WebSocket", level: 3, description: "Good understanding of WebSocket protocol for real-time communications." },
        { name: "Testing Frameworks", level: 3, description: "Experience with Selenium, Airtest, and other testing frameworks for automated testing." },
        { name: "English", level: 3, description: "IELTS 6.5, CET-6 536. Comfortable reading technical documentation and engaging in technical discussions." }
      ]
    }
  ];

  const sortedSkillCategories = skillCategories.map(category => ({
    ...category,
    skills: [...category.skills].sort((a, b) => b.level - a.level)
  }));

  return (
    <section className="py-12 animate-slide-up">
      <SectionHeader icon={<Cpu className="h-6 w-6" />} title="Technology Stack" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {sortedSkillCategories.map((category, idx) => (
          <Card key={idx} className="h-full shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center">
                {category.icon}
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground mb-5 leading-relaxed">
                {category.description}
              </p>
              <div className="flex flex-wrap">
                {category.skills.map((skill, index) => (
                  <SkillBubble key={index} {...skill} />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
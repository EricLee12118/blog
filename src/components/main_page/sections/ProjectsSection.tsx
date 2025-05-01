import React from 'react';
import { Star } from 'lucide-react';
import SectionHeader from '@/components/main_page/SectionHeader';
import ProjectCard from '@/components/main_page/ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Mobile Chat Application",
      description: "Real-time messaging platform",
      content: "A mobile chat application with real-time messaging, online status management, and responsive UI. Features include message persistence, user authentication, and optimized image loading.",
      technologies: ["React Native", "Socket.IO", "Flask", "PostgreSQL", "Tailwind CSS", "Expo Clerk"],
      image: "/images/projects/project1.webp",
      githubUrl: "https://github.com/EricLee12118/SmartPhoneProject",
      demoUrl: "#"
    },
    {
      title: "Video Conference Platform",
      description: "Multi-language legal conferencing solution",
      content: "A specialized video conference platform with real-time translation capabilities for legal documents and contracts. Optimized for responsive design and efficient participant status synchronization.",
      technologies: ["React.js", "Tailwind CSS", "OpenAI API", "WebRTC"],
      image: "/images/projects/project2.webp",
      githubUrl: "https://github.com/EricLee12118/werewolf-front",
      demoUrl: "#"
    }
  ];

  return (
    <section className="py-12 animate-slide-up">
      <SectionHeader icon={<Star className="h-6 w-6" />} title="Latest Projects" />
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            content={project.content}
            technologies={project.technologies}
            image={project.image}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
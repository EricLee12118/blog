import React from 'react';
import { Star } from 'lucide-react';
import SectionHeader from '@/components/main_page/SectionHeader';
import FeatureCard from '@/components/main_page/FeatureCard';

const FeaturedSection = () => {
  const features = [
    {
      title: "Profile",
      description: "Background & Skills",
      content: "MSc in Computer Science at HKU, with solid full-stack development experience.",
      badges: ["React", "Node.js", "Python", "Full-stack"],
      link: "/profile",
      animationDelay: "0s"
    },
    {
      title: "Experience",
      description: "Professional Journey",
      content: "Developed multilingual arbitration video conference platform with real-time translation capabilities.",
      extraContent: (
        <p className="text-muted-foreground mb-2">
          Latest Role: <span className="font-medium text-primary">Software Engineer at eBond Arbitration Center</span>
        </p>
      ),
      link: "/experience",
      animationDelay: "0.2s"
    },
    {
      title: "Projects",
      description: "Technical Portfolio",
      content: "Built various applications including a mobile chat app, online Werewolf game backend, and personal blog system.",
      extraContent: (
        <p className="text-muted-foreground mb-2">
          Tech Stack: <span className="font-medium text-primary">React Native, Go, Next.js</span>
        </p>
      ),
      link: "/projects",
      animationDelay: "0.4s"
    },
    {
      title: "Achievements",
      description: "Awards & Recognition",
      content: "EY Hackathon Competition Finalist, First-Class Outstanding Student Award at Jinan University.",
      badges: ["Academic Excellence", "Technical Competitions"],
      link: "/achievements",
      animationDelay: "0.6s"
    }
  ];

  return (
    <section className="py-12 animate-slide-up">
      <SectionHeader icon={<Star className="h-6 w-6" />} title="Profile Showcase" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            title={feature.title}
            description={feature.description}
            content={feature.content}
            badges={feature.badges}
            link={feature.link}
            animationDelay={feature.animationDelay}
            extraContent={feature.extraContent}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
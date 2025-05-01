'use client'
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

const downloadCV = (): void => {
  const link: HTMLAnchorElement = document.createElement('a');
  link.href = '/LiXinlei_CV.pdf'; 
  link.download = 'LiXinlei_CV';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const HeroSection = () => (
  <section className="py-12 md:py-16 animate-fade-in">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="flex justify-center md:justify-end">
        <div className="relative w-60 h-60 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/30 animate-glow">
          <Image 
            src="/images/profile/avatar.png" 
            alt="Profile Photo" 
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Hi, I&apos;m <span className="text-primary animate-pulse">Li, Xinlei</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
          Software Engineer
        </h2>
        <p className="text-muted-foreground max-w-md">
          Passionate about building beautiful, functional, and user-friendly applications. 
          Specializing in frontend development with expertise in React, Next.js, and modern UI frameworks.
        </p>
        <div className="flex gap-4 pt-4">
          <Button size="lg" className="sci-fi-button">
            View Profile
            <MoveRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="sci-fi-button" onClick={() => downloadCV()}>
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
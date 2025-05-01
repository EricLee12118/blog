'use client'

import React, { useEffect } from 'react'
import Navbar from '@/components/main_page/Navbar'
import Footer from '@/components/main_page/Footer'
import ProjectsSection from '@/components/profile/projects_section'
import EducationSection from '@/components/profile/education_section'
import HonorsSection from '@/components/profile/honors_section'
import ExperienceSection from '@/components/profile/experience_section'

const Page = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, { threshold: 0.1 })
    
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element)
    })
    
    return () => observer.disconnect()
  }, [])


  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">        
        {/* About Section */}
        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 animate-on-scroll">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                    LX
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 animate-on-scroll">
                <p className="text-lg mb-4 text-foreground">
                  I am a Computer Science professional currently pursuing my Master&apos;s degree at the University of Hong Kong, specializing in Multimedia Computing. With a strong foundation in software development and a passion for innovative technologies, I strive to create impactful solutions.
                </p>
                <p className="text-lg mb-6 text-foreground">
                  My technical expertise includes Python, Java, React, Vue, Next.js, SQL, Computer Vision, Object-Oriented Programming, Data Mining, and Web Crawling.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <EducationSection/>
        <ProjectsSection/>
        <ExperienceSection/>
        <HonorsSection/>
      </main>      
      <Footer />
    </div>
  )
}

export default Page
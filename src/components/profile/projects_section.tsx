import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
      title: "Mobile Chat Application",
      period: "2025.02 - 2025.03",
      description: [
        "Developed a real-time messaging platform using React Native Expo with Tailwind CSS for responsive UI design",
        "Implemented Socket.IO for real-time messaging capabilities and online status management",
        "Optimized static resource loading and implemented lazy loading of images to improve performance",
        "Built RESTful API with Flask, integrated Expo Clerk for user authentication, and used PostgreSQL for message persistence"
      ],
      skills: ["React Native", "Socket.IO", "Flask", "PostgreSQL", "Tailwind CSS"]
    },
    {
      title: "Personal Website",
      period: "2025.02 - 2025.03",
      description: [
        "Developed a responsive personal blog based on Next.js with optimized performance metrics",
        "Implemented a custom theme system and MDX article parsing for dynamic content management",
        "Optimized static resource loading and lazy loading of images to improve page performance indicators",
        "Configured Git workflow and GitHub Actions to achieve automated deployment"
      ],
      skills: ["Next.js", "React", "Tailwind CSS", "MDX", "GitHub Actions"]
    },
    {
      title: "Video Conference Platform",
      period: "2025.03 - 2025.05",
      description: [
        "Developed a multi-language video conference platform with real-time translation capabilities",
        "Utilized React.js and Tailwind CSS to create responsive and accessible user interfaces",
        "Optimized participant status synchronization and responsive text display, enhancing code maintainability",
        "Integrated OpenAI translation services for multi-language support in legal documents and contracts"
      ],
      skills: ["React.js", "Tailwind CSS", "OpenAI API", "WebRTC"]
    },
    {
      title: "Research on Detection Techniques for Malicious WASM Programs",
      period: "2023.12 - 2024.05",
      description: [
        "Collected WASM files from public datasets and VirusTotal, selecting those classified as malicious and benign",
        "Applied code obfuscation and used BREWasm to create more challenging examples, employing SMOTE technology to balance positive and negative samples",
        "Built a Convolutional Neural Network (CNN) with an attention mechanism to improve the focus on critical features, enhancing the detection of obfuscated malicious programs",
        "Conducted experiments to validate the model's effectiveness, assess the impact of attention layers and data augmentation, and explore hyperparameter configurations"
      ],
      skills: ["CNN", "WASM", "Security", "Machine Learning"]
    },
    {
      title: "Personal Blog Site",
      period: "2023.07",
      description: [
        "Built a blog prototype using the Hexo-Butterfly framework and further developed it with Node.js",
        "Utilized Vue Element to create custom themes and plugins, enhancing the website's user experience and scalability",
        "Integrated the Disqus comment system and social media sharing features with OAuth authentication to improve user interaction",
        "Used Git for version control to ensure code maintainability and traceability"
      ],
      skills: ["Node.js", "Vue", "Hexo", "Git"]
    },
    {
      title: "Real-time Map Information Visualization System",
      period: "2022.11 - 2022.12",
      description: [
        "Developed a visual real-time map data display web application based on Vue, featuring real-time data query capabilities for the map",
        "Implemented map visualization using the Leaflet or Mapbox library and integrated WebSocket technology for real-time data updates and pushes",
        "Designed the interface with Vuetify or Element UI to facilitate user data queries and filtering",
        "Utilized Axios for API calls, ensuring smooth performance of the system under high concurrency conditions"
      ],
      skills: ["Vue", "WebSocket", "Leaflet", "Axios"]
    }
  ];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerView = 3; // 每次显示3个项目
  const maxIndex = Math.max(0, projects.length - projectsPerView); // 最大索引值

  // 上一组项目
  const prevProjects = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  // 下一组项目
  const nextProjects = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev + 1;
        if (next > maxIndex) {
          return 0; // 循环回第一组
        }
        return next;
      });
    }, 10000); // 每8秒切换一次
    
    return () => clearInterval(interval);
  }, [maxIndex]);

  // 当前显示的项目
  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerView);

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          Projects
        </h2>
        
        <div className="relative">
          {/* 左右导航按钮 */}
          <button 
            className={`absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors duration-200 z-10 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            onClick={prevProjects}
            disabled={currentIndex === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <button 
            className={`absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors duration-200 z-10 ${currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            onClick={nextProjects}
            disabled={currentIndex === maxIndex}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
          
          {/* 项目卡片容器 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[450px]">
            <AnimatePresence mode="wait">
              {visibleProjects.map((project, index) => (
                <motion.div 
                  key={currentIndex + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-lg shadow-md hover:shadow-xl bg-card text-card-foreground h-full flex flex-col"
                >
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-3">{project.period}</p>
                  <ul className="list-disc list-inside mb-4 space-y-2 flex-grow">
                    {project.description.map((item, i) => (
                      <li key={i} className="text-sm text-left">
                        <span className="pl-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap mt-auto pt-4">
                    {project.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="inline-block px-3 py-1 m-1 rounded-full text-sm bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* 指示器点 */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${idx === currentIndex ? 'bg-primary' : 'bg-primary/30'}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View projects group ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
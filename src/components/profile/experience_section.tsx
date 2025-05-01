import { motion } from 'framer-motion';

// 经验数据数组
const experiences = [
  {
    position: "Frontend Development Intern",
    company: "Tencent Technology Co., Ltd.",
    period: "2025.02 - 2025.05",
    responsibilities: [
      "Developed and maintained responsive web applications using React, TypeScript, and Tailwind CSS",
      "Collaborated with UI/UX designers to implement pixel-perfect interfaces with optimal user experience",
      "Optimized application performance by implementing code splitting and lazy loading techniques",
      "Participated in code reviews and pair programming sessions to maintain high code quality",
      "Integrated REST APIs to display dynamic content and implemented state management with Redux"
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Redux", "REST API"]
  },
  {
    position: "Software Test Intern",
    company: "Guangzhou ZEEWAIN Technology Co., Ltd.",
    period: "2023.07 - 2023.08",
    responsibilities: [
      "Developed productivity tools using PyQt and Requests to automate software packaging and deployment",
      "Assisted in tracking and managing defects and collaborated with developers",
      "Participated in formulating test plans and writing test cases",
      "Performed test execution including functionality, compatibility, and performance testing"
    ],
    skills: ["PyQt", "Requests", "Software Testing", "QA"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          Intern Experience
        </h2>
        
        {experiences.map((exp, index) => (
          <div key={index}>
            {/* 经验卡片 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 max-w-3xl mx-auto rounded-lg shadow-md bg-card text-card-foreground"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h3 className="text-xl font-bold">{exp.position}</h3>
                <p className="text-muted-foreground">{exp.period}</p>
              </div>
              <h4 className="text-lg font-medium mb-4">{exp.company}</h4>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {exp.responsibilities.map((responsibility, rIndex) => (
                  <li key={rIndex}>{responsibility}</li>
                ))}
              </ul>
              <div className="flex flex-wrap mt-4">
                {exp.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex} 
                    className="inline-block px-3 py-1 m-1 rounded-full text-sm bg-primary/10 text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* 连接线 - 除了最后一个经验之外都显示 */}
            {index < experiences.length - 1 && (
              <div className="hidden md:flex justify-center my-4">
                <div className="w-0.5 h-8 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
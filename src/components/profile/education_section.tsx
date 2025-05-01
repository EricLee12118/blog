const EducationSection  = () => {
  return (
    <section id="education" className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Education
            </h2>
            <div className="max-w-4xl mx-auto">
            {/* 时间线容器 */}
            <div className="relative education-timeline before:absolute before:left-1/2 before:-translate-x-1/2 before:h-full before:w-1 before:bg-gradient-to-b before:from-indigo-400 before:to-purple-500 before:rounded-full md:before:block before:hidden">
                
                {/* 起始点 */}
                <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-4 border-background z-10"></div>
                
                {/* JNU - 开始 */}
                <div className="mb-16 relative">
                <div className="hidden md:block absolute left-1/2 top-12 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background z-10"></div>
                
                <div className="md:mr-auto md:w-1/2 md:pr-12 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                    <h3 className="text-xl font-bold mb-2">Jinan University (JNU)</h3>
                    <p className="text-muted-foreground mb-4">2020.09 - 2024.07</p>
                    <p className="font-medium mb-2">Bachelor of Engineering in Computer Science and Technology</p>
                    <p className="mb-4">GPA: 3.25/5.0</p>
                    
                    <div className="space-y-4 mt-4">
                        <div>
                        <h4 className="font-semibold text-primary">2020 - 2021 (First Year)</h4>
                        <ul className="list-disc list-inside mt-2 pl-2 text-sm space-y-1">
                            <li>Programming Fundamentals (C/C++)</li>
                            <li>Discrete Mathematics</li>
                            <li>Calculus</li>
                            <li>Linear Algebra</li>
                            <li>Introduction to Computer Science</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                
                {/* JNU - 第二年 */}
                <div className="mb-16 relative">
                <div className="hidden md:block absolute left-1/2 top-12 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background z-10"></div>
                
                <div className="md:ml-auto md:w-1/2 md:pl-12 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                    <h4 className="font-semibold text-primary text-lg">2021 - 2022 (Second Year at JNU)</h4>
                    <ul className="list-disc list-inside mt-3 pl-2 text-sm space-y-1.5">
                        <li>Data Structures and Algorithms</li>
                        <li>Database Systems</li>
                        <li>Computer Architecture</li>
                        <li>Operating Systems</li>
                        <li>Web Development Fundamentals</li>
                    </ul>
                    </div>
                </div>
                </div>
                
                {/* JNU - 第三年 */}
                <div className="mb-16 relative">
                <div className="hidden md:block absolute left-1/2 top-12 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background z-10"></div>
                
                <div className="md:mr-auto md:w-1/2 md:pr-12 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                    <h4 className="font-semibold text-primary text-lg">2022 - 2023 (Third Year at JNU)</h4>
                    <ul className="list-disc list-inside mt-3 pl-2 text-sm space-y-1.5">
                        <li>Software Engineering</li>
                        <li>Computer Networks</li>
                        <li>Artificial Intelligence</li>
                        <li>Machine Learning Basics</li>
                        <li>Frontend Development (Vue.js)</li>
                    </ul>
                    </div>
                </div>
                </div>
                
                {/* JNU - 第四年 */}
                <div className="mb-16 relative">
                <div className="hidden md:block absolute left-1/2 top-12 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background z-10"></div>
                
                <div className="md:ml-auto md:w-1/2 md:pl-12 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                    <h4 className="font-semibold text-primary text-lg">2023 - 2024 (Fourth Year at JNU)</h4>
                    <ul className="list-disc list-inside mt-3 pl-2 text-sm space-y-1.5">
                        <li>Deep Learning</li>
                        <li>Computer Security</li>
                        <li>WebAssembly Programming</li>
                        <li>Cloud Computing</li>
                        <li>Graduation Project (WASM Malware Detection)</li>
                    </ul>
                    </div>
                </div>
                </div>
                
                {/* HKU - 开始 */}
                <div className="mb-16 relative">
                <div className="hidden md:block absolute left-1/2 top-12 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background z-10"></div>
                
                <div className="md:mr-auto md:w-1/2 md:pr-12 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                    <h3 className="text-xl font-bold mb-2">The University of Hong Kong (HKU)</h3>
                    <p className="text-muted-foreground mb-4">2024.09 - 2025.11</p>
                    <p className="font-medium mb-2">Master of Science in Computer Science</p>
                    <p className="italic mb-4">Multimedia Computing Stream</p>
                    </div>
                </div>
                </div>
                
                {/* HKU - 2024 Fall */}
                <div className="mb-16 relative">
                <div className="hidden md:block absolute left-1/2 top-12 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background z-10"></div>
                
                <div className="md:ml-auto md:w-1/2 md:pl-12 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                    <h4 className="font-semibold text-primary text-lg">2024 Fall Semester (HKU)</h4>
                    <ul className="list-disc list-inside mt-3 pl-2 text-sm space-y-1.5">
                        <li>Advanced Computer Graphics</li>
                        <li>Computer Vision</li>
                        <li>Deep Learning</li>
                        <li>Machine Learning Algorithms</li>
                    </ul>
                    </div>
                </div>
                </div>
                
                {/* HKU - 2025 Spring */}
                <div className="mb-16 relative">
                <div className="hidden md:block absolute left-1/2 top-12 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background z-10"></div>
                
                <div className="md:mr-auto md:w-1/2 md:pr-12 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                    <h4 className="font-semibold text-primary text-lg">2025 Spring Semester (HKU)</h4>
                    <ul className="list-disc list-inside mt-3 pl-2 text-sm space-y-1.5">
                        <li>Natural Language Processing</li>
                        <li>Media Computing and Applications</li>
                        <li>Computer Music</li>
                        <li>Research Project in Multimedia Computing</li>
                    </ul>
                    </div>
                </div>
                </div>
                
                {/* HKU - 2025 Fall */}
                <div className="mb-16 relative">
                <div className="hidden md:block absolute left-1/2 top-12 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background z-10"></div>
                
                <div className="md:ml-auto md:w-1/2 md:pl-12 animate-on-scroll education-item">
                    <div className="p-6 rounded-lg shadow-md bg-card text-card-foreground">
                    <h4 className="font-semibold text-primary text-lg">2025 Fall Semester (HKU)</h4>
                    <ul className="list-disc list-inside mt-3 pl-2 text-sm space-y-1.5">
                        <li>Computer Graphics for AR/VR</li>
                        <li>Master&apos;s Project (Thesis)</li>
                        <li>Advanced Topics in Multimedia Computing</li>
                    </ul>
                    </div>
                </div>
                </div>
                
                {/* 终点 */}
                <div className="hidden md:block absolute left-1/2 bottom-0 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-4 border-background z-10"></div>
            </div>
            </div>
        </div>
        </section>
  )
}

export default EducationSection
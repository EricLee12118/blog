import { motion } from "framer-motion"
import { FaCalculator, FaMedal, FaTrophy } from "react-icons/fa"

const HonorsSection = () => {   
    const honors = [
        {
          title: "Jinan University Excellent Student First Award",
          date: "2023.10",
          icon: <FaMedal className="text-amber-500 text-2xl" />
        },
        {
          title: "Jinan University Excellent Student Second Award",
          date: "2022.10",
          icon: <FaMedal className="text-amber-500 text-2xl" />
        },
        {
          title: "Ernst & Young Hacksong Competition",
          date: "Winning Award in Final, 2022.10",
          icon: <FaTrophy className="text-amber-500 text-2xl" />
        },
        {
          title: "Mathematical Contest in Modeling (MCM)",
          date: "Successful Participant, 2023.05",
          icon: <FaCalculator className="text-blue-500 text-2xl" />
        }
      ]
      
    return (
        <section id="honors" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Honors & Awards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {honors.map((honor, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg shadow-md bg-card text-card-foreground hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="mr-4">
                      {honor.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{honor.title}</h3>
                      <p className="text-muted-foreground">{honor.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    )
}

export default HonorsSection
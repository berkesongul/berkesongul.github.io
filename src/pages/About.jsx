import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { BookOpen, Code } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="w-full min-h-dvh flex flex-col items-center justify-center relative overflow-hidden pt-32 pb-24 px-4 sm:px-6" id="about">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-brand-200/50 dark:bg-brand-800/50 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen transition-opacity duration-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-brand-900 dark:text-brand-100 tracking-tight mb-4">
            About Me
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Main Bio Card */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel rounded-4xl p-8 sm:p-12 relative overflow-hidden group flex flex-col items-center text-center"
          >
            <p className="text-brand-700 dark:text-brand-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              I am a Physics student and software developer at Dokuz Eylül University. While coding the future, I try to discover the fundamental laws of the computer and the universe.
            </p>
            <p className="text-brand-700 dark:text-brand-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              Software development and physics are two complementary passions for me. On the one hand, I code complex algorithms, and on the other hand, I am interested in subjects such as quantum mechanics and artificial intelligence.
            </p>
            <p className="text-brand-700 dark:text-brand-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              My goal is to create meaningful projects by combining technology and science and to contribute to a better understanding of the world.
            </p>
            
            <a href="https://github.com/berkesongul" target="_blank" className="flex items-center space-x-2 bg-brand-900 dark:bg-brand-50 text-brand-50 dark:text-brand-900 px-8 py-4 rounded-full font-medium hover:scale-95 transition-transform shadow-lg w-full sm:w-auto justify-center mt-auto">
              <Code className="w-5 h-5" />
              <span>View GitHub</span>
            </a>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel rounded-4xl p-8 sm:p-12 relative overflow-hidden group flex flex-col items-center text-center justify-center"
          >
            <h3 className="text-2xl font-semibold text-brand-900 dark:text-brand-100 mb-8 flex items-center gap-2">
              <span className="text-2xl"></span> My Tech Stack
            </h3>
            
            <div className="flex flex-col gap-6 w-full items-center">
              <div className="flex flex-col items-center gap-3 w-full max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-500">Software</span>
                <div className="flex flex-wrap justify-center gap-3 w-full">
                  {['JavaScript', 'TypeScript', 'Python', 'React', 'Vue.js', 'Node.js', 'Git', 'GitHub', 'Unity', 'Unreal Engine'].map((tech) => (
                    <div key={tech} className="px-5 py-2.5 bg-brand-100/50 dark:bg-brand-800/50 rounded-full border border-brand-200 dark:border-brand-700 hover:border-brand-300 dark:hover:border-brand-600 transition-colors shadow-sm cursor-default">
                      <span className="text-sm font-medium text-brand-800 dark:text-brand-200">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3 w-full max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-500">Physics & Mathematics</span>
                <div className="flex flex-wrap justify-center gap-3 w-full">
                  {['Quantum Mechanics', 'Classical Mechanics', 'Mathematical Analysis', 'Linear Algebra', 'Numerical Methods'].map((tech) => (
                    <div key={tech} className="px-5 py-2.5 bg-brand-100/50 dark:bg-brand-800/50 rounded-full border border-brand-200 dark:border-brand-700 hover:border-brand-300 dark:hover:border-brand-600 transition-colors shadow-sm cursor-default">
                      <span className="text-sm font-medium text-brand-800 dark:text-brand-200">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 w-full max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-500">Tools & Technologies</span>
                <div className="flex flex-wrap justify-center gap-3 w-full">
                  {['MATLAB', 'Mathematica', 'LaTeX', 'Docker', 'VS Code', 'Linux', 'Windows'].map((tech) => (
                    <div key={tech} className="px-5 py-2.5 bg-brand-100/50 dark:bg-brand-800/50 rounded-full border border-brand-200 dark:border-brand-700 hover:border-brand-300 dark:hover:border-brand-600 transition-colors shadow-sm cursor-default">
                      <span className="text-sm font-medium text-brand-800 dark:text-brand-200">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
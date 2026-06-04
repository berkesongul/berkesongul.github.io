import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Code, Database, Globe } from 'lucide-react';

export default function Projects() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const projects = [
    {
      title: "Social Media Portfolio Management",
      description: "We manage the social media and Meta Business advertising portfolios of businesses based on budget and optimization, and we grow together.",
      tech: ["Social Media", "Meta Business", "Marketing"],
      icon: <Globe className="w-5 h-5 text-brand-500 dark:text-brand-300" />,
      images: ["/social-media-portfolio-management.png"],
      github: "https://berkesongul.github.io/social-media.html"
    },
    {
      title: "Reactorware",
      description: "A single-player game where you solve all the problems in the lab for an unstable Nuclear Reactor core and increase reactor stabilization.",
      tech: ["Unity", "C#"],
      icon: <Database className="w-5 h-5 text-brand-500 dark:text-brand-300" />,
      images: ["/reactorware.png"],
      github: "https://berkesongul.github.io/reactorware.html"
    },
    {
      title: "Soma FM Web Site",
      description: "A web platform developed for the Soma FM radio station with a modern and user-friendly interface. Live streaming and podcast integration.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      icon: <Globe className="w-5 h-5 text-brand-500 dark:text-brand-300" />,
      images: ["/somafm-website.jpg"],
      github: "https://berkesongul.github.io/somafm-web.html"
    },
    {
      title: "Soma FM Mobile App",
      description: "Soma FM mobile application developed for iOS and Android platforms. Full experience with online listening and notification features.",
      tech: ["iOS", "Android", "React Native"],
      icon: <Code className="w-5 h-5 text-brand-500 dark:text-brand-300" />,
      images: ["/somafm-mobile-app.jpg"],
      github: "https://berkesongul.github.io/somafm-mobile.html"
    },
    {
      title: "ENY Beauty Web Site",
      description: "A web site I prepared for ENY Beauty, one of the most beautiful beauty salons in Manisa Soma.",
      tech: ["Web Development", "Design"],
      icon: <Globe className="w-5 h-5 text-brand-500 dark:text-brand-300" />,
      images: ["/eny-beauty.png"],
      github: "https://berkesongul.github.io/enybeautywebsite.html"
    },
    {
      title: "Japoncusayman",
      description: "A comprehensive e-commerce platform specifically designed for an auto spare parts store. It features a robust product catalog, seamless shopping cart, and secure checkout experience.",
      tech: ["E-commerce", "Web Development"],
      icon: <Database className="w-5 h-5 text-brand-500 dark:text-brand-300" />,
      images: ["/japoncu-sayman.png"],
      github: "https://github.com/berkesongul/japoncusayman"
    },
    {
      title: "Melissa Portfolio",
      description: "A sleek and modern graphic design portfolio website created for Melissa. It beautifully showcases her creative artworks and projects with an elegant, responsive gallery layout.",
      tech: ["Portfolio", "UI/UX Design"],
      icon: <Globe className="w-5 h-5 text-brand-500 dark:text-brand-300" />,
      images: ["/melissa-portfolio.png"],
      github: "https://github.com/berkesongul/melissa"
    },
    {
      title: "Enerva Elektrik",
      description: "A professional corporate promotional website for Enerva, an electricity company based in Essen, Germany. It highlights their services, corporate identity, and contact information with a modern aesthetic.",
      tech: ["Corporate Web", "Frontend"],
      icon: <Globe className="w-5 h-5 text-brand-500 dark:text-brand-300" />,
      images: ["/enerva-elektrik.png"],
      github: "https://github.com/berkesongul/enerva-elektrik"
    },
    {
      title: "Savaştepe Oto Kurtarma",
      description: "A specialized promotional website designed for an auto rescue and towing company based in Balıkesir. It ensures quick access to emergency contact numbers and comprehensive service details.",
      tech: ["Web Development", "Responsive Design"],
      icon: <Globe className="w-5 h-5 text-brand-500 dark:text-brand-300" />,
      images: ["/savastepe-oto-kurtarma.png"],
      github: "https://github.com/berkesongul/savastepeotokurtarma"
    },
    {
      title: "Randevugo",
      description: "An advanced appointment booking platform featuring a responsive web interface and cross-platform applications. It empowers users to easily schedule and manage appointments effortlessly.",
      tech: ["Cross-Platform", "Fullstack", "SaaS"],
      icon: <Database className="w-5 h-5 text-brand-500 dark:text-brand-300" />,
      images: ["/randevugo.png"],
      github: "https://github.com/berkesongul/randevugo"
    },
    {
      title: "Sui Challenge",
      description: "An innovative decentralized application (dApp) and interactive game built for the Sui Coin ecosystem. It uniquely integrates blockchain technology to offer a rewarding user experience.",
      tech: ["Web3", "dApp", "Sui Coin"],
      icon: <Code className="w-5 h-5 text-brand-500 dark:text-brand-300" />,
      images: ["/sui-challenge.png"],
      github: "https://github.com/berkesongul/sui-challenge"
    }
  ];

  return (
    <section className="w-full min-h-dvh flex flex-col items-center justify-center relative overflow-hidden py-24 px-4 sm:px-6" id="projects">
      {/* Subtle background element */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-brand-200/40 dark:bg-brand-800/20 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-multiply dark:mix-blend-screen opacity-50"></div>

      <div className="w-full max-w-6xl relative z-10 mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 pt-8"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-brand-900 dark:text-brand-100 tracking-tight mb-8">
            My Projects
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {projects.map((project) => (
            <motion.a 
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              variants={itemVariants}
              className="cursor-pointer group relative glass-panel rounded-4xl p-6 sm:p-8 overflow-hidden flex flex-col transition-transform hover:-translate-y-1"
            >
              {/* Soft Spotlight effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none radial-gradient-spotlight">
                <div className="absolute -top-[150px] -right-[150px] w-[300px] h-[300px] bg-brand-500/10 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                
                {/* Project Image Area */}
                <div className="w-full h-48 sm:h-56 mb-8 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 relative group/img cursor-pointer flex items-center justify-center">
                  <img 
                    src={project.images[0]} 
                    alt={`${project.title} screenshot`} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover/img:scale-105 group-hover/img:shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-900/10 to-transparent pointer-events-none opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex z-10 items-center justify-center w-12 h-12 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl shadow-inner text-brand-600 dark:text-brand-400">
                    {project.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-brand-900 dark:text-brand-100 mb-3">{project.title}</h3>
                <div className="space-y-2 mb-6 grow">
                  <p className="text-brand-700 dark:text-brand-300 text-sm">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-md text-xs font-medium text-brand-600 dark:text-brand-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
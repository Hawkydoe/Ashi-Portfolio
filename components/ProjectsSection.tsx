
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const projects = [
    {
      id: 1,
      title: "Alter: A Recycling App",
      description: "A user-centric mobile application reshaping sustainable waste management. Users earn 'Alter Coins' by recycling products through the app, offering a seamless pathway to redeem tokens for purchasing recycled goods or making charitable donations.",
      tech: ["React Native", "Node.js", "MongoDB", "Blockchain"],
      image: "https://readdy.ai/api/search-image?query=Modern%20recycling%20mobile%20app%20interface%2C%20green%20sustainable%20design%2C%20eco-friendly%20application%2C%20recycling%20rewards%20system%2C%20clean%20mobile%20UI%20with%20environmental%20theme%2C%20sustainable%20technology%20app%2C%20green%20coins%20and%20recycling%20symbols%2C%20professional%20mobile%20app%20design&width=600&height=400&seq=alter-recycling-app&orientation=landscape",
      link: "#",
      period: "2022-2023"
    },
    {
      id: 2,
      title: "Fake Social Media Account Detection",
      description: "Comprehensive research and implementation of techniques for detecting spammers on Social Media. Presented a taxonomy of detection approaches categorized as fake content detection, spam detection in trending topics, and fake user detection techniques.",
      tech: ["Python", "Machine Learning", "TensorFlow", "Natural Language Processing"],
      image: "https://readdy.ai/api/search-image?query=Social%20media%20security%20interface%2C%20fake%20account%20detection%20system%2C%20cybersecurity%20dashboard%2C%20machine%20learning%20analytics%2C%20data%20analysis%20visualization%2C%20AI-powered%20detection%20system%2C%20modern%20security%20application%20interface%2C%20professional%20cyber%20security%20design&width=600&height=400&seq=fake-detection-system&orientation=landscape",
      link: "#",
      period: "2023-2024"
    },
    {
      id: 3,
      title: "RescueNet: Disaster Management App",
      description: "A collaborative disaster management application developed for Smart India Hackathon 2023. Provides a centralized platform for all registered rescue agencies to collaborate and communicate with each other in real-time during emergency situations.",
      tech: ["React", "Firebase", "Real-time Database", "Geolocation API"],
      image: "https://readdy.ai/api/search-image?query=Emergency%20disaster%20management%20application%20interface%2C%20rescue%20coordination%20system%2C%20real-time%20communication%20platform%2C%20emergency%20response%20dashboard%2C%20disaster%20management%20technology%2C%20professional%20emergency%20app%20design%2C%20rescue%20agencies%20collaboration%20platform&width=600&height=400&seq=rescuenet-disaster-app&orientation=landscape",
      link: "#",
      period: "2023 - Smart India Hackathon"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.getAttribute('data-project-id') || '0');
            setVisibleProjects((prev) => [...prev, projectId]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectElements = document.querySelectorAll('[data-project-id]');
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-white/60 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A showcase of my recent work and achievements
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              data-project-id={project.id}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
              variants={projectVariants}
              initial="hidden"
              animate={visibleProjects.includes(project.id) ? "visible" : "hidden"}
            >
              {/* Project Image */}
              <motion.div
                className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}
                initial={{ 
                  x: index % 2 === 0 ? -100 : 100, 
                  opacity: 0,
                  rotateY: index % 2 === 0 ? -15 : 15
                }}
                animate={visibleProjects.includes(project.id) ? { 
                  x: 0, 
                  opacity: 1,
                  rotateY: 0
                } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: index % 2 === 0 ? 5 : -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover object-top"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.4 }
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                    whileHover={{ 
                      background: "linear-gradient(to top, rgba(0,0,0,0.1), transparent)",
                      transition: { duration: 0.3 }
                    }}
                  />
                  
                  {/* Animated Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#D8ECF8]/5 to-transparent opacity-0"
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1' : ''}`}
                initial={{ 
                  x: index % 2 === 0 ? 100 : -100, 
                  opacity: 0
                }}
                animate={visibleProjects.includes(project.id) ? { 
                  x: 0, 
                  opacity: 1
                } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={visibleProjects.includes(project.id) ? { 
                    opacity: 1, 
                    y: 0 
                  } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.h3 
                      className="text-3xl font-bold text-white"
                      whileHover={{ 
                        color: '#D8ECF8',
                        transition: { duration: 0.2 }
                      }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.span 
                      className="px-3 py-1 bg-[#D8ECF8]/10 border border-[#D8ECF8]/20 rounded-full text-[#D8ECF8] text-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={visibleProjects.includes(project.id) ? { 
                        opacity: 1, 
                        scale: 1 
                      } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.8,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {project.period}
                    </motion.span>
                  </div>
                  <motion.p 
                    className="text-white/80 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={visibleProjects.includes(project.id) ? { 
                      opacity: 1, 
                      y: 0 
                    } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    {project.description}
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={visibleProjects.includes(project.id) ? { 
                    opacity: 1, 
                    y: 0 
                  } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-[#D8ECF8]/10 border border-[#D8ECF8]/20 rounded-full text-[#D8ECF8] text-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={visibleProjects.includes(project.id) ? { 
                          opacity: 1, 
                          scale: 1 
                        } : {}}
                        transition={{ 
                          duration: 0.4, 
                          delay: 1.2 + techIndex * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'rgba(216, 236, 248, 0.2)',
                          transition: { duration: 0.2 }
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.a
                  href={project.link}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D8ECF8]/20 to-[#D8ECF8]/10 hover:from-[#D8ECF8]/30 hover:to-[#D8ECF8]/20 border border-[#D8ECF8]/30 text-white px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={visibleProjects.includes(project.id) ? { 
                    opacity: 1, 
                    y: 0 
                  } : {}}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: '0 10px 40px rgba(216, 236, 248, 0.3)',
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Project</span>
                  <motion.i 
                    className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Background Light Spots */}
      <motion.div 
        className="absolute top-32 right-20 w-1.5 h-1.5 bg-white/15 rounded-full"
        style={{ y }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-40 left-32 w-2 h-2 bg-[#D8ECF8]/20 rounded-full"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2
        }}
      />
    </section>
  );
}

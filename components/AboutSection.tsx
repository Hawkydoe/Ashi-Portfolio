'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'HTML', icon: 'ri-html5-fill' },
    { name: 'CSS', icon: 'ri-css3-fill' },
    { name: 'JavaScript', icon: 'ri-javascript-fill' },
    { name: 'React', icon: 'ri-reactjs-fill' },
    {
      name: 'Spline',
      isSvg: true,
      svg: (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="#061927" />
          <path
            d="M20.591 24.06c-3.051 1.296-6.676.018-7.985-2.855-1.56-3.423.242-5.94 2.312-6.806 1.845-.765 3.968.38 4.111 2.075.104 1.205-1.143 1.488-1.736.921-.433-.409-.753-1.416-1.694-.917-.777.416-.81 2.099-.102 3.577.711 1.486 2.324 2.188 4.177 1.395 1.987-.84 2.841-3.029 1.992-5.034-.892-2.201-4.192-3.445-7.154-2.212-3.17 1.322-4.449 4.795-2.899 8.237C12.732 25.627 17.313 25.417 20.591 24.06z"
            fill="#7DF0F7"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Left - Profile Image */}
          <motion.div className="flex justify-center" variants={itemVariants}>
            <motion.div
              className="relative"
              whileHover={{
                y: -15,
                scale: 1.05,
                transition: { duration: 0.4, ease: 'easeOut' },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#D8ECF8]/20 shadow-2xl"
                initial={{ scale: 0.8, rotate: -10 }}
                animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0.8, rotate: -10 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              >
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20skilled%20female%20developer%20named%20Ashika%2C%20confident%20expression%2C%20modern%20lighting%2C%20clean%20background%2C%20high-tech%20atmosphere%2C%20cinematic%20quality%2C%20dark%20ambient%20lighting%20with%20subtle%20blue%20accents%2C%20professional%20headshot%20style%2C%20contemporary%20design%20aesthetic&width=400&height=400&seq=ashika-profile&orientation=squarish"
                  alt="Ashika Profile"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
              {/* Animated Glow Effects */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-t from-[#D8ECF8]/20 to-transparent"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#D8ECF8]/10 to-transparent blur-xl"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right - Bio and Skills */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h2
                className="text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                About Me
              </motion.h2>
              <motion.p
                className="text-white/80 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                I'm Ashika, a passionate developer who creates immersive digital experiences. With expertise in modern
                web technologies and 3D design, I bring ideas to life through innovative solutions. My work focuses on
                creating visually stunning, user-friendly applications that push the boundaries of what's possible on the
                web.
              </motion.p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.h3
                className="text-2xl font-semibold text-white mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                Skills
              </motion.h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    initial={{ scale: 0, opacity: 0, y: 20 }}
                    animate={
                      isVisible
                        ? { scale: 1, opacity: 1, y: 0 }
                        : { scale: 0, opacity: 0, y: 20 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 1.2 + index * 0.1,
                      type: 'spring',
                      stiffness: 200,
                      damping: 20,
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -5,
                      boxShadow: '0 10px 30px rgba(216, 236, 248, 0.2)',
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill.isSvg ? (
                      <span className="w-5 h-5 flex items-center justify-center">{skill.svg}</span>
                    ) : (
                      <motion.i
                        className={`${skill.icon} text-[#D8ECF8] text-xl w-5 h-5 flex items-center justify-center`}
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.3 },
                        }}
                      />
                    )}
                    <span className="text-white font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Light Spots */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 bg-white/10 rounded-full"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-32 left-32 w-1 h-1 bg-[#D8ECF8]/20 rounded-full"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </section>
  );
}


'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Generate consistent particle positions
  const particlePositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 20; i++) {
      positions.push({
        left: `${(i * 47.3) % 100}%`,
        top: `${(i * 31.7) % 100}%`,
        delay: (i * 0.3) % 2,
        duration: 2 + (i % 3)
      });
    }
    return positions;
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Animated Background Light Spots */}
      <motion.div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
            x: [0, 10, 0],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-1 h-1 bg-[#D8ECF8]/30 rounded-full"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 2, 1],
            x: [0, -15, 0],
            y: [0, 10, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-white/15 rounded-full"
          animate={{
            opacity: [0.15, 0.4, 0.15],
            scale: [1, 1.8, 1],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-2 h-2 bg-[#D8ECF8]/25 rounded-full"
          animate={{
            opacity: [0.25, 0.5, 0.25],
            scale: [1, 1.6, 1],
            x: [0, -8, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7
          }}
        />
        <motion.div 
          className="absolute top-60 left-1/2 w-1 h-1 bg-white/20 rounded-full"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 2.2, 1],
            x: [0, 5, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />
      </motion.div>

      {/* Spline 3D Model */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ y, opacity }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 2, 
          ease: "easeOut",
          delay: 0.5
        }}
      >
        <motion.iframe 
          src='https://my.spline.design/thresholddarkambientuicopy-JEqnYNCtL3QZpQubomBoRtlt/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          initial={{ filter: "blur(10px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </motion.div>

      {/* Animated Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-transparent to-[#05060f]/20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />

      {/* Floating Particles with consistent positions */}
      <div className="absolute inset-0 z-5">
        {particlePositions.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/10 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.3, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
}

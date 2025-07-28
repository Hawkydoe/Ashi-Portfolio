'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
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

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechStart",
      review:
        "Ashika delivered an exceptional web application that exceeded our expectations. Her attention to detail and innovative approach made all the difference.",
    },
    {
      name: "Michael Chen",
      title: "CTO, InnovateCorp",
      review:
        "Working with Ashika was a game-changer for our project. Her technical expertise and creative vision brought our ideas to life perfectly.",
    },
    {
      name: "Emma Rodriguez",
      title: "Design Director, Creative Studios",
      review:
        "Ashika's ability to blend stunning visuals with seamless functionality is truly remarkable. She's our go-to developer for complex projects.",
    },
  ];

  const nextTestimonial = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 20 : -20,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 20 : -20,
    }),
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative">
        {/* Arrows OUTSIDE the testimonials box */}
        <motion.button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 5px 20px rgba(216, 236, 248, 0.2)",
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <i className="ri-arrow-left-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
        </motion.button>
        <motion.button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 5px 20px rgba(216, 236, 248, 0.2)",
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <i className="ri-arrow-right-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
        </motion.button>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What Clients Say
          </motion.h2>
          <motion.p
            className="text-white/60 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Testimonials from amazing people I've worked with
          </motion.p>
        </motion.div>

        {/* Centered testimonial box */}
        <div className="w-full max-w-4xl mx-auto h-96 flex items-center justify-center relative">
          <AnimatePresence mode="wait" custom={currentIndex}>
            <motion.div
              key={currentIndex}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center w-full absolute"
              custom={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                rotateY: { duration: 0.6 },
              }}
              style={{
                boxShadow: isVisible ? "0 0 60px rgba(216, 236, 248, 0.1)" : "none",
              }}
            >
              <motion.p
                className="text-white/80 text-lg mb-6 italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                "{testimonials[currentIndex].review}"
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.h4
                  className="text-white font-semibold text-lg"
                  whileHover={{ color: "#D8ECF8" }}
                >
                  {testimonials[currentIndex].name}
                </motion.h4>
                <motion.p
                  className="text-[#D8ECF8]/80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {testimonials[currentIndex].title}
                </motion.p>
              </motion.div>

              {/* Quote Icon */}
              <motion.div
                className="absolute top-4 right-4 opacity-10"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 0.1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <i className="ri-double-quotes-r text-4xl text-[#D8ECF8] w-10 h-10 flex items-center justify-center"></i>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Animated Dots indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setIsAutoPlay(false);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#D8ECF8]" : "bg-white/20"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs mx-auto mt-4 bg-white/10 rounded-full h-1 overflow-hidden">
          <motion.div
            className="h-full bg-[#D8ECF8]/60 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            key={currentIndex}
          />
        </div>
      </div>

      {/* Animated Background Light Spots */}
      <motion.div
        className="absolute top-40 left-20 w-1 h-1 bg-white/15 rounded-full"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.5, 1],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-[#D8ECF8]/20 rounded-full"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.3, 1],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </section>
  );
}


'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function MiniGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
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

  const galleryItems = [
    {
      id: 1,
      title: "UI/UX Design",
      category: "Design",
      image: "https://readdy.ai/api/search-image?query=Modern%20UI%20UX%20design%20showcase%2C%20clean%20interface%20design%2C%20mobile%20app%20screens%2C%20user%20experience%20design%2C%20contemporary%20digital%20design%2C%20professional%20design%20portfolio%2C%20minimalist%20design%20elements&width=400&height=300&seq=design-tile-1&orientation=landscape"
    },
    {
      id: 2,
      title: "Web Development",
      category: "Development",
      image: "https://readdy.ai/api/search-image?query=Web%20development%20code%20editor%2C%20modern%20coding%20interface%2C%20programming%20workspace%2C%20web%20development%20tools%2C%20clean%20code%20structure%2C%20development%20environment%2C%20professional%20coding%20setup&width=400&height=300&seq=dev-tile-2&orientation=landscape"
    },
    {
      id: 3,
      title: "3D Modeling",
      category: "3D",
      image: "https://readdy.ai/api/search-image?query=3D%20modeling%20workspace%2C%203D%20design%20software%20interface%2C%20digital%20sculpting%2C%203D%20visualization%2C%20modern%203D%20design%20tools%2C%20creative%203D%20modeling%20environment%2C%20professional%203D%20workspace&width=400&height=300&seq=3d-tile-3&orientation=landscape"
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "Branding",
      image: "https://readdy.ai/api/search-image?query=Brand%20identity%20design%2C%20logo%20design%20process%2C%20brand%20guidelines%2C%20corporate%20identity%2C%20modern%20branding%20elements%2C%20professional%20brand%20design%2C%20creative%20branding%20showcase&width=400&height=300&seq=brand-tile-4&orientation=landscape"
    },
    {
      id: 5,
      title: "Mobile Apps",
      category: "Development",
      image: "https://readdy.ai/api/search-image?query=Mobile%20app%20development%2C%20smartphone%20interface%20design%2C%20mobile%20application%20screens%2C%20app%20development%20process%2C%20modern%20mobile%20UI%2C%20clean%20app%20design%2C%20professional%20mobile%20development&width=400&height=300&seq=mobile-tile-5&orientation=landscape"
    },
    {
      id: 6,
      title: "Animation",
      category: "Motion",
      image: "https://readdy.ai/api/search-image?query=Animation%20workspace%2C%20motion%20graphics%20design%2C%20animation%20software%20interface%2C%20digital%20animation%20tools%2C%20creative%20animation%20process%2C%20modern%20animation%20studio%2C%20professional%20animation%20environment&width=400&height=300&seq=animation-tile-6&orientation=landscape"
    }
  ];

  const closeModal = () => {
    setSelectedImage(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <section id="gallery" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
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
            Design Gallery
          </motion.h2>
          <motion.p 
            className="text-white/60 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A collection of creative work and design exploration
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group cursor-pointer"
              variants={itemVariants}
              onClick={() => setSelectedImage(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#D8ECF8]/30 transition-all duration-300"
                whileHover={{
                  boxShadow: '0 20px 40px rgba(216, 236, 248, 0.1)',
                  borderColor: 'rgba(216, 236, 248, 0.3)'
                }}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover object-top"
                  whileHover={{ 
                    scale: 1.15,
                    transition: { duration: 0.6 }
                  }}
                />
                
                {/* Animated Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredItem === item.id ? 0 : 20,
                      opacity: hoveredItem === item.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <motion.span 
                      className="inline-block px-3 py-1 bg-[#D8ECF8]/20 border border-[#D8ECF8]/30 rounded-full text-[#D8ECF8] text-sm mb-2"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(216, 236, 248, 0.3)'
                      }}
                    >
                      {item.category}
                    </motion.span>
                    <motion.h3 
                      className="text-white font-semibold text-lg"
                      initial={{ x: -10 }}
                      animate={{ x: hoveredItem === item.id ? 0 : -10 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {item.title}
                    </motion.h3>
                  </motion.div>
                </motion.div>

                {/* Hover Icon */}
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ 
                    opacity: hoveredItem === item.id ? 1 : 0,
                    scale: hoveredItem === item.id ? 1 : 0,
                    rotate: hoveredItem === item.id ? 0 : -180
                  }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <i className="ri-eye-line text-white w-5 h-5 flex items-center justify-center"></i>
                </motion.div>

                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-[#D8ECF8]/0"
                  animate={{
                    borderColor: hoveredItem === item.id ? 'rgba(216, 236, 248, 0.5)' : 'rgba(216, 236, 248, 0)'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={galleryItems.find(item => item.id === selectedImage)?.image}
                alt={galleryItems.find(item => item.id === selectedImage)?.title}
                className="w-full h-full object-contain rounded-lg"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
              
              <motion.button
                onClick={closeModal}
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <i className="ri-close-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
              </motion.button>

              {/* Modal Info */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <h3 className="text-white font-semibold text-lg mb-1">
                  {galleryItems.find(item => item.id === selectedImage)?.title}
                </h3>
                <p className="text-[#D8ECF8]/80 text-sm">
                  {galleryItems.find(item => item.id === selectedImage)?.category}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Background Light Spots */}
      <motion.div 
        className="absolute top-20 left-20 w-1 h-1 bg-white/15 rounded-full"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.5, 1],
          x: [0, 15, 0],
          y: [0, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-32 right-32 w-2 h-2 bg-[#D8ECF8]/20 rounded-full"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.3, 1],
          x: [0, -10, 0],
          y: [0, 10, 0]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
}

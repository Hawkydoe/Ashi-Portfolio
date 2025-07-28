
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { name: 'GitHub', icon: 'ri-github-fill', url: '#' },
    { name: 'LinkedIn', icon: 'ri-linkedin-fill', url: '#' },
    { name: 'Twitter', icon: 'ri-twitter-fill', url: '#' },
    { name: 'Instagram', icon: 'ri-instagram-fill', url: '#' },
    { name: 'Email', icon: 'ri-mail-fill', url: 'mailto:ashika@example.com' }
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-white/60 text-lg">Let's collaborate and create something amazing together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left - Social Links */}
          <motion.div
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and design.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  className="flex items-center space-x-3 hover:bg-white/5 rounded-lg p-3 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center group-hover:text-[#D8ECF8] transition-colors">
                    <i className={`${link.icon} text-white/70 text-xl w-6 h-6 flex items-center justify-center`}></i>
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D8ECF8]/50 transition-colors text-sm"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D8ECF8]/50 transition-colors text-sm"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D8ECF8]/50 transition-colors resize-none text-sm"
                    />
                    <div className="text-right text-white/40 text-sm mt-1">
                      {formData.message.length}/500
                    </div>
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#D8ECF8]/20 to-[#D8ECF8]/10 hover:from-[#D8ECF8]/30 hover:to-[#D8ECF8]/20 border border-[#D8ECF8]/30 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: isSubmitting ? 'none' : '0 0 30px rgba(216, 236, 248, 0.3)' }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.div
                      className="text-green-400 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background Light Spots */}
      <div className="absolute top-32 left-32 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-[#D8ECF8]/20 rounded-full animate-pulse delay-500"></div>
    </section>
  );
}

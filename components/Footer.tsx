
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#05060f]/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left - Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white">Ashika</h3>
            <p className="text-white/60 leading-relaxed">
              Crafting digital experiences that inspire and engage. 
              Let's build something amazing together.
            </p>
          </motion.div>

          {/* Center - Navigation */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-white/60 hover:text-[#D8ECF8] transition-colors cursor-pointer"
                  whileHover={{ x: 5, color: '#D8ECF8' }}
                  style={{ textShadow: '0 0 10px rgba(216, 236, 248, 0.3)' }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2">
              <motion.a
                href="mailto:ashika@example.com"
                className="block text-white/60 hover:text-[#D8ECF8] transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                ashikag1602@gmail.com
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                className="block text-white/60 hover:text-[#D8ECF8] transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                +91 9894468410
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/40 text-sm">
            © 2024 Ashika. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['ri-github-fill', 'ri-linkedin-fill', 'ri-twitter-fill', 'ri-instagram-fill'].map((icon, index) => (
              <motion.a
                key={icon}
                href="#"
                className="text-white/40 hover:text-[#D8ECF8] transition-colors cursor-pointer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <i className={`${icon} text-lg w-5 h-5 flex items-center justify-center`}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Light Spots */}
      <div className="absolute top-8 left-20 w-1 h-1 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-8 right-32 w-1.5 h-1.5 bg-[#D8ECF8]/15 rounded-full animate-pulse delay-500"></div>
    </footer>
  );
}

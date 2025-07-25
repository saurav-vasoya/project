import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    services: [
      { name: 'Web Development', href: '/services' },
      { name: 'UI/UX Design', href: '/services' },
      { name: 'Mobile Apps', href: '/services' },
      { name: 'Consulting', href: '/services' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '/contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 to-blue-50 border-t border-slate-200">
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MotionWeb
                </span>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Creating exceptional digital experiences through innovative design and cutting-edge technology. 
                We bring your vision to life with stunning animations and seamless user interactions.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center text-slate-600">
                  <Mail className="h-4 w-4 mr-3 text-blue-600" />
                  <span>hello@motionweb.com</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Phone className="h-4 w-4 mr-3 text-blue-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <MapPin className="h-4 w-4 mr-3 text-blue-600" />
                  <span>123 Design Street, Creative City</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-slate-900 font-semibold mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter signup */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-slate-600 mb-6">
              Subscribe to our newsletter for the latest updates, tips, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="flex items-center text-slate-600 mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-2 text-red-500" />
              <span>by MotionWeb Team</span>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg text-slate-600 hover:text-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="text-center text-slate-500 text-sm mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>&copy; 2024 MotionWeb. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
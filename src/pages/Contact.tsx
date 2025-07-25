import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  MessageCircle,
  User,
  CheckCircle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.contact-hero-title', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo('.contact-hero-text', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.6 }
      );

      // Contact info animation
      gsap.fromTo('.contact-info-card', 
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-info-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Form animation
      gsap.fromTo('.contact-form', 
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-form-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Form fields animation
      gsap.fromTo('.form-field', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@motionweb.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Design Street, Creative City',
      description: 'Come say hello at our office'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      info: 'Mon - Fri: 9am - 6pm',
      description: 'Weekend support available'
    }
  ];

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16"
    >
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-blue-50 via-white to-purple-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="contact-hero-title text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="contact-hero-text text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section py-12 px-4 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                className="contact-info-card bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="mb-4 flex justify-center">
                  <item.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-blue-600 font-medium mb-1">
                  {item.info}
                </p>
                <p className="text-slate-500 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div className="contact-form">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Send us a message</h2>
                <p className="text-slate-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">
                    Thank you for your message. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="form-field">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      <User className="inline h-4 w-4 mr-2" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      <Mail className="inline h-4 w-4 mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      <MessageCircle className="inline h-4 w-4 mr-2" />
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <motion.div
                className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-8"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Let's start a conversation</h3>
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    We're here to help bring your ideas to life. Whether you need a complete 
                    website redesign, custom development, or just want to chat about your project, 
                    we'd love to hear from you.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Our team of experts is ready to discuss your requirements and provide 
                    tailored solutions that exceed your expectations.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-8"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Response</h3>
                <p className="text-slate-600 mb-4">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
                <div className="flex items-center text-blue-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-medium">Average response time: 4 hours</span>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-1"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Prefer to call?</h3>
                  <p className="text-slate-600 mb-4">
                    Sometimes it's easier to just pick up the phone. Give us a call and let's 
                    discuss your project.
                  </p>
                  <motion.a
                    href="tel:+15551234567"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    +1 (555) 123-4567
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
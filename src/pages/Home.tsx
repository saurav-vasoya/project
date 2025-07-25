import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  TrendingUp, 
  Zap, 
  Shield, 
  Clock,
  CheckCircle,
  Play,
  Quote
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-title', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.5 }
      );
      
      gsap.fromTo('.hero-subtitle', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.8 }
      );
      
      gsap.fromTo('.hero-cta', 
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out', delay: 1.2 }
      );

      // Floating elements animation
      gsap.to('.floating-1', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });

      gsap.to('.floating-2', {
        y: -30,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: 0.5
      });

      gsap.to('.floating-3', {
        y: -25,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: 1
      });

      // Features scroll animation
      gsap.fromTo('.feature-card', 
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Stats animation
      gsap.fromTo('.stat-item', 
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'back.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Star,
      title: 'Award-Winning Design',
      description: 'Stunning, user-centric designs that have won multiple industry awards and recognition'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimized',
      description: 'Lightning-fast loading times with 99.9% uptime and seamless user experiences'
    },
    {
      icon: Users,
      title: 'User-Centered Approach',
      description: 'Research-driven designs that prioritize user needs and deliver exceptional experiences'
    },
    {
      icon: Award,
      title: 'Enterprise Quality',
      description: 'Production-ready solutions built with industry best practices and rigorous testing'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Tech',
      description: 'Latest technologies and frameworks to keep you ahead of the competition'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Bank-level security measures to protect your data and user information'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Agile development process ensuring timely delivery without compromising quality'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of successful projects with measurable business impact'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Projects Completed', description: 'Successful deliveries' },
    { number: '150+', label: 'Happy Clients', description: 'Worldwide partnerships' },
    { number: '99.8%', label: 'Satisfaction Rate', description: 'Client retention' },
    { number: '24/7', label: 'Support Available', description: 'Always here for you' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'MotionWeb transformed our digital presence completely. The animations and user experience are phenomenal.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLab',
      content: 'Outstanding technical expertise and creative vision. They delivered beyond our expectations.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthCo',
      content: 'The team\'s attention to detail and commitment to excellence is unmatched in the industry.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="floating-1 absolute top-20 left-10 w-20 h-20 bg-blue-400/30 rounded-full blur-xl"></div>
          <div className="floating-2 absolute top-40 right-20 w-32 h-32 bg-purple-400/30 rounded-full blur-xl"></div>
          <div className="floating-3 absolute bottom-40 left-1/4 w-24 h-24 bg-pink-400/30 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Digital Excellence
            </span>
            <br />
            <span className="text-slate-800">Redefined</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We craft extraordinary digital experiences that captivate users, drive engagement, 
            and deliver measurable business results through innovative design and cutting-edge technology.
          </p>
          
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-full border border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Industry Leaders Choose Us
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge technology, creative excellence, and strategic thinking 
              to deliver digital solutions that drive real business growth and user satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="mb-4">
                  <feature.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Track Record
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence and client success
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="stat-item text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-blue-200 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the leaders who trust us with their digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-slate-500 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate to create something extraordinary that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
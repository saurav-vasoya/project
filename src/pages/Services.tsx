import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Zap, 
  Search, 
  BarChart,
  ArrowRight,
  Check
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.services-hero-title', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo('.services-hero-text', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.6 }
      );

      // Service cards animation
      gsap.fromTo('.service-card', 
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Process steps animation
      gsap.fromTo('.process-step', 
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Pricing cards animation
      gsap.fromTo('.pricing-card', 
        { scale: 0, rotation: -10 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.pricing-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies and best practices.',
      features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'Performance Optimization'],
      price: 'From $2,999'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that convert visitors into customers.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'From $1,999'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications.',
      features: ['iOS & Android', 'React Native', 'App Store Optimization', 'Push Notifications'],
      price: 'From $4,999'
    },
    {
      icon: Zap,
      title: 'Animation & Motion',
      description: 'Engaging animations that bring your brand to life.',
      features: ['GSAP Animations', 'Micro-interactions', 'Loading Animations', 'Scroll Effects'],
      price: 'From $1,499'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Get found by your target audience with our SEO services.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Performance Tracking'],
      price: 'From $999'
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Data-driven insights to improve your digital presence.',
      features: ['Google Analytics', 'Conversion Tracking', 'A/B Testing', 'Performance Reports'],
      price: 'From $799'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your goals, target audience, and project requirements.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive strategy and roadmap for your project success.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Create stunning designs that align with your brand and user needs.'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Build your project using the latest technologies and best practices.'
    },
    {
      step: '05',
      title: 'Launch',
      description: 'Deploy your project and ensure everything works perfectly.'
    },
    {
      step: '06',
      title: 'Support',
      description: 'Ongoing maintenance and support to keep your project running smoothly.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999',
      description: 'Perfect for small businesses getting started',
      features: [
        'Responsive Website',
        'Basic SEO Setup',
        '3 Pages',
        'Contact Form',
        '30 Days Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,999',
      description: 'Ideal for growing businesses',
      features: [
        'Custom Web Development',
        'Advanced Animations',
        'Up to 10 Pages',
        'CMS Integration',
        'SEO Optimization',
        '90 Days Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$7,999',
      description: 'For large-scale projects',
      features: [
        'Full-Stack Development',
        'Custom Backend',
        'Advanced Integrations',
        'Performance Optimization',
        'Security Audit',
        '1 Year Support'
      ],
      popular: false
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
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="services-hero-title text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="services-hero-text text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions that drive growth and deliver exceptional user experiences
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="mb-4">
                  <service.icon className="h-12 w-12 text-purple-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-purple-400">
                    {service.price}
                  </div>
                  <motion.button
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white font-medium rounded-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section py-20 px-4 bg-gradient-to-r from-slate-900/50 to-purple-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300">How we bring your vision to life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="process-step text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl rounded-full mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-300">Choose the perfect plan for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`pricing-card relative bg-white/5 backdrop-blur-md border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-purple-400 scale-105' 
                    : 'border-white/10'
                }`}
                whileHover={{ scale: plan.popular ? 1.08 : 1.05 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-2xl hover:shadow-purple-500/25'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
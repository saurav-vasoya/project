import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Heart,
  Code,
  Palette,
  Zap,
  Users,
  Award,
  Target,
  Lightbulb,
  Globe,
  TrendingUp,
  Coffee,
  Rocket,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(
        ".about-hero-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.3 }
      );

      gsap.fromTo(
        ".about-hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.6 }
      );

      // Values animation
      gsap.fromTo(
        ".value-card",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".values-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Timeline animation
      gsap.fromTo(
        ".timeline-item",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.3,
          ease: "back.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description:
        "Our genuine love for design and technology fuels every project, ensuring exceptional results that exceed expectations",
    },
    {
      icon: Code,
      title: "Innovation First",
      description:
        "We embrace emerging technologies and methodologies to create solutions that are ahead of the curve",
    },
    {
      icon: Palette,
      title: "Creative Excellence",
      description:
        "Every design decision is carefully crafted to create memorable experiences that resonate with users",
    },
    {
      icon: Zap,
      title: "Performance Obsessed",
      description:
        "We optimize every aspect of our solutions to ensure lightning-fast performance and seamless user experiences",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description:
        "We believe in the power of collaboration, working closely with clients to achieve shared success",
    },
    {
      icon: Target,
      title: "Results Focused",
      description:
        "Every project is measured by its impact on business goals and user satisfaction metrics",
    },
  ];

  const timeline = [
    {
      year: "2019",
      title: "The Beginning",
      description:
        "Founded with a vision to revolutionize digital experiences through innovative design and technology",
    },
    {
      year: "2020",
      title: "Rapid Growth",
      description:
        "Expanded our team to 15+ specialists and established partnerships with leading technology companies",
    },
    {
      year: "2021",
      title: "Innovation Lab",
      description:
        "Launched our R&D division, pioneering new animation techniques and user interaction patterns",
    },
    {
      year: "2022",
      title: "Global Recognition",
      description:
        "Won multiple industry awards and expanded our client base to include Fortune 500 companies",
    },
    {
      year: "2023",
      title: "Market Leadership",
      description:
        "Established as industry leaders with 500+ successful projects and 99.8% client satisfaction rate",
    },
    {
      year: "2024",
      title: "Future Vision",
      description:
        "Continuing to push boundaries with AI-powered design tools and immersive web experiences",
    },
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "Creative Director",
      bio: "Award-winning designer with 12+ years of experience in digital innovation.",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["UI/UX Design", "Brand Strategy", "Creative Direction"],
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      bio: "Full-stack engineer passionate about creating performant, scalable web applications.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["React/Next.js", "Node.js", "Cloud Architecture"],
    },
    {
      name: "Marcus Rodriguez",
      role: "Animation Specialist",
      bio: "Motion graphics expert who brings static designs to life with stunning animations.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["GSAP", "Three.js", "Motion Design"],
    },
    {
      name: "Emily Watson",
      role: "Strategy Director",
      bio: "Business strategist focused on aligning digital solutions with client objectives.",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["Digital Strategy", "Analytics", "Growth Hacking"],
    },
  ];

  const achievements = [
    {
      icon: Award,
      number: "25+",
      label: "Industry Awards",
      description: "Recognition for excellence",
    },
    {
      icon: Globe,
      number: "40+",
      label: "Countries Served",
      description: "Global reach and impact",
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average ROI",
      description: "Client business growth",
    },
    {
      icon: Coffee,
      number: "10K+",
      label: "Coffee Cups",
      description: "Fuel for creativity",
    },
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
          <h1 className="about-hero-title text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MotionWeb
            </span>
          </h1>
          <p className="about-hero-text text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We are a collective of passionate designers, developers, and
            strategists who believe in the transformative power of exceptional
            digital experiences. Our mission is to help businesses thrive in the
            digital age through innovative design and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                To empower businesses with digital solutions that not only
                captivate users but also drive measurable results. We bridge the
                gap between cutting-edge technology and creative excellence,
                ensuring every project delivers both aesthetic appeal and
                functional performance.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Our approach combines data-driven insights with creative
                intuition, resulting in solutions that resonate with users and
                achieve business objectives.
              </p>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Lightbulb className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-slate-700 font-medium">Innovation</span>
                </div>
                <div className="flex items-center">
                  <Rocket className="h-6 w-6 text-purple-600 mr-2" />
                  <span className="text-slate-700 font-medium">Growth</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-slate-200">
                <div className="text-6xl font-bold text-slate-900 mb-4">5+</div>
                <div className="text-xl text-slate-700 mb-2 font-semibold">
                  Years of Excellence
                </div>
                <div className="text-slate-600">
                  Transforming digital landscapes
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {achievements.map((achievement, index) => (
                    <div key={achievement.label} className="text-center">
                      {achievement.icon &&
                        React.createElement(achievement.icon, {
                          className: "h-8 w-8 text-blue-600 mx-auto mb-2",
                        })}
                      <div className="text-2xl font-bold text-slate-900">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-slate-600">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-20 px-4 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The fundamental principles that guide our decisions, shape our
              culture, and drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="mb-4 flex justify-center">
                  <value.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The talented individuals behind our success, each bringing unique
              expertise and passion to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        ref={timelineRef}
        className="py-20 px-4 bg-gradient-to-br from-blue-50/50 to-purple-50/50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Key milestones that have shaped our evolution from a startup to an
              industry leader
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`timeline-item flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                  }`}
                >
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                <div className="relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our expertise can help transform your digital
              presence and achieve your business goals.
            </p>
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-2xl hover:shadow-white/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;

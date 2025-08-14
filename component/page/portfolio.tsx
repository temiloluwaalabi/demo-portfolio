"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Palette,
  Award,
  GraduationCap,
  User,
  MapPin,
  Filter,
  Eye,
  Calendar,
} from "lucide-react";

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      name: "Landtana Crown Braids",
      url: "https://www.landtana.com/",
      category: "Business",
      description:
        "Professional salon web application with booking system and service management",
      tags: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Zustand",
        "React Hook Form",
      ],
      year: "2025",
      status: "Live",
    },
    {
      id: 2,
      name: "Cruise Travel UK",
      url: "https://claire-nine.vercel.app/",
      category: "Travel",
      description:
        "Travel agency platform for cruise booking and travel planning services",
      tags: ["Next.js", "React Hook Form", "Zod", "TailwindCSS", "Axios"],
      year: "2024",
      status: "Live",
    },
    {
      id: 3,
      name: "Gramaze User Web",
      url: "https://gramze-user-frontend.vercel.app/",
      category: "Healthcare",
      description:
        "Online medical laboratory platform with virtual and physical appointment booking",
      tags: ["Next.js", "Zustand", "shadcn", "TypeScript", "TailwindCSS"],
      year: "2024",
      status: "Live",
      demo: "testing1@gmail.com / 12345678",
    },
    {
      id: 4,
      name: "JudahMeansPraise",
      url: "https://judahmeanspraise.vercel.app/",
      category: "Ministry",
      description:
        "Christian ministry website for spiritual content and community engagement",
      tags: ["Next.js", "TailwindCSS", "TypeScript", "shadcn"],
      year: "2024",
      status: "Live",
    },
    {
      id: 5,
      name: "Graceland Psychiatry",
      url: "https://www.gracelandpsychiatry.com/",
      category: "Healthcare",
      description:
        "Professional psychiatry website with mental health services and appointments",
      tags: ["Next.js", "TailwindCSS", "TypeScript", "React Hook Form", "Zod"],
      year: "2025",
      status: "Live",
    },
    {
      id: 6,
      name: "Gramaze Admin Web",
      url: "https://gramaze-admin.vercel.app/",
      category: "Dashboard",
      description:
        "Administrative dashboard for Gramaze medical laboratory management",
      tags: ["Next.js", "Zustand", "shadcn", "TypeScript", "TailwindCSS"],
      year: "2025",
      status: "Live",
      demo: "temiloluwaalabi33@gmail.com / Adeleke@!!",
    },
    {
      id: 7,
      name: "Cruise Travel ADMIN",
      url: "https://cruise-air-travel-admin.vercel.app/",
      category: "Dashboard",
      description:
        "Administrative dashboard for Cruise Travel booking management",
      tags: ["Next.js", "TanStack Query", "shadcn", "Zustand", "TypeScript"],
      year: "2024",
      status: "Live",
      demo: "adelekealabi52@gmail.com / Lanre148@!!",
    },
    {
      id: 8,
      name: "AstPay",
      url: "https://www.astpay.online/",
      category: "Fintech",
      description:
        "Advanced fintech web application for digital payments and financial services",
      tags: ["Next.js", "TanStack Query", "shadcn", "Zustand", "TypeScript"],
      year: "2024",
      status: "Live",
      demo: "temiloluwaalabi33@gmail.com / Adeleke148@!!",
    },
    {
      id: 9,
      name: "Glimpse",
      url: "https://glimpsee33.vercel.app",
      category: "Social",
      description:
        "Feed explorer application for discovering and browsing content",
      tags: ["Next.js", "TanStack Query", "shadcn", "Zustand", "TypeScript"],
      year: "2025",
      status: "Live",
    },
    {
      id: 10,
      name: "Western Edge Solicitors",
      url: "https://www.westernedgesolicitors.com/",
      category: "Legal",
      description:
        "Professional law firm website with legal services and consultation booking",
      tags: ["Next.js", "TanStack Query", "shadcn", "Zustand", "TypeScript"],
      year: "2025",
      status: "Live",
    },
    {
      id: 11,
      name: "Mastermind Recovery",
      url: "https://www.mastermindrecovery.org/",
      category: "Healthcare",
      description:
        "Healthcare website specializing in addiction recovery and mental health support",
      tags: ["Next.js", "Framer Motion", "shadcn", "TailwindCSS", "TypeScript"],
      year: "2024",
      status: "Live",
    },
    {
      id: 12,
      name: "Logrite Nigeria",
      url: "https://logrite-nigeria.vercel.app/",
      category: "Transportation",
      description:
        "Transportation and logistics management platform for Nigeria",
      tags: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Axios",
        "React Hook Form",
      ],
      year: "2023",
      status: "Live",
    },
    {
      id: 13,
      name: "Devflow",
      url: "https://devflow-fawn.vercel.app/",
      category: "Developer",
      description:
        "Stack Overflow-like platform for developer questions and community discussions",
      tags: ["Next.js", "MongoDB", "TanStack Query", "shadcn", "TypeScript"],
      year: "2024",
      status: "Live",
    },
    {
      id: 14,
      name: "LEO Thread",
      url: "https://leothread.vercel.app/",
      category: "Social",
      description:
        "Stack Overflow-inspired threading platform for discussions and Q&A",
      tags: ["Next.js", "Zustand", "TailwindCSS", "TypeScript", "Axios"],
      year: "2024",
      status: "Live",
    },
    {
      id: 15,
      name: "LEO BNB",
      url: "https://leobnb.vercel.app/",
      category: "Travel",
      description: "Airbnb clone for accommodation booking and rental services",
      tags: ["Next.js", "React Hook Form", "Zod", "shadcn", "TypeScript"],
      year: "2024",
      status: "Live",
    },
    {
      id: 16,
      name: "DNA Center",
      url: "https://dnalca.vercel.app/",
      category: "Healthcare",
      description:
        "Online medical laboratory platform for DNA testing and genetic analysis",
      tags: ["Next.js", "TypeScript", "shadcn", "React Hook Form", "Axios"],
      year: "2024",
      status: "Live",
      demo: "temiloluwaalabi33@gmail.com / Lanre148@!!",
    },
    {
      id: 17,
      name: "SpiritPress",
      url: "http://spiritpress.vercel.app/",
      category: "Ministry",
      description:
        "Christian web application for audio, videos, sermons and spiritual content",
      tags: ["Next.js", "TanStack Query", "shadcn", "Zustand", "TypeScript"],
      year: "2024",
      status: "Live",
      demo: "alabitemiloluwa13@gmail.com / Lanre148@!!",
    },
    {
      id: 18,
      name: "Paypoint",
      url: "https://paypoint-sigma.vercel.app/",
      category: "Fintech",
      description:
        "Web-based payment processing and financial management application",
      tags: ["Next.js", "TypeScript", "Zod", "React Hook Form", "shadcn"],
      year: "2024",
      status: "Live",
      demo: "temiloluwaalabi33@gmail.com / Lanre148@!!",
    },
    {
      id: 19,
      name: "Modern PSI",
      url: "https://modern-psi.vercel.app/",
      category: "Landing",
      description: "Modern business solutions and consulting platform",
      tags: ["Next.js", "TailwindCSS", "TypeScript", "Axios"],
      year: "2024",
      status: "Live",
    },
    {
      id: 20,
      name: "Niklaar",
      url: "https://niklaar.vercel.app/",
      category: "Landing",
      description: "Secure digital wallet landing page with modern design",
      tags: ["Next.js", "TailwindCSS", "TypeScript", "Axios"],
      year: "2024",
      status: "Live",
    },
    {
      id: 21,
      name: "Hoo Bank",
      url: "https://hoobanklolu.netlify.app/",
      category: "Landing",
      description:
        "Modern banking interface landing page with financial services showcase",
      tags: ["React", "TailwindCSS", "JavaScript"],
      year: "2023",
      status: "Live",
    },
    {
      id: 22,
      name: "Car HUB",
      url: "https://carhub-eosin-nine.vercel.app/",
      category: "Landing",
      description: "Car rental and automotive services platform landing page",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Axios"],
      year: "2023",
      status: "Live",
    },
    {
      id: 23,
      name: "Gericht Restaurant",
      url: "https://gericht-restaurant-pi.vercel.app/",
      category: "Landing",
      description: "Fine dining restaurant website with elegant design",
      tags: ["React", "CSS3", "JavaScript"],
      year: "2023",
      status: "Live",
    },
    {
      id: 24,
      name: "Portfolio Sample",
      url: "https://micaelolu-portfolio.netlify.app/",
      category: "Landing",
      description: "Personal portfolio showcase with modern design",
      tags: ["React", "TailwindCSS", "JavaScript"],
      year: "2023",
      status: "Live",
    },
  ];

  const skills = {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "shadcn/ui",
    ],
    backend: ["Node.js", "Express.js", "PHP", "MongoDB", "MySQL"],
    tools: [
      "Git",
      "Zod",
      "React Hook Form",
      "TanStack Query",
      "Zustand",
      "Axios",
      "Framer Motion",
    ],
  };

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const ScrollIndicator = () => (
    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-6 h-6 text-white/70" />
    </div>
  );

  const AnimatedCounter = ({
    end,
    duration = 2000,
    suffix = "",
  }: {
    end: number;
    duration?: number;
    suffix?: string;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const start = Date.now();
      const timer = setInterval(() => {
        const now = Date.now();
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress === 1) clearInterval(timer);
      }, 16);
      return () => clearInterval(timer);
    }, [end, duration]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              TA
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-400 transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex py-6 items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="size-20 lg:size-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <User className="w-16 h-16 text-blue-400" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Temiloluwa</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Emmanuel Alabi
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Frontend Developer crafting exceptional digital experiences with
            modern technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-blue-400 rounded-full hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="mailto:Temiloluwaalabi33@gmail.com"
              className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/temiloluwa-alabi"
              className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/temiloluwa-js"
              className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                  Frontend Web Developer with advanced coding abilities and
                  enthusiasm for new enhancements. Expert in building
                  high-performing, scalable structures to meet client
                  requirements.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      <AnimatedCounter end={20} suffix="+" />
                    </div>
                    <div className="text-sm text-slate-400">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      <AnimatedCounter end={7} suffix="+" />
                    </div>
                    <div className="text-sm text-slate-400">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="font-semibold">
                      Bachelor of Science - Physics
                    </div>
                    <div className="text-slate-400">
                      University of Lagos (Second Class Upper)
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="font-semibold">Based in Nigeria</div>
                    <div className="text-slate-400">
                      Available for Remote Work
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="font-semibold">
                      Meritorious Service Award
                    </div>
                    <div className="text-slate-400">
                      NYSC Program - January 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 p-8 rounded-2xl hover:bg-slate-800/70 transition-all duration-300 border border-slate-700">
              <div className="flex items-center mb-6">
                <Code className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl hover:bg-slate-800/70 transition-all duration-300 border border-slate-700">
              <div className="flex items-center mb-6">
                <Database className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl hover:bg-slate-800/70 transition-all duration-300 border border-slate-700">
              <div className="flex items-center mb-6">
                <Palette className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold">Tools & Libraries</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProjects(6);
                }}
                className={`px-4 py-2 cursor-pointer rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-800/50 cursor-pointer rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                          {project.category}
                        </span>
                        <div className="flex items-center text-slate-400 text-sm">
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.year}
                        </div>
                      </div>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700 rounded-lg hover:bg-blue-600 transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-slate-300 text-sm mb-4 line-clamp-1">
                    {project.description}
                  </p>

                  {project.demo && (
                    <div className="mb-4 p-2 bg-green-900/20 border border-green-800 rounded-lg">
                      <p className="text-green-300 text-xs">
                        <Eye className="w-3 h-3 inline mr-1" />
                        Demo: {project.demo}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 bg-slate-600 text-slate-400 rounded text-xs">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleProjects((prev) => prev + 6)}
                className="px-8 cursor-pointer py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Load More Projects ({filteredProjects.length - visibleProjects}{" "}
                remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Let&apos;s Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next
            project and create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <a
              href="mailto:Temiloluwaalabi33@gmail.com"
              className="flex items-center space-x-3 p-4 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
              <span>Temiloluwaalabi33@gmail.com</span>
            </a>

            <a
              href="tel:+2348129023087"
              className="flex items-center space-x-3 p-4 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              <Phone className="w-6 h-6" />
              <span>+234 812 902 3087</span>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="mailto:temiloluwaalabi33@gmail.com"
              className="p-4 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mltemiloluwa/"
              className="p-4 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/temiloluwaalabi"
              className="p-4 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 Temiloluwa Emmanuel Alabi. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

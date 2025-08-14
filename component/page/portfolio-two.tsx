"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  ExternalLink,
  Calendar,
  Users,
  Code,
  Briefcase,
  Mail,
  MapPin,
  Star,
} from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Landtana Crown Braids",
    url: "http://landtana-client.vercel.app/",
    category: "E-commerce",
    description:
      "Hair braiding and beauty services platform with booking system",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "E-commerce", "Booking"],
    year: "2024",
    status: "Live",
  },
  {
    id: 2,
    name: "Cruise Travel UK",
    url: "https://claire-nine.vercel.app/",
    category: "Travel",
    description: "Comprehensive cruise booking and travel planning platform",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Travel", "Booking"],
    year: "2024",
    status: "Live",
  },
  {
    id: 3,
    name: "Gramaze",
    url: "https://gramze.vercel.app/",
    category: "Social",
    description: "Social media platform with authentication (Demo available)",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Social", "Auth"],
    year: "2024",
    status: "Live",
    demo: "Any email and password",
  },
  {
    id: 4,
    name: "JudahMeansPraise",
    url: "https://judahmeanspraise.vercel.app/",
    category: "Portfolio",
    description: "Personal portfolio and ministry website",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Portfolio", "Ministry"],
    year: "2024",
    status: "Live",
  },
  {
    id: 5,
    name: "Graceland Psychiatry",
    url: "https://gracelandpsychiatry.vercel.app/",
    category: "Healthcare",
    description: "Mental health services and appointment booking platform",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Healthcare", "Booking"],
    year: "2024",
    status: "Live",
  },
  {
    id: 6,
    name: "Cruise Travel ADMIN",
    url: "https://cruise-air-travel-admin.vercel.app/",
    category: "Dashboard",
    description: "Administrative dashboard for travel booking management",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Admin", "Dashboard"],
    year: "2024",
    status: "Live",
    demo: "adelekealabi52@gmail.com / Lanre148@!!",
  },
  {
    id: 7,
    name: "Mastermind Recovery",
    url: "https://www.mastermindrecovery.org/",
    category: "Healthcare",
    description: "Addiction recovery and mental health support platform",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Healthcare", "Recovery"],
    year: "2024",
    status: "Live",
  },
  {
    id: 8,
    name: "Logrite Nigeria",
    url: "https://logrite-nigeria.vercel.app/",
    category: "Business",
    description: "Logistics and shipping management platform for Nigeria",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Logistics", "Business"],
    year: "2024",
    status: "Live",
  },
  {
    id: 9,
    name: "Serendip Pilot",
    url: "https://serendip-pilot.vercel.app/",
    category: "SaaS",
    description: "Pilot project for Serendip platform",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "SaaS", "Pilot"],
    year: "2024",
    status: "Live",
  },
  {
    id: 10,
    name: "Devflow",
    url: "https://devflow-fawn.vercel.app/",
    category: "Developer",
    description: "Developer workflow and project management tool",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Developer", "Workflow"],
    year: "2024",
    status: "Live",
  },
  {
    id: 11,
    name: "LEO Thread",
    url: "https://leothread.vercel.app/",
    category: "Social",
    description: "Social threading and discussion platform",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Social", "Discussion"],
    year: "2024",
    status: "Live",
  },
  {
    id: 12,
    name: "LEO BNB",
    url: "https://leobnb.vercel.app/",
    category: "Travel",
    description: "Airbnb-style accommodation booking platform",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Travel", "Booking"],
    year: "2024",
    status: "Live",
  },
  {
    id: 13,
    name: "DNA Center",
    url: "https://dnalca.vercel.app/",
    category: "Healthcare",
    description: "DNA testing and genetic analysis center platform",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Healthcare", "Genetics"],
    year: "2024",
    status: "Live",
    demo: "temiloluwaalabi33@gmail.com / Lanre148@!!",
  },
  {
    id: 14,
    name: "SpiritPress",
    url: "http://spiritpress.vercel.app/",
    category: "Publishing",
    description: "Digital publishing and content management platform",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Publishing", "CMS"],
    year: "2024",
    status: "Live",
    demo: "alabitemiloluwa13@gmail.com / Lanre148@!!",
  },
  {
    id: 15,
    name: "Paypoint",
    url: "https://paypoint-sigma.vercel.app/",
    category: "Fintech",
    description: "Payment processing and financial services platform",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Fintech", "Payments"],
    year: "2024",
    status: "Live",
    demo: "temiloluwaalabi33@gmail.com / Lanre148@!!",
  },
  {
    id: 16,
    name: "Modern PSI",
    url: "https://modern-psi.vercel.app/",
    category: "Business",
    description: "Modern business solutions and consulting platform",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Business", "Consulting"],
    year: "2024",
    status: "Live",
  },
  {
    id: 17,
    name: "Hoo Bank",
    url: "https://hoobanklolu.netlify.app/",
    category: "Fintech",
    description: "Modern banking interface with financial services",
    image: "/api/placeholder/400/300",
    tags: ["React", "Fintech", "Banking"],
    year: "2023",
    status: "Live",
  },
  {
    id: 18,
    name: "Car HUB",
    url: "https://carhub-eosin-nine.vercel.app/",
    category: "Automotive",
    description: "Car rental and automotive services platform",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Automotive", "Rental"],
    year: "2023",
    status: "Live",
  },
  {
    id: 19,
    name: "Gericht Restaurant",
    url: "https://gericht-restaurant-pi.vercel.app/",
    category: "Restaurant",
    description: "Fine dining restaurant website with elegant design",
    image: "/api/placeholder/400/300",
    tags: ["React", "Restaurant", "Landing"],
    year: "2023",
    status: "Live",
  },
  {
    id: 20,
    name: "Portfolio Sample",
    url: "https://micaelolu-portfolio.netlify.app/",
    category: "Portfolio",
    description: "Personal portfolio showcase with modern design",
    image: "/api/placeholder/400/300",
    tags: ["React", "Portfolio", "Personal"],
    year: "2023",
    status: "Live",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

const stats: {
  label: string;
  value: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}[] = [
  { label: "Projects Completed", value: "20+", icon: Briefcase },
  { label: "Years Experience", value: "3+", icon: Calendar },
  { label: "Technologies Used", value: "15+", icon: Code },
  { label: "Happy Clients", value: "50+", icon: Users },
];

const Portfolio2 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = projects;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (project) => project.category === selectedCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredProjects(filtered);
  }, [searchTerm, selectedCategory]);

  const ProjectCard = ({
    project,
  }: {
    project: {
      id: number;
      name: string;
      url: string;
      category: string;
      description: string;
      image: string;
      tags: string[];
      year: string;
      status: string;
      demo?: string;
    };
  }) => (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="aspect-video relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 group-hover:from-blue-500/40 group-hover:to-purple-600/40 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-white/20">
            {project.name.charAt(0)}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            {project.status}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
            {project.name}
          </h3>
          <span className="text-sm text-gray-500">{project.year}</span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {project.demo && (
          <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">
              Demo Credentials:
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400">
              {project.demo}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-gray-500 text-xs">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            <ExternalLink size={16} />
            Visit Site
          </a>
        </div>
      </div>
    </div>
  );

  const StatCard = ({
    label,
    icon,
    value,
  }: {
    label: string;
    value: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }) => {
    const IconComponent = icon;
    return (
      <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
          <IconComponent className="w-6 h-6 text-blue-600" />
        </div>
        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {value}
        </div>
        <div className="text-gray-600 dark:text-gray-300 text-sm">{label}</div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Full Stack Developer Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Crafting Digital
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Experiences
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Welcome to my portfolio showcase featuring 20+ modern web
            applications built with Next.js, TypeScript, and cutting-edge
            technologies.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-300 mb-8">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>temiloluwaalabi@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Ifo, Ogun State, Nigeria</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                label={stat.label}
                icon={stat.icon}
                value={stat.value}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of web applications spanning various industries and
              use cases
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap px-4 py-3 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Technologies and tools I use to build modern web applications
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Next.js",
              "TypeScript",
              "React",
              "Tailwind CSS",
              "Node.js",
              "Zod",
              "React Hook Form",
              "TanStack Query",
              "Zustand",
              "shadcn/ui",
              "Axios",
              "Vercel",
              "Netlify",
              "PostgreSQL",
              "MongoDB",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-300">
          <p>&copy; 2024 Temiloluwa Alabi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio2;

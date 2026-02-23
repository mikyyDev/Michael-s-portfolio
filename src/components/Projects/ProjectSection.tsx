"use client";

import { useState } from "react";
import Header from "@/components/general/Header";
import ProjectCard from "@/components/Projects/ProjectCard";

type Category = "All" | "Frontend" | "Backend" | "UI/UX" | "RealWorld";

interface Project {
  title: string;
  imagePath: string;
  description: string;
  tech: string[];
  category: Category;
  liveLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: "Coffee Landing Page",
    imagePath: "/images/Coffee.png",
    description:
      "A beautiful, responsive landing page for a fictional coffee shop. Built with pure HTML, CSS, and a touch of JavaScript — no frameworks!",
    tech: ["Html", "Css"],
    category: "Frontend",
    liveLink: "https://mikyydev.github.io/coffee-landing-page/",
    githubLink: "https://github.com/mikyyDev/coffee-landing-page.git",
  },
  {
    title: "Travel Landing page",
    imagePath: "/images/travel_page.png",
    description:
      "A responsive travel booking landing page built with HTML and CSS, featuring a hero search form, popular Ethiopian destinations, curated packages, testimonials, and modern, mobile-friendly design.",
    tech: ["Html", "Css"],
    category: "Frontend",
    liveLink: "https://mikyydev.github.io/travel-website-/",
    githubLink: "https://github.com/mikyyDev/travel-website-.git",
  },
  {
    title: "EduTech Academy Landing Page",
    imagePath: "/images/EduTech.png",
    description:
      "A clean, modern, and fully responsive landing page for EduTech Academy — a fictional online education platform. Features a welcoming hero section, featured courses, about section, testimonials, contact/enrollment form, and professional design built with pure HTML and CSS (no frameworks).",
    tech: ["Html", "Css"],
    category: "Frontend",
    liveLink: "https://mikyydev.github.io/EduTech-Acadamy/",
    githubLink: "https://github.com/mikyyDev/EduTech-Acadamy.git",
  },
];

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const categories: Category[] = [
    "All",
    "Frontend",
    "Backend",
    "UI/UX",
    "RealWorld",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <Header title="Projects" />

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-12 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-indigo-600 border-indigo-600 text-white"
                  : "border-gray-600 text-gray-400 hover:bg-white/5"
              }`}
          >
            {cat === "RealWorld" ? "Real World System" : cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

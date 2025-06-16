"use client";

import { motion } from "framer-motion";
import ScrollLinked from "../../components/ScrollLinked";
import Navbar from "../../components/Navbar";
import Link from "next/link";

const projects = [
  {
    title: "Smart Notes App",
    description:
      "A full-stack productivity tool with tasks, authentication, and notes management.",
    tech: [
      "Node.js",
      "Express",
      "SQL",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "useContext",
      "Framer Motion",
    ],
    link: "/projects/notes-app",
    demo: "https://smartnotes.example.com",
    github: "https://github.com/yourusername/smart-notes-app",
  },
  {
    title: "vSphere Monitor Desktop App",
    description:
      "Electron-based tool that allows real-time monitoring of vSphere metrics from a desktop app.",
    tech: ["Python", "Electron.js"],
    link: "/projects/vsphere-monitor",
    github: "https://github.com/yourusername/vsphere-monitor",
  },
  {
    title: "Booking Platform",
    description:
      "A full-stack booking platform with modern UI/UX and CMS integration.",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Strapi"],
    link: "/projects/booking-platform",
    demo: "https://booking.example.com",
    github: "https://github.com/yourusername/booking-platform",
  },
  {
    title: "Chatty AI Assistant",
    description:
      "An intelligent AI-powered chatbot using Gemini AI and a clean frontend.",
    tech: [
      "Python",
      "Gemini AI Studio",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
    ],
    link: "/projects/chatty",
    github: "https://github.com/yourusername/chatty-ai",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white pt-16 overflow-hidden relative">
      <ScrollLinked />

      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-[#7F1DFF] rounded-full filter blur-3xl opacity-30"
        animate={{ x: [0, 150, -100, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[10%] w-[400px] h-[400px] bg-[#FF0088] rounded-full filter blur-3xl opacity-30"
        animate={{ x: [0, -150, 100, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[#00ffff] rounded-full filter blur-3xl opacity-20"
        animate={{ x: [0, 50, -50, 0], y: [0, -60, 60, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-[#e5f049] rounded-full filter blur-3xl opacity-20"
        animate={{ x: [0, 50, -50, 0], y: [0, -60, 60, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Navigation */}
      <div className=" z-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center relative z-10 space-y-8 px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#7F1DFF] via-[#FF0088] to-[#00FFFF] text-transparent bg-clip-text drop-shadow-md py-2"
        >
          Crafting Code. Designing Impact.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed"
        >
          Explore a handpicked selection of projects that merge function and
          form. From full-stack platforms to intelligent assistants, each
          project solves real problems with thoughtful design and clean
          engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button
            onClick={() => {
              const section = document.getElementById("projects-section");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group cursor-pointer mt-8 px-7 py-3 text-sm md:text-base bg-[#7F1DFF] text-white font-bold rounded-3xl shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_25px_#9c3bff] hover:bg-[#9c3bff]"
          >
            <span>View Projects</span>
          </button>
        </motion.div>
      </section>
      <div
        id="projects-section"
        className="min-h-screen flex flex-col items-center justify-center text-center relative z-10 space-y-6 py-28 px-6"
      >
        <div className="grid gap-12 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 rounded-2xl shadow-lg border border-white/10 hover:scale-[1.02] hover:shadow-[0_0_25px_#9c3bff] transition-transform duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-start">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4 text-start">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 text-xs text-purple-300 font-mono mb-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-900/30 px-3 py-1 rounded-lg border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-sm md:text-base bg-[#7F1DFF] text-white font-bold rounded-3xl shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_25px_#9c3bff] hover:bg-[#9c3bff]"
                  >
                    Live Demo
                  </Link>
                )}

                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        {/* 📅 Footer with Animated Year */}
        <motion.footer
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-4 w-full text-center text-sm text-gray-500"
        >
          &copy; 2025 Muhammad Alaa — All rights reserved.
        </motion.footer>
      </div>
    </div>
  );
}

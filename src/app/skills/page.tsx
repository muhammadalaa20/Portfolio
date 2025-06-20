"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaLinux,
  FaServer,
  FaNpm,
  FaBootstrap,
  FaWindows,
} from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiAnydesk, SiCisco } from "react-icons/si";
import { TbBrandPowershell } from "react-icons/tb";
import { IoTerminalSharp } from "react-icons/io5";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiFramer,
  SiVite,
  SiPostman,
  SiGithub,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { GrVmware } from "react-icons/gr";

import ScrollLinked from "@/components/ScrollLinked";
import Navbar from "@/components/Navbar";

const skills = {
  Frontend: [
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
      level: "Advanced",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" />,
      level: "Advanced",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-sky-400" />,
      level: "Advanced",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-500" />,
      level: "Intermediate",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-300" />,
      level: "Advanced",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500" />,
      level: "Advanced",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-500" />,
      level: "Advanced",
    },
    {
      name: "Motion",
      icon: <SiFramer className="text-blue-500" />,
      level: "Advanced",
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-blue-500" />,
      level: "Intermediate",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" />,
      level: "Intermediate",
    },
    {
      name: "FaNPM",
      icon: <FaNpm className="text-red-500" />,
      level: "Intermediate",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      level: "Advanced",
    },
    {
      name: "Express",
      icon: <SiExpress className="text-white" />,
      level: "Advanced",
    },
    {
      name: "Python",
      icon: <FaPython className="text-blue-500" />,
      level: "Intermediate",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-500" />,
      level: "Intermediate",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" />,
      level: "Intermediate",
    },
  ],
  Administration: [
    {
      name: "Linux",
      icon: <FaLinux className="text-orange-500" />,
      level: "Intermediate",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-500" />,
      level: "Advanced",
    },
    {
      name: "Server",
      icon: <FaServer className="text-white" />,
      level: "Advanced",
    },
    {
      name: "Windows",
      icon: <FaWindows className="text-blue-500" />,
      level: "Advanced",
    },
    {
      name: "VMWare",
      icon: <GrVmware className="text-white" />,
      level: "Advanced",
    },
    {
      name: "Cisco",
      icon: <SiCisco className="text-blue-500" />,
      level: "Advanced",
    },
    {
      name: "PowerShell",
      icon: <TbBrandPowershell className="text-blue-500" />,
      level: "Advanced",
    },
    {
      name: "Terminal",
      icon: <IoTerminalSharp className="text-gray-400" />,
      level: "Advanced",
    },
  ],
  Tools: [
    {
      name: "VS Code",
      icon: <BiLogoVisualStudio className="text-blue-500" />,
      level: "Advanced",
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-500" />,
      level: "Intermediate",
    },
    {
      name: "GitHub",
      icon: <SiGithub className="text-white" />,
      level: "Advanced",
    },
    {
      name: "Vite",
      icon: <SiVite className="text-purple-500" />,
      level: "Advanced",
    },
    {
      name: "Anydesk",
      icon: <SiAnydesk className="text-white bg-orange-700 p-1" />,
      level: "Advanced",
    },
  ],
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-6 pt-28 overflow-hidden relative">
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

      <Navbar />

      {/* Header */}
      <motion.div
        className="text-center my-16 space-y-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#7F1DFF] via-[#FF0088] to-[#00FFFF] bg-clip-text text-transparent py-2">
          Skills & Technologies
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A curated list of tools and technologies I use to build modern,
          scalable, and efficient digital solutions. I&apos;m always learning and
          expanding my skillset to stay ahead of the curve.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto space-y-16 pb-20">
        {Object.entries(skills).map(([category, skillsArr], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-2">
              {category}
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {skillsArr.map((skill, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col items-center justify-center bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors duration-300 rounded-xl p-4 shadow-lg hover:shadow-[0_0_15px_#9c3bff]"
                >
                  <div className="text-4xl mb-2 group-hover:rotate-[12deg] transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium text-white">{skill.name}</p>
                  <span className="text-xs text-gray-400">{skill.level}</span>
                </div>
              ))}
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
  );
}

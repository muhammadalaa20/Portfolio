"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Link from "next/link";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiGithub,
  SiGit
} from "react-icons/si";

const skills = [
  { icon: <SiHtml5 className="text-orange-500" size={28} />, name: "HTML5" },
  { icon: <SiCss3 className="text-blue-500" size={28} />, name: "CSS3" },
  { icon: <SiJavascript className="text-yellow-300" size={28} />, name: "JavaScript" },
  { icon: <SiReact className="text-cyan-400" size={28} />, name: "React" },
  { icon: <SiNextdotjs className="text-white" size={28} />, name: "Next.js" },
  { icon: <SiTailwindcss className="text-sky-400" size={28} />, name: "Tailwind" },
  { icon: <SiPython className="text-blue-500" size={28} />, name: "Python" },
  { icon: <SiNodedotjs className="text-green-500" size={28} />, name: "Node.js" },
  { icon: <SiMongodb className="text-green-500" size={28} />, name: "MongoDB" },
  { icon: <SiTypescript className="text-blue-500" size={28} />, name: "TypeScript" },
  { icon: <SiGithub className="text-white" size={28} />, name: "GitHub" },
  { icon: <SiGit className="text-white" size={28} />, name: "Git" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0d0d0d] text-white">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-[-20%] left-[-20%] w-[400px] h-[400px] bg-[#7F1DFF] rounded-full filter blur-3xl opacity-30"
        animate={{ x: [0, 150, -100, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#FF0088] rounded-full filter blur-3xl opacity-30"
        animate={{ x: [0, -150, 100, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[#00ffff] rounded-full filter blur-3xl opacity-20"
        animate={{ x: [0, 50, -50, 0], y: [0, -60, 60, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#e5f049] rounded-full filter blur-3xl opacity-20"
        animate={{ x: [0, 50, -50, 0], y: [0, -60, 60, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Navigation */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Section */}
<div className="relative z-10 flex flex-col items-center justify-center h-screen px-6 text-center">
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-4xl md:text-6xl font-extrabold tracking-tight"
  >
    Muhammad Alaa Mostafa
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 1 }}
    className="mt-4 text-lg md:text-2xl font-medium text-gray-300"
  >
    Web Developer & Communication Engineer
  </motion.p>

  {/* Catchy Tagline */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="mt-2 text-base md:text-lg text-purple-300 italic"
  >
    Turning ideas into immersive web experiences
  </motion.p>

  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.8, duration: 1 }}
    className="mt-8"
  >
    <Link
      href="/about"
      className="px-6 py-3 text-sm md:text-base bg-[#7F1DFF] text-white font-bold rounded-3xl shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_25px_#9c3bff] hover:bg-[#9c3bff]"
    >
      Explore More
    </Link>
  </motion.div>
  
  {/* 🔄 Spinning Skills (Seamless Loop, Centered Under Button) */}
<div className="relative mt-12 w-[400px] h-[60px] overflow-hidden ">
  <motion.div
    className="absolute top-0 left-0 flex space-x-8"
    animate={{ x: ["0%", "-50%"] }}
    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    
  >
    {/* Duplicated list for seamless scroll */}
    {[...skills, ...skills].map((skill, i) => (
      <div key={i} className="flex flex-col items-center justify-center min-w-[60px]">
        {skill.icon}
        <span className="text-xs text-gray-400 mt-1 cursor-default">{skill.name}</span>
      </div>
    ))}
  </motion.div>
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

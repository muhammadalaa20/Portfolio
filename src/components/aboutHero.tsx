"use client";

import { motion } from "framer-motion";
import { FaNetworkWired, FaServer, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiJavascript } from "react-icons/si";

const heading = "About Me".split(" ");

export default function AboutHero() {
  return (
    <section className="relative z-10 flex items-center justify-center h-screen px-6 md:px-12 text-left">
      <div className="max-w-3xl md:max-w-4xl space-y-8">
        {/* Animated Heading */}
        <h1 className="flex flex-wrap gap-2 text-4xl md:text-6xl font-extrabold tracking-tight">
          {heading.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-base md:text-lg text-gray-300 leading-relaxed md:leading-loose"
        >
          I'm <span className="font-semibold text-white">Muhammad Alaa Mostafa Khalil</span>, a 26-year-old Egyptian Electronics and Communications Engineer from Alexandria, currently working as a{" "}
          <span className="text-pink-400 inline-flex items-center gap-1">
            <FaServer className="inline-block" /> Network & System Administrator
          </span>{" "}
          at ACCHCO.
          <br /><br />
          I specialize in building digital solutions using{" "}
          <span className="text-yellow-300 inline-flex items-center gap-1">
            <SiJavascript className="inline-block" /> JavaScript
          </span>
          ,{" "}
          <span className="text-blue-400 inline-flex items-center gap-1">
            <FaReact className="inline-block" /> React
          </span>
          ,{" "}
          <span className="text-gray-300 inline-flex items-center gap-1">
            <SiNextdotjs className="inline-block" /> Next.js
          </span>
          , and{" "}
          <span className="text-yellow-400 inline-flex items-center gap-1">
            <FaPython className="inline-block" /> Python
          </span>
          , with hands-on experience in{" "}
          <span className="text-green-300 inline-flex items-center gap-1">
            <FaNodeJs className="inline-block" /> Node.js
          </span>
          .
          <br /><br />
          This hybrid background enables me to streamline IT infrastructure while crafting scalable, full-stack solutions that perform in the real world.
        </motion.p>
      </div>
    </section>
  );
}

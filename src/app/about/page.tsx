"use client";

import { motion } from "framer-motion";
import ScrollLinked from "../../components/ScrollLinked";
import Navbar from "../../components/Navbar";
import AboutHero from "@/components/aboutHero";
export default function About() {

    const journey = [
  {
    year: "2016",
    label: "Began my engineering journey at Alexandria University, fueled by a passion for electronics and a curiosity for how computers work. Discovered Python and the endless possibilities it brings."
  },
  {
    year: "2017",
    label: "Earned top grades and proudly chose Electrical Engineering as my major. Took my first steps into low-level programming by mastering C, laying the foundation for logical problem-solving."
  },
  {
    year: "2018",
    label: "Specialized in Communications & Electronics. While diving into signal theory and circuit design, I was also teaching myself the ins and outs of AVR microcontrollers and embedded systems."
  },
  {
    year: "2019",
    label: "Paused to reflect and explore the professional world—this break opened my eyes to broader career possibilities and sparked my interest in IT systems and infrastructure."
  },
  {
    year: "2020",
    label: "Invested in personal growth—improved my English and soft skills to better communicate ideas and work within global teams. This year became a turning point for long-term career planning."
  },
  {
    year: "2021",
    label: "Ventured into machine learning and AI. Worked on a graduation project focused on intelligent load balancing in cellular networks using reinforcement learning."
  },
  {
    year: "2022",
    label: "Jumped head-first into the world of web development. Studied modern frameworks like React through FWD, YouTube, Coursera, and Udemy—building real-world projects along the way."
  },
  {
    year: "2023",
    label: "Served in the military while refusing to pause my passion—dedicated my spare time to sharpening my development skills and staying aligned with industry trends."
  },
  {
    year: "2024",
    label: "Started a new chapter at Alexandria Container and Cargo Handling Company as a Network & System Administrator. Now actively blending my dev and sysadmin expertise in real-world environments."
  },
  {
    year: "2025",
    label: "Today, I'm crafting seamless, scalable digital systems that connect infrastructure with intelligent frontend experiences. The mission: deliver high-impact, reliable solutions through code and command line."
  }
];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0d0d0d] text-white">
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

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Section (Full Height Text Only) */}

        <AboutHero />

      {/* Journey Map */}
      <section className="relative z-10 py-20 px-6 md:px-10 flex justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-16 text-center">My Journey</h2>
          {journey.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Year */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-purple-300 font-semibold text-lg"
              >
                {item.year}
              </motion.span>

              {/* Info */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-gray-300 text-[16px] leading-relaxed text-center max-w-xl mx-auto mt-4 mb-8 px-4 md:text-lg"
               >
                  {item.label}
              </motion.p>

              {/* Dotted Line (except after the last item) */}
              {i !== journey.length - 1 && (
                <div className="h-12 border-l-2 border-dotted border-purple-400" />
              )}
            </div>
          ))}
        </div>
      </section>

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

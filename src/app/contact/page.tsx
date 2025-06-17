"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_papg9nl",
          "template_2dzx6do",
          form.current,
          "2IyChQYUSPaE0fruc"
        )
        .then(() => {
          toast.success("✅ Message sent successfully!");
          form.current?.reset();
        })
        .catch((error) => {
          console.error(error);
          toast.error("❌ Failed to send. Please try again.");
        })
        .finally(() => setLoading(false));
    } else {
      toast.error("Form reference is null.");
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section
        id="contact"
        className="relative min-h-screen pt-40 pb-16 px-6 flex flex-col items-center justify-center bg-[#0d0d0d] text-white overflow-hidden"
      >
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

        {/* Main Grid with Header, Info, and Form */}
        <div className="flex flex-col md:flex-row gap-16 max-w-6xl w-full z-10">
          {/* Left Side: Header + Contact Info + Socials */}
          <div className="flex-1 flex flex-col justify-center space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#7F1DFF] via-[#FF0088] to-[#00FFFF] text-transparent bg-clip-text"
            >
              Let&apos;s Connect
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 mt-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Have a project or an idea? Reach out and let&apos;s build something
              amazing.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-5 border-l-4 border-[#7F1DFF] pl-6">
                <div className="flex items-center space-x-4 text-gray-300">
                  <Mail className="text-[#7F1DFF]" size={22} />
                  <span className="text-base">muhammadalaa84@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <Phone className="text-[#7F1DFF]" size={22} />
                  <span className="text-base">+20 102 418 3247</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <MapPin className="text-[#7F1DFF]" size={22} />
                  <span className="text-base">Alexandria, Egypt</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                <Link
                  href="https://github.com/muhammadalaa20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github
                    className="text-gray-400 hover:text-white transition"
                    size={28}
                  />
                </Link>
                <Link
                  href="https://linkedin.com/in/muhammadalaa84"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin
                    className="text-blue-500 hover:text-white transition"
                    size={28}
                  />
                </Link>
                <Link
                  href="https://twitter.com/muhammadalaa20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter
                    className="text-sky-400 hover:text-white transition"
                    size={28}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 space-y-6 bg-gray-900 bg-opacity-60 p-10 rounded-2xl shadow-xl backdrop-blur-md"
          >
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="user_name"
                className="text-sm text-gray-300 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="John Doe"
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7F1DFF] transition duration-200"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label
                htmlFor="user_email"
                className="text-sm text-gray-300 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="you@example.com"
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7F1DFF] transition duration-200"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label
                htmlFor="message"
                className="text-sm text-gray-300 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Type your message..."
                rows={5}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7F1DFF] transition duration-200 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 font-semibold bg-gradient-to-r from-[#7F1DFF] to-[#9c3bff] bg-[#7F1DFF] text-white rounded-3xl shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_25px_#9c3bff] hover:bg-[#9c3bff]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
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
      </section>
    </>
  );
}

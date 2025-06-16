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
        className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center bg-[#0d0d0d] text-white overflow-hidden"
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

        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-[#7F1DFF] via-[#FF0088] to-[#00FFFF] text-transparent bg-clip-text z-10"
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 text-center max-w-2xl mb-16 z-10"
        >
          Have a project, idea, or opportunity you’d like to discuss? Drop me a
          message and I’ll get back to you shortly.
        </motion.p>

        {/* Main Grid */}
        <div className="flex flex-col md:flex-row-reverse gap-12 max-w-6xl w-full z-10">
          {/* Contact Form (Right Side on md+) */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 space-y-6 bg-gray-900 bg-opacity-60 p-10 rounded-2xl shadow-xl backdrop-blur-md"
          >
            {/* Name Field */}
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

            {/* Email Field */}
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

            {/* Message Field */}
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 font-semibold bg-gradient-to-r from-[#7F1DFF] to-[#9c3bff] rounded-full text-white hover:opacity-90 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info + Socials (Left Side on md+) */}
          <div className="flex-1 space-y-6 self-center">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="text-[#7F1DFF]" />
                <span>muhammadalaa84@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Phone className="text-[#7F1DFF]" />
                <span>+20 102 418 3247</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <MapPin className="text-[#7F1DFF]" />
                <span>Alexandria, Egypt</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-6">
              <Link
                href="https://github.com/muhammadalaa20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  className="text-gray-300 hover:text-white transition"
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
      </section>
    </>
  );
}

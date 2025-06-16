"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { Mail, Phone, MapPin } from "lucide-react";

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
        .then(
          () => {
            toast.success("✅ Message sent successfully!");
            form.current?.reset();
          },
          (error) => {
            console.error(error);
            toast.error("❌ Failed to send. Please try again.");
          }
        )
        .finally(() => setLoading(false));
    } else {
      toast.error("Form reference is null.");
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 flex flex-col items-center justify-center bg-[#0d0d0d] text-white relative z-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-[#7F1DFF] via-[#FF0088] to-[#00FFFF] text-transparent bg-clip-text"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-400 text-center max-w-xl mb-12"
      >
        Have a project, idea, or opportunity you would like to discuss? Drop me
        a message and I’ll get back to you shortly.
      </motion.p>

      <div className="flex flex-col md:flex-row gap-12 max-w-4xl w-full">
        {/* Contact Info */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4 text-gray-300">
            <Mail className="text-[#7F1DFF]" />
            <span>your.email@example.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <Phone className="text-[#7F1DFF]" />
            <span>+20 100 000 0000</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <MapPin className="text-[#7F1DFF]" />
            <span>Alexandria, Egypt</span>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="flex-1 space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#7F1DFF]"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#7F1DFF]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#7F1DFF]"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 font-bold bg-[#7F1DFF] rounded-full text-white hover:bg-[#9c3bff] transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

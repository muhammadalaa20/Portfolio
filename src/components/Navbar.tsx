"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { AlignRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${
          scrolled ? "bg-black/40 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }
      `}
    >
      <div
        className={`w-full px-6 py-10 flex justify-between items-center transition-transform duration-300 ease-in-out ${
          scrolled ? "scale-95" : "scale-100"
        } max-w-7xl mx-auto`}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/"
            className="text-white text-lg font-semibold tracking-wide"
          >
            <Image
              src="/m.svg"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-full p-2 bg-[#7F1DFF] shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_25px_#9c3bff] hover:bg-[#9c3bff]"
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="hidden md:flex space-x-8 text-sm md:text-base font-medium text-white"
        >
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={`/${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
                className="transition-all duration-300 ease-in-out hover:text-[#9c3bff] hover:drop-shadow-[0_0_10px_#9c3bff]"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="md:hidden"
        >
          <Sheet>
            <SheetTrigger className="group p-2 rounded-full cursor-pointer text-white opacity-80 transition-all duration-300 hover:opacity-100 hover:bg-[#9c3bff] hover:shadow-[0_0_20px_#9c3bff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9c3bff] focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <AlignRight
                size={34}
                className="text-white transition-colors duration-300"
              />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-[#0d0d0d] text-white border-none flex flex-col items-start justify-start p-6 pb-10 space-y-8 backdrop-blur-md shadow-xl"
            >
              {/* Optional Logo Inside Sheet */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-6"
              >
                <Link href="/" className="flex items-center">
                  <Image
                    src="/m.svg"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="rounded-full bg-[#7F1DFF] p-2 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#9c3bff]"
                  />
                </Link>
              </motion.div>

              {/* Navigation Items */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-col items-center w-full pt-16 gap-6"
              >
                {["Home", "About", "Projects", "Skills", "Contact"].map(
                  (item) => (
                    <motion.a
                      key={item}
                      href={`/${
                        item.toLowerCase() === "home" ? "" : item.toLowerCase()
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-lg font-medium tracking-wide hover:text-[#9c3bff] hover:drop-shadow-[0_0_10px_#9c3bff] transition-all duration-300"
                    >
                      {item}
                    </motion.a>
                  )
                )}
              </motion.div>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </motion.nav>
  );
}

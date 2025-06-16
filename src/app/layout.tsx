"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollLinked from "@/components/ScrollLinked";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Muhammad Alaa | Portfolio</title>
        {/* description */}
        <meta
          name="description"
          content="Portfolio of Muhammad Alaa Mostafa Khalil — Electronics Engineer and Full-Stack Developer specializing in modern JavaScript, React, Next.js, and Network Systems."
        />
        <link rel="icon" href="/micon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0d0d0d] text-white`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          <Toaster position="top-right" reverseOrder={false} />
          </motion.div>
        </AnimatePresence>
        <ScrollLinked />
      </body>
    </html>
  );
}

"use client";
import { motion } from "framer-motion";

const colors = ["#7F1DFF", "#FF0088", "#00ffff", "#e5f049"];

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

const Blobs = ({ count = 8 }: { count?: number }) => {
  const blobs = Array.from({ length: count }).map((_, i) => {
    const top = getRandom(0, 100);
    const left = getRandom(0, 100);
    const size = getRandom(250, 450);
    const color = colors[i % colors.length];

    return (
      <motion.div
        key={i}
        className="absolute rounded-full filter blur-3xl opacity-20 pointer-events-none"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
        }}
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -60, 60, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    );
  });

  return <div className="absolute inset-0 z-0 overflow-hidden">{blobs}</div>;
};

export default Blobs;

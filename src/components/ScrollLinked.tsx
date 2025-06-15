"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "6px",
        originX: 0,
        background: "linear-gradient(to right, #7F1DFF, #FF0088)",
        zIndex: 50,
      }}
    />
  );
}

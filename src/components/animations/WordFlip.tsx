"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WordFlipProps {
  words: { text: string; colorClass: string }[];
  interval?: number;
}

export function WordFlip({ words, interval = 2500 }: WordFlipProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="inline-block relative h-[1.1em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className={`block ${words[currentIndex].colorClass}`}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {words[currentIndex].text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

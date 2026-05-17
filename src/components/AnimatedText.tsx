'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  highlight?: string;
  highlightClass?: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

export default function AnimatedText({
  text,
  highlight = "",
  highlightClass = "text-primary italic",
  className = "",
  once = true,
  delay = 0
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`flex flex-wrap ${className}`}
    >
      {text.split(" ").map((word, index) => {
        const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
        const isHighlighted = highlight && (
          cleanWord.toLowerCase() === highlight.toLowerCase() ||
          word.toLowerCase().includes(highlight.toLowerCase())
        );

        return (
          <span key={index} style={{ overflow: "hidden", display: "inline-block" }}>
            <motion.span
              variants={child}
              style={{ marginRight: "0.25em", display: "inline-block" }}
              className={isHighlighted ? highlightClass : ""}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.div>
  );
}

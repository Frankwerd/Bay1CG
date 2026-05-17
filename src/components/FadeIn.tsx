'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  viewTrigger?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.8,
  className = "",
  viewTrigger = true
}: FadeInProps) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      whileInView={viewTrigger ? {
        opacity: 1,
        x: 0,
        y: 0
      } : undefined}
      animate={!viewTrigger ? {
        opacity: 1,
        x: 0,
        y: 0
      } : undefined}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

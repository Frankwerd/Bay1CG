'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ items, direction = 'left', speed = 30 }) => {
  return (
    <div className="relative flex overflow-hidden py-12 border-y border-deep/5 bg-deep/[0.02]">
      <motion.div
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {/* Render twice for seamless loop */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center mx-8 text-2xl font-bold tracking-tighter text-white/40 hover:text-primary transition-colors cursor-default uppercase"
          >
            <span className="mr-4 text-primary opacity-50">•</span>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;

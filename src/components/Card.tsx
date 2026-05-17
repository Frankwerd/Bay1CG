'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
  noDefaultPadding?: boolean;
}

export default function Card({ children, className = "", hover = true, id, noDefaultPadding = false }: CardProps) {
  return (
    <motion.div
      id={id}
      whileHover={hover ? {
        y: -12,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
      } : undefined}
      className={`rounded-3xl relative overflow-hidden transition-all duration-500 ${
        hover ? 'hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : ''
      }`}
    >
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none rounded-3xl" />
      <div className={`relative z-10 h-full w-full break-words hyphens-auto transition-all duration-500 ${!noDefaultPadding ? 'p-6 md:p-10' : ''} ${className}`}>
        {children}
      </div>
    </motion.div>
  );
}

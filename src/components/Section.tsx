'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function Section({ children, className = "", id, dark = true }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-40 px-6 md:px-12 w-full transition-all duration-1000 ${
        dark ? 'bg-transparent' : 'bg-white/[0.02]'
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}

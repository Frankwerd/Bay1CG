'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonProps = HTMLMotionProps<'button'> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
};

export default function Button({
  children,
  variant = 'primary',
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-500 text-[12px] tracking-widest uppercase inline-flex items-center justify-center relative overflow-hidden group border border-transparent";

  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-primary/20",
    secondary: "bg-secondary text-obsidian shadow-lg shadow-secondary/20",
    outline: "border-white/20 text-white hover:border-white/40 glass"
  };

  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <motion.span
          variants={{
            initial: { x: 0 },
            hover: { x: 3 }
          }}
          className="material-symbols-outlined text-sm"
        >
          arrow_forward
        </motion.span>
      </span>

      {/* Shine Effect */}
      <motion.div
        variants={{
          initial: { x: "-100%" },
          hover: { x: "100%" }
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
      />

      <motion.div
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.05 },
          tap: { scale: 0.95 }
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 -z-10"
      />
    </motion.button>
  );
}

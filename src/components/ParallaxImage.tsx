'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  strength?: number; // How much it moves (positive or negative)
  rotate?: number;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = "",
  strength = 100,
  rotate = 0
}) => {
  const ref = useRef(null);

  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  // Mouse Reactive
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const xPct = (clientX / innerWidth - 0.5) * 2;
    const yPct = (clientY / innerHeight - 0.5) * 2;
    mouseX.set(xPct * 20);
    mouseY.set(yPct * 20);
  };

  const springMouseX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springMouseY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{
        y: smoothY,
        x: springMouseX,
        rotate: rotate
      }}
      className={`relative overflow-hidden rounded-2xl shadow-2xl border border-deep/10 ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep/20 to-transparent" />
    </motion.div>
  );
};

export default ParallaxImage;

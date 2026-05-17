'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface GrowthCardProps {
  period: string;
  role: string;
  company: string;
  description: string;
  keyAchievement?: string;
  index: number;
}

export default function GrowthCard({ period, role, company, description, keyAchievement, index }: GrowthCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative pl-8 pb-16 border-l border-white/10 group cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Timeline Indicator */}
      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2 shadow-[0_0_15px_rgba(255,90,0,0.6)] group-hover:scale-150 transition-transform duration-500 z-20" />

      <div className="relative w-full transition-all duration-500">
        <motion.div
          className="w-full relative preserve-3d"
          initial={false}
          animate={{ rotateX: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Front Face */}
          <div className="backface-hidden w-full">
            <div className="min-h-[16rem] p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-center">
              <span className="text-[10px] font-mono font-bold text-secondary mb-4 block uppercase tracking-[0.3em]">
                {period}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-500 leading-tight">
                {role}
              </h3>
              <div className="text-[15px] font-medium text-white/40 group-hover:text-white/60 transition-colors">
                {company}
              </div>
            </div>
          </div>

          {/* Back Face */}
          <div
            className="absolute inset-0 backface-hidden rotate-x-180 w-full h-full"
          >
            <div className="h-full p-8 rounded-2xl bg-primary/10 border border-primary/20 flex flex-col justify-center overflow-y-auto custom-scrollbar">
               <p className="text-white/90 leading-relaxed font-light text-[13px] mb-6">
                {description}
              </p>
              {keyAchievement && (
                <div className="mt-auto pt-4 border-t border-primary/20">
                  <div className="flex items-center text-primary text-[10px] font-bold uppercase tracking-widest mb-2">
                    <span className="w-6 h-[1px] bg-primary/40 mr-2"></span>
                    Key Achievement
                  </div>
                  <p className="text-white text-[12px] font-semibold leading-snug">
                    {keyAchievement}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

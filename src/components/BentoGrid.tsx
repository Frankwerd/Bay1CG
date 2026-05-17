'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '@/data/services';

interface BentoGridProps {
  services: Service[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ services }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 h-full ${services.length > 3 ? 'md:grid-rows-2' : ''}`}>
      {services.map((service, index) => {
        let spanClass = "md:col-span-1";

        if (services.length > 3) {
          const spans = [
            "md:col-span-2 md:row-span-1",
            "md:col-span-1 md:row-span-1",
            "md:col-span-1 md:row-span-1",
            "md:col-span-1 md:row-span-1",
            "md:col-span-1 md:row-span-1",
          ];
          spanClass = spans[index % spans.length];
        }

        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ y: -8, scale: 1.02, zIndex: 10 }}
            className={`${spanClass} p-8 border border-white/10 bg-white/5 rounded-3xl flex flex-col justify-between group hover:bg-white/10 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(255,90,0,0.15)] transition-all duration-500 cursor-default glass will-change-transform`}
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    {service.icon}
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-primary transition-colors">
                  SYSTEM_{index + 1}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white/90 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors">
                {service.description}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {service.tools.slice(0, 3).map(tool => (
                <span key={tool} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider text-white/40 border border-white/5">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default BentoGrid;

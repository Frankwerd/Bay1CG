'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalMockup = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);

  const script = React.useMemo(() => [
    "> initializing bay1_automation_engine...",
    "> status: optimized",
    "> connecting to enterprise_architecture_v4",
    "> executing human_in_the_loop_workflow.sh",
    "> processing large_scale_data_set... done",
    "> efficiency_gain: +95.4%",
    "> architecting resilience..."
  ], []);

  useEffect(() => {
    if (!isTyping) return;

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < script.length) {
        setLines(prev => [...prev, script[currentLine]]);
        currentLine++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
        const timeout = setTimeout(() => {
          setLines([]);
          setIsTyping(true);
        }, 5000); // Reset after 5 seconds
        return () => clearTimeout(timeout);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [isTyping, script]);

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#0B2D4A] rounded-xl overflow-hidden shadow-2xl border border-white/10 font-mono text-sm">
      <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-white/40 text-[10px] ml-4 tracking-widest uppercase">bay1_console — zsh</div>
      </div>
      <div className="p-6 min-h-[300px] flex flex-col gap-2">
        {lines.map((line, i) => (
          <motion.div
            key={`line-${i}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={line && line.startsWith(">") ? "text-primary" : "text-white/70"}
          >
            <span className="opacity-40 mr-2">$</span>
            {line ? line.replace(">", "") : ""}
          </motion.div>
        ))}
        {isTyping && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-5 bg-secondary ml-6"
          />
        )}
      </div>
    </div>
  );
};

export default TerminalMockup;

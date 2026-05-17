'use client';

import React, { useEffect, useRef } from 'react';
import { Roboto, Poppins } from 'next/font/google';
import BeforeAfterSlider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import Section from '@/components/Section';
import { motion } from 'framer-motion';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function LuminousPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const FIRST_IMAGE = {
    imageUrl: '/images/luminous/before.jpg', // Local placeholder
  };
  const SECOND_IMAGE = {
    imageUrl: '/images/luminous/after.jpg', // Local placeholder
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw a subtle technical grid/circuit effect
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(6, 106, 171, 0.15)'; // #066AAB with opacity
      ctx.lineWidth = 1;

      const step = 20;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Add some "nodes"
      ctx.fillStyle = 'rgba(6, 106, 171, 0.4)';
      for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * (canvas.width / step)) * step;
        const y = Math.floor(Math.random() * (canvas.height / step)) * step;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = 150;
        draw();
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div className={`min-h-screen bg-white text-[#333333] ${roboto.className}`}>
      {/* Hero / Header Section */}
      <header className="bg-[#023454] py-16 px-6 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${poppins.className} text-4xl md:text-6xl font-bold mb-4`}
        >
          Luminous <span className="text-[#066AAB]">Electric</span>
        </motion.h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Professional Electrical Services & Recent Project Highlights
        </p>
      </header>

      {/* Main Content */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className={`${poppins.className} text-3xl font-bold text-[#023454] mb-6`}>
              Recent Work: Main Panel Upgrade
            </h2>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-[#066AAB]/10 text-[#066AAB] px-4 py-1 rounded-full text-sm font-semibold">
                Residential
              </span>
              <span className="bg-[#066AAB]/10 text-[#066AAB] px-4 py-1 rounded-full text-sm font-semibold">
                Panel Upgrade
              </span>
              <span className="bg-[#066AAB]/10 text-[#066AAB] px-4 py-1 rounded-full text-sm font-semibold">
                Wayne, NJ
              </span>
            </div>

            <p className="text-lg leading-relaxed mb-8">
              This recent project involved a complete overhaul of a residential electrical panel.
              The original system was outdated, featuring old-style fuses that were no longer
              meeting the modern power demands of the home. We upgraded the client to a 200-amp
              breaker panel, ensuring safety, reliability, and room for future expansion.
            </p>
          </div>

          {/* Slider Centerpiece */}
          <div className="flex flex-col items-center w-full mb-12">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#066AAB]/20 bg-gray-100">
              <div className="aspect-[3/2] relative w-full">
                <BeforeAfterSlider
                  firstImage={FIRST_IMAGE}
                  secondImage={SECOND_IMAGE}
                />
              </div>
              <div className="bg-[#f8f8f8] p-4 text-center text-sm font-medium text-gray-500 uppercase tracking-widest border-t">
                Slide to view Before & After
              </div>
            </div>

            {/* Canvas added under the before and after */}
            <div className="w-full mt-8 rounded-xl border border-gray-100 overflow-hidden bg-gray-50/50">
              <canvas
                ref={canvasRef}
                className="w-full block h-[150px]"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className={`${poppins.className} text-2xl font-bold text-[#023454] mt-12 mb-4`}>
              Project Scope & Execution
            </h3>
            <p className="mb-6">
              Our team of licensed electricians conducted a thorough inspection before beginning
              the work. The process included:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li>Removal of the old, hazardous fuse box.</li>
              <li>Installation of a new Square D 200-Amp main breaker panel.</li>
              <li>Labeling of all circuits for easy identification.</li>
              <li>Final safety inspection and municipal code compliance verification.</li>
            </ul>

            <div className="bg-[#023454] rounded-xl p-8 text-white mt-16">
              <h4 className={`${poppins.className} text-xl font-bold mb-4`}>
                Need a similar upgrade?
              </h4>
              <p className="mb-6 opacity-90">
                Contact Luminous Electric today for a free consultation on your next electrical project.
              </p>
              <button className="bg-[#066AAB] hover:bg-[#066AAB]/90 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
                Book Electrician
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer Branding */}
      <footer className="bg-[#f8f8f8] py-12 px-6 border-t border-gray-200 text-center">
        <p className="text-gray-500 font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Luminous Electric LLC. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

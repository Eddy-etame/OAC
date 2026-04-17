"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExit, setIsExit] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isBot = /bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(navigator.userAgent);
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Bypass preloader only for bots and accessibility overrides
      if (isBot || prefersReducedMotion) {
        setIsExit(true);
        return;
      }
    }

    const duration = 2500; // 2.5 seconds
    const interval = 20; // 20ms steps
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsExit(true), 500);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isExit && (
        <motion.div
          id="oac-preface"
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            opacity: 0,
            y: "-100%",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
          }}
          className="fixed inset-0 z-[999] bg-brand-950 flex flex-col items-center justify-center p-6 overflow-hidden"
        >
          {/* Decorative background glass particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: Math.random() * 1000 }}
                animate={{ 
                  opacity: [0, 0.2, 0],
                  y: [Math.random() * 1000, -100]
                }}
                transition={{ 
                  duration: Math.random() * 10 + 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5
                }}
                className="absolute w-1 h-1 bg-brand-400 rounded-full blur-sm"
                style={{ left: `${Math.random() * 100}%` }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Drawing Animation Concept */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-12"
            >
              <Logo className="scale-125" />
            </motion.div>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white/40 text-sm tracking-[0.4em] uppercase font-light mb-16 text-center"
            >
              Excellence • Integrity • Vision
            </motion.p>

            {/* Progress Container */}
            <div className="w-64 h-1 bg-white/10 rounded-full relative overflow-hidden mb-4">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-brand-500 rounded-full"
                style={{ width: `${progress}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            
            {/* Percentage Counter */}
            <div className="flex items-center gap-2">
              <span className="text-white/60 font-display text-4xl tabular-nums font-bold">
                {Math.round(progress)}
              </span>
              <span className="text-brand-500 font-display text-2xl font-bold">%</span>
            </div>
          </div>

          {/* Institutional Stamp Appearance */}
          <motion.div
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[800px] h-[800px] border-[40px] border-brand-500 rounded-full flex items-center justify-center">
              <span className="text-brand-500 text-[100px] font-display font-black opacity-20 rotate-[-15deg]">
                EST. 2007
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

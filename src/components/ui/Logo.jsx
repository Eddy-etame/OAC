"use client";

import { motion } from 'framer-motion';

export default function Logo({ className = "", isScrolled = false, isMenuOpen = false }) {
  const isOpaque = isScrolled || isMenuOpen;
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div 
        initial={{ rotate: -10, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <svg 
          viewBox="0 0 100 100" 
          className="w-12 h-12 drop-shadow-xl"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Shield Shape */}
          <path 
            d="M50 5L15 20V45C15 68.3 29.8 89.6 50 95C70.2 89.6 85 68.3 85 45V20L50 5Z" 
            className="fill-brand-900 dark:fill-brand-500"
          />
          
          {/* Inner Decorative Seal */}
          <circle cx="50" cy="45" r="30" className="stroke-sand-100/20" strokeWidth="1" />
          <circle cx="50" cy="45" r="25" className="stroke-sand-100/30" strokeWidth="0.5" strokeDasharray="2 2" />
          
          {/* Monogram OAC */}
          <text 
            x="50" 
            y="52" 
            textAnchor="middle" 
            className="fill-white font-display font-bold text-[24px] tracking-tighter"
          >
            OAC
          </text>
          
          {/* Graduation Cap Icon Integrated */}
          <path 
            d="M50 25L75 35L50 45L25 35L50 25Z" 
            className="fill-sand-100/40"
          />
          <path 
            d="M32 38V48C32 48 40 52 50 52C60 52 68 48 68 48V38" 
            className="stroke-sand-100/40" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          
          {/* Shine Effect */}
          <defs>
            <linearGradient id="logoShine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.2" />
              <stop offset="50%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path 
            d="M50 5L15 20V45C15 68.3 29.8 89.6 50 95C70.2 89.6 85 68.3 85 45V20L50 5Z" 
            fill="url(#logoShine)"
          />
        </svg>
      </motion.div>
      
      <div className="hidden sm:flex flex-col">
        <span className={`font-display font-bold text-xl leading-none tracking-tight ${isOpaque ? 'text-brand-900 dark:text-white' : 'text-white'} dark:text-brand-400`}>
          Oxford
        </span>
        <span className={`font-display font-bold text-xl leading-none tracking-tight ${isOpaque ? 'text-brand-900 dark:text-white' : 'text-white'} dark:text-brand-400`}>
          Academic Complex
        </span>
        <div className="flex items-center gap-1 mt-1">
          <div className="h-[1px] w-4 bg-brand-500" />
          <span className={`text-[10px] uppercase tracking-[0.2em] font-medium ${isOpaque ? 'text-gray-500 dark:text-gray-400' : 'text-white/60'}`}>
            Education with a Vision
          </span>
        </div>
      </div>
    </div>
  );
}

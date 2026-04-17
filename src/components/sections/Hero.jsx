"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import RevealText from '../ui/RevealText';
const heroBg = '/images/hero-bg.jpg';

export default function Hero() {
  const router = useRouter();
  
  const handleContact = () => {
    router.push('/contact');
  };

  const handleExplore = () => {
    const el = document.getElementById('about');
    el?.scrollIntoView({ behavior: 'smooth' });
  };
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-950">
      <motion.div className="absolute inset-0 w-full h-full" style={{ y: yHero, opacity: opacityHero }}>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 via-brand-900/50 to-brand-950 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/60 via-transparent to-brand-950/60 z-10" />
        <img 
          src={heroBg} 
          alt="Oxford Academic Complex campus — premier Anglo-Saxon education institution in Cameroon since 2007" 
          loading="eager" 
          className="w-full h-full object-cover scale-105" 
        />
        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/30 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-700/30 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
      </motion.div>

      <div className="container relative z-20 mx-auto px-6 text-center text-white mt-16">
        <RevealText>
          <span className="inline-block py-1.5 px-4 rounded-full border border-white/20 glass text-xs font-semibold tracking-widest uppercase mb-6">
            MINESEC Registered · GCE Centre No. 11972 · Est. 2007
          </span>
        </RevealText>
        <RevealText delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter text-balance mb-6">
            Education with <br/><span className="text-brand-300">a Vision.</span>
          </h1>
        </RevealText>
        <RevealText delay={0.2} className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-white/80 font-light text-balance mb-10 leading-relaxed">
            Nursery, Primary, Secondary & Technical education across three campuses in Douala, Tombel, and Loum. Empowering the next generation of leaders through accredited, career-focused Anglo-Saxon education.
          </p>
        </RevealText>
        <RevealText delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleExplore}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-brand-950 font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-brand-950 dark:text-brand-400"
            >
              Explore Programs
            </button>
            <button 
              onClick={handleContact}
              className="w-full sm:w-auto px-8 py-4 rounded-full glass border border-white/30 text-white font-medium hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-brand-950"
            >
              Contact Admissions
            </button>
          </div>
        </RevealText>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
        className="absolute bottom-10 z-20 text-white/50 cursor-pointer"
        onClick={handleExplore}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}

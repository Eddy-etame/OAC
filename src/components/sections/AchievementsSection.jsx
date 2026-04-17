"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Trophy, Users, Award } from 'lucide-react';
import RevealText from '../ui/RevealText';

function AnimatedCounter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = Date.now();
          const numericTarget = parseInt(target, 10);
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * numericTarget));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="counter-value">
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  { value: '87', suffix: '%', label: 'GCE O-Level Pass Rate', sublabel: '2024/2025 Session', icon: <TrendingUp className="w-6 h-6" /> },
  { value: '82', suffix: '%', label: 'GCE A-Level Pass Rate', sublabel: '2024/2025 Session', icon: <Trophy className="w-6 h-6" /> },
  { value: '1500', suffix: '+', label: 'Alumni Network', sublabel: 'Since 2007', icon: <Users className="w-6 h-6" /> },
  { value: '17', suffix: '+', label: 'Years of Excellence', sublabel: 'Founded 2007', icon: <Award className="w-6 h-6" /> },
];

const milestones = [
  { year: '2007', title: 'Founded in Tombel', desc: 'OAC opens its doors in Tombel, South West Region, as a nursery and primary school with a vision for Anglo-Saxon educational excellence.' },
  { year: '2010', title: 'Secondary School Launched', desc: 'The secondary education program begins at the Tombel campus, offering General Education courses and preparing the first cohort for GCE O-Levels.' },
  { year: '2013', title: 'Expansion to Douala', desc: 'OAC establishes the Bepanda campus in Douala to serve the Littoral Region, offering Secondary, Technical, and Commercial education streams.' },
  { year: '2015', title: 'GCE Centre Status Awarded', desc: 'The Cameroon GCE Board officially recognizes OAC Douala-Bepanda as Examination Centre No. 11972 — a milestone validating institutional quality.' },
  { year: '2018', title: 'Loum Campus Opens', desc: 'OAC expands further into the Littoral Region with a purpose-built nursery facility in Loum, bringing quality early childhood education closer to more families.' },
  { year: '2020', title: 'Technical Education Expansion', desc: 'New streams in Computer Science, Financial Management, and Secretarial Studies are added to the Bepanda Technical campus.' },
  { year: '2024', title: 'Record GCE Results', desc: 'OAC achieves its highest-ever pass rates: 87% at O-Level and 82% at A-Level, with multiple distinctions in Technical subjects.' },
];

export default function AchievementsSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-950 text-white overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-700/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <RevealText className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-brand-400 font-semibold tracking-wider uppercase text-sm">Results &amp; Milestones</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6 text-balance text-white">Proven Excellence.</h2>
          <p className="text-brand-200 text-lg">From a single campus in rural Tombel to a three-campus network producing nationally competitive GCE results — our track record speaks for itself.</p>
        </RevealText>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center p-6 md:p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-brand-500/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-brand-400">
                {stat.icon}
              </div>
              <p className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-white/40 text-xs">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <RevealText className="mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Our Journey</h3>
        </RevealText>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-500/20 md:-translate-x-0.5" />

          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className={`relative flex gap-6 md:gap-0 mb-8 md:mb-12 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-brand-500 rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-2 ring-4 ring-brand-950 z-10" />

              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <span className="text-brand-400 font-display font-bold text-lg">{milestone.year}</span>
                <h4 className="text-xl font-display font-bold text-white mt-1 mb-2">{milestone.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

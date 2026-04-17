"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import RevealText from '../ui/RevealText';

const testimonials = [
  {
    name: 'Mrs. Grace Etonde Mbella',
    role: 'Parent — Douala Campus',
    text: 'When we moved to Douala, finding a school that truly understood the Anglo-Saxon system was our top priority. OAC Bepanda delivered beyond our expectations. My son sat for his GCE O-Levels right at the school, and the teachers — many of them GCE examiners — prepared him exceptionally well. He passed with 8 papers on the first attempt.',
    rating: 5,
    year: '2024',
  },
  {
    name: 'Mr. Emmanuel Njoh Ayuk',
    role: 'Parent — Tombel Campus',
    text: 'OAC Tombel has been part of our family for over a decade. All four of my children attended, and the family discount made it financially manageable. The discipline, the moral upbringing, and the academic rigor are unmatched in this region. My eldest is now at the University of Buea studying Engineering.',
    rating: 5,
    year: '2025',
  },
  {
    name: 'Sandra Ngum Akwa',
    role: 'Alumni — Class of 2021',
    text: 'I did my entire education at OAC — from Nursery 1 in Tombel through Upper Sixth in Bepanda. The Commercial Education stream taught me real business skills. Today, I run a small fashion business while pursuing my HND at the Douala Institute of Technology. The entrepreneurship classes were the spark.',
    rating: 5,
    year: '2025',
  },
  {
    name: 'Mr. Peter Tanyi Ashu',
    role: 'Parent — Loum Campus',
    text: 'We were skeptical at first because Loum is a smaller town, but OAC Loum proved that quality early childhood education does not require a big city. My daughter Precious went from being a shy 3-year-old to confidently reading and counting in both English and French by Nursery 2.',
    rating: 5,
    year: '2024',
  },
  {
    name: 'Blessing Nfor Tiku',
    role: 'Alumni — Class of 2023',
    text: 'The Technical Education stream at OAC was a game-changer for me. While my friends in other schools only studied theory, I was learning practical accounting and IT skills. I passed my GCE Technical with distinction in Accounting, and I am now pursuing a professional ACCA qualification.',
    rating: 5,
    year: '2025',
  },
  {
    name: 'Mrs. Florence Akem Suh',
    role: 'Parent — Douala Campus',
    text: 'As a single mother, the flexible payment structure at OAC was a lifeline. They never once sent my children home for fees. The administration treated our family with dignity while still providing world-class education. Both my children are thriving, and I truly believe OAC changed their trajectory.',
    rating: 5,
    year: '2024',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  const t = testimonials[current];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <RevealText className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-brand-700 dark:text-brand-400 font-semibold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6 text-balance text-gray-900 dark:text-white">Voices of Our Community.</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">Parents, alumni, and students share their OAC experience — from the classrooms of Tombel to the examination halls of Bepanda.</p>
        </RevealText>

        <div className="max-w-4xl mx-auto relative">
          {/* Decorative quote */}
          <div className="absolute -top-6 -left-4 md:-left-8 opacity-10">
            <Quote className="w-24 h-24 md:w-32 md:h-32 text-brand-900 dark:text-brand-400" />
          </div>

          <div className="relative min-h-[320px] md:min-h-[280px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="bg-sand-100 dark:bg-gray-700/50 p-8 md:p-12 rounded-[2.5rem] border border-transparent hover:border-brand-500/10 transition-all"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-display font-bold text-gray-900 dark:text-white">{t.name}</p>
                    <p className="text-brand-700 dark:text-brand-400 text-sm font-medium">{t.role}</p>
                  </div>
                  <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold">{t.year}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-sand-100 dark:bg-gray-700 flex items-center justify-center hover:bg-brand-900 hover:text-white dark:hover:bg-brand-500 transition-all shadow-sm border border-gray-200 dark:border-gray-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setDirection(idx > current ? 1 : -1); setCurrent(idx); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === current 
                      ? 'bg-brand-900 dark:bg-brand-400 w-8' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-sand-100 dark:bg-gray-700 flex items-center justify-center hover:bg-brand-900 hover:text-white dark:hover:bg-brand-500 transition-all shadow-sm border border-gray-200 dark:border-gray-600"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

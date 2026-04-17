"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import RevealText from '../ui/RevealText';

// Reuse existing project images for the gallery with descriptive captions
const heroBg = '/images/hero-bg.jpg';
const aboutImg = '/images/about.jpg';
const nurseryImg = '/images/nursery.jpg';
const primaryImg = '/images/primary.jpg';
const upperPrimaryImg = '/images/upper-primary.jpg';
const campusTombel = '/images/campus-tombel.jpg';
const campusLoum = '/images/campus-loum.jpg';
const campusDouala = '/images/campus-douala.png';

const galleryItems = [
  { img: heroBg, title: 'OAC Campus Life', category: 'Campus', desc: 'Students gathered at the main campus grounds' },
  { img: aboutImg, title: 'Classroom Excellence', category: 'Learning', desc: 'Interactive learning sessions in progress' },
  { img: nurseryImg, title: 'Nursery Section', category: 'Early Childhood', desc: 'Play-based learning for our youngest learners' },
  { img: primaryImg, title: 'Primary School', category: 'Primary', desc: 'Building strong foundations through structured learning' },
  { img: upperPrimaryImg, title: 'Upper Primary Activities', category: 'Primary', desc: 'Preparing for the transition to secondary education' },
  { img: campusDouala, title: 'Douala-Bepanda Campus', category: 'Campus', desc: 'Our secondary and technical education hub in Douala' },
  { img: campusTombel, title: 'Tombel Campus', category: 'Campus', desc: 'The founding campus — heart of the OAC community since 2007' },
  { img: campusLoum, title: 'Loum Campus', category: 'Campus', desc: 'Purpose-built nursery facility in the Littoral Region' },
];

const categories = ['All', 'Campus', 'Learning', 'Early Childhood', 'Primary'];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (dir) => {
    setLightboxIndex((prev) => (prev + dir + filtered.length) % filtered.length);
  };

  return (
    <section className="py-16 md:py-24 bg-sand-100 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <RevealText className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-brand-700 dark:text-brand-400 font-semibold tracking-wider uppercase text-sm">Gallery</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6 text-balance text-gray-900 dark:text-white">Campus Gallery.</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">A glimpse into daily life at Oxford Academic Complex — from our nursery classrooms to our secondary school examination halls.</p>
        </RevealText>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-900 text-white shadow-lg shadow-brand-900/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                <img
                  src={item.img}
                  alt={`${item.title} — ${item.desc}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ZoomIn className="w-4 h-4 text-white/70" />
                    <span className="text-[10px] uppercase tracking-widest text-white/70 font-bold">{item.category}</span>
                  </div>
                  <p className="text-white font-display font-bold text-sm">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-2 md:left-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-2 md:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].img}
                alt={filtered[lightboxIndex].desc}
                className="w-full h-full max-h-[70vh] object-contain rounded-2xl"
              />
              <div className="text-center mt-4">
                <p className="text-white font-display font-bold text-xl">{filtered[lightboxIndex].title}</p>
                <p className="text-white/50 text-sm mt-1">{filtered[lightboxIndex].desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

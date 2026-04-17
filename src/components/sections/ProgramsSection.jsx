"use client";

import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Clock, CheckCircle, MapPin } from 'lucide-react';
import RevealText from '../ui/RevealText';
const nurseryImg = '/images/nursery.jpg';
const primaryImg = '/images/primary.jpg';
const upperPrimaryImg = '/images/upper-primary.jpg';

const programs = [
  { 
    title: 'Nursery Section', 
    desc: 'Our nursery program provides early childhood education in a safe, nurturing environment. Children develop foundational literacy, numeracy, creativity, and social skills through play-based learning guided by trained nursery educators. The curriculum follows the official Cameroon syllabi for anglophone nursery education.', 
    img: nurseryImg,
    duration: '2 Years (Nursery 1 & 2)',
    ageRange: 'Ages 3–5',
    requirements: 'Birth certificate, 2 passport photos, medical certificate',
    campuses: ['tombel', 'loum'],
    subjects: ['English Language', 'French Language', 'Mathematics', 'General Knowledge', 'Arts & Crafts', 'Physical Education']
  },
  { 
    title: 'Lower Primary (Classes 1–3)', 
    desc: 'Lower primary builds on nursery foundations with structured lessons in core subjects. Students develop strong reading, writing, and arithmetic skills through an engaging, child-centered approach. Class sizes are kept small to ensure individual attention from our qualified teachers.', 
    img: primaryImg,
    duration: '3 Years',
    ageRange: 'Ages 6–8',
    requirements: 'Nursery completion certificate or equivalent, previous report card',
    campuses: ['tombel'],
    subjects: ['English', 'French', 'Mathematics', 'General Science', 'History & Geography', 'Citizenship Education']
  },
  { 
    title: 'Upper Primary & Beyond (Classes 4–6)', 
    desc: 'Upper primary strengthens core academic competencies and prepares pupils for the transition to secondary education. Students sit for the Government Common Entrance, FSLC (First School Leaving Certificate), and are guided toward the most suitable secondary stream — General, Technical, or Commercial.', 
    img: upperPrimaryImg,
    duration: '3 Years',
    ageRange: 'Ages 9–11',
    requirements: 'Class 3 report card, transfer letter if from another school',
    campuses: ['tombel'],
    subjects: ['English', 'French', 'Mathematics', 'Science', 'Social Studies', 'ICT Basics', 'Agricultural Science']
  },
];

export default function ProgramsSection() {
  const [selectedCampus, setSelectedCampus] = useState('all');

  const filteredPrograms = selectedCampus === 'all' 
    ? programs 
    : programs.filter(prog => prog.campuses.includes(selectedCampus));

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <RevealText className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-brand-700 dark:text-brand-400 font-semibold tracking-wider uppercase text-sm">Nursery & Primary</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6 text-balance text-gray-900 dark:text-white">Foundational Education.</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">From their first day in Nursery 1 through to the First School Leaving Certificate, OAC students receive structured, high-quality instruction that prepares them for our renowned secondary streams.</p>
        </RevealText>

        {/* Campus Filter */}
        <div className="mb-8 md:mb-12 flex flex-wrap justify-center gap-2 md:gap-3">
          {['all', 'tombel', 'loum'].map((campus) => (
            <button
              key={campus}
              onClick={() => setSelectedCampus(campus)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all ${
                selectedCampus === campus 
                  ? 'bg-brand-900 text-white shadow-lg shadow-brand-900/30' 
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {campus === 'all' ? 'All Campuses' : campus.charAt(0).toUpperCase() + campus.slice(1) + ' Campus'}
            </button>
          ))}
        </div>

        <LayoutGroup>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <AnimatePresence mode="popLayout">
              {filteredPrograms.map((prog) => (
                <motion.div 
                  key={prog.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ 
                    scale: 1.03,
                    rotateX: 1,
                    rotateY: 1,
                    boxShadow: "0 25px 50px -12px rgba(82, 12, 143, 0.2)"
                  }}
                  transition={{ 
                    layout: { duration: 0.3 },
                    opacity: { duration: 0.2 },
                    hover: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                  className="group relative rounded-3xl overflow-hidden bg-sand-100 dark:bg-gray-700 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300"
                  style={{ perspective: 1000 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={prog.img} alt={`Oxford Academic Complex ${prog.title} — ${prog.ageRange} Anglo-Saxon education in Cameroon`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                    <h3 className="absolute bottom-4 left-6 text-2xl font-display font-bold text-white uppercase tracking-wider">{prog.title}</h3>
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col grow">
                    <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">{prog.desc}</p>
                    
                    {/* Subjects preview */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {prog.subjects.slice(0, 4).map((subj, i) => (
                        <span key={i} className="text-[10px] uppercase font-bold tracking-wider bg-brand-500/10 dark:bg-brand-400/10 text-brand-900 dark:text-brand-400 px-2 py-1 rounded-full">{subj}</span>
                      ))}
                      {prog.subjects.length > 4 && (
                        <span className="text-[10px] uppercase font-bold tracking-wider bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full">+{prog.subjects.length - 4} more</span>
                      )}
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-600 mt-auto">
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="w-5 h-5 text-brand-900 dark:text-brand-400" />
                        <span className="font-semibold text-gray-800 dark:text-gray-200">Duration:</span>
                        <span className="text-gray-700 dark:text-gray-300">{prog.duration}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-brand-900 dark:text-brand-400" />
                        <span className="font-semibold text-gray-800 dark:text-gray-200">Ages:</span>
                        <span className="text-gray-700 dark:text-gray-300">{prog.ageRange}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="w-5 h-5 text-brand-900 dark:text-brand-400" />
                        <span className="font-semibold text-gray-800 dark:text-gray-200">Available at:</span>
                        <span className="text-gray-700 dark:text-gray-300">{prog.campuses.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}

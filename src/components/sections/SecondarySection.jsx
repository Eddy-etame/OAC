"use client";

import { motion } from 'framer-motion';
import { CheckCircle, BookOpen, GraduationCap, Target, Briefcase } from 'lucide-react';
import RevealText from '../ui/RevealText';

const secondaryPrograms = [
  {
    title: 'General Education',
    subtitle: '1st & 2nd Cycle — Arts & Science',
    desc: 'The General Education stream prepares students for GCE Ordinary Level (Form 5) and Advanced Level (Upper Sixth) examinations. Students choose between Arts and Science tracks, with rigorous instruction from faculty who are themselves GCE examiners. Our pass rates consistently rank among the highest in the Littoral Region.',
    features: [
      'Arts Stream: Literature, History, Geography, Economics, Religious Studies',
      'Science Stream: Biology, Chemistry, Physics, Additional Mathematics',
      'GCE O-Level Preparation (Forms 1–5)',
      'GCE A-Level Preparation (Lower & Upper Sixth)'
    ],
    icon: <BookOpen className="w-8 h-8 text-brand-900 dark:text-brand-400" />
  },
  {
    title: 'Technical Education',
    subtitle: '1st & 2nd Cycle — Industrial & Commercial',
    desc: 'OAC\'s Technical stream provides career-oriented education for students who want to develop practical, marketable skills. Our programs are aligned with MINESEC\'s technical syllabi and prepare students for both GCE Technical examinations and direct entry into the workforce or higher technical institutions.',
    features: [
      'Accounting & Financial Management',
      'Secretarial Administration & Office Practice',
      'Marketing & Business Management',
      'Computer Science & Information Technology'
    ],
    icon: <Target className="w-8 h-8 text-brand-900 dark:text-brand-400" />
  },
  {
    title: 'Commercial Education',
    subtitle: '1st & 2nd Cycle — Business Focus',
    desc: 'The Commercial stream bridges academic theory with real-world business application. Students develop competencies in entrepreneurship, commerce, and financial management — skills that are highly valued in Cameroon\'s growing economy. Graduates are prepared for both higher education and immediate professional careers.',
    features: [
      'Commerce & Business Principles',
      'Entrepreneurship & Small Business Management',
      'Economics & Financial Literacy',
      'Business Communication & Law'
    ],
    icon: <Briefcase className="w-8 h-8 text-brand-900 dark:text-brand-400" />
  }
];

export default function SecondarySection() {
  return (
    <section className="py-16 md:py-24 bg-brand-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <RevealText className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-brand-700 dark:text-brand-400 font-semibold tracking-wider uppercase text-sm">Secondary & Technical Education</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6 text-balance text-gray-900 dark:text-white">Excellence in Secondary.</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">At the Douala-Bepanda campus, OAC offers three distinct secondary streams — each leading to nationally recognized GCE qualifications. As an official GCE Examination Center (Centre No. 11972), our students sit for their exams in the familiar environment of their own school.</p>
        </RevealText>

        <div className="grid md:grid-cols-3 gap-8">
          {secondaryPrograms.map((program, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-brand-500/20"
            >
              <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900/20 rounded-2xl flex items-center justify-center mb-6">
                {program.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-900 dark:text-brand-400 mb-2">{program.title}</h3>
              <p className="text-brand-700 dark:text-brand-500 font-medium mb-4 text-sm uppercase tracking-wide">{program.subtitle}</p>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">{program.desc}</p>
              <ul className="space-y-3">
                {program.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-400">
                    <CheckCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <RevealText delay={0.4} className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-brand-900 text-white px-8 py-4 rounded-2xl shadow-xl shadow-brand-900/20">
            <GraduationCap className="w-6 h-6 text-brand-400" />
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.2em] font-medium opacity-70 leading-none mb-1">Official GCE Board Examination Center</p>
              <p className="text-xl font-display font-bold leading-none">Centre No. 11972 — Douala, Bepanda</p>
            </div>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

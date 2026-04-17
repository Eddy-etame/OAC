"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';
import RevealText from '../ui/RevealText';

const leaders = [
  {
    name: 'The Founding Board',
    title: 'Board of Directors',
    desc: 'Oxford Academic Complex was established in 2007 by a team of seasoned educationists and community leaders from the South West and Littoral regions. Driven by a shared conviction that quality Anglo-Saxon education should be accessible to every family — regardless of location or income — the founders pooled their pedagogical expertise and personal resources to open the first OAC campus in Tombel.',
    icon: <Award className="w-8 h-8" />,
    highlights: ['17+ years of institutional leadership', 'Expansion from 1 to 3 campuses', 'MINESEC recognition secured', 'GCE Centre status achieved'],
  },
  {
    name: 'Academic Leadership',
    title: 'Principals & Vice-Principals',
    desc: 'Each OAC campus is led by a qualified principal supported by vice-principals for academics and discipline. Our secondary school leadership team at the Douala-Bepanda campus includes educators with 15+ years of classroom and administrative experience, many of whom have served as GCE Board examiners and regional pedagogic inspectors.',
    icon: <GraduationCap className="w-8 h-8" />,
    highlights: ['Active GCE Board examiners', '15+ years average teaching experience', 'Regional pedagogic inspector alumni', 'Bilingual leadership capability'],
  },
  {
    name: 'Teaching Staff',
    title: '50+ Qualified Educators',
    desc: 'OAC employs over 50 qualified teachers across its three campuses, with specializations spanning the sciences, arts, technical disciplines, and early childhood education. A key differentiator: a significant percentage of our secondary faculty are active GCE examiners, giving students unparalleled insight into examination expectations and marking schemes.',
    icon: <Users className="w-8 h-8" />,
    highlights: ['Dedicated subject specialists', 'Regular in-service training', 'Student-centered pedagogy', 'Mentorship programs'],
  },
  {
    name: 'Support & Guidance',
    title: 'Counseling & Administration',
    desc: 'Beyond academics, OAC maintains dedicated guidance counselors and administrative staff who ensure the holistic well-being of students. From career counseling for Upper Sixth students to parent-teacher communication channels, our support infrastructure ensures no student falls through the cracks.',
    icon: <BookOpen className="w-8 h-8" />,
    highlights: ['Career guidance counseling', 'Parent-teacher conferences', 'Student welfare monitoring', 'University application support'],
  },
];

export default function LeadershipSection() {
  return (
    <section className="py-16 md:py-24 bg-sand-100 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <RevealText className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-brand-700 dark:text-brand-400 font-semibold tracking-wider uppercase text-sm">Leadership</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6 text-balance text-gray-900 dark:text-white">The People Behind OAC.</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">A team of passionate educators, administrators, and community builders committed to shaping the next generation of Cameroon&apos;s leaders.</p>
        </RevealText>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group bg-white dark:bg-gray-800 p-8 md:p-10 rounded-[2.5rem] shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-brand-500/20"
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900/20 rounded-2xl flex items-center justify-center shrink-0 text-brand-900 dark:text-brand-400 group-hover:bg-brand-900 group-hover:text-white dark:group-hover:bg-brand-500 transition-all duration-300">
                  {leader.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white">{leader.name}</h3>
                  <p className="text-brand-700 dark:text-brand-400 text-sm font-semibold uppercase tracking-wider">{leader.title}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{leader.desc}</p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2">
                {leader.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-brand-500 rounded-full shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

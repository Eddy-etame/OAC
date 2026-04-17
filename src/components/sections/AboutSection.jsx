"use client";

import { motion } from 'framer-motion';
import { Award, Users, Shield, BookOpen } from 'lucide-react';
import RevealText from '../ui/RevealText';
const aboutImg = '/images/about.jpg';

const stats = [
  { value: '2007', label: 'Year Founded', icon: <Award className="w-5 h-5 text-brand-500" /> },
  { value: '3', label: 'Campuses', icon: <Shield className="w-5 h-5 text-brand-500" /> },
  { value: '11972', label: 'GCE Centre No.', icon: <BookOpen className="w-5 h-5 text-brand-500" /> },
  { value: '50+', label: 'Qualified Staff', icon: <Users className="w-5 h-5 text-brand-500" /> },
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative bg-sand-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8 text-gray-900 dark:text-white">
                Education with <br/>
                <span className="text-brand-900 dark:text-brand-400">a Vision.</span>
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-loose mb-6">
                Oxford Academic Complex (OAC) was founded in <strong className="text-brand-900 dark:text-brand-400 font-semibold">2007</strong> by a team of seasoned educationists with a singular mission: to deliver <strong className="text-brand-900 dark:text-brand-400 font-semibold">purely Anglo-Saxon education</strong> that is accessible, rigorous, and grounded in moral integrity. What began as a single campus in Tombel, South West Region, has grown into a network of three campuses serving families in Douala (Bepanda), Tombel, and Loum.
              </p>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-loose mb-6">
                OAC is a fully recognized <strong className="text-brand-900 dark:text-brand-400 font-semibold">MINESEC institution</strong> (Ministry of Secondary Education) and an <strong className="text-brand-900 dark:text-brand-400 font-semibold">official GCE Board Examination Center — Centre No. 11972</strong>. Our students sit for GCE Ordinary and Advanced Level examinations on-site, ensuring continuity and comfort during this critical period.
              </p>
            </RevealText>
            <RevealText delay={0.25}>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-loose mb-8">
                Our teaching staff are not just educators — a significant number are <strong className="text-brand-900 dark:text-brand-400 font-semibold">active GCE examiners</strong> with firsthand knowledge of marking schemes, examination techniques, and evolving syllabi. This gives OAC students a distinct advantage in their academic preparation. We operate in a calm, disciplined, and inclusive environment where every student, regardless of gender or background, is given equal opportunity to excel.
              </p>
            </RevealText>
            
            <RevealText delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-gray-200 dark:border-gray-700">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                      {stat.icon}
                      <p className="text-2xl md:text-3xl font-display font-bold text-brand-900 dark:text-brand-400">{stat.value}</p>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wide uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </RevealText>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
          >
            <img 
              src={aboutImg} 
              alt="Oxford Academic Complex students and teachers in a classroom at the Tombel campus in Cameroon" 
              loading="lazy" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

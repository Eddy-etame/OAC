"use client";

import { motion } from 'framer-motion';
import { Calendar, BookOpen, Trophy, Sun, Bell } from 'lucide-react';
import RevealText from '../ui/RevealText';

function getAcademicYear() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  return month >= 7 ? `${year}/${year + 1}` : `${year - 1}/${year}`;
}

const terms = [
  {
    name: 'First Term',
    period: 'September — December',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-600',
    events: [
      { date: 'Early September', event: 'School Resumption / Registration', type: 'start' },
      { date: 'September', event: 'Welcome Assembly & Orientation Week', type: 'event' },
      { date: 'October', event: 'Inter-House Sports Competition', type: 'event' },
      { date: 'November', event: 'First Sequence Examinations', type: 'exam' },
      { date: 'Mid-December', event: 'Second Sequence Examinations', type: 'exam' },
      { date: 'Late December', event: 'End of First Term / Christmas Break', type: 'break' },
    ],
  },
  {
    name: 'Second Term',
    period: 'January — March',
    icon: <Trophy className="w-6 h-6" />,
    color: 'from-brand-500 to-brand-700',
    events: [
      { date: 'Early January', event: 'School Resumption', type: 'start' },
      { date: 'January', event: 'Career Day / Guidance Week', type: 'event' },
      { date: 'February', event: 'Third Sequence Examinations', type: 'exam' },
      { date: 'February', event: 'National Day Celebrations (Youth Day)', type: 'event' },
      { date: 'March', event: 'Fourth Sequence Examinations', type: 'exam' },
      { date: 'Late March', event: 'End of Second Term / Easter Break', type: 'break' },
    ],
  },
  {
    name: 'Third Term',
    period: 'April — June',
    icon: <Sun className="w-6 h-6" />,
    color: 'from-amber-500 to-orange-600',
    events: [
      { date: 'Mid-April', event: 'School Resumption', type: 'start' },
      { date: 'May', event: 'Fifth Sequence Examinations', type: 'exam' },
      { date: 'May', event: 'Labour Day Celebration', type: 'event' },
      { date: 'May/June', event: 'GCE Mock Examinations (Forms 5 & U6)', type: 'exam' },
      { date: 'June', event: 'Sixth Sequence Examinations / Promotion Exams', type: 'exam' },
      { date: 'June', event: 'GCE O-Level & A-Level Examinations', type: 'exam' },
      { date: 'Late June', event: 'Prize Giving Day & Graduation', type: 'event' },
      { date: 'July', event: 'Long Vacation Begins', type: 'break' },
    ],
  },
];

const typeStyles = {
  start: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800',
  event: 'bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400 border-brand-200 dark:border-brand-800',
  exam: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800',
  break: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
};

const typeLabels = {
  start: 'Resumption',
  event: 'Event',
  exam: 'Examination',
  break: 'Holiday',
};

export default function AcademicCalendarSection() {
  const academicYear = getAcademicYear();

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <RevealText className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-brand-700 dark:text-brand-400 font-semibold tracking-wider uppercase text-sm">Academic Calendar</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6 text-balance text-gray-900 dark:text-white">
            {academicYear} Calendar.
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">Key dates, examination periods, and events for the current academic year. All dates are subject to official MINESEC directives.</p>
        </RevealText>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(typeLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                key === 'start' ? 'bg-blue-500' :
                key === 'event' ? 'bg-brand-500' :
                key === 'exam' ? 'bg-red-500' :
                'bg-emerald-500'
              }`} />
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {terms.map((term, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-sand-100 dark:bg-gray-700/50 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${term.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    {term.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold">{term.name}</h3>
                    <p className="text-white/80 text-sm">{term.period}</p>
                  </div>
                </div>
              </div>

              {/* Events */}
              <div className="p-5 md:p-6 space-y-3">
                {term.events.map((event, eIdx) => (
                  <div
                    key={eIdx}
                    className={`p-3 rounded-xl border text-sm ${typeStyles[event.type]}`}
                  >
                    <div className="flex items-start gap-2">
                      <Bell className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-xs uppercase tracking-wider opacity-70 mb-0.5">{event.date}</p>
                        <p className="font-medium leading-snug">{event.event}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <RevealText delay={0.3} className="mt-12 text-center">
          <div className="inline-block p-4 px-8 bg-brand-50 dark:bg-brand-900/10 rounded-2xl border border-brand-200 dark:border-brand-800">
            <div className="flex items-center gap-2 justify-center">
              <Calendar className="w-4 h-4 text-brand-700 dark:text-brand-400" />
              <p className="text-sm text-brand-900 dark:text-brand-400 font-semibold">
                Dates are indicative. Official exam timetables are published by the GCE Board and MINESEC.
              </p>
            </div>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

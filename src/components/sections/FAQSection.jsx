"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import RevealText from '../ui/RevealText';

const faqs = [
  {
    question: "What educational system does OAC follow?",
    answer: "OAC follows the purely Anglo-Saxon (English-language) system of education as prescribed by the Cameroon Ministry of Secondary Education (MINESEC). All instruction, examinations, and administration are conducted in English, following the official GCE Board syllabi for General, Technical, and Commercial education."
  },
  {
    question: "What academic programs does OAC offer?",
    answer: "We offer a complete educational pathway: Nursery (ages 3–5) at our Tombel and Loum campuses, Primary education (Classes 1–6) at Tombel, and Secondary education at the Douala-Bepanda campus. Secondary streams include General Education (Arts & Science leading to GCE O/A Levels), Technical Education (Accounting, Secretarial Studies, IT), and Commercial Education (Business, Entrepreneurship, Commerce)."
  },
  {
    question: "Is OAC a registered GCE Examination Center?",
    answer: "Yes. Oxford Academic Complex is an officially registered GCE Board Examination Center — Centre No. 11972, located at our Douala-Bepanda campus. This means our students sit for both GCE Ordinary Level and Advanced Level examinations on-site, in the comfort of their own school. We are licensed for both General and Technical education examinations."
  },
  {
    question: "What documents are needed for admission?",
    answer: "You will need: your child's previous academic report card (original + photocopy), birth certificate (original + photocopy), two recent passport-size photographs, a photocopy of the parent/guardian's national identity card, and a medical certificate of fitness for new students. Visit the admissions office at any campus to begin the process."
  },
  {
    question: "Where are the OAC campuses located?",
    answer: "We have three campuses: (1) Douala — behind CAMTEL, Bepanda Mallah, Littoral Region (Secondary & Technical education); (2) Tombel — Main Road, Tombel Town, South West Region (Nursery, Primary & Secondary — our founding campus since 2007); (3) Loum — Littoral Hub, Loum Town, Littoral Region (Nursery education). All campuses operate Monday–Friday."
  },
  {
    question: "How flexible are the school fees?",
    answer: "OAC is known for having one of the most flexible payment structures in the region. Parents are allowed to pay school fees at their convenience throughout the academic year. No child is sent home for temporary payment delays. Additionally, families with 4 or more children enrolled at OAC are eligible for fee reductions — contact the bursar's office for details."
  },
  {
    question: "What qualifications do OAC teachers have?",
    answer: "Our teachers are highly qualified, experienced educationists. A significant number of our secondary school teachers are active GCE examiners — meaning they set and mark national examination papers. This gives them firsthand knowledge of marking schemes, examination techniques, and evolving syllabi, which directly benefits our students' exam preparation."
  },
  {
    question: "What are the school hours?",
    answer: "All campuses operate Monday to Friday. The Douala-Bepanda and Tombel campuses run from 7:30 AM to 4:00 PM. The Loum nursery campus runs from 7:30 AM to 2:00 PM. Supervision is provided throughout operating hours. Parents are welcome to visit during office hours for inquiries."
  }
];

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <div
        className={`group rounded-3xl border transition-all duration-300 ${
          isOpen
            ? 'bg-white dark:bg-gray-700 border-brand-500/20 shadow-lg shadow-brand-900/5'
            : 'bg-sand-100 dark:bg-gray-700/50 border-transparent hover:border-brand-500/10 hover:bg-white dark:hover:bg-gray-700'
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center gap-4 p-6 md:p-8 text-left cursor-pointer"
          aria-expanded={isOpen}
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen 
              ? 'bg-brand-900 dark:bg-brand-500 text-white' 
              : 'bg-brand-900/10 dark:bg-brand-400/10 text-brand-900 dark:text-brand-400'
          }`}>
            <HelpCircle className="w-5 h-5" />
          </div>
          <h3 className={`text-lg md:text-xl font-bold flex-1 transition-colors ${
            isOpen 
              ? 'text-brand-900 dark:text-brand-400' 
              : 'text-gray-900 dark:text-white group-hover:text-brand-900 dark:group-hover:text-brand-400'
          }`}>
            {faq.question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0"
          >
            <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-brand-500' : 'text-gray-400'}`} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8 pl-[72px] md:pl-[88px]">
                <p className="text-gray-700 dark:text-gray-300 leading-loose text-base">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const router = useRouter();

  const handleContact = () => {
    router.push('/contact');
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <RevealText className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-brand-700 dark:text-brand-400 font-semibold tracking-wider uppercase text-sm">FAQ</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6 text-balance text-gray-900 dark:text-white">Questions &amp; Answers.</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">Everything you need to know about enrolling at Oxford Academic Complex — from programs and admission requirements to payment flexibility and campus locations.</p>
        </RevealText>

        <div className="max-w-4xl mx-auto grid gap-3">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              index={idx}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>

        <RevealText delay={0.4} className="mt-16 text-center">
          <button
            onClick={handleContact}
            className="inline-flex items-center gap-2 text-brand-900 dark:text-brand-400 font-bold text-lg hover:underline"
          >
            Still have questions? Contact our admissions team <ChevronRight className="w-5 h-5" />
          </button>
        </RevealText>
      </div>
    </section>
  );
}

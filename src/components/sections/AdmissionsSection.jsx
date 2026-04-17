"use client";

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, UserPlus, FileText, Calendar, CreditCard } from 'lucide-react';
import { useRouter } from 'next/navigation';
import RevealText from '../ui/RevealText';

export default function AdmissionsSection() {
  const router = useRouter();

  const handleContact = () => {
    router.push('/contact');
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-3 md:px-6">
        <RevealText className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <span className="text-brand-700 dark:text-brand-400 font-semibold tracking-wider uppercase text-sm">Admissions</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mt-3 mb-6 text-balance text-gray-900 dark:text-white">Join Our Community.</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">Admissions at Oxford Academic Complex are open year-round, with the main intake period beginning each September. Places are competitive — early registration is strongly encouraged to secure your child&apos;s spot.</p>
        </RevealText>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <RevealText>
            <div className="bg-sand-100 dark:bg-gray-700 p-5 sm:p-8 rounded-[2rem] md:rounded-3xl h-full shadow-sm overflow-hidden relative">
              <div className="flex items-center gap-3 sm:gap-4 mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-gray-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm">
                  <FileText className="text-brand-900 dark:text-brand-400 w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-900 dark:text-white uppercase tracking-tight dark:text-brand-400">Admission Requirements</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                To register your child at any OAC campus (Douala-Bepanda, Tombel, or Loum), please bring the following documents to the admissions office:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Previous academic report card — Original and one (1) photocopy',
                  'Birth certificate — Original and one (1) photocopy',
                  'Two (2) recent passport-size photographs',
                  'Photocopy of national identity card of parent or legal guardian',
                  'Medical certificate of fitness (for new students)'
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-6 h-6 text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-base leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <div className="p-5 bg-brand-900/5 dark:bg-brand-400/5 rounded-2xl border border-brand-900/10 dark:border-brand-400/10">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="w-4 h-4 text-brand-900 dark:text-brand-400" />
                    <p className="text-sm text-brand-900 dark:text-brand-400 font-bold uppercase tracking-widest">Flexible Payment:</p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">Parents have the privilege to pay school fees at their convenience throughout the academic year. OAC understands the financial realities of families and does not turn students away for temporary payment delays.</p>
                </div>
                <div className="p-5 bg-brand-900/5 dark:bg-brand-400/5 rounded-2xl border border-brand-900/10 dark:border-brand-400/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-brand-900 dark:text-brand-400" />
                    <p className="text-sm text-brand-900 dark:text-brand-400 font-bold uppercase tracking-widest">Family Discount:</p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">Fee reductions are available for families enrolling 4 or more children at OAC. Contact the bursar&apos;s office at any campus for details on eligible discounts.</p>
                </div>
              </div>
            </div>
          </RevealText>

          <RevealText delay={0.2}>
            <div className="bg-brand-900 text-white p-5 sm:p-8 rounded-[2rem] md:rounded-3xl h-full shadow-xl shadow-brand-900/20 overflow-hidden relative">
              <div className="flex items-center gap-3 sm:gap-4 mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-md">
                  <UserPlus className="text-brand-300 w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-tight">Why Choose OAC</h3>
              </div>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                For over 17 years, families across the Littoral and South West regions have trusted OAC with their children&apos;s education. Here&apos;s why:
              </p>
              <ul className="space-y-4">
                {[
                  { text: 'Purely Anglo-Saxon Education System', detail: 'English-language instruction following the Cameroon GCE curriculum' },
                  { text: 'GCE Examiners as Teachers', detail: 'Faculty who set and mark national examinations' },
                  { text: 'Official MINESEC & GCE Center (No. 11972)', detail: 'Students sit exams at their own school' },
                  { text: 'Conducive & Secure Learning Environment', detail: 'Fenced campuses with supervision from 7:30 AM to 4:00 PM' },
                  { text: 'Most Flexible Payment Structure in the Region', detail: 'Pay fees at your convenience — no child sent home' },
                  { text: 'Equal Opportunity for All Students', detail: 'Gender equality and inclusive policies across all programs' }
                ].map((reason, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-4 text-white/90"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="w-6 h-6 text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-base font-semibold leading-relaxed block">{reason.text}</span>
                      <span className="text-white/50 text-sm">{reason.detail}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button 
                onClick={handleContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 w-full py-5 bg-white text-brand-900 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl transition-all hover:bg-brand-50 dark:text-brand-400"
              >
                Inquire Now <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </RevealText>
        </div>
      </div>
    </section>
  );
}

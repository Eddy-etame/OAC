"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import RevealText from '../ui/RevealText';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-3 sm:px-6">
        <div className="bg-sand-100 dark:bg-gray-700/50 rounded-[2rem] md:rounded-[3rem] p-4 sm:p-8 md:p-12 lg:p-16 overflow-hidden relative shadow-2xl shadow-brand-900/5 border border-transparent dark:border-white/5">
          
          {/* Animated Background Blobs */}
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-brand-200/50 dark:bg-brand-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-brand-300/50 dark:bg-brand-700/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 relative z-10 items-center">
            <div>
              <RevealText>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight mb-6 text-balance text-gray-900 dark:text-white">
                  Ensure your child&apos;s success.
                </h2>
              </RevealText>
              <RevealText delay={0.1}>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 max-w-md leading-loose">
                  Applications are heavily competitive for the upcoming academic year. Secure your spot by contacting our admissions office today.
                </p>
              </RevealText>
              
              <RevealText delay={0.2} className="space-y-6 sm:space-y-8">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-4 sm:gap-5 group cursor-pointer">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md group-hover:bg-brand-900 group-hover:text-white transition-all duration-300 shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-sm font-bold text-gray-400 border-b border-brand-500/20 w-max pb-0.5 uppercase tracking-[0.2em] mb-1">Admissions Hotline</p>
                    <p className="text-lg sm:text-2xl font-display font-bold text-brand-900 dark:text-brand-400 truncate break-all">+237 677 484 187</p>
                  </div>
                </div>

                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-4 sm:gap-5 group cursor-pointer">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md group-hover:bg-brand-900 group-hover:text-white transition-all duration-300 shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-sm font-bold text-gray-400 border-b border-brand-500/20 w-max pb-0.5 uppercase tracking-[0.2em] mb-1">Email Us</p>
                    <p className="text-base sm:text-2xl font-display font-bold text-brand-900 dark:text-brand-400 break-all">admissions@oacameroon.org</p>
                  </div>
                </div>
              </RevealText>
            </div>

            <RevealText delay={0.3}>
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] shadow-2xl border border-transparent dark:border-white/5 mx-auto w-full max-w-md lg:max-w-none">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-gray-900 dark:text-white">Admission Enquiry</h3>
                
                <form 
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Parent&apos;s Full Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all text-gray-900 dark:text-white"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Inquiry / Program Interest</label>
                    <textarea 
                      required
                      name="message"
                      id="message"
                      rows="4" 
                      className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all resize-none text-gray-900 dark:text-white"
                      placeholder="Tell us about your child and the program you're interested in..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-brand-900 dark:bg-brand-500 text-white rounded-2xl font-bold hover:bg-brand-800 dark:hover:bg-brand-400 transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-900/20 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Secure Your Spot'}
                    {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                  </button>
                  
                  <AnimatePresence>
                    {formStatus === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl"
                      >
                        <p className="text-green-800 dark:text-green-300 text-sm font-medium flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Thank you! We&apos;ve received your inquiry. Our admissions team will contact you shortly.
                        </p>
                      </motion.div>
                    )}
                    {formStatus === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-xl"
                      >
                        <p className="text-red-800 dark:text-red-300 text-sm font-medium">
                          Something went wrong. Please call us directly at +237 677 484 187 or try again.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">
                    Admissions governed by OAC privacy protocols.
                  </p>
                </form>
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}

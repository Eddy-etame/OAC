"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from '../ui/Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') setIsDarkMode(true);
    }
  }, []);
  
  const location = usePathname();
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/campuses', label: 'Campuses' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/contact', label: 'Contact' }
  ];

  const activePath = location.pathname;

  return (
    <header className={`fixed w-full z-[100] transition-all duration-500 ${
      isMenuOpen 
        ? 'bg-white dark:bg-gray-900 py-4 shadow-2xl' 
        : isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md py-3 shadow-sm border-b border-gray-200/20 dark:border-gray-700/50' 
          : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Logo isScrolled={isScrolled} isMenuOpen={isMenuOpen} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  activePath === link.path 
                    ? 'text-brand-900 dark:text-brand-400' 
                    : (isScrolled ? 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white' : 'text-white/90 hover:text-white')
                }`}
              >
                {link.label}
                {activePath === link.path && (
                  <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full" />
                )}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300' : 'hover:bg-white/10 text-white'
              }`}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>

          <div className="flex items-center gap-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                (isScrolled || isMenuOpen) ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300' : 'hover:bg-white/10 text-white'
              }`}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                (isScrolled || isMenuOpen) ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300' : 'hover:bg-white/10 text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 pt-[72px] bg-white dark:bg-gray-900 z-[90] lg:hidden overflow-y-auto"
          >
            <nav aria-label="Mobile navigation" className="container mx-auto px-6 py-12 flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left px-6 py-4 rounded-2xl text-2xl font-display font-bold transition-all ${
                      activePath === link.path 
                        ? 'bg-brand-900 text-white shadow-lg shadow-brand-900/20' 
                        : 'text-gray-800 dark:text-gray-200 hover:bg-brand-50 dark:hover:bg-gray-800 hover:pl-8'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4 uppercase tracking-widest">Connect With Us</p>
                <div className="flex flex-col gap-4">
                  <p className="text-xl font-display font-bold text-brand-900 dark:text-brand-400">+237 677 484 187</p>
                  <p className="text-lg font-display text-gray-600 dark:text-gray-400">admissions@oacameroon.org</p>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

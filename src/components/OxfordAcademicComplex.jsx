import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, LayoutGroup } from 'framer-motion';
import { Menu, X, ChevronDown, MapPin, Phone, Mail, ArrowRight, Instagram, Linkedin, Twitter, Target, BookOpen, GraduationCap, Users, Clock, CheckCircle, Sun, Moon } from 'lucide-react';

// Images (now verified and high quality)
import heroBg from '../assets/images/hero-bg.jpg';
import aboutImg from '../assets/images/about.jpg';
import nurseryImg from '../assets/images/nursery.jpg';
import primaryImg from '../assets/images/primary.jpg';
import upperPrimaryImg from '../assets/images/upper-primary.jpg';
import campusLoum from '../assets/images/campus-loum.jpg';
import campusTombel from '../assets/images/campus-tombel.jpg';

// Reusable animated text reveal component
const RevealText = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function OxfordAcademicComplex() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCampus, setSelectedCampus] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  // Form State
  const [formStatus, setFormStatus] = useState(''); 

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const secondaryRef = useRef(null);
  const campusesRef = useRef(null);
  const admissionsRef = useRef(null);
  const uniformRef = useRef(null);
  const whyChooseRef = useRef(null);
  const contactRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: homeRef, offset: ["start start", "end start"] });
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 100;
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'about', ref: aboutRef },
        { id: 'programs', ref: programsRef },
        { id: 'secondary', ref: secondaryRef },
        { id: 'campuses', ref: campusesRef },
        { id: 'admissions', ref: admissionsRef },
        { id: 'uniform', ref: uniformRef },
        { id: 'why-choose', ref: whyChooseRef },
        { id: 'contact', ref: contactRef }
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const element = section.ref.current;
          if (scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

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

  const scrollToSection = (sectionRef) => {
    setIsMenuOpen(false);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home', ref: homeRef },
    { id: 'about', label: 'About', ref: aboutRef },
    { id: 'programs', label: 'Programs', ref: programsRef },
    { id: 'secondary', label: 'Secondary', ref: secondaryRef },
    { id: 'campuses', label: 'Campuses', ref: campusesRef },
    { id: 'admissions', label: 'Admissions', ref: admissionsRef },
    { id: 'contact', label: 'Contact', ref: contactRef }
  ];

  const programs = [
    { 
      title: 'Nursery Section', 
      desc: 'Early childhood education focusing on foundational skills, creativity, and social development in a safe, nurturing environment.', 
      img: nurseryImg,
      duration: '2 Years',
      requirements: 'Children aged 3-5',
      campuses: ['tombel', 'loum']
    },
    { 
      title: 'Lower Primary (Classes 1-3)', 
      desc: 'Building literacy, numeracy, and curiosity through engaging, child-centered lessons designed for active young minds.', 
      img: primaryImg,
      duration: '3 Years',
      requirements: 'Completion of Nursery or equivalent',
      campuses: ['tombel']
    },
    { 
      title: 'Upper Primary & Beyond', 
      desc: 'Strengthening core subjects and preparing pupils for a seamless transition to our renowned secondary and technical streams.', 
      img: upperPrimaryImg,
      duration: '3+ Years',
      requirements: 'Completion of Lower Primary',
      campuses: ['tombel']
    },
  ];

  const filteredPrograms = selectedCampus === 'all' 
    ? programs 
    : programs.filter(prog => prog.campuses.includes(selectedCampus));

  const benefits = [
    { title: 'Purely Anglo-Saxon Education', desc: 'We follow the British educational system with qualified GCE examiners as teachers.', icon: <BookOpen className="w-6 h-6 text-brand-900" /> },
    { title: '17+ Years Experience', desc: 'Over 17 years of educational excellence with seasoned administrative staff.', icon: <GraduationCap className="w-6 h-6 text-brand-900" /> },
    { title: 'Qualified Teachers', desc: 'Our teachers are mostly GCE examiners with extensive experience.', icon: <Target className="w-6 h-6 text-brand-900" /> },
    { title: 'Flexible Payment', desc: 'Parents have the privilege to pay school fees at their convenience.', icon: <Users className="w-6 h-6 text-brand-900" /> },
  ];

  const secondaryPrograms = [
    {
      title: 'General Education',
      subtitle: '1st & 2nd Cycle - Arts & Science',
      desc: 'Comprehensive arts and science programs preparing students for GCE Ordinary and Advanced Level examinations.',
      features: ['Arts Stream', 'Science Stream', 'GCE O-Level Preparation', 'GCE A-Level Preparation']
    },
    {
      title: 'Technical/Vocational Education',
      subtitle: '1st & 2nd Cycle',
      desc: 'Practical skills development in accounting, marketing, and secretarial studies for career-ready graduates.',
      features: ['Accounting Studies', 'Marketing', 'Secretarial Studies', 'Industry-Ready Skills']
    },
    {
      title: 'Commercial Education',
      subtitle: '1st & 2nd Cycle',
      desc: 'Business-focused education combining theory with practical applications for commerce careers.',
      features: ['Business Management', 'Commerce', 'Entrepreneurship', 'Financial Literacy']
    }
  ];

  const campuses = [
    {
      name: 'Bepanda Mallah-Douala',
      img: campusTombel, // Using existing image as placeholder
      desc: 'Behind CAMTEL, Bepanda Mallah-Douala. Secondary/College campus offering General, Technical, and Commercial education.',
      programs: ['Secondary Only', 'General Education', 'Technical/Vocational', 'Commercial'],
      contact: '+237 XXX XXX XXX', // CHANGE ME: Actual phone number
      address: 'Behind CAMTEL, Bepanda Mallah-Douala' // CHANGE ME: Exact address
    },
    {
      name: 'Tombel Campus',
      img: campusTombel,
      desc: 'Tombel, South West Region. Our historic main center offering Nursery, Primary, and Secondary education.',
      programs: ['Nursery', 'Primary', 'Secondary'],
      contact: '+237 XXX XXX XXX', // CHANGE ME: Actual phone number
      address: 'Main Road, Tombel, South West Region, CMR' // CHANGE ME: Exact address
    },
    {
      name: 'Loum Campus',
      img: campusLoum,
      desc: 'Loum, Littoral Region. A vibrant, modern hub serving our coastal students with Nursery education.',
      programs: ['Nursery Only'],
      contact: '+237 XXX XXX XXX', // CHANGE ME: Actual phone number
      address: 'Littoral Hub, Loum, Littoral Region, CMR' // CHANGE ME: Exact address
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-sand-100 dark:bg-gray-900 overflow-hidden text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* ===== HEADER ===== */}
      <header className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${isScrolled ? 'glass py-3 shadow-sm border-white/20' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection(homeRef)}>
              <div className="w-10 h-10 bg-brand-900 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-display font-bold text-gray-900 dark:text-white">Oxford Academic Complex</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Bepanda • Tombel • Loum</p>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.ref)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.id ? 'text-brand-900 dark:text-brand-400' : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </nav>

            <div className="flex items-center gap-2">
              {/* Theme Toggle Mobile & Tablet */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
              
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Area */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden glass border-t border-white/20 dark:border-gray-700 mt-3 bg-white/95 dark:bg-gray-900/95"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      scrollToSection(link.ref);
                      setIsMenuOpen(false);
                    }}
                    onTouchEnd={() => {
                      scrollToSection(link.ref);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left px-4 py-3 rounded-xl text-lg font-display transition-colors cursor-pointer ${
                      activeSection === link.id 
                        ? 'bg-brand-500 text-white' 
                        : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ===== HERO ===== */}
      <section ref={homeRef} id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-950">
        <motion.div className="absolute inset-0 w-full h-full" style={{ y: yHero, opacity: opacityHero }}>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 via-brand-900/50 to-brand-950 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/60 via-transparent to-brand-950/60 z-10" />
          <img src={heroBg} alt="OAC Campus" loading="eager" className="w-full h-full object-cover scale-105" />
          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/30 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-700/30 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.div>

        <div className="container relative z-20 mx-auto px-6 text-center text-white mt-16">
          <RevealText>
            <span className="inline-block py-1 px-3 rounded-full border border-white/20 glass text-xs font-semibold tracking-widest uppercase mb-6">Cameroon's Premier Institution</span>
          </RevealText>
          <RevealText delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-balance mb-6">
              Education with <br/><span className="text-brand-300">a Vision.</span>
            </h1>
          </RevealText>
          <RevealText delay={0.2} className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-white/80 font-light text-balance mb-10 leading-relaxed">
              Empowering the next generation of leaders through accredited, career-focused nursery, primary, and secondary education in Bepanda, Tombel, and Loum.
            </p>
          </RevealText>
          <RevealText delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => scrollToSection(programsRef)} className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-brand-950 font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-white/10">
                Explore Programs
              </button>
              <button onClick={() => scrollToSection(contactRef)} className="w-full sm:w-auto px-8 py-4 rounded-full glass border border-white/30 text-white font-medium hover:bg-white/10 transition-colors">
                Contact Admissions
              </button>
            </div>
          </RevealText>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="absolute bottom-10 z-20 text-white/50 cursor-pointer" onClick={() => scrollToSection(aboutRef)}>
          <ChevronDown className="w-8 h-8" />
        </motion.div>

        {/* Scroll Progress Indicator */}
        <motion.div 
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {navLinks.map((link) => (
            <div key={link.id} className="relative group">
              <div 
                className={`w-1 h-12 rounded-full transition-all duration-300 ${
                  activeSection === link.id ? 'bg-brand-400 h-16' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
              <span className="absolute right-8 top-1/2 -translate-y-1/2 text-white/70 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {link.label}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ===== ABOUT ===== */}
      <section ref={aboutRef} id="about" className="py-16 md:py-24 lg:py-32 relative bg-sand-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <RevealText><h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8 text-gray-900 dark:text-white">Education with <br/><span className="text-brand-900 dark:text-brand-400">a Vision.</span></h2></RevealText>
              <RevealText delay={0.1}>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  At Oxford Academic Complex (OAC), we provide <strong className="text-brand-900 font-semibold">purely Anglo-Saxon education</strong> across our three campuses in Bepanda, Tombel, and Loum. Founded by seasoned educationists, we are a fully recognized <strong className="text-brand-900 font-semibold">MINESEC institution and GCE Examination Center</strong>.
                </p>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  With over <strong className="text-brand-900 font-semibold">17 years of educational excellence</strong>, our qualified teachers (most are GCE examiners) are deeply committed to integrity, technical proficiency, and leadership development in a calm, conducive learning environment.
                </p>
              </RevealText>
              
              <RevealText delay={0.3}>
                <div className="grid grid-cols-2 gap-8 py-6 border-y border-gray-200">
                  <div>
                    <p className="text-4xl font-display font-bold text-brand-900 mb-1">17+</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-4xl font-display font-bold text-brand-900 mb-1">3</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide">Campuses</p>
                  </div>
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
              <img src={aboutImg} alt="Students learning" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS / CURRICULUM ===== */}
      <section ref={programsRef} id="programs" className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <RevealText className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-brand-700 dark:text-brand-400 font-semibold tracking-wider uppercase text-sm">Curriculum</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6 text-balance text-gray-900 dark:text-white">Academic Excellence.</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Comprehensive foundational environments designed to prepare students for our advanced secondary streams.</p>
          </RevealText>

          {/* Campus Filter */}
          <div className="mb-8 md:mb-12 flex flex-wrap justify-center gap-2 md:gap-3">
            {['all', 'bepanda', 'tombel', 'loum'].map((campus) => (
              <button
                key={campus}
                onClick={() => setSelectedCampus(campus)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all ${
                  selectedCampus === campus 
                    ? 'bg-brand-900 text-white shadow-lg shadow-brand-900/30' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {campus === 'all' ? 'All Campuses' : campus.charAt(0).toUpperCase() + campus.slice(1)}
              </button>
            ))}
          </div>

          <LayoutGroup>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <AnimatePresence mode="popLayout">
                {filteredPrograms.map((prog, idx) => (
                  <motion.div 
                    key={prog.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ 
                      scale: 1.03,
                      rotateX: 2,
                      rotateY: 2,
                      boxShadow: "0 25px 50px -12px rgba(82, 12, 143, 0.25)"
                    }}
                    transition={{ 
                      layout: { duration: 0.3 },
                      opacity: { duration: 0.2 },
                      hover: { type: "spring", stiffness: 400, damping: 25 }
                    }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="group relative rounded-3xl overflow-hidden bg-sand-100 flex flex-col shadow-sm hover:shadow-xl hover:shadow-brand-900/10 transition-all duration-300"
                    style={{ perspective: 1000 }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img src={prog.img} alt={prog.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                      <h3 className="absolute bottom-4 left-6 text-2xl font-display font-bold text-brand-900 dark:text-brand-400">{prog.title}</h3>
                    </div>
                    
                    <div className="p-8 flex flex-col grow">
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">{prog.desc}</p>
                      
                      <div className="space-y-3 pt-6 border-t border-gray-200">
                        <div className="flex items-center gap-3 text-sm">
                          <Clock className="w-5 h-5 text-brand-900 p-1 bg-brand-100 rounded-full" />
                          <span className="font-semibold text-gray-800 dark:text-gray-200">Duration:</span>
                          <span className="text-gray-600 dark:text-gray-300">{prog.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-5 h-5 text-brand-900 p-1 bg-brand-100 rounded-full" />
                          <span className="font-semibold text-gray-800 dark:text-gray-200">Reqs:</span>
                          <span className="text-gray-600 dark:text-gray-300">{prog.requirements}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </LayoutGroup>

          <div ref={whyChooseRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-gray-100">
            {benefits.map((b, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1), type: "spring", stiffness: 300 }}
                className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl hover:bg-white/90 transition-all shadow-lg hover:shadow-xl shadow-brand-900/10"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {b.icon}
                </div>
                <h4 className="text-xl font-display font-bold mb-3">{b.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECONDARY / HIGH SCHOOL ===== */}
      <section ref={secondaryRef} id="secondary" className="py-16 md:py-24 bg-brand-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <RevealText className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-brand-700 dark:text-brand-400 font-semibold tracking-wider uppercase text-sm">Secondary Education</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6 text-balance text-gray-900 dark:text-white">Excellence in Secondary.</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Comprehensive secondary education programs preparing students for GCE examinations and future success.</p>
          </RevealText>

          <div className="grid md:grid-cols-3 gap-8">
            {secondaryPrograms.map((program, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-display font-bold text-brand-900 dark:text-brand-400">{program.title}</h3>
                <p className="text-brand-700 dark:text-brand-400 font-medium mb-4">{program.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">{program.desc}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-brand-900" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <RevealText delay={0.4} className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-brand-900 text-white px-6 py-3 rounded-full">
              <BookOpen className="w-5 h-5" />
              <span className="font-semibold">GCE Examination Center - Centre No. 11972</span>
            </div>
          </RevealText>
        </div>
      </section>

      {/* ===== CAMPUSES ===== */}
      <section ref={campusesRef} id="campuses" className="py-16 md:py-24 bg-brand-950 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <RevealText>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white">Our Campuses.</h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="text-brand-200 dark:text-brand-300 max-w-sm">Serving the South West and Littoral regions with state-of-the-art facilities.</p>
            </RevealText>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {campuses.map((campus, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative rounded-3xl overflow-hidden min-h-[400px]"
              >
                <img src={campus.img} alt={campus.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-brand-950/40 group-hover:bg-brand-950/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-12">
                  <div className="glass border border-white/20 p-4 md:p-6 rounded-2xl backdrop-blur-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-white/10 dark:bg-black/30">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="text-brand-300 w-5 h-5" />
                      <h3 className="text-xl md:text-2xl font-display font-bold text-white">{campus.name}</h3>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">{campus.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {campus.programs.map((prog, pIdx) => (
                        <span key={pIdx} className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">{prog}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADMISSIONS ===== */}
      <section ref={admissionsRef} id="admissions" className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <RevealText className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-brand-700 dark:text-brand-400 font-semibold tracking-wider uppercase text-sm">Admissions</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6 text-balance text-gray-900 dark:text-white">Join Our Community.</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Secure your child's future with Oxford Academic Complex. Admissions are competitive for the upcoming academic year.</p>
          </RevealText>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <RevealText>
              <div className="bg-sand-100 p-8 rounded-3xl">
                <h3 className="text-2xl font-display font-bold text-brand-900 dark:text-brand-400 mb-6">Admission Requirements</h3>
                <ul className="space-y-4">
                  {[
                    'Previous report card',
                    'Birth certificate',
                    'Passport-size photograph',
                    'National identity photocopy'
                  ].map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-900 shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{req}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-brand-50 rounded-xl">
                  <p className="text-sm text-brand-900 font-medium mb-2">Special Offer:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Fee reduction available for families with 4 or more children.</p>
                </div>
              </div>
            </RevealText>

            <RevealText delay={0.2}>
              <div className="bg-sand-100 p-8 rounded-3xl">
                <h3 className="text-2xl font-display font-bold text-brand-900 dark:text-brand-400 mb-6">Why Choose OAC?</h3>
                <ul className="space-y-4">
                  {[
                    'Purely Anglo-Saxon Education',
                    'Qualified GCE Examiners as Teachers',
                    '17+ Years of Experience',
                    'Calm & Conducive Learning Environment',
                    'Flexible Payment Options',
                    'Gender Equality & Opportunity'
                  ].map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-900 shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealText>
          </div>

          <RevealText delay={0.3} className="mt-12 text-center">
            <button onClick={() => scrollToSection(contactRef)} className="px-8 py-4 bg-brand-900 text-white rounded-full font-semibold hover:bg-brand-800 transition-colors flex items-center justify-center gap-2 mx-auto">
              Start Admission Process <ArrowRight className="w-5 h-5" />
            </button>
          </RevealText>
        </div>
      </section>

      {/* ===== UNIFORM ===== */}
      <section ref={uniformRef} id="uniform" className="py-16 md:py-24 bg-brand-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <RevealText className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-brand-700 dark:text-brand-400 font-semibold tracking-wider uppercase text-sm">School Uniform</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6 text-balance text-gray-900 dark:text-white">Our Uniform Policy.</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Students are required to wear the official school uniform to maintain discipline and identity.</p>
          </RevealText>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <RevealText>
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-brand-900" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-900 dark:text-brand-400">Boys Uniform</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-900" />
                    <span>Short sleeves purple shirt</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-900" />
                    <span className="dark:text-gray-200">Dark gray classic trousers</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-900" />
                    <span>Black or brown shoes/sandals only</span>
                  </li>
                </ul>
              </div>
            </RevealText>

            <RevealText delay={0.2}>
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-brand-900" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-900 dark:text-brand-400">Girls Uniform</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-900" />
                    <span>Short sleeves purple shirt</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-900" />
                    <span>Dark gray A-shaped skirt with 3 pleats</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-900" />
                    <span>Black or brown shoes/sandals only</span>
                  </li>
                </ul>
              </div>
            </RevealText>
          </div>

          <RevealText delay={0.3} className="mt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">Uniforms can be purchased at designated locations. <span className="text-brand-900 font-semibold">CHANGE ME: Add uniform purchase location</span></p>
          </RevealText>
        </div>
      </section>

      {/* ===== CONTACT & CTA (Production Forms) ===== */}
      <section ref={contactRef} id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-sand-100 dark:bg-gray-700 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 overflow-hidden relative shadow-2xl shadow-brand-900/5">
            
            {/* Background Blob */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
            <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 relative z-10 items-center">
              <div>
                <RevealText>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight mb-6 text-balance">Ensure your child's success.</h2>
                </RevealText>
                <RevealText delay={0.1}>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-12 max-w-md leading-relaxed">Applications are heavily competitive for the upcoming academic year. Secure your spot by contacting our admissions office today.</p>
                </RevealText>
                
                <RevealText delay={0.2} className="space-y-6">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-brand-900 group-hover:text-white transition-colors duration-300">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Admissions Hotline</p>
                      <p className="text-xl font-display font-medium">+237 677 484 187</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-brand-900 group-hover:text-white transition-colors duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Email Us</p>
                      <p className="text-xl font-display font-medium">admissions@oacameroon.org</p>
                    </div>
                  </div>
                </RevealText>
              </div>

              {/* Functional Production Form powered by Formspree */}
              <RevealText delay={0.3}>
                <div className="bg-white dark:bg-gray-800 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl shadow-brand-900/5">
                  <h3 className="text-2xl font-display font-bold mb-8 text-gray-900 dark:text-white">Send an Enquiry</h3>
                  
                  <form action={`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`} method="POST" className="space-y-5">
                    {/* Hidden fields for Formspree */}
                    <input type="hidden" name="_subject" value="New Admission Enquiry from OAC Website" />
                    
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Parent's Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Program Interest & Message</label>
                      <textarea 
                        required
                        name="message"
                        id="message"
                        rows="4" 
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                        placeholder="I am interested in enrolling my child in..."
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full py-4 bg-brand-900 text-white rounded-xl font-semibold hover:bg-brand-800 transition-colors flex items-center justify-center gap-2"
                    >
                      Secure Your Spot <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-xs text-center text-gray-400 mt-4">By submitting, you agree to our admissions privacy protocols.</p>
                  </form>
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-brand-950 text-white py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
            <div>
              <span className="text-3xl font-display font-bold tracking-tight mb-6 flex items-center gap-2">OAC.</span>
              <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
                Centre No. 11972. A recognized leader in primary, secondary, and technical education in the Kupe-Manengouba division.
              </p>
              <div className="flex gap-4">
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-display font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button onClick={() => scrollToSection(link.ref)} className="text-white/60 hover:text-white transition-colors">{link.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-display font-semibold mb-6">Our Campuses</h4>
              <ul className="space-y-4 text-white/60">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span>Behind CAMTEL, Bepanda Mallah-Douala<br/>Littoral Region, CMR</span>
                </li>
                <li className="flex items-start gap-3 mt-4">
                  <MapPin className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span>Main Road, Tombel<br/>South West Region, CMR</span>
                </li>
                <li className="flex items-start gap-3 mt-4">
                  <MapPin className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span>Littoral Hub, Loum<br/>Littoral Region, CMR</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Oxford Academic Complex. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
              <span className="cursor-pointer hover:text-white transition-colors">Admissions Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

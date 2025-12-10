import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // This is the corrected line
import { Menu, X, ChevronDown, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';


function ImageWithFallback(props) {
  const [didError, setDidError] = useState(false);
  const { src, alt, style, className, ref, ...rest } = props;

  // Warn if a string ref is passed
  if (typeof ref === 'string') {
    console.warn(`String refs are not supported in ImageWithFallback. Received ref: "${ref}". Use useRef instead.`);
  }

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=="
          alt="Error loading image"
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={() => setDidError(true)}
    />
  );
}

export default function OxfordAcademicComplex({ 
  animationDuration = 0.5, 
  primaryColor = "#6b21a8", 
  secondaryColor = "#4b5563" 
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
    const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const campusesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const scrollPosition = window.scrollY + 100;
      
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'about', ref: aboutRef },
        { id: 'programs', ref: programsRef },
        { id: 'campuses', ref: campusesRef },
        { id: 'why-choose', ref: whyChooseRef },
        { id: 'contact', ref: contactRef }
      ];
      
      for (const section of sections) {
        if (section.ref.current) {
          const element = section.ref.current;
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionRef) => {
    setIsMenuOpen(false);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home', ref: homeRef },
    { id: 'about', label: 'About Us', ref: aboutRef },
    { id: 'programs', label: 'Programs', ref: programsRef },
    { id: 'campuses', label: 'Campuses', ref: campusesRef },
    { id: 'why-choose', label: 'Why Choose Us', ref: whyChooseRef },
    { id: 'contact', label: 'Contact', ref: contactRef }
  ];

  const programs = [
    {
      id: 1,
      title: 'Nursery Section',
      description: 'Early childhood education focusing on foundational skills, creativity, and social development.',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1120&q=80',
      duration: '2 years',
      requirements: 'Children aged 3-5'
    },
    {
      id: 2,
      title: 'Lower Primary (Classes 1-3)',
      description: 'Building literacy, numeracy, and curiosity through engaging, child-centred lessons.',
      image: 'https://images.unsplash.com/photo-1588072432882-9cb19c16c009?auto=format&fit=crop&w=1120&q=80',
      duration: '3 years',
      requirements: 'Completion of Nursery or equivalent'
    },
    {
      id: 3,
      title: 'Upper Primary (Classes 4-6)',
      description: 'Strengthening core subjects and preparing pupils for a smooth transition to secondary education.',
      image: 'https://images.unsplash.com/photo-1600404291745-45a088e02c34?auto=format&fit=crop&w=1120&q=80',
      duration: '3 years',
      requirements: 'Completion of Lower Primary'
    },
    {
      id: 4,
      title: 'After-School Enrichment',
      description: 'Extracurricular clubs, tutoring, and mentorship to nurture talents and reinforce classroom learning.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1120&q=80',
      duration: 'Ongoing',
      requirements: 'Enrolled OAC pupil'
    }
  ];

  const campuses = [
    {
      id: 1,
      name: 'Loum Campus',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1186&q=80',
      description: 'Our main campus located in the heart of Loum, featuring modern facilities and a vibrant learning environment.'
    },
    {
      id: 2,
      name: 'Tombel Campus',
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      description: 'Our Tombel campus provides a serene environment conducive for learning and academic excellence.'
    }
  ];

  const benefits = [
    {
      id: 1,
      title: 'Accredited Excellence',
      description: 'Our certifications are valid and highly regarded, accredited by MINESUP and mentored by the University of Bamenda.',
      icon: <motion.div className="p-3 rounded-full bg-purple-100" whileHover={{ scale: 1.1 }} transition={{ duration: animationDuration }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </motion.div>
    },
    {
      id: 2,
      title: 'Flexible Learning',
      description: 'We offer both online and in-person classes to fit your life, making education accessible to all.',
      icon: <motion.div className="p-3 rounded-full bg-purple-100" whileHover={{ scale: 1.1 }} transition={{ duration: animationDuration }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </motion.div>
    },
    {
      id: 3,
      title: 'Affordable Tuition',
      description: 'We provide flexible payment options to make quality education accessible to everyone.',
      icon: <motion.div className="p-3 rounded-full bg-purple-100" whileHover={{ scale: 1.1 }} transition={{ duration: animationDuration }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </motion.div>
    },
    {
      id: 4,
      title: 'Career-Focused',
      description: 'Our programs include practical training, internships, and mentorship to prepare you for immediate career success.',
      icon: <motion.div className="p-3 rounded-full bg-purple-100" whileHover={{ scale: 1.1 }} transition={{ duration: animationDuration }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </motion.div>
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Navigation */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: animationDuration }}
            >
              <div className="text-2xl font-bold text-purple-800 mr-2">OAC</div>
              <div className={`hidden md:block text-sm font-medium mr-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Oxford Academic Complex</div>
            </motion.div>
            
            {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-6 whitespace-nowrap">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  type="button"
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${
                    activeSection === link.id 
                      ? 'text-purple-800 border-b-2 border-purple-800' 
                      : isScrolled ? 'text-gray-700 hover:text-purple-800' : 'text-white hover:text-purple-300'
                  }`}
                  onClick={() => scrollToSection(link.ref)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: animationDuration / 2 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            
                        {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-purple-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              type="button"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: animationDuration / 2 }}
          >
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-3">
                                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    className={`text-left py-2 px-4 rounded-md text-sm font-medium ${
                      activeSection === link.id 
                        ? 'bg-purple-100 text-purple-800' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => scrollToSection(link.ref)}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </header>
      
      {/* Hero Section */}
      <section 
        ref={homeRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-purple-700 text-white"
        id="home"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Oxford Academic Complex"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationDuration, delay: animationDuration / 2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Oxford Academic Complex</h1>
            <p className="text-xl md:text-2xl font-light mb-8">Education with a Vision</p>
            <p className="max-w-3xl mx-auto text-lg mb-10">
              We are a premier academic institution in Cameroon, dedicated to empowering the next generation of leaders and professionals through flexible, accredited, and career-focused programs.
            </p>
            
                        <motion.button
              type="button"
              className="bg-white text-purple-800 px-8 py-3 rounded-full font-medium shadow-lg flex items-center mx-auto"
              whileHover={{ scale: 1.05, backgroundColor: '#f9fafb' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: animationDuration / 2 }}
              onClick={() => scrollToSection(contactRef)}
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-8 w-8 text-white opacity-70" />
          </motion.div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section 
        ref={aboutRef}
        className="py-20 bg-gray-50"
        id="about"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: animationDuration }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision, Our Commitment</h2>
            <div className="w-20 h-1 bg-purple-800 mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: animationDuration }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="About Oxford Academic Complex"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: animationDuration }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">At Oxford Academic Complex (OAC)</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We believe in providing an education that goes beyond the classroom. Our campuses are built on the vision of nurturing intellectual curiosity, professional integrity, and leadership. Our expert faculty and a supportive learning environment ensure that every student is equipped with the knowledge and skills necessary to excel in their chosen field.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The hands in our logo symbolize the supportive role of our institution in lifting students to a higher level of achievement. We are committed to integrity, leadership development, and preparing students to be active contributors to society.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-1 bg-purple-800 mr-4"></div>
                <p className="text-purple-800 font-semibold">Education with a Vision</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section 
        ref={programsRef}
        className="py-20 bg-white"
        id="programs"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: animationDuration }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Nursery &amp; Primary Programs</h2>
            <div className="w-20 h-1 bg-purple-800 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              We provide engaging, age-appropriate curricula that lay a solid academic and social foundation for every child.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: animationDuration, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex flex-col space-y-2 text-sm text-gray-700">
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Duration:</span> {program.duration}
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Requirements:</span> {program.requirements}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: animationDuration, delay: 0.4 }}
          >
            <p className="text-gray-600 mb-6">
              All our programs are fully accredited by MINESUP and mentored by the University of Bamenda, ensuring a recognized and respected certification.
            </p>
                        <motion.button
              type="button"
              className="bg-purple-800 text-white px-6 py-3 rounded-full font-medium shadow-md inline-flex items-center"
              whileHover={{ scale: 1.05, backgroundColor: '#7e22ce' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: animationDuration / 2 }}
              onClick={() => scrollToSection(contactRef)}
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Campuses Section */}
      <section 
        ref={campusesRef}
        className="py-20 bg-gray-50"
        id="campuses"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: animationDuration }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Campuses</h2>
            <div className="w-20 h-1 bg-purple-800 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Oxford Academic Complex proudly serves students at our state-of-the-art campuses.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {campuses.map((campus, index) => (
              <motion.div
                key={campus.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: animationDuration }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <ImageWithFallback
                      src={campus.image}
                      alt={campus.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-5 w-5 text-purple-800 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-900">{campus.name}</h3>
                    </div>
                    <p className="text-gray-600">{campus.description}</p>
                                      <motion.button
                    type="button"
                    className="mt-4 text-purple-800 font-medium inline-flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: animationDuration / 2 }}
                  >
                    View Campus <ArrowRight className="ml-1 h-4 w-4" />
                  </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section 
        ref={whyChooseRef}
        className="py-20 bg-white"
        id="why-choose"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: animationDuration }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose OAC?</h2>
            <div className="w-20 h-1 bg-purple-800 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              We are committed to providing quality education that prepares you for a successful career.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                className="bg-white rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: animationDuration, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-16 bg-purple-100 rounded-lg p-8 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: animationDuration }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Start your journey towards a successful career today</h3>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              Contact us to learn more about our programs and enrollment process for the next academic year.
            </p>
                        <motion.button
              type="button"
              className="bg-purple-800 text-white px-8 py-3 rounded-full font-medium shadow-md inline-flex items-center"
              whileHover={{ scale: 1.05, backgroundColor: '#7e22ce' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: animationDuration / 2 }}
              onClick={() => scrollToSection(contactRef)}
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section 
        ref={contactRef}
        className="py-20 bg-gray-50"
        id="contact"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: animationDuration }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-purple-800 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Have questions about our programs or the enrollment process? We're here to help.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: animationDuration }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-purple-800 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+237 677484187</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-800 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@oxfordacademiccomplex.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-800 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Locations</h4>
                    <p className="text-gray-600 mb-2">Loum Campus, Cameroon</p>
                    <p className="text-gray-600">Tombel Campus, Cameroon</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    className="bg-purple-100 p-3 rounded-full text-purple-800"
                    whileHover={{ scale: 1.1, backgroundColor: '#ede9fe' }}
                    transition={{ duration: animationDuration / 2 }}
                    aria-label="Follow us on Facebook"
                    title="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-purple-100 p-3 rounded-full text-purple-800"
                    whileHover={{ scale: 1.1, backgroundColor: '#ede9fe' }}
                    transition={{ duration: animationDuration / 2 }}
                    aria-label="Follow us on Twitter"
                    title="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-purple-100 p-3 rounded-full text-purple-800"
                    whileHover={{ scale: 1.1, backgroundColor: '#ede9fe' }}
                    transition={{ duration: animationDuration / 2 }}
                    aria-label="Follow us on Instagram"
                    title="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-purple-100 p-3 rounded-full text-purple-800"
                    whileHover={{ scale: 1.1, backgroundColor: '#ede9fe' }}
                    transition={{ duration: animationDuration / 2 }}
                    aria-label="Follow us on LinkedIn"
                    title="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: animationDuration }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="bg-purple-800 text-white px-6 py-3 rounded-full font-medium shadow-md inline-flex items-center"
                  whileHover={{ scale: 1.05, backgroundColor: '#7e22ce' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: animationDuration / 2 }}
                >
                  Send Message <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold text-white mr-2">OAC</div>
                <div className="text-sm font-medium">Oxford Academic Complex</div>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering the next generation of leaders and professionals.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <button 
                      type="button"
                      className="text-gray-400 hover:text-white transition-colors"
                      onClick={() => scrollToSection(link.ref)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+237 677484187</li>
                <li>info@oxfordacademiccomplex.com</li>
                <li>Loum & Tombel Campuses, Cameroon</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 border-t border-purple-800 pt-8">
            &copy; 2024 Oxford Academic Complex. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

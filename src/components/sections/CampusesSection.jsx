"use client";

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import RevealText from '../ui/RevealText';
const campusLoum = '/images/campus-loum.jpg';
const campusTombel = '/images/campus-tombel.jpg';
const campusDouala = '/images/campus-douala.png';

const campuses = [
  {
    name: 'Douala Campus — Bepanda',
    img: campusDouala,
    region: 'Littoral Region',
    desc: 'The Douala-Bepanda campus is OAC\'s secondary and high school hub, located behind CAMTEL in the Bepanda Mallah neighbourhood. This campus houses the General, Technical, and Commercial education streams, and serves as the official GCE Board Examination Center (Centre No. 11972). It is the largest campus, with dedicated science laboratories, computer rooms, and examination halls.',
    programs: ['General Secondary (Arts & Science)', 'Technical Education', 'Commercial Education', 'GCE O/A Level Center'],
    contact: '+237 677 484 187',
    address: 'Behind CAMTEL, Bepanda Mallah-Douala',
    hours: 'Monday–Friday, 7:30 AM – 4:00 PM'
  },
  {
    name: 'Tombel Campus — Main Center',
    img: campusTombel,
    region: 'South West Region',
    desc: 'Tombel is where OAC began in 2007 — our founding campus and institutional headquarters. Located on the Main Road in Tombel town, this campus offers the complete education pathway from Nursery through Secondary. It remains the heart of the OAC community and embodies the founding vision of accessible, high-quality anglophone education in a rural setting.',
    programs: ['Nursery (Nursery 1 & 2)', 'Primary (Classes 1–6)', 'Secondary Education'],
    contact: '+237 677 484 187',
    address: 'Main Road, Tombel Town',
    hours: 'Monday–Friday, 7:30 AM – 4:00 PM'
  },
  {
    name: 'Loum Campus — Littoral Hub',
    img: campusLoum,
    region: 'Littoral Region',
    desc: 'The Loum campus extends OAC\'s reach into the Littoral Region\'s second-largest city. Currently focused on early childhood education, this campus provides Nursery 1 and Nursery 2 programs in a purpose-built facility designed for young learners. It serves families in Loum and surrounding communities who want quality anglophone nursery education.',
    programs: ['Nursery 1', 'Nursery 2'],
    contact: '+237 677 484 187',
    address: 'Littoral Hub, Loum Town',
    hours: 'Monday–Friday, 7:30 AM – 2:00 PM'
  }
];

export default function CampusesSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <RevealText>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">Our Campuses.</h2>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="text-brand-200 dark:text-brand-300 max-w-md">Three campuses across the South West and Littoral regions — each designed to provide a safe, disciplined, and modern learning environment tailored to its community.</p>
          </RevealText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {campuses.map((campus, idx) => (
            <motion.div 
              key={campus.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative rounded-[2.5rem] overflow-hidden min-h-[500px] md:min-h-[550px] shadow-2xl flex flex-col"
            >
              <img 
                src={campus.img} 
                alt={`${campus.name} — Oxford Academic Complex campus in ${campus.region}, Cameroon`} 
                loading="lazy" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/70 to-brand-950/20 group-hover:from-brand-950/95 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <div className="glass border border-white/20 p-6 rounded-3xl backdrop-blur-xl bg-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-brand-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <MapPin className="text-brand-400 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">{campus.name}</h3>
                      <p className="text-brand-300 text-xs uppercase tracking-widest font-medium">{campus.region}</p>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">{campus.desc}</p>
                  
                  <div className="flex items-center gap-2 text-white/60 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{campus.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-xs mb-4">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{campus.contact}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {campus.programs.map((prog, pIdx) => (
                      <span 
                        key={pIdx} 
                        className="text-[10px] uppercase font-bold tracking-widest bg-brand-500/30 text-white px-3 py-1.5 rounded-full border border-white/10"
                      >
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { MapPin, Instagram, Linkedin, Facebook, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white py-16 md:py-24 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-display font-bold tracking-tight">OAC.</span>
            </div>
            <p className="text-white/90 leading-loose text-base">
              Founded by seasoned educationists, Oxford Academic Complex is committed to providing elite Anglo-Saxon education in a nurturing environment since 2007.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, label: 'Follow OAC on Facebook', href: 'https://www.facebook.com/oacameroon' },
                { Icon: Instagram, label: 'Follow OAC on Instagram', href: 'https://www.instagram.com/oacameroon' },
                { Icon: Linkedin, label: 'Connect with OAC on LinkedIn', href: 'https://www.linkedin.com/company/oxford-academic-complex' },
              ].map(({ Icon, label, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors border border-white/5">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-brand-400">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">Our History</Link></li>
              <li><Link href="/programs" className="text-white/80 hover:text-white transition-colors">Academic Programs</Link></li>
              <li><Link href="/admissions" className="text-white/80 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/campuses" className="text-white/80 hover:text-white transition-colors">Campuses</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-brand-400">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+237677484187" className="text-white/80 hover:text-white transition-colors text-sm block">+237 677 484 187</a>
                  <span className="text-white/40 text-xs">Admissions Hotline</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:admissions@oacameroon.org" className="text-white/80 hover:text-white transition-colors text-sm block">admissions@oacameroon.org</a>
                  <span className="text-white/40 text-xs">Email Us Anytime</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-brand-400">Locations</h4>
            <ul className="space-y-6 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <span className="text-sm">Behind CAMTEL, Bepanda Mallah-Douala,<br/>Littoral Region, Cameroon</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <span className="text-sm">Main Road, Tombel,<br/>South West Region, Cameroon</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <span className="text-sm">Littoral Hub, Loum,<br/>Littoral Region, Cameroon</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/70">
          <p>&copy; {currentYear} Oxford Academic Complex. All rights reserved.</p>
          <p className="text-white/40 text-xs">MINESEC Center &middot; GCE Examination Centre No. 11972</p>
        </div>
      </div>
    </footer>
  );
}

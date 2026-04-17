import { Users, CheckCircle } from 'lucide-react';
import RevealText from '../ui/RevealText';

export default function UniformSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <RevealText className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-brand-700 dark:text-brand-400 font-semibold tracking-wider uppercase text-sm">School Uniform</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6 text-balance text-gray-900 dark:text-white">Dressed for Success.</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">Students are required to wear the official school uniform to maintain a sense of unity, discipline, and institutional identity.</p>
        </RevealText>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <RevealText>
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-transparent hover:border-brand-500/20 transition-all">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900/40 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-brand-900 dark:text-brand-400" />
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-900 dark:text-white uppercase tracking-tight dark:text-brand-400">Boys Uniform</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Short sleeves purple shirt with OAC badge',
                  'Dark gray classic school trousers',
                  'Black or brown leather shoes/sandals only',
                  'White or gray socks'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-brand-500 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealText>

          <RevealText delay={0.2}>
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-transparent hover:border-brand-500/20 transition-all">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900/40 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-brand-900 dark:text-brand-400" />
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-900 dark:text-white uppercase tracking-tight dark:text-brand-400">Girls Uniform</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Short sleeves purple shirt with OAC badge',
                  'Dark gray A-shaped skirt with 3 pleats',
                  'Black or brown leather shoes/sandals only',
                  'White or gray socks'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-brand-500 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealText>
        </div>

        <RevealText delay={0.3} className="mt-12 text-center">
          <div className="inline-block p-4 px-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              Uniforms and sports kits can be purchased at designated laundry/supply points on all campuses. 
              <br className="hidden md:block"/>
              <span className="text-brand-900 dark:text-brand-400 font-bold">Please contact the bursar&apos;s office for specific sizing and pricing.</span>
            </p>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

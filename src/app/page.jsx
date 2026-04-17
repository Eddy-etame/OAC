import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import ProgramsSection from '../components/sections/ProgramsSection';
import SecondarySection from '../components/sections/SecondarySection';
import AchievementsSection from '../components/sections/AchievementsSection';
import CampusesSection from '../components/sections/CampusesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import AdmissionsSection from '../components/sections/AdmissionsSection';
import ContactForm from '../components/sections/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <div id="about">
        <AboutSection />
      </div>
      <ProgramsSection />
      <SecondarySection />
      <AchievementsSection />
      <CampusesSection />
      <TestimonialsSection />
      <AdmissionsSection />
      <ContactForm />
    </>
  );
}

import AboutSection from '../../components/sections/AboutSection';
import LeadershipSection from '../../components/sections/LeadershipSection';
import AchievementsSection from '../../components/sections/AchievementsSection';
import GallerySection from '../../components/sections/GallerySection';
import FAQSection from '../../components/sections/FAQSection';

export const metadata = {
  title: 'Our History & Leadership',
  description: "Discover Oxford Academic Complex's 17-year legacy since 2007. Learn about our founding vision, leadership philosophy, MINESEC recognition, GCE Examination Center status, and commitment to Anglo-Saxon education excellence in Cameroon.",
  keywords: 'OAC History, Oxford Academic Complex Cameroon, Educational Leadership 2007, MINESEC Institution History, GCE Examination Center Legacy, Anglo-Saxon Education Cameroon, School Leadership Philosophy, Cameroon Education Excellence, Academic Integrity History, OAC Founding Vision, Tombel School History, Douala Campus Legacy, Educational Institution Leadership',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-12 md:py-16 bg-sand-100 dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Our <span className="text-brand-900 dark:text-brand-400">Story.</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            17+ years of educational excellence, integrity, and vision across Cameroon.
          </p>
        </div>
      </section>
      <AboutSection />
      <LeadershipSection />
      <AchievementsSection />
      <GallerySection />
      <FAQSection />
    </div>
  );
}

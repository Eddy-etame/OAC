import ProgramsSection from '../../components/sections/ProgramsSection';
import SecondarySection from '../../components/sections/SecondarySection';

export const metadata = {
  title: 'Academic Programs | Nursery, Primary & Secondary',
  description: 'Explore the academic programs at Oxford Academic Complex. We offer comprehensive Nursery, Primary, and Secondary education, including General, Technical, and Commercial streams leading to GCE O and A Levels.',
  keywords: 'OAC Programs, Nursery School Cameroon, Primary Education Tombel, Secondary School Bepanda, General Education Cameroon, Technical Education Douala, Commercial Education OAC, GCE O-Level Prep, GCE A-Level Prep',
};

export default function ProgramsPage() {
  return (
    <div className="pt-20">
      <section className="py-12 md:py-16 bg-sand-100 dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Academic <span className="text-brand-900 dark:text-brand-400">Programs.</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A complete educational pathway from early childhood to university preparation.
          </p>
        </div>
      </section>
      <ProgramsSection />
      <SecondarySection />
    </div>
  );
}

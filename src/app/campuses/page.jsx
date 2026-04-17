import CampusesSection from '../../components/sections/CampusesSection';

export const metadata = {
  title: 'Our Campuses | Douala, Tombel & Loum',
  description: 'Visit the three campuses of Oxford Academic Complex: Our secondary & technical hub in Douala (Bepanda), our founding Main Center in Tombel, and our nursery hub in Loum.',
  keywords: 'OAC Campuses, Douala Secondary School, Tombel Primary School, Loum Nursery School, Bepanda School, School Locations Cameroon, Boarding School Tombel, Day School Douala',
};

export default function CampusesPage() {
  return (
    <div className="pt-20">
      <section className="py-12 md:py-16 bg-sand-100 dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Our <span className="text-brand-900 dark:text-brand-400">Campuses.</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Purpose-built facilities across three locations to serve students in the Littoral and South West regions.
          </p>
        </div>
      </section>
      <CampusesSection />
    </div>
  );
}

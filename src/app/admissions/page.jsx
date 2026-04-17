import AdmissionsSection from '../../components/sections/AdmissionsSection';
import AcademicCalendarSection from '../../components/sections/AcademicCalendarSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import FAQSection from '../../components/sections/FAQSection';

function getAcademicYear() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  return month >= 7 ? `${year}/${year + 1}` : `${year - 1}/${year}`;
}

export async function generateMetadata() {
  const academicYear = getAcademicYear();
  return {
    title: `Admissions ${academicYear}`,
    description: `Apply for the ${academicYear} academic year at Oxford Academic Complex. Join our Nursery, Primary, Secondary, or Technical education programs across Bepanda Douala, Tombel, and Loum campuses in Cameroon.`,
    keywords: 'OAC Admissions, School Registration Cameroon, Admission Requirements Douala, Tombel School Entry, Loum School Registration, Enroll Cameroon School, Anglo-Saxon School Admission',
  };
}

export default function AdmissionsPage() {
  const academicYear = getAcademicYear();

  return (
    <div className="pt-20">
      <section className="py-12 md:py-16 bg-sand-100 dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Admissions <span className="text-brand-900 dark:text-brand-400">{academicYear}</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Secure your child&apos;s future with Oxford Academic Complex. Places are limited.
          </p>
        </div>
      </section>
      <AdmissionsSection />
      <AcademicCalendarSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}

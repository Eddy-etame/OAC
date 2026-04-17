import ContactForm from '../../components/sections/ContactForm';

export const metadata = {
  title: 'Contact Us | Admissions & Inquiries',
  description: 'Get in touch with Oxford Academic Complex for admissions, inquiries, or campus visits. Contact our administration in Douala, Tombel, or Loum directly.',
  keywords: 'Contact OAC, Oxford Academic Complex phone number, Address of OAC Douala, School admissions Cameroon contact',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-12 md:py-16 bg-sand-100 dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Get in <span className="text-brand-900 dark:text-brand-400">Touch.</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions about admissions or programs? Our dedicated team is here to help.
          </p>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}

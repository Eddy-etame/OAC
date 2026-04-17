import Link from 'next/link';
import { Home } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-sand-100 dark:bg-gray-900 py-20 px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-display font-bold text-brand-900/20 dark:text-brand-400/10 select-none">
          404
        </h1>
        <div className="-mt-12 md:-mt-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-900 dark:bg-brand-500 text-white rounded-2xl font-bold hover:bg-brand-800 dark:hover:bg-brand-400 transition-colors shadow-xl shadow-brand-900/20"
          >
            <Home className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Preloader from '../components/layout/Preloader';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' });

export const metadata = {
  title: {
    template: '%s | Oxford Academic Complex',
    default: 'Oxford Academic Complex | Elite Education in Cameroon',
  },
  description: 'Official MINESEC center & GCE Examination Center (Centre No. 11972). 17+ years of excellence providing nursery, primary, secondary, and technical/vocational education across Bepanda, Tombel, and Loum campuses.',
  keywords: 'Oxford Academic Complex, OAC Cameroon, education Cameroon, nursery school, primary school, secondary school, technical education, vocational training, MINESEC, GCE Examination Center, Tombel school, Loum school, Bepanda school, Anglo-Saxon education',
  metadataBase: new URL('https://oxford-academic-complex.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oxford-academic-complex.vercel.app/',
    siteName: 'Oxford Academic Complex',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#520c8f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Oxford Academic Complex",
              "alternateName": "OAC",
              "url": "https://oxford-academic-complex.vercel.app",
              "logo": "https://oxford-academic-complex.vercel.app/og-image.png",
              "sameAs": [
                "https://www.facebook.com/p/Oxford-Academic-Complex-Bepanda-100057086154502/"
              ],
              "description": "Official MINESEC center & GCE Examination Center (Centre No. 11972). Providing nursery, primary, secondary, and technical/vocational education across Bepanda, Tombel, and Loum campuses.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CM"
              },
              "department": [
                {
                  "@type": "School",
                  "name": "OAC Bepanda Campus"
                },
                {
                  "@type": "School",
                  "name": "OAC Tombel Campus"
                },
                {
                  "@type": "School",
                  "name": "OAC Loum Campus"
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-sand-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased selection:bg-brand-500 selection:text-white transition-colors duration-300">
        <Preloader />
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

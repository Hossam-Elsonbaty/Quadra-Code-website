import './globals.scss';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TechVision Solutions - Leading Software Development Company',
  description: 'Professional software development services, custom applications, and innovative technology solutions for businesses worldwide.',
  keywords: 'software development, web applications, mobile apps, custom software, technology solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
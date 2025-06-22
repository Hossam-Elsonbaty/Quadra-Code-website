import Hero from '@/components/Home/Hero';
import Features from '@/components/Home/Features';
import Services from '@/components/Home/Services';
import Stats from '@/components/Home/Stats';
import Testimonials from '@/components/Home/Testimonials';
import CTA from '@/components/Home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
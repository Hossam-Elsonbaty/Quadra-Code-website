import Hero from '@/components/Pricing/Hero';
import PricingPlans from '@/components/Pricing/PricingPlans';
import FAQ from '@/components/Pricing/FAQ';

export const metadata = {
  title: 'Pricing - Quadra Code Solutions',
  description: 'Transparent pricing for our software development services. Choose from flexible packages that fit your project needs and budget.',
};

export default function Pricing() {
  return (
    <>
      <Hero />
      <PricingPlans />
      <FAQ />
    </>
  );
}
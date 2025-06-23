import Hero from '@/components/About/Hero';
import Team from '@/components/About/Team';
import Values from '@/components/About/Values';
import Timeline from '@/components/About/Timeline';

export const metadata = {
  title: 'About Us - Quadra Code Solutions',
  description: 'Learn about Quadra Code Solutions, our mission, values, and the expert team behind our innovative software development services.',
};

export default function About() {
  return (
    <>
      <Hero />
      <Values />
      <Timeline />
      <Team />
    </>
  );
}
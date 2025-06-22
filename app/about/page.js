import Hero from '@/components/About/Hero';
import Team from '@/components/About/Team';
import Values from '@/components/About/Values';
import Timeline from '@/components/About/Timeline';

export const metadata = {
  title: 'About Us - TechVision Solutions',
  description: 'Learn about TechVision Solutions, our mission, values, and the expert team behind our innovative software development services.',
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
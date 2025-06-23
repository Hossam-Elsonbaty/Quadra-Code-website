import Hero from '@/components/Projects/Hero';
import ProjectGrid from '@/components/Projects/ProjectGrid';
import Technologies from '@/components/Projects/Technologies';

export const metadata = {
  title: 'Our Projects - Quadra Code Solutions',
  description: 'Explore our portfolio of successful software development projects, from web applications to mobile apps and enterprise solutions.',
};

export default function Projects() {
  return (
    <>
      <Hero />
      <ProjectGrid />
      <Technologies />
    </>
  );
}
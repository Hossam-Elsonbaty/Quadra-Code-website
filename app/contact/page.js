import Hero from '@/components/Contact/Hero';
import ContactForm from '@/components/Contact/ContactForm';
import ContactInfo from '@/components/Contact/ContactInfo';

export const metadata = {
  title: 'Contact Us - TechVision Solutions',
  description: 'Get in touch with TechVision Solutions for your software development needs. We are ready to help bring your ideas to life.',
};

export default function Contact() {
  return (
    <>
      <Hero />
      <div className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
}
'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      message: ''
    });
  };

  return (
    <div className={`card ${styles.contactForm}`}>
      <h2>Send us a Message</h2>
      <p className={styles.formDescription}>
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="projectType">Project Type</label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value="">Select project type</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-development">Mobile Development</option>
            <option value="enterprise-software">Enterprise Software</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="budget">Budget Range</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          >
            <option value="">Select budget range</option>
            <option value="under-10k">Under $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="over-100k">Over $100,000</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Project Details *</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          <Send size={20} />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
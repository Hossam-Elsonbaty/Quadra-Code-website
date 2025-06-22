'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.scss';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is included in the project cost?',
      answer: 'Our project costs include complete development, testing, deployment, documentation, and initial support period. We provide transparent pricing with no hidden fees.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Simple projects typically take 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during consultation.'
    },
    {
      question: 'Do you offer ongoing maintenance and support?',
      answer: 'Yes, we offer comprehensive maintenance packages including bug fixes, security updates, performance monitoring, and feature enhancements to keep your software running smoothly.'
    },
    {
      question: 'Can I request changes during development?',
      answer: 'Absolutely! We follow an agile development process that allows for modifications and improvements throughout the project. We maintain open communication to ensure your vision is realized.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with modern technologies including React, Node.js, Python, PHP, mobile frameworks, cloud platforms, and databases. Our team stays updated with the latest industry trends.'
    },
    {
      question: 'Do you provide source code and documentation?',
      answer: 'Yes, you receive complete source code ownership and comprehensive documentation including technical specifications, API documentation, and deployment guides.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${styles.faq} section`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Get answers to common questions about our pricing and services
          </p>
        </div>

        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}>
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown size={20} />
              </button>
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
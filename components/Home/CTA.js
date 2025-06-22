import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import styles from './CTA.module.scss';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <div className={styles.ctaText}>
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss how we can help transform your ideas into successful 
              software solutions. Get in touch with our team today.
            </p>
          </div>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-secondary">
              <MessageCircle size={20} />
              Get Free Consultation
            </Link>
            <Link href="/projects" className="btn btn-outline">
              View Our Portfolio <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
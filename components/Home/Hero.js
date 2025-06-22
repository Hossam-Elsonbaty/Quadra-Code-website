import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Transform Your Ideas Into
              <span className="text-gradient"> Digital Reality</span>
            </h1>
            <p className={styles.heroDescription}>
              We are a leading software development company that builds innovative, 
              scalable, and user-centric digital solutions. From web applications 
              to mobile apps, we turn your vision into exceptional software products.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className="btn btn-primary">
                Get Started <ArrowRight size={20} />
              </Link>
              <Link href="/projects" className="btn btn-outline">
                <Play size={20} /> View Our Work
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Software Development Team" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
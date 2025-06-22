import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1>Get In Touch</h1>
          <p className={styles.heroDescription}>
            Ready to start your next project? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
          <div className={styles.heroFeatures}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>⚡</span>
              <span>Quick Response</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>💡</span>
              <span>Free Consultation</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🎯</span>
              <span>Tailored Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
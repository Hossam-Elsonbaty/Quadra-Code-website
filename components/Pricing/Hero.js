import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1>Simple, Transparent Pricing</h1>
          <p className={styles.heroDescription}>
            Choose from our flexible pricing plans designed to fit projects of all sizes. 
            No hidden fees, no surprises - just quality software development services 
            at competitive rates.
          </p>
          <div className={styles.heroFeatures}>
            <div className={styles.feature}>✓ Fixed-price projects available</div>
            <div className={styles.feature}>✓ Flexible hourly rates</div>
            <div className={styles.feature}>✓ Dedicated team options</div>
            <div className={styles.feature}>✓ 24/7 support included</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
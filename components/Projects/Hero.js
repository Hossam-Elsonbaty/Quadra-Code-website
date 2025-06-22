import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1>Our Projects</h1>
          <p className={styles.heroDescription}>
            Discover the innovative software solutions we've built for clients across 
            various industries. Each project represents our commitment to excellence, 
            creativity, and cutting-edge technology.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <h3>1000+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statItem}>
              <h3>95%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className={styles.statItem}>
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
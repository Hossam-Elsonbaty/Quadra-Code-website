import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>About Quadra Code Solutions</h1>
            <p className={styles.heroDescription}>
              Founded in 2016, Quadra Code Solutions has been at the forefront of software 
              innovation, helping businesses transform their ideas into powerful digital solutions. 
              We combine cutting-edge technology with creative problem-solving to deliver 
              exceptional results for our clients worldwide.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <h3>8+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className={styles.statItem}>
                <h3>500+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className={styles.statItem}>
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Our Team Working" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
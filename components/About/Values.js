import { Target, Heart, Lightbulb, Users } from 'lucide-react';
import styles from './Values.module.scss';

const Values = () => {
  const values = [
    {
      icon: <Target size={40} />,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering high-quality solutions that exceed expectations.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices in all our relationships.'
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Innovation',
      description: 'We embrace new technologies and creative approaches to solve complex challenges.'
    },
    {
      icon: <Users size={40} />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and close partnership with our clients for mutual success.'
    }
  ];

  return (
    <section className={`${styles.values} section`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2>Our Core Values</h2>
          <p className={styles.subtitle}>
            The principles that guide everything we do and shape our company culture
          </p>
        </div>

        <div className="grid grid-2">
          {values.map((value, index) => (
            <div key={index} className={`card ${styles.valueCard}`}>
              <div className={styles.valueIcon}>
                {value.icon}
              </div>
              <div className={styles.valueContent}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
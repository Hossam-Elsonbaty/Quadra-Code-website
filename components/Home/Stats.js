import { Users, Code, Award, Clock } from 'lucide-react';
import styles from './Stats.module.scss';

const Stats = () => {
  const stats = [
    {
      icon: <Users size={32} />,
      number: '500+',
      label: 'Happy Clients'
    },
    {
      icon: <Code size={32} />,
      number: '1000+',
      label: 'Projects Completed'
    },
    {
      icon: <Award size={32} />,
      number: '50+',
      label: 'Awards Won'
    },
    {
      icon: <Clock size={32} />,
      number: '8+',
      label: 'Years Experience'
    }
  ];

  return (
    <section className={styles.stats}>
      <div className="container">
        <div className="grid grid-4">
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statIcon}>
                {stat.icon}
              </div>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
import { Code, Smartphone, Cloud, Shield, Zap, Users } from 'lucide-react';
import styles from './Features.module.scss';

const Features = () => {
  const features = [
    {
      icon: <Code size={40} />,
      title: 'Custom Development',
      description: 'Tailored software solutions built specifically for your business needs and requirements.'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile-First Approach',
      description: 'Responsive designs that work seamlessly across all devices and platforms.'
    },
    {
      icon: <Cloud size={40} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies for modern applications.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Security First',
      description: 'Enterprise-grade security measures to protect your data and applications.'
    },
    {
      icon: <Zap size={40} />,
      title: 'High Performance',
      description: 'Optimized applications that deliver exceptional speed and user experience.'
    },
    {
      icon: <Users size={40} />,
      title: 'Expert Team',
      description: 'Dedicated professionals with years of experience in cutting-edge technologies.'
    }
  ];

  return (
    <section className={`${styles.features} section`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2>Why Choose Quadra Code?</h2>
          <p className={styles.subtitle}>
            We combine technical expertise with innovative thinking to deliver 
            exceptional software solutions that drive business growth.
          </p>
        </div>
        
        <div className="grid grid-3">
          {features.map((feature, index) => (
            <div key={index} className={`card ${styles.featureCard}`}>
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
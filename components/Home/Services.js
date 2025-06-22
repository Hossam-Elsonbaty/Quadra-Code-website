import { Monitor, Smartphone, Database, Cog } from 'lucide-react';
import styles from './Services.module.scss';

const Services = () => {
  const services = [
    {
      icon: <Monitor size={48} />,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest technologies and frameworks.',
      features: ['React & Next.js', 'Node.js Backend', 'Progressive Web Apps', 'E-commerce Solutions']
    },
    {
      icon: <Smartphone size={48} />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['React Native', 'iOS Development', 'Android Development', 'Cross-Platform Solutions']
    },
    {
      icon: <Database size={48} />,
      title: 'Backend Solutions',
      description: 'Robust backend systems, APIs, and database architecture for scalable applications.',
      features: ['REST & GraphQL APIs', 'Database Design', 'Cloud Infrastructure', 'Microservices']
    },
    {
      icon: <Cog size={48} />,
      title: 'DevOps & Consulting',
      description: 'DevOps implementation, system optimization, and technical consulting services.',
      features: ['CI/CD Pipelines', 'Cloud Migration', 'Performance Optimization', 'Technical Audit']
    }
  ];

  return (
    <section className={`${styles.services} section`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2>Our Services</h2>
          <p className={styles.subtitle}>
            Comprehensive software development services to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-2">
          {services.map((service, index) => (
            <div key={index} className={`card ${styles.serviceCard}`}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
              </div>
              <ul className={styles.featureList}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
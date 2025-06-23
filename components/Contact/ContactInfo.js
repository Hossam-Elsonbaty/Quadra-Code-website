import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';
import styles from './ContactInfo.module.scss';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      info: 'hello@Quadra Code.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      info: '123 Tech Street',
      description: 'Silicon Valley, CA 94105'
    }
  ];

  const responseInfo = [
    {
      icon: <Clock size={20} />,
      title: 'Response Time',
      description: 'We typically respond within 2-4 hours during business hours'
    },
    {
      icon: <MessageCircle size={20} />,
      title: 'Free Consultation',
      description: 'Get a free 30-minute consultation to discuss your project'
    },
    {
      icon: <Calendar size={20} />,
      title: 'Project Timeline',
      description: 'Receive a detailed project timeline and cost estimate'
    }
  ];

  return (
    <div className={styles.contactInfo}>
      <h2>Get in Touch</h2>
      <p className={styles.infoDescription}>
        We're here to help bring your software ideas to life. Reach out through any of these channels.
      </p>

      <div className={styles.contactMethods}>
        {contactMethods.map((method, index) => (
          <div key={index} className={styles.contactMethod}>
            <div className={styles.methodIcon}>
              {method.icon}
            </div>
            <div className={styles.methodInfo}>
              <h3>{method.title}</h3>
              <p className={styles.methodContact}>{method.info}</p>
              <p className={styles.methodDescription}>{method.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.responseInfo}>
        <h3>What to Expect</h3>
        <div className={styles.responseList}>
          {responseInfo.map((info, index) => (
            <div key={index} className={styles.responseItem}>
              <div className={styles.responseIcon}>
                {info.icon}
              </div>
              <div>
                <h4>{info.title}</h4>
                <p>{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.businessHours}>
        <h3>Business Hours</h3>
        <div className={styles.hours}>
          <div className={styles.hourItem}>
            <span>Monday - Friday</span>
            <span>8:00 AM - 6:00 PM PST</span>
          </div>
          <div className={styles.hourItem}>
            <span>Saturday</span>
            <span>10:00 AM - 4:00 PM PST</span>
          </div>
          <div className={styles.hourItem}>
            <span>Sunday</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
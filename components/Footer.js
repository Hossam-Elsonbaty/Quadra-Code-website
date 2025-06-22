import Link from 'next/link';
import { Code, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <Code size={32} />
              <span>TechVision</span>
            </div>
            <p className={styles.description}>
              Leading software development company delivering innovative solutions 
              for businesses worldwide. Transform your ideas into reality with our expertise.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/projects">Our Projects</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Services</h4>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">Cloud Solutions</a></li>
              <li><a href="#">DevOps</a></li>
              <li><a href="#">Consulting</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contact Info</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail size={16} />
                <span>hello@techvision.com</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={16} />
                <span>123 Tech Street, Silicon Valley, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 TechVision Solutions. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
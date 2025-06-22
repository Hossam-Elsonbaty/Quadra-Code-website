import { Linkedin, Twitter, Github } from 'lucide-react';
import styles from './Team.module.scss';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Thompson',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Visionary leader with 15+ years in software development and business strategy.'
    },
    {
      name: 'Sarah Mitchell',
      position: 'CTO',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Technology expert specializing in scalable architectures and emerging technologies.'
    },
    {
      name: 'David Rodriguez',
      position: 'Lead Developer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Full-stack developer with expertise in modern web and mobile technologies.'
    },
    {
      name: 'Emma Chen',
      position: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Creative designer focused on user-centered design and digital experiences.'
    }
  ];

  return (
    <section className={`${styles.team} section`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2>Meet Our Team</h2>
          <p className={styles.subtitle}>
            The talented individuals driving innovation and excellence at TechVision
          </p>
        </div>

        <div className="grid grid-4">
          {teamMembers.map((member, index) => (
            <div key={index} className={`card ${styles.teamCard}`}>
              <div className={styles.memberImage}>
                <img src={member.image} alt={member.name} />
                <div className={styles.memberSocial}>
                  <a href="#" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                  <a href="#" aria-label="Github">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>
                <p className={styles.memberPosition}>{member.position}</p>
                <p className={styles.memberBio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
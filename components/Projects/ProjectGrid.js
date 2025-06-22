import { ExternalLink, Github } from 'lucide-react';
import styles from './ProjectGrid.module.scss';

const ProjectGrid = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Modern e-commerce platform with advanced features including inventory management, payment processing, and analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Healthcare Management System',
      category: 'Enterprise Software',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Comprehensive healthcare management system for hospitals and clinics with patient records, scheduling, and billing.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Secure mobile banking application with biometric authentication, transaction history, and real-time notifications.',
      technologies: ['React Native', 'Node.js', 'AWS', 'Redis'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Learning Management System',
      category: 'EdTech',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Interactive learning platform with video streaming, progress tracking, and collaborative tools for students and educators.',
      technologies: ['Angular', 'Express.js', 'MySQL', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Comprehensive real estate platform with property listings, virtual tours, and mortgage calculator.',
      technologies: ['Next.js', 'GraphQL', 'MongoDB', 'Mapbox'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Logistics Tracking System',
      category: 'Enterprise Software',
      image: 'https://images.pexels.com/photos/586078/pexels-photo-586078.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Advanced logistics and supply chain management system with real-time tracking and route optimization.',
      technologies: ['React', 'Python', 'PostgreSQL', 'Google Maps API'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section className={`${styles.projects} section`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2>Featured Projects</h2>
          <p className={styles.subtitle}>
            A showcase of our most successful and innovative software solutions
          </p>
        </div>

        <div className="grid grid-3">
          {projects.map((project, index) => (
            <div key={index} className={`card ${styles.projectCard}`}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <a href={project.liveUrl} className={styles.projectLink}>
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} className={styles.projectLink}>
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <div className={styles.projectCategory}>{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
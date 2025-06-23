import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, InnovateCorp',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Quadra Code transformed our business with their exceptional software solutions. Their team\'s expertise and dedication exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'CTO, StartupXYZ',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Working with Quadra Code was a game-changer. They delivered a scalable solution that perfectly matched our requirements and timeline.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder, TechStart',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The quality of work and attention to detail from Quadra Code is outstanding. They truly understand modern software development.',
      rating: 5
    }
  ];

  return (
    <section className={`${styles.testimonials} section`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`card ${styles.testimonialCard}`}>
              <div className={styles.quoteIcon}>
                <Quote size={24} />
              </div>
              
              <div className={styles.rating}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className={styles.testimonialContent}>{testimonial.content}</p>

              <div className={styles.testimonialAuthor}>
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
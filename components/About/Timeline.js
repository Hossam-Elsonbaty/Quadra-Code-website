import styles from './Timeline.module.scss';

const Timeline = () => {
  const milestones = [
    {
      year: '2016',
      title: 'Company Founded',
      description: 'Quadra Code Solutions was established with a vision to revolutionize software development.'
    },
    {
      year: '2018',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and delivered a game-changing mobile application.'
    },
    {
      year: '2020',
      title: 'Team Expansion',
      description: 'Grew our team to 25+ skilled developers and expanded our service offerings.'
    },
    {
      year: '2022',
      title: 'International Recognition',
      description: 'Won multiple industry awards and established partnerships with global tech leaders.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Launched our dedicated R&D division focusing on AI and emerging technologies.'
    }
  ];

  return (
    <section className={`${styles.timeline} section`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2>Our Journey</h2>
          <p className={styles.subtitle}>
            Key milestones that have shaped Quadra Code Solutions over the years
          </p>
        </div>

        <div className={styles.timelineContainer}>
          {milestones.map((milestone, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineYear}>
                {milestone.year}
              </div>
              <div className={styles.timelineContent}>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
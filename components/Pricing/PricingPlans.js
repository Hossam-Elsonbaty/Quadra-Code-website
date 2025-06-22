import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import styles from './PricingPlans.module.scss';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$5,000',
      period: 'per project',
      description: 'Perfect for small businesses and startups looking to build their first digital presence.',
      features: [
        'Custom web application',
        'Responsive design',
        'Basic SEO optimization',
        '3 months support',
        'Source code included',
        'Basic documentation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$15,000',
      period: 'per project',
      description: 'Ideal for growing businesses that need comprehensive software solutions.',
      features: [
        'Everything in Starter',
        'Mobile app development',
        'Database integration',
        'API development',
        '6 months support',
        'Advanced security features',
        'Performance optimization',
        'Detailed documentation'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'quote',
      description: 'Tailored solutions for large organizations with complex requirements.',
      features: [
        'Everything in Professional',
        'Scalable architecture',
        'Cloud deployment',
        'DevOps setup',
        '12 months support',
        'Dedicated project manager',
        'Regular progress meetings',
        'Training sessions',
        'SLA agreement'
      ],
      popular: false
    }
  ];

  return (
    <section className={`${styles.pricing} section`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2>Choose Your Plan</h2>
          <p className={styles.subtitle}>
            Flexible pricing options to match your project requirements and budget
          </p>
        </div>

        <div className="grid grid-3">
          {plans.map((plan, index) => (
            <div key={index} className={`card ${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}>
              {plan.popular && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              
              <div className={styles.pricingHeader}>
                <h3>{plan.name}</h3>
                <div className={styles.price}>
                  <span className={styles.priceAmount}>{plan.price}</span>
                  <span className={styles.pricePeriod}>{plan.period}</span>
                </div>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>

              <ul className={styles.featureList}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <Check size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/contact" 
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} ${styles.planButton}`}
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.customPricing}>
          <h3>Need Something Different?</h3>
          <p>
            We offer flexible hourly rates starting from $75/hour for custom development work. 
            Contact us to discuss your specific requirements and get a personalized quote.
          </p>
          <Link href="/contact" className="btn btn-secondary">
            Request Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
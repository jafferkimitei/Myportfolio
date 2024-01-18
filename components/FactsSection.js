
import React, { useState, useEffect } from 'react';
import styles from '../styles/About.module.scss';
import { Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types';

const factData = [
  { label: "Clients", count: 300 },
  { label: "Projects", count: 789 },
  { label: "Hours", count: 24600 },
  { label: "Collaborations", count: 47 },
];

const FactItem = ({ label, count }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentCount < count) {
        setCurrentCount(prevCount => prevCount + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [count, currentCount]);

  return (
    <div className={styles.counter}>
      <h2>{currentCount}</h2>
      <p>{label}</p>  
    </div>
  );
};

FactItem.propTypes = {
  label: PropTypes.string.isRequired, 
  count: PropTypes.number.isRequired, 
};
const FactsSection = () => {
  return (
    <div className={styles.aboutFacts}>
      <div className={styles.aboutFact}>
        <h2>Facts</h2>
        <p>Behind the scenes, our projects and collaborations are a vibrant tapestry of unique stories, diverse talents, and boundless creativity. Each endeavor is a testament to the power of collaboration and the artistry that fuels it.</p>
        <Fade right duration={2000}>
        <div className={styles.wrapper}>
          {factData.map((fact, index) => (
            <FactItem key={index} label={fact.label} count={fact.count} />
          ))}
        </div>
        </Fade>
      </div>
    </div>
  );
};


export default FactsSection;

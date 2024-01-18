import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Header.module.scss';

export default function Curve() {
  const [curveHeight, setCurveHeight] = useState(0);

  useEffect(() => {
    const updateCurveHeight = () => {
      setCurveHeight(window.innerHeight);
    };

    // Initial update
    updateCurveHeight();

    // Add event listener for window resize
    window.addEventListener('resize', updateCurveHeight);

    // Cleanup: Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateCurveHeight);
    };
  }, []);

  const initialPath = `M100 0 L100 ${curveHeight} Q-100 ${curveHeight / 2} 100 0`;
  const targetPath = `M100 0 L100 ${curveHeight} Q100 ${curveHeight / 2} 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={styles.svgCurve}>
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  );
}

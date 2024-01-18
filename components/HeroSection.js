import React, { useEffect, useState } from 'react';
import DesktopHero from './DesktopHero';
import MobileHero from './MobileHero';
import styles from '../styles/About.module.scss';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.heroSection}>
      {isMobile ? <MobileHero /> : <DesktopHero />}
    </div>
  );
};

export default HeroSection;

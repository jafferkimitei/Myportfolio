// DesktopContent.jsx
import React from 'react';
import styles from '../styles/About.module.scss';
import Link from 'next/link';


const DesktopHero = () => {
  return (
    <>
      <div className={styles.heroText}>
        <p>Your one-stop creative for web development, photography, videography, and UI/UX design.</p>
        <Link href="/contact" passHref legacyBehavior>
          <a className={styles.ctabutton}>Book Today</a>
        </Link>
      </div>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted className={styles.video}>
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default DesktopHero;

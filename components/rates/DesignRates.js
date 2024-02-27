import React from 'react';
import styles from "../../styles/Rates.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function designRates () {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    largerTablets: {
      breakpoint: { max: 1023, min: 912},
      items: 3,
    },
    tablet: {
      breakpoint: { max: 911, min: 821 },
      items: 2,
    },
    smallerTablet: {
      breakpoint: { max: 820, min: 769 },
      items: 2,
    },
    largerMobiles: {
      breakpoint: { max: 768, min: 541 }, 
      items: 1,
    },
    smallerMobiles: {
      breakpoint: { max: 540, min: 200 }, 
      items: 1,
    },
  };
 
  // const isMobileOrTablet = window.innerWidth <= 1023;
  const windowWidth = window.innerWidth;

  const isMobileOrTablet =
    windowWidth <= 4000 && windowWidth >= 200 && (
      (windowWidth <= 1023 && windowWidth >= 541) || 
      (windowWidth <= 820 && windowWidth >= 769) || 
      (windowWidth <= 911 && windowWidth >= 821) || 
      (windowWidth <= 912 && windowWidth >= 768) || 
      (windowWidth <= 540 && windowWidth >= 200) 
    );

  return (
    <div className={styles.ratedContainer}>
      <h1 className={styles.rateHeader}>DESIGN RATES</h1>
      {isMobileOrTablet ? (
        <Carousel responsive={responsive}>
           <div className={styles.category}>
           <h2>Graphic Design</h2>
          <ul className={styles.pricing}>
            <li>Logo Design - starting from Kes.7500</li>
            <li>Branding Packages - starting from Kes.4500</li>
          </ul>
        </div>

        <div className={styles.category}>
        <h2>UI&UX Design</h2>
          <ul className={styles.pricing}>
            <li>Web Design - starting from Kes.10,000</li>
            <li>App Design - starting from Kes.13,000</li>
          </ul>
        </div>

        <div className={styles.category}>
        <h2>Print Design</h2>
          <ul className={styles.pricing}>
            <li>Brochures,Flyers,Posters - starting from Kes.1800</li>
            <li>Books & Magazine - starting from Kes.2800</li>
            <li> </li>
            <li> </li>
            <h3 className={styles.special}>SPECIAL PACKAGE</h3>
            <li>2D/3D animations</li>
            <li>Custom quotation</li>
          </ul>
        </div>
        </Carousel>
      ) : (
        <div className={styles.photoCard}>
          <div className={styles.category}>
          <h2>Graphic Design</h2>
          <ul className={styles.pricing}>
            <li>Logo Design - starting from Kes.7500</li>
            <li>Branding Packages - starting from Kes.4500</li>
          </ul>
          </div>
          <div className={styles.category}>
          <h2>UI&UX Design</h2>
          <ul className={styles.pricing}>
            <li>Web Design - starting from Kes.10,000</li>
            <li>App Design - starting from Kes.13,000</li>
          </ul>
          </div>
          <div className={styles.category}>
          <h2>Print Design</h2>
          <ul className={styles.pricing}>
            <li>Brochures,Flyers,Posters - starting from Kes.1800</li>
            <li>Books & Magazine - starting from Kes.2800</li>
            <li> </li>
            <li> </li>
            <h3 className={styles.special}>SPECIAL PACKAGE</h3>
            <li>2D/3D animations</li>
            <li>Custom quotation</li>
          </ul>
          </div>
        </div>
      )}
    </div>
  );
}
  
export default designRates;
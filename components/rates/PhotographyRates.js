import React from "react";
import styles from "../../styles/Rates.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function photographyRates() {
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
    <div className={styles.ratePContainer}>
      <h1 className={styles.rateHeader}>PHOTOGRAPHY RATES</h1>
      {isMobileOrTablet ? (
        <Carousel responsive={responsive}>
           <div className={styles.category}>
          <h2>Events</h2>
          <ul className={styles.pricing}>
            <li>4 hours - Kes.20,000</li>
            <li>8 hours - Kes.40,000</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h2>Portraits</h2>
          <ul className={styles.pricing}>
            <li>1 photo - Kes.350</li>
            <li>10 photos - Kes.3,500</li>
            <li>Unlimited package - Kes.5,500</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h2>Fashion</h2>
          <ul className={styles.pricing}>
            <li>1 session - Kes.4,000</li>
            <li>2 sessions - Kes.6,000</li>
            <li>3 hours - Kes.8,000</li>
            <li>4 hours - Kes.14,000</li>
          </ul>
        </div>
        </Carousel>
      ) : (
        <div className={styles.photoCard}>
          <div className={styles.category}>
          <h2>Events</h2>
          <ul className={styles.pricing}>
            <li>4 hours - Kes.20,000</li>
            <li>8 hours - Kes.40,000</li>
          </ul>
          </div>
          <div className={styles.category}>
          <h2>Portraits</h2>
          <ul className={styles.pricing}>
            <li>1 photo - Kes.350</li>
            <li>10 photos - Kes.3,500</li>
            <li>Unlimited package - Kes.5,500</li>
          </ul>
          </div>
          <div className={styles.category}>
          <h2>Fashion</h2>
          <ul className={styles.pricing}>
            <li>1 session - Kes.4,000</li>
            <li>2 sessions - Kes.6,000</li>
            <li>3 hours - Kes.8,000</li>
            <li>4 hours - Kes.14,000</li>
          </ul>
          </div>
        </div>
      )}
    </div>
  );
}
  

export default photographyRates;

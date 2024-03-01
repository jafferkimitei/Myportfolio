import React from "react";
import styles from "../../styles/Rates.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function videographyRates() {
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
    <div className={styles.ratevContainer}>
    <h1 className={styles.rateHeader}>VIDEOGRAPHY RATES</h1>
      {isMobileOrTablet ? (
        <Carousel responsive={responsive}>
           <div className={styles.category}>
           <h2>Videography & Editing</h2>
          <ul className={styles.pricing}>
            <li>5 - 10minute video - Kes.40,000</li>
            <li>1- 5minute video - Kes.20,000</li>
            <li>above 10 minutes - Kes.60,000</li>
            <li>Promo videos - Kes5000(15-60s)</li>
            <li></li>
            <li></li>
            <h3 className={styles.special}>Special Package</h3>
            <li>Music Videos starting at Kes.25,000</li>
            <li>Event Videos starting at Kes.30,000</li>
          </ul>
        </div>

        <div className={styles.category}>
        <h2>Filming Only</h2>
          <ul className={styles.pricing}>
            <li>Half day - Kes.30,000</li>
            <li>Full day - Kes.55,000</li>
          </ul>
        </div>

        <div className={styles.category}>
        <h2>Editing Only</h2>
          <ul className={styles.pricing}>
            <li>5 minute video - Kes.20,000</li>
            <li>Above 10 minutes - Kes.35,000</li>
            <li>1 minute video - Kes.10,000</li>
            <li>15-60s Promo - Kes.5,000</li>
          </ul>
        </div>
        </Carousel>
      ) : (
        <div className={styles.photoCard}>
          <div className={styles.category}>
          <h2>Videography & Editing</h2>
          <ul className={styles.pricing}>
            <li>5 - 10minute video - Kes.40,000</li>
            <li>1- 5minute video - Kes.20,000</li>
            <li>above 10 minutes - Kes.60,000</li>
            <li>Promo videos - Kes5000(15-60s)</li>
            <li></li>
            <li></li>
            <h3 className={styles.special}>Special Package</h3>
            <li>Music Videos starting at Kes.25,000</li>
            <li>Event Videos starting at Kes.30,000</li>
          </ul>
          </div>
          <div className={styles.category}>
          <h2>Filming Only</h2>
          <ul className={styles.pricing}>
            <li>Half day - Kes.30,000</li>
            <li>Full day - Kes.55,000</li>
          </ul>
          </div>
          <div className={styles.category}>
          <h2>Editing Only</h2>
          <ul className={styles.pricing}>
            <li>5 minute video - Kes.20,000</li>
            <li>Above 10 minutes - Kes.35,000</li>
            <li>1 minute video - Kes.10,000</li>
            <li>15-60s Promo - Kes.5,000</li>
          </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default videographyRates;

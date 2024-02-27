import React from 'react'
import styles from "../../styles/Rates.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function webRates () {
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
    <div className={styles.ratewContainer}>
        <h1 className={styles.rateHeader}>WEBSITE DEVELOPMENT RATES</h1>
      {isMobileOrTablet ? (
        <Carousel responsive={responsive}>
           <div className={styles.category}>
           <h2>Bronze Package</h2>
          <ul className={styles.pricing}>
            <li>User Interface friendly</li>
            <li>1-5 Unique page designs</li>
            <li>Custom design and development</li>
            <li>Interactive maps & location info</li>
            <li>Social media intergration</li>
            <li>Basic Contact & Inquiry form</li>
            <li>Basic Search Engine Optimization</li>
            <li>Basic Speed Optimization</li>
            <li>1-month free support</li>  
            <li>For <span>KES.25,000</span></li>
          </ul>
        </div>

        <div className={styles.category}>
        <h2>Gold Package</h2>
          <ul className={styles.pricing}>
          <li>Enhanced User Interface</li>
            <li>5-20 Unique page designs</li>
            <li>Enhanced design and development</li>
            <li>Enhanced Interactive maps & location info</li>
            <li>Extensive Social media intergration</li>
            <li>Enhanced Contact & Inquiry form</li>
            <li>Enhanced Search Engine Optimization</li>
            <li>Further Speed Optimization</li>
            <li>3-month free support</li>
            <li>Newsletter feature</li>
            <li>Site upload & setup for domain emails</li>
            <li>For <span>KES.50,000</span></li>
          </ul>
        </div>

        <div className={styles.category}>
        <h2>Platinum Package</h2>
          <ul className={styles.pricing}>
          <li>Premium User Interface</li>
            <li>Responsive page designs</li>
            <li>Exclusive features(Add-ons)</li>
            <li>State-of-the-art Interactive maps</li>
            <li>Comprehensive Social media intergration</li>
            <li>Advanced Contact & Inquiry form</li>
            <li>Advanced Search Engine Optimization</li>
            <li>Advanced Speed Optimization</li>
            <li>6-month free support</li>
            <li>Newsletter feature</li>
            <li>Comprehensive Site upload & setup for domain emails</li>
            <li>For <span>KES.100,000</span></li>
          </ul>
        </div>
        </Carousel>
      ) : (
        <div className={styles.photoCard}>
          <div className={styles.category}>
          <h2>Bronze Package</h2>
          <ul className={styles.pricing}>
            <li>User Interface friendly</li>
            <li>1-5 Unique page designs</li>
            <li>Custom design and development</li>
            <li>Interactive maps & location info</li>
            <li>Social media intergration</li>
            <li>Basic Contact & Inquiry form</li>
            <li>Basic Search Engine Optimization</li>
            <li>Basic Speed Optimization</li>
            <li>1-month free support</li>  
            <li>For <span>KES.25,000</span></li>
          </ul>
          </div>
          <div className={styles.category}>
          <h2>Gold Package</h2>
          <ul className={styles.pricing}>
          <li>Enhanced User Interface</li>
            <li>5-20 Unique page designs</li>
            <li>Enhanced design and development</li>
            <li>Enhanced Interactive maps & location info</li>
            <li>Extensive Social media intergration</li>
            <li>Enhanced Contact & Inquiry form</li>
            <li>Enhanced Search Engine Optimization</li>
            <li>Further Speed Optimization</li>
            <li>3-month free support</li>
            <li>Newsletter feature</li>
            <li>Site upload & setup for domain emails</li>
            <li>For <span>KES.50,000</span></li>
          </ul>
          </div>
          <div className={styles.category}>
          <h2>Platinum Package</h2>
          <ul className={styles.pricing}>
          <li>Premium User Interface</li>
            <li>Responsive page designs</li>
            <li>Exclusive features(Add-ons)</li>
            <li>State-of-the-art Interactive maps</li>
            <li>Comprehensive Social media intergration</li>
            <li>Advanced Contact & Inquiry form</li>
            <li>Advanced Search Engine Optimization</li>
            <li>Advanced Speed Optimization</li>
            <li>6-month free support</li>
            <li>Newsletter feature</li>
            <li>Comprehensive Site upload & setup for domain emails</li>
            <li>For <span>KES.100,000</span></li>
          </ul>
          </div>
        </div>
      )}
    </div>
  );
}


export default webRates;
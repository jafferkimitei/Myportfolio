
"use client";
import styles from "../styles/Landing.module.scss";
import React, { useEffect, useState } from 'react';

const MobileView = () => {
  const [activeImage, setActiveImage] = useState(1);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(prev => (prev % 4) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const imageUrls = [
    '/images/mobile1.webp',
    '/images/mobile2.webp',
    '/images/mobile3.webp',
    '/images/mobile4.webp',
  ];

  return (
<div className={styles.mobileViewContainer}>
      <div className={styles.imageContainerM}>
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className={`${styles.imageM} ${activeImage === index + 1 ? styles.active : ''}`}
            style={{ backgroundImage: `url('${url}')` }}
          ></div>
        ))}
        <div className={styles.overlay}>
          <div className={styles.centerContent}>
            <h3 className={styles.title}>YUNG HAVY</h3>
            <p className={styles.brief}>Visual Artist based in Nairobi</p>
            <p className={styles.email}>Email : havierkim@gmail.com</p>
            <button className={styles.mobbtn}>
              <a href="/about">Visit Website</a>
            </button>
            <div className={styles.socialIcons}>
              <a href="https://twitter.com/yunghavy" target="_blank" rel="noopener noreferrer">
                <img src="/icons/twitter-x.svg" alt="Twitter" />
              </a>
              <a href="https://www.instagram.com/yunghavy/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.svg" alt="Instagram" />
              </a>
              <a href="https://youtube.com/@shotbyhavy" target="_blank" rel="noopener noreferrer">
                <img src="/icons/youtube.svg" alt="YouTube" />
              </a>
              <a href="https://join.skype.com/invite/GwQ9zmYs15n9" target="_blank" rel="noopener noreferrer">
                <img src="/icons/skype.svg" alt="Skype" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileView;

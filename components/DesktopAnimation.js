
"use client";
import styles from "../styles/Landing.module.scss";
import React, { useEffect, useState } from 'react';

const DesktopView = () => {
  const [activeImage, setActiveImage] = useState(1);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(prev => (prev % 4) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

 
 
  const imageUrls = [
    '/images/desktop1.webp',
    '/images/desktop2.webp',
    '/images/desktop3.webp',
    '/images/desktop4.webp',
  ];

  return (
    <div className={styles.desktopViewContainer}>
    <div className={styles.imageContainer}>
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className={`${styles.image} ${activeImage === index + 1 ? styles.active : ''}`}
          style={{ backgroundImage: `url('${url}')` }}
        ></div>
      ))}
      <div className={styles.overlay}>
        <div className={styles.centerContent}>
          <h3 className={styles.title}>YUNG HAVY</h3>
          <p className={styles.brief}>Visual Artist based in Nairobi</p>
          <p className={styles.email}>Email : havierkim@gmail.com</p>
          <button className={styles.webbtn}>
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
              <a href="https://github.com/yunghavy" target="_blank" rel="noopener noreferrer">
                <img src="/icons/github.svg" alt="Skype" />
              </a>
            </div>
        </div>
      </div>
    </div>
  </div>
);
};
export default DesktopView;

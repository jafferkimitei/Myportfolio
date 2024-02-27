
import React from 'react';
import styles from '../styles/Footer.module.scss';


const footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
      <div className={styles.footerSignature}>
      <h1>YUNG HAVY</h1>
      </div>

      <div className={styles.socialIcons}>
              <a href="https://twitter.com/yunghavy" target="_blank" rel="noopener noreferrer">
                <img src="/icons/twitter-x.svg" alt="Twitter" />
              </a>
              <a href="https://www.instagram.com/yunghavy/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.svg" alt="Instagram" />
              </a>
              <a href="https://youtube.com/@siccfrequencies" target="_blank" rel="noopener noreferrer">
                <img src="/icons/youtube.svg" alt="YouTube" />
              </a>
              <a href="https://github.com/yunghavy" target="_blank" rel="noopener noreferrer">
                <img src="/icons/github.svg" alt="Skype" />
              </a>
            </div>

      <div className={styles.rightsReserved}>
        &copy; 2024 Yung Havy. All Rights Reserved.
      </div>
      </div>
    </footer>
  );
};

export default footer;


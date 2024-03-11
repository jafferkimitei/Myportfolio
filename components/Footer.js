import React from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.scss';


const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.footerSignature}>
          <h1>YUNG HAVY</h1>
        </div>

        <div className={styles.socialIcons}>
          <a href="https://twitter.com/yunghavy" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/twitter-x.svg" alt="Twitter Icon"  width={30} height={30}/>
          </a>
        

          <a href="https://www.instagram.com/yunghavy/" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/instagram.svg" alt="Instagram Icon" width={30} height={30}/>
          </a>
          <a href="https://youtube.com/@siccfrequencies" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/youtube.svg" alt="YouTube Icon" width={30} height={30}/>
          </a>
          <a href="https://github.com/yunghavy" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/github.svg" alt="GitHub Icon" width={30} height={30}/>
          </a>
        </div>

        <div className={styles.rightsReserved}>
          &copy; 2024 Yung Havy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import styles from '../styles/test.module.scss';

const videoUrl = "/videos/test.mp4"; 

function TextAbout() {
  return (
    <div className={styles.aboutWrapper}>
        <div className={styles.videoContainer}>
          <video autoPlay muted loop className={styles.video}>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      <div className={styles.rightParagraph}>
        <p>
          Through the years, I've honed my expertise in UI/UX design, capturing
          breathtaking photographs, and delivering compelling video content. My
          mission: to stir inspiration and evoke emotions in every project I
          take on, be it crafting an intuitive interface, capturing that
          flawless shot, or weaving a captivating visual story.
        </p>
      </div>
    </div>
  );
}

export default TextAbout;

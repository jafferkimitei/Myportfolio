
import React from 'react';
import styles from '../styles/Slider.module.scss'; 

const backgroundVideo = () => {
  return (
    <div className={styles.backgroundVideo}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/videos/Visuals.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default backgroundVideo;


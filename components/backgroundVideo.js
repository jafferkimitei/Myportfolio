
import React from 'react';
import styles from '../styles/Slider.module.scss'; 

const backgroundVideo = () => {
  return (
    <div className={styles.backgroundVideo}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/videos/test.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default backgroundVideo;

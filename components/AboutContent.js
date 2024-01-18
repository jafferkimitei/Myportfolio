import React from "react";
import styles from '../styles/About.module.scss';
import { Fade } from 'react-awesome-reveal';

const AboutContent = () => {
  return (
    <div className={styles.aboutContent}>
      <div className={styles.container}>
        <Fade direction="left">
          <div className={styles.aboutBio}>
            <h2>About</h2>
            <h3>Hi, Im Jaffer Kimutai a.k.a Yung Havy</h3>
            <p>
              I am a multi-disciplinary creative based in Nairobi, Kenya, wearing many hats - from UI/UX design to photography, filmmaking, videography, and web development. With a profound passion for visual storytelling and an unwavering attention to detail, I am committed to weaving captivating and immersive experiences through my work.
            </p>
            <p>
              Through the years, I&apos;ve finely crafted my expertise in UI/UX design, capturing breathtaking photographs, and delivering top-notch video content. My mission is to stir inspiration and evoke emotions in every project I take on, be it crafting an intuitive user interface, capturing that flawless shot, or narrating a compelling visual story.
            </p>
          </div>
        </Fade>
        <Fade direction="right">
          <div className={styles.aboutPhoto}>
            <img
              src="/images/about.webp"
              alt="About"
              className={styles.photo}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutContent;

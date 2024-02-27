
import React from 'react';
import styles from "../styles/Love.module.scss";

function loveHero() {
  return (
    <div className={styles.containerS}>
      <div className={styles.heroContent}>
        <h1 className={styles.loveText}>MY LOVES</h1>
        {/* <img className={styles.pngImage} src="/images/myLoves.png" alt="" loading='lazy' /> */}
      </div>
    </div>
  );
}

export default loveHero;

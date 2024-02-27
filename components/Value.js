// MyValue.js
import React from "react";
import styles from "../styles/test.module.scss";
import { Parallax } from 'react-parallax';

function MyValue() {
  return (
    <>
      <div>
      <Parallax bgImage="/images/values.jpg" strength={400} className={styles.valuesContainer}>
        <h1 className={styles.valueT}>MY VALUES</h1>
        <p className={styles.principles}>
          <span>LIVE</span> BY PRINCIPLES
        </p>
        </Parallax>
      </div>
      <div className={styles.word}>
        <div className={`${styles.words} ${styles['word-1']}`}>
          <span>W</span>
          <span>O</span>
          <span>R</span>
          <span>K</span>
        </div>

        <div className={`${styles.words} ${styles['word-2']}`}>
          <span>S</span>
          <span>M</span>
          <span>A</span>
          <span>R</span>
          <span>T</span>
        </div>

        <div className={`${styles.words} ${styles['word-3']}`}>
          <span>N</span>
          <span>O</span>
          <span>T</span>
          <span> </span>
          <span>H</span>
          <span>A</span>
          <span>R</span>
          <span>D</span>
          <span>E</span>
          <span>R</span>
        </div>
      </div>
    </>
  );
}

export default MyValue;

import React from 'react';
import styles from "../styles/Loading.module.scss";


const Loader = () => {
  return (
    <div className={styles.containerL}>
    <div className={styles.loading}>
    <div className={styles.rotate}>
      <span>L</span>
    </div>
    <span>OADING</span>
  </div>
  </div>
  );
};

export default Loader;
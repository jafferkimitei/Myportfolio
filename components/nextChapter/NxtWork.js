import React from 'react';
import Link from 'next/link';
import styles from "../../styles/test.module.scss";


function nxtWork () {
  return (
    <div className={styles.nxtContainer}>
        <div className={styles.nxtText}>
            NEXT <span>CHAPTER</span>
        </div>
        <button className={styles.nxtButton}>
        <Link href="/works">
        <span className={styles.buttonText}>My Works <span className={styles.arrow}>&rarr;</span></span>
        </Link>
      </button>
    </div>
  )
}

export default nxtWork;
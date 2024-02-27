import React from 'react';
import Link from 'next/link';
import styles from "../../styles/test.module.scss";


function nxtContact () {
  return (
    <div className={styles.nxtContainer}>
        <div className={styles.nxtText}>
            WANNA <span>TALK?</span>
        </div>
        <button className={styles.nxtButton}>
        <Link href="/contact">
        <span className={styles.buttonText}>Contact Me <span className={styles.arrow}>&rarr;</span></span>
        </Link>
      </button>
    </div>
  )
}

export default nxtContact;
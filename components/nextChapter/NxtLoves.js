import React from 'react';
import Link from 'next/link';
import styles from "../../styles/test.module.scss";


function nxtLoves () {
  return (
    <div className={styles.nxtContainer}>
        <div className={styles.nxtText}>
            NEXT <span>CHAPTER</span>
        </div>
        <button className={styles.nxtButton}>
        <Link href="/love">
        <span className={styles.buttonText}>My Loves <span className={styles.arrow}>&rarr;</span></span>
        </Link>
      </button>
    </div>
  )
}

export default nxtLoves;
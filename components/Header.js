'use client'
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import styles from '../styles/Header.module.scss';
import Nav from './Nav';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isActive]);

  return (
    <>
      <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
      </div>
      <AnimatePresence mode="wait">
        { isActive && (<Nav />)}
      </AnimatePresence>
    </>
  )
}



import React from 'react';
import styles from '../styles/Header.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from './anim';
import PropTypes from 'prop-types';

export default function LinkComponent({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div variants={scale} animate={isActive ? 'open' : 'closed'} className={styles.indicator}></motion.div>
      <Link href={href} legacyBehavior>
        {title}
      </Link>
    </motion.div>
  );
}

LinkComponent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  setSelectedIndicator: PropTypes.func.isRequired,
};


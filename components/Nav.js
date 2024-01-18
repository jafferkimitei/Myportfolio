/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styles from '../styles/Header.module.scss';
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./anim";
import Link from "./Link";
import Curve from "./Curve";

const FooterLink = ({ href, target, rel, children }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={styles.footerLink} 
    >
      {children}
    </a>
  );
};

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Designs",
    href: "/designs",
  },
  {
    title: "Visuals",
    href: "/visuals",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const [shouldRenderCurve, setShouldRenderCurve] = useState(false);

  useEffect(() => {
    setShouldRenderCurve(true);
  }, []);


  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      {shouldRenderCurve && <Curve />}
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <div className={styles.footer}>
          <FooterLink
            href="https://twitter.com/yunghavy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </FooterLink>
          
          <FooterLink
            href="https://instagram.com/yunghavy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </FooterLink>
          <FooterLink
            href="https://dribbble.com/yunghavy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </FooterLink>
          <FooterLink
            href="https://youpic.com/photographer/yunghavy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youpic
          </FooterLink>
         
        </div>
      </div>
    </motion.div>
  );
}

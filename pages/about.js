import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutContent from '../components/AboutContent';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import FactsSection from '../components/FactsSection';
import styles from '../styles/About.module.scss';
import Prices from '../components/Prices';
import { NextSeo } from 'next-seo';
import { pagesSEO } from '../seo.config';



const About = () => {
  return (
    <>
      <NextSeo {...pagesSEO.about} />
      <div className={styles.aboutPage}>
        <Header />
          <HeroSection />
        <AboutContent />
          <SkillsSection />
        <ServicesSection />
        <FactsSection />
        <Prices />
      </div>
      </>
  );
}

export default About;

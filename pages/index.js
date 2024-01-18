import React  from 'react';
import styles from '../styles/Device.module.scss';
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';
import DesktopView from '../components/DesktopAnimation';
import MobileView from '../components/MobileAnimation';
import { NextSeo } from 'next-seo';
import { pagesSEO } from '../seo.config';
import { Analytics } from '@vercel/analytics/react';


export default function Home() {

  return (
    <>
      <NextSeo {...pagesSEO.index} />
      <main className={styles.main}>
        <div className={styles.desktopOnlyContent}>
          <Intro />
          <Description />
          <Projects />
          <DesktopView />
        </div>
        <div className={styles.mobileOnlyContent}>
          <MobileView />
        </div>
        <Analytics />
      </main>
    </>
  );
}

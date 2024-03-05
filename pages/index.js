import React, { lazy, Suspense } from "react";
import ResponsiveNavbar from "../components/ResponsiveNav";
import Intro from "../components/Intro";
import styles from "../styles/test.module.scss";
import { Parallax } from "react-parallax";
import { NextSeo } from "next-seo";
import { pagesSEO } from "../seo.config";
import { Analytics } from "@vercel/analytics/react";
import Loader from '../components/Loader';
import HomeHero from "../components/HomeHero";

// Lazy-loaded
const TextMask = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import("../components/textMask"));
    }, 1000);
  });
});
const TextAbout = lazy(() => import("../components/TextAbout"));
const Expertise = lazy(() => import("../components/Expertise"));
const Services = lazy(() => import("../components/Services"));
const MyValues = lazy(() => import("../components/Value"));
const NxtLoves = lazy(() => import("../components/nextChapter/NxtLoves"));
const Footer = lazy(() => import("../components/Footer"));

function Index() {

  return (
    <>
      <NextSeo {...pagesSEO.index} />
      <ResponsiveNavbar />
      <div className={styles.desktopOnlyContent}>
      <Suspense fallback={<Loader />}>
        <Intro />
        <TextMask />
        <Parallax
          blur={0}
          bgImage="/images/nairobi.webp"
          strength={200}
          className={styles.parallaxContainer}
        >
          <div className={styles.containerDesc}>
            <div className={styles.desc}>
              <p>
                From Nairobi&apos;s vibrant streets to captivating narratives, I
                craft experiences that ignite.I wear many hats as a
                multi-disciplinary artist, blending UI/UX design, photography,
                filmmaking, videography, and web development into a potent mix.
                Fueled by a passion for visual storytelling and a hawk-eye for
                detail, I weave immersive worlds that linger in the mind.
              </p>
            </div>
          </div>
        </Parallax>
        <TextAbout />
        <Expertise />
        <Services />
        <MyValues />
        <NxtLoves />
        <Footer />
        </Suspense>
      </div>
      
      <div className={styles.mobileOnlyContent}>
      <Suspense fallback={<Loader />}>
      <Parallax blur={{ min: -30, max: 30 }} bgImage="/images/bg.webp" strength={200}>
        <HomeHero />
        </Parallax>
        <Parallax
          blur={0}
          bgImage="/images/nairobi.webp"
          strength={200}
          className={styles.parallaxContainer}
        >
          <div className={styles.containerDesc}>
            <div className={styles.desc}>
              <p>
                From Nairobi&apos;s vibrant streets to captivating narratives, I
                craft experiences that ignite.I wear many hats as a
                multi-disciplinary artist, blending UI/UX design, photography,
                filmmaking, videography, and web development into a potent mix.
                Fueled by a passion for visual storytelling and a hawk-eye for
                detail, I weave immersive worlds that linger in the mind.
              </p>
            </div>
          </div>
        </Parallax>
        {/* <TextAbout /> */}
        <Expertise />
        <Services />
        <MyValues />
        <NxtLoves />
        <Footer />
        </Suspense>
      </div>
      <Analytics />
    </>
  );
}

export default Index;

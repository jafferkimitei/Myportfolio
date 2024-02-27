import React, { Suspense, lazy, useState, useEffect} from "react";
import Text from "../components/text";
import styles from "../styles/Portfolio.module.scss";
import { Parallax } from "react-parallax";
import { NextSeo } from "next-seo";
import { pagesSEO } from "../seo.config";
import { Analytics } from "@vercel/analytics/react";
import Loader from "../components/Loader";

// lazy-loaded
const ResponsiveNavbar = lazy(() => import("../components/ResponsiveNav"));
const Intro = lazy(() => import("../components/portfolio/Intro"));
const Fashion = lazy(() => import("../components/portfolio/Fashion"));
const MobileFashion = lazy(() =>
  import("../components/portfolio/MobileFashion")
);
const Portraits = lazy(() => import("../components/portfolio/Portraits"));
const MobilePortraits = lazy(() =>
  import("../components/portfolio/MobilePortraits")
);
const Floating = lazy(() => import("../components/manipulationGallery"));
const Zoom = lazy(() => import("../components/portfolio/Zoom"));
const Slider = lazy(() => import("../components/slider"));
const ProjectsCarousel = lazy(() => import("../components/ProjectsCarousel"));
const Footer = lazy(() => import("../components/Footer"));
const WorkHero = lazy(() => import("../components/WorkHero"));
const Cube = lazy(() => import("../components/CubeModel"));
const NxtRates = lazy(() => import("../components/nextChapter/NxtRates"));

export default function Work() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <NextSeo {...pagesSEO.works} />
      <div className={styles.portfolio2}>
        <Suspense fallback={<Loader />}>
          <ResponsiveNavbar />
          <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage="/images/bg.jpg"
            strength={200}
          >
            <WorkHero />
          </Parallax>
          <Intro />
          <Cube />
          <Text />
          <Floating />
          {/* Conditionally render MobileFashion and MobilePortraits on mobile screens */}
          {isMobile && <MobileFashion />}
          {isMobile && <MobilePortraits />}

          {/* Conditionally render Fashion and Portraits on larger screens */}
          {!isMobile && <Fashion />}
          {!isMobile && <Portraits />}
          <Zoom />
          <Slider />
          <ProjectsCarousel />
          <NxtRates />
          <Footer />
        </Suspense>
        <Analytics />
      </div>
    </>
  );
}

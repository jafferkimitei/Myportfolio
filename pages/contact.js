import React, { useState, useEffect, Suspense, lazy } from "react";
import Image from "next/image";
import styles from "../styles/Contact.module.scss";
import Footer from "../components/Footer";
import { Parallax } from "react-parallax";
import { NextSeo } from "next-seo";
import { pagesSEO } from "../seo.config";
import { Analytics } from "@vercel/analytics/react";
import TestContact from "../components/ContactForm";
import Loader from '../components/Loader';

const ResponsiveNavbar = lazy(() => import("../components/ResponsiveNav"));

const imageUrl2 = "/images/w13.webp";
function Contact() {
  const languages = [
    "What's Up?",
    "Habari?",
    "Rada?",
    "Nǐ hǎo ma?",
    "Unjani?",
    "Konnichiwa",
    "Kak dela?",
  ];

  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLanguageIndex(
        (prevIndex) => (prevIndex + 1) % languages.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [languages]);


  return (
    <>
      <NextSeo {...pagesSEO.contact} />
      <Suspense fallback={<Loader />}>
        <ResponsiveNavbar />
        <section>
          <div className={styles.Neo}>
            <div className={styles.imageContainer}>
              <Image
                src={imageUrl2}
                alt="Image"
                width={600}
                height={300}
                priority="true"
              />
            </div>
            <div className={styles.textContainer}>
              <p className={styles.fadeInText}>
                {languages[currentLanguageIndex]}
              </p>
            </div>
          </div>
         
        </section>
        <Parallax
            blur={0}
            bgImage="/images/paralla2.webp"
            strength={200}
            className={styles.parallaxContainer}
          >
            <div className={styles.containerDesc}>
              <div className={styles.desc}>
                <p>
                  I always love connecting with people who share my passion for
                  design and technology. Whether you&apos;re looking to bounce ideas
                  off me, need career advice, or just want to show some love,
                  hit me up.
                </p>
              </div>
            </div>
          </Parallax>
        <TestContact />
        <Footer />
      </Suspense>
      <Analytics />
    </>
  );
}

export default Contact;

import React, { Suspense, lazy } from "react";
import { Parallax } from "react-parallax";
import ResponsiveNavbar from "../components/ResponsiveNav";
import NxtWork from "../components/nextChapter/NxtWork";
import Footer from "../components/Footer";
import LoveHero from "../components/LoveHero";
import styles from "../styles/Love.module.scss";
import { NextSeo } from "next-seo";
import { pagesSEO } from "../seo.config";
import { Analytics } from "@vercel/analytics/react";
import Loader from '../components/Loader';


// Lazy-loaded components
const FilmCarousel = lazy(() => import("../components/FilmCarousel"));
const AnimeCarousel = lazy(() => import("../components/AnimeCarousel"));
const Music = lazy(() => import("../components/music"));

function Love() {
  return (
    <>
     <NextSeo {...pagesSEO.love} />
     <Suspense fallback={<Loader />}>
      <ResponsiveNavbar />
      <div className={styles.body}>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage="/images/bg.jpg"
          strength={200}
        >
          <LoveHero />
        </Parallax>

        <Parallax
          blur={0}
          bgImage="/images/modalImage2.jpg"
          strength={200}
          className={styles.parallaxContainer}
        >
          <div className={styles.containerDesc}>
            <div className={styles.desc}>
              <p>
                We all have passions—those loves that just make us happy. This
                page is dedicated to the things that give me joy and enrich my
                life.
              </p>
            </div>
          </div>
        </Parallax>

          <Parallax speed={-10} strength={400}>
            <div className={styles.filmContainer}>
              <div className={styles.pageText}>
                <h1>
                  FILM <span>LOVER</span>
                </h1>
              </div> 
              <FilmCarousel />
            </div>
          </Parallax>
        <Parallax blur={0} bgImage="/images/game3.jpg" strength={200}>
          <div className={styles.gamesContainer}>
            <div className={styles.pageTextG}>
              <h1>
                VIDEO <span>GAMES</span>
              </h1>
              <p className={styles.gamesDescription}>
              COD's pulse-pounding battles, Uncharted's sprawling adventures, FIFA's stadium roars, and Tomb Raider's mind-bending puzzles - my virtual world explodes with diverse thrills! Games offer more than entertainment; they're portals to endless worlds and lasting memories.
              </p>
            </div>
          </div>
        </Parallax>

        <Parallax strength={400}>
          <div className={styles.animeContainer}>
            <div className={styles.pageText}>
              <h1>
                ANIMATION<span> LOVER</span>
              </h1>
            </div>
            <AnimeCarousel />
          </div>
        </Parallax>

        <Parallax blur={0} bgImage="/musc/music1.jpg" strength={200}>
          <div className={styles.musicContainer}>
            <div className={styles.muscText}>
              <h1>
                MUSIC <span>TASTE</span>
              </h1>
              <p className={styles.muscP}> 
My musical taste is like a wild party where old-school hip-hop throws down with Afrobeats, house music moonwalks through, rock screams for an encore, trap drops the bass like a grandma's flip-flop, and even R&B croons a lullaby. Basically, anything that gets my feet movin' (and head boppin') is welcome!
              </p>
            </div>
            <Music />
          </div>
        </Parallax>

        <NxtWork />
      </div>
      <Footer />
      </Suspense>
      <Analytics />
    </>
  );
}

export default Love;

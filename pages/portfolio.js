
import React from "react";
import Cube from "../components/cube";
import Fashion from "../components/portfolio/Fashion";
import Zoom from "../components/portfolio/Zoom";
import Text from '../components/text';
import Floating from '../components/manipulationGallery';
import Portraits from "../components/portfolio/Portraits";
import Intro from "../components/portfolio/Intro";
import Slider from "../components/slider";
import Header from "../components/Header";
import styles from "../styles/Portfolio2.module.scss";

export default function Port() {
  return (
    <>
    <div className={styles.portfolio2}>
    <Header />
      <Intro />
      <Cube />
      <Text />
      <Floating />
      <Fashion />
      <Portraits />
      <Zoom />
      <Slider />
      </div>
    </>
  );
}





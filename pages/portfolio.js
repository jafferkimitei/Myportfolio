
import React from "react";
import Cube from "../components/cube";
import Fashion from "../components/portfolio/Fashion";
import Zoom from "../components/portfolio/Zoom";
import Text from '../components/text';
import Floating from '../components/manipulationGallery';
import Portraits from "../components/portfolio/Portraits";
import Intro from "../components/portfolio/Intro";
import Slider from "../components/slider";

export default function Port() {
  return (
    <>
      <Intro />
      <Cube />
      <Text />
      <Floating />
      <Fashion />
      <Portraits />
      <Zoom />
      <Slider />
    </>
  );
}





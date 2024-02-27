import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "../styles/Slider.module.scss";
import Web from "../components/portfolio/Web";
import ColorGrade from "./portfolio/ColorGrade";
import VisualsText from "./textVisuals";
import BackgroundVideo from "./backgroundVideo";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSlider = () => {
  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".sliderContainer",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: "+=3500",
      },
    });
  }, []);

  return (
    <>
      <div
        className="sliderContainer"
        style={{ overflowX: "scroll", overflow: "hidden", flexWrap: "nowrap", display: "flex" }}
      >
        <section className="panel">
          <div style={{ width: "100vw", height: "100vh" }}>
            <ColorGrade />
          </div>
        </section>
        <section className="panel">
          <div
            style={{
              width: "100vw",
              height: "100vh",
            }}
          >
            <VisualsText />
          </div>
        </section>
        <section className="panel">
          <div
            style={{
              width: "100vw",
              height: "100vh",
            }}
          >
            <BackgroundVideo />
          </div>
        </section>
      </div>
      <div>
        <div>
          <Web />
        </div>
      </div>
    </>
  );
};

export default HorizontalSlider;

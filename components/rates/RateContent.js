import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import  "../../styles/Rates.module.scss";
import Rate1 from "./PhotographyRates";
import Rate2 from "./VideographyRates";
import Rate3 from "./DesignRates";
import Rate4 from "./WebRates";

gsap.registerPlugin(ScrollTrigger);

const RateContent = () => {
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
            <Rate1 />
          </div>
        </section>
        <section className="panel">
          <div
            style={{
              width: "100vw",
              height: "100vh",
             
            }}
          >
            <Rate2 />
          </div>
        </section>
        <section className="panel">
          <div
            style={{
              width: "100vw",
              height: "100vh",
           
            }}
          >
            <Rate3 />
          </div>
        </section>
        <section className="panel">
          <div
            style={{
              width: "100vw",
              height: "100vh",
         
            }}
          >
            <Rate4 />
          </div>
        </section>
      </div>
      <div>
      </div>
    </>
  );
};

export default RateContent;

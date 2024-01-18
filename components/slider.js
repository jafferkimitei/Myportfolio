
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalSlider = () => {
  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: "+=3500",
        }
      },
    );
  }, []);
  
  return (
    <>
    <div className="container" style={{ overflowX: 'scroll', flexWrap: 'nowrap', display: 'flex' }}>
        <section className='panel'>
      <div style={{ width: '100vw', height: '100vh', backgroundColor: 'red', textAlign: 'center' }}>Slider 1</div>
      </section>
      <section className='panel'>
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'green' }}>Slider 2</div>
        </section>
        <section className='panel'>
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'blue' }}>Slider 3</div>
        </section>
    </div>
    <div>
     <div style={{ width: '100vw', height: '100vh', backgroundColor: 'yellow' }}>Slider 4</div>
     </div>
     </>
  );
};

export default HorizontalSlider;

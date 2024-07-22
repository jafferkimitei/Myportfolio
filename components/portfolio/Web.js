import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "../../styles/Slider.module.scss";
import Image from "next/image";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "hakoweb.webp",
  },
  {
    color: "#d6d7dc",
    src: "ngo.webp",
  },
  {
    color: "#21242b",
    src: "vacar.webp",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "expense.webp",
  },
  {
    color: "#e5e0e1",
    src: "safiriweb.webp",
  },
  {
    color: "#e1dad6",
    src: "havyunion.webp",
  },
];

export default function Web() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <>
      <div className={styles.sliderT}>
        <h1>UI UX DESIGNS</h1>
      </div>
      <div ref={container} className={styles.slidingImages}>
        <motion.div style={{ x: x1 }} className={styles.slider}>
          {slider1.map((project, index) => (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageCont}>
              <Image 
   alt={"image"}
   src={`/images/${project.src}`}
   sizes="(max-width: 600px) 100vw, 600px"  
   fill
/>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div style={{ x: x2 }} className={styles.slider}>
          {slider2.map((project, index) => (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
              <Image 
 alt={"image"}
 src={`/images/${project.src}`}
 sizes="(max-width: 600px) 100vw, 600px"  
 fill
/>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div style={{ height }} className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </motion.div>
      </div>
    </>
  );
}

import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Styles.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const projects = [
  {
    title: "Portraits",
    src: "project1.webp",
  },
  {
    title: "Shelmith Kobia",
    src: "project2.webp",
  },
  {
    title: "Shattered Frames",
    src: "project3.webp",
  },
  {
    title: "The Untouched",
    src: "project4.webp",
  },
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: imageContainer.current,
        pin: true,
        start: "top-=100px",
        end: document.body.offsetHeight - window.innerHeight - 50,
      });
    }
  }, []);

  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/images/${projects[selectedProject].src}`}
            fill={true}
            alt="project image"
            priority={true}
            style={{ height: "100%" }}
          />
        </div>
        <div className={styles.column}>
          <p>
          When we&apos;re not busy turning ordinary scenes into extraordinary art, you can find us in the wild, chasing inspiration like a cheetah chasing its prey. Our natural habitat? The concrete jungle of Nairobi, where creativity knows no bounds.
          </p>
        </div>
        <div className={styles.column}>
          <p>
          With a lens in one hand and a dash of wit in the other, We&apos;re here to make your visual dreams come true. Buckle up, because we&apos;re about to embark on a safari of creativity that&apos;s wilder than Nairobi National Park itself!

          </p>
        </div>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={styles.projectEl}
            >
              <h2>{project.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

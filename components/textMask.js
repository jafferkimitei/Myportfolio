
import React, { useRef, useEffect } from "react";
import styles from "../styles/test.module.scss";

export default function TextMask() {
  const container = useRef(null);
  const stickyMask = useRef(null);
  const initialMaskSize = 0.8;

  const targetMaskSize = 30;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const easing = 0.15;
  let easedScrollProgress = 0;

  const animate = () => {
    if (stickyMask.current) {
      const maskSizeProgress = targetMaskSize * getScrollProgress();

      stickyMask.current.style.webkitMaskSize =
        (initialMaskSize + maskSizeProgress) * 100 + "%";
    }

    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    if (stickyMask.current && container.current) {
      const scrollProgress =
        stickyMask.current.offsetTop /
        (container.current.getBoundingClientRect().height - window.innerHeight);

      const delta = scrollProgress - easedScrollProgress;

      easedScrollProgress += delta * easing;

      return easedScrollProgress;
    }

    return 0;
  };

  return (
    <>
      <div ref={container} className={styles.containerT}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop>
            <source src="/videos/Opener.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </>
  );
}

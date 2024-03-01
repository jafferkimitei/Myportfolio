import React, { useRef, useEffect } from "react";
import styles from "../styles/test.module.scss";

export default function TextMask() {
  const useContainer = useRef(null);
  const useStickyMask = useRef(null);
  const initialMaskSize = 0.8;

  const targetMaskSize = 30;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const easing = 0.15;
  let easedScrollProgress = 0;

  const animate = () => {
    if (useStickyMask.current) {
      const maskSizeProgress = targetMaskSize * getScrollProgress();

      useStickyMask.current.style.webkitMaskSize =
        (initialMaskSize + maskSizeProgress) * 100 + "%";
    }

    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    if (useStickyMask.current && useContainer.current) {
      const scrollProgress =
        useStickyMask.current.offsetTop /
        (useContainer.current.getBoundingClientRect().height -
          window.innerHeight);

      const delta = scrollProgress - easedScrollProgress;

      easedScrollProgress += delta * easing;

      return easedScrollProgress;
    }

    return 0;
  };

  return (
    <>
      <div ref={useContainer} className={styles.containerT}>
        <div ref={useStickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop>
            <source src="/videos/Opener.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

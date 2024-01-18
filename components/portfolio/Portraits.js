"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Fashion.module.scss";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebaseConfig";


export default function Fashion() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [imageFolder, setImageFolder] = useState([]);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 0.25]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, "images");

      try {
        const folders = await listAll(storageRef);

        const imageUrls = await Promise.all(
          folders.prefixes.map(async (folder) => {
            const files = await listAll(folder);

            const shuffledItems = files.items.sort(() => Math.random() - 0.5);
            const limitedItems = shuffledItems.slice(0, 20);

            const imageUrlsInFolder = await Promise.all(
              limitedItems.map(async (item) => {
                const url = await getDownloadURL(item);
                return url;
              })
            );

            return { folder: folder.name, images: imageUrlsInFolder };
          })
        );

        console.log("Image URLs:", imageUrls);
        setImageFolder(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error.code, error.message);
      }
    };

    fetchImages();
  }, []);
  const allFashionPhotographyImages =
    imageFolder.find((folder) => folder.folder === "Portrait Photography")
      ?.images || [];
  const shuffledImages = allFashionPhotographyImages.sort(
    () => Math.random() - 0.5
  );
  const limitedImages = shuffledImages.slice(0, 15);

  return (
    <main className={styles.main}>
      <div className={styles.spacer}>
        <h2 className="text-center text-white text-2xl">Portrait Photography</h2>
      </div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={limitedImages.slice(0, 3)} y={y} />
        <Column images={limitedImages.slice(3, 6)} y={y2} />
        <Column images={limitedImages.slice(6, 9)} y={y3} />
        <Column images={limitedImages.slice(9, 12)} y={y4} />
        <Column images={limitedImages.slice(12,15)} y={y5} />
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((url, i) => (
        <div key={i} className={styles.imageContainer}>
          <Image src={url} alt={`Image ${i + 1}`} fill />
        </div>
      ))}
    </motion.div>
  );
};

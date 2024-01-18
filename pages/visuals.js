import React from "react";
import data from "../components/data/video-data.json";
import Header from "../components/Header";
import styles from '../styles/Portfolio.module.scss';
import { NextSeo } from 'next-seo';
import { pagesSEO } from '../seo.config';

export default function Videos() {
  const displayVideos = () => {
    const videos = [];

    for (const category in data) {
      videos.push(
        <div key={category} className={styles.videoCategory}>
          <h2 className="text-black text-center hover:text-teal-500 cursor-pointer">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className={styles.videoContainer}>
            {data[category].map((video) => (
              <div key={video.id} className={styles.videoItem}>
                <h3 className="text-center">{video.title}</h3>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return videos;
  };

  return (
    <>
    <NextSeo {...pagesSEO.visuals} />
    <div className={styles["visual-page"]}>
      <Header />
      <h1 className={styles.title}>Visuals</h1>
      {displayVideos()}
    </div>
    </>
  );
}

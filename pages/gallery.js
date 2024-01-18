
import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";
import styles from '../styles/Portfolio.module.scss';
import Image from "next/image";
import { NextSeo } from 'next-seo';
import { pagesSEO } from '../seo.config';

const Gallery = () => {
  const [imageFolder, setImageFolder] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
   
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

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
    <NextSeo {...pagesSEO.gallery} />
    <div className={styles["portfolio"]}>
    <Header />
      <h1 className={styles["title"]}>Gallery</h1>
        {imageFolder.map((item, index) => (
          <div key={index}>
          <h2 className={styles["item-folder"]}>{item.folder}</h2>
            <div className={styles["image-container"]}>
            {item.images.map((imageUrl, imageIndex) => (
               <div
               key={imageIndex}
               className={styles["image-wrapper"]}
               onClick={() => openImage(imageUrl)}
             >
              <Image
                key={imageIndex}
                src={imageUrl}
                alt={`Image ${imageIndex}`}
                layout="responsive"
                width={0}
                height={0}
                // loading="lazy"
                priority
              />
              </div>
            ))}
          </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className={styles["image-overlay"]} onClick={closeImage}>
          <Image
            src={selectedImage}
            alt="Selected Image"
            layout="responsive"
            width={0}
            height={0}
            priority
          />
        </div>
      )}
     </>
  );
};

export default Gallery;
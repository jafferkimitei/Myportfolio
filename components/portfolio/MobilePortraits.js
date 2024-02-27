import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import styles from '../../styles/Styles.module.scss';
import Image from "next/image";

const MobilePortraits = () => {
  const [imageFolder, setImageFolder] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
   
  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, "images");

      try {
        const folders = await listAll(storageRef);

        const imageUrls = await Promise.all(
          folders.prefixes.map(async (folder) => {
            // Check if the folder name is "Fashion Photography"
            if (folder.name === "Portrait Photography") {
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
            } else {
              return null; // Skip folders other than "Fashion Photography"
            }
          })
        );

        // Filter out null values (folders other than "Fashion Photography")
        const filteredImageUrls = imageUrls.filter((item) => item !== null);

        console.log("Image URLs:", filteredImageUrls);
        setImageFolder(filteredImageUrls);
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
      <div className={styles.spacer}>
        <h1 className={styles.textHead}>Portrait Photography</h1>
      </div>
      
      {imageFolder.map((item, index) => (
        <div key={index}>
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
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      ))}

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

export default MobilePortraits;

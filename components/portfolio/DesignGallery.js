// DesignGallery.js
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import styles from '../../styles/Portfolio.module.scss';
import designData from '../../components/data/designs';

const DesignGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const getRandomDesigns = (count) => {
    const shuffledDesigns = designData.sort(() => 0.5 - Math.random());
    return shuffledDesigns.slice(0, count);
  };

  const randomDesigns = getRandomDesigns(6);

  return (
    <div className={styles.projectsCarousel2}>
    <h1>UI UX DESIGNS</h1>
    <Slider {...settings} className={styles.designSlider}>
      {randomDesigns.map((item) => (
        <div key={item.id} className={styles.designItem}>
          <Image src={item.imageUrl} alt={item.title} layout="responsive" width={300} height={400} />
          <h3>{item.title}</h3>
          <p>Technologies: {item.technologies.join(', ')}</p>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default DesignGallery;

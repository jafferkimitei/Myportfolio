import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/Love.module.scss';

const carouselItems = [
  { id: 1, title: 'Bleach', imageUrl: '/images/films/bleach.jpg' },
  { id: 2, title: 'How to train your dragon', imageUrl: '/images/films/dragon.jpg' },
  { id: 3, title: 'Ghost in the shell', imageUrl: '/images/films/ghost.jpg' },
  { id: 4, title: 'Rango', imageUrl: '/images/films/rango.jpg' },
  { id: 5, title: 'Ice Age', imageUrl: '/images/films/iceage.jpg' },
  { id: 6, title: 'Megamind', imageUrl: '/images/films/megamind.jpg' },
  { id: 7, title: 'Naruto', imageUrl: '/images/films/naruto.jpg' },
  { id: 8, title: 'Ratatouille', imageUrl: '/images/films/ratatouille.jpg' },
  { id: 9, title: 'Shrek', imageUrl: '/images/films/shrek.jpg' },
  { id: 10, title: 'Cars', imageUrl: '/images/films/cars.jpg' },
];

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const animeCarousel = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (id) => {
    setSelectedCard(id === selectedCard ? null : id);
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...carouselSettings}>
        {carouselItems.map((item) => (
          <div
            key={item.id}
            className={`${styles.carouselItem} ${
              selectedCard === item.id ? styles.selectedCard : ''
            }`}
          >
            <div className={styles.card} onClick={() => handleCardClick(item.id)}>
              <img src={item.imageUrl} alt={item.title} className={styles.cardImage} />
              <div className={styles.overlay}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default animeCarousel;

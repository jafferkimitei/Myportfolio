import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/Love.module.scss';

const carouselItems = [
  { id: 1, title: 'Breaking Bad', imageUrl: '/images/films/breakingbad.jpg' },
  { id: 2, title: 'Die Hard', imageUrl: '/images/films/diehard.jpg' },
  { id: 3, title: 'Inception', imageUrl: '/images/films/inception.jpg' },
  { id: 4, title: 'Lift', imageUrl: '/images/films/lift.jpg' },
  { id: 5, title: 'Matrix', imageUrl: '/images/films/matrix.jpg' },
  { id: 6, title: 'Troy', imageUrl: '/images/films/troy.jpg' },
  { id: 7, title: 'The Beekeeper', imageUrl: '/images/films/thebeekeeper.jpg' },
  { id: 8, title: 'Prison Break', imageUrl: '/images/films/prisonbreak.jpg' },
  { id: 9, title: 'Wrong Turn', imageUrl: '/images/films/wrongturn.jpg' },
  { id: 10, title: 'Death at a funeral', imageUrl: '/images/films/dcomedy.jpg' },
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

const filmCarousel = () => {
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

export default filmCarousel;

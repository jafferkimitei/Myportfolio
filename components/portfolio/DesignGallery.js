import React from "react";
import Slider from "react-slick";
import ProjectCard from "../ProjectCard";
import projects from "../data/designs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/Portfolio.module.scss";

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
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.projectsCarousel}>
      <h1>UI UX DESIGNS</h1>
      <Slider {...settings}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Slider>
    </div>
  );
};

export default DesignGallery;

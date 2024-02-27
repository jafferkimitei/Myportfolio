import React from "react";
import styles from "../styles/Portfolio.module.scss";
import Image from "next/image";

const projectCard = ({ project }) => {
  return (
    <>
    
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <Image
          src={project.image}
          alt={`Thumbnail for ${project.name}`}
          width={300}
          height={200}
        />
      </div>
      <div className={styles.projectDetails}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p>Technologies used: {project.technologies.join(", ")}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <button className={styles.viewButton}>View Project</button>
        </a>
      </div>
    </div>
    </>
  );
};

export default projectCard;

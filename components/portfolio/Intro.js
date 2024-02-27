'use client';
import styles from '../../styles/Portfolio.module.scss'
import React,{ useState } from 'react';
import Project from '../headings';
import Modal from '../modal';

const projects = [
  {
    title: "Photography",
    src: "modalImage1.jpg",
    color: "#000000"
  },
  {
    title: "Cinematography",
    src: "modalImage2.jpg",
    color: "#8C8C8C"
  },
  {
    title: "UI UX Design",
    src: "modalImage3.jpg",
    color: "#EFE8D3"
  },
  {
    title: "Web development",
    src: "modalImage4.jpg",
    color: "#706D63"
  }
]

export default function intro() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className={styles.introMain}>
    <div className={styles.introBody}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </main>
  )
}
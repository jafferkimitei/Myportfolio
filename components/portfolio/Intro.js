'use client';
import styles from '../../styles/Portfolio.module.scss'
import React,{ useState } from 'react';
import Project from '../headings';
import Modal from '../modal';

const projects = [
  {
    title: "Photography",
    src: "modalimage1.webp",
    color: "#000000"
  },
  {
    title: "Cinematography",
    src: "modalimage2.webp",
    color: "#8C8C8C"
  },
  {
    title: "UI UX Design",
    src: "modalimage3.webp",
    color: "#EFE8D3"
  },
  {
    title: "Web development",
    src: "modalImage4.webp",
    color: "#706D63"
  }
]

export default function Intro() {

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
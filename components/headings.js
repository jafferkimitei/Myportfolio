'use client';
import React from 'react'
import styles from '../styles/Intro.module.scss';

export default function Headings({index, title, setModal}) {

    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
            <h2>{title}</h2>
            <p>ポートフォリオ</p>
        </div>
    )
}

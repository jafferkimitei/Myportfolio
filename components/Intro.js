'use client';
import React, { useEffect, useRef } from 'react'
import styles from '../styles/Styles.module.scss';
import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


export default function Intro() {

    const background = useRef(null);
    const introImage = useRef(null);
    const homeHeader = useRef(null);

    useEffect( () => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: document.documentElement,
                    scrub: true,
                    start: "top",
                    end: "+=500px",
                },
            })
    
            timeline
                .from(background.current, {clipPath: `inset(15%)`})
                .to(introImage.current, {height: "200px"}, 0)
        }
       
    }, [])

    return (
        <div ref={homeHeader} className={styles.homeHeader}>
            <div className={styles.backgroundImage} ref={background}>
                <Image 
                    src={'/images/background.webp'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
            </div>
            <div className={styles.intro}>
                    <div ref={introImage} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
                        <Image
                            src={'/images/intro.webp'}
                            alt="intro image"
                            fill={true} 
                            priority={true}
                        />
                    </div>
                    <h1 data-scroll data-scroll-speed="0.7">WELCOME</h1>
             </div>
        </div>
    )
}
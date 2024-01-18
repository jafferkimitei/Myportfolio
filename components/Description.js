
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import styles from '../styles/Styles.module.scss';

const phrases = ["Ready to unlock the magic of your brand? Dive into the YungHavy multiverse."]

export default function Index() {

  return (
    <div className={styles.description} >
        {
            phrases.map( (phrase, index) => {
                return <AnimatedText key={index}>{phrase}</AnimatedText>
            })
        }
    </div>
  )
}

function AnimatedText({children}) {
    const text = useRef(null);

    useEffect( () => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
            gsap.from(text.current, {
                scrollTrigger: {
                    trigger: text.current,
                    scrub: true,
                    start: "0px bottom",
                    end: "bottom+=400px bottom",
                },
                opacity: 0,
                left: "-200px",
                ease: "power3.Out"
            })
        }
        
    }, [])

    return <p ref={text}>{children}</p>
}

AnimatedText.propTypes = {
    children: PropTypes.node.isRequired,
  };

import React from "react";
import {
  BiCamera,
  BiFilm,
  BiPaint,
  BiBrush,
  BiBracket,
  BiPencil,
} from "react-icons/bi";
import styles from "../styles/About.module.scss";
import {Slide} from 'react-awesome-reveal';

const servicesData = [
  {
    icon: <BiCamera />,
    title: "Photography",
    description: [
      "Photography maestro here! I'm the wizard behind the lens, transforming moments into epic tales, making your products shine like supernovas. For post-click magic, I handle Photoshop and Lightroom like a boss. Turning photos into visual symphonies isn't just editing; it's my daily enchantment!",
    ],
    imageSrc: "/images/photography.avif",
  },
  {
    icon: <BiFilm />,
    title: "Cinematography",
    description: [
      "Camera whisperer on the scene! Fluent in the language of DSLRs, mirrorless marvels, and cinematic powerhouses. My lenses? Oh, they're not just glass; they're magic wands conjuring different visual spells. It's not just visuals; it's emotions woven into every frame.",
    ],
    imageSrc: "/images/cinematography.jpg",
  },
  {
    icon: <BiPaint />,
    title: "Color grading & Editing",
    description: [
      "Post-production virtuoso here! Wield of a digital paintbrush with a toolkit of color grading tricks. The secret sauce? Diving into the client's vision, transforming it into a vibrant, living masterpiece. It's not just a video; it's pure motion magic!",
    ],
    imageSrc: "/images/colorgrading4.avif",
  },
  {
    icon: <BiBrush />,
    title: "Graphic Designing",
    description: [
      "Design wizard at your service! Commanding Adobe Photoshop, Illustrator, InDesign, and Sketch to craft graphic wonders, from eye-popping logos to unforgettable branding. I'm your maestro for marketing materials that sing.",
    ],
    imageSrc: "/images/graphic.avif",
  },
  {
    icon: <BiBracket />,
    title: "Web development & design",
    description: [
      "Web maestro on deck! Fluent in Laravel, Next Js, VueJs, ReactJs, and a sprinkle of Python for that extra spice. Picasso of Figma and Adobe XD, turning pixels into gold. Fluent in Firebase and SQL, making databases bow down!",
    ],
    imageSrc: "/images/web3.avif",
  },
  {
    icon: <BiPencil />,
    title: "Script Writer",
    description: [
      "Diving into storytelling! I've scripted screenplays, memorable commercials, and gripping video narratives. A versatile wordsmith in film, TV, and the digital realm, but at the core, I'm more than a writer; I'm a passionate storyteller on a mission.",
    ],
    imageSrc: "/images/script1.avif",
  },
];

const ServicesSection = () => {
  return (
    <div className={styles.aboutServices}>
      <div className={styles.aboutService}>
        <h2>Services</h2>
        <p>
          Pixel-perfect moments, narrative scripting, vibrant color splashes,
          and masterful code weaving - we&apos;re your all-in-one destination
          for visual and virtual excellence. Consider us your tech-savvy
          wizards, turning imagination into digital magic!
        </p>
        <Slide effect="slideInRight" effectOut="slideOutLeft">
        <div className={styles.servicesContainer}>
          {servicesData.map((service, index) => (
            <div className={styles.serviceCard} key={index}>
              <div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <div
                    className={styles.serviceimageSrc}
                    style={{ backgroundImage: `url(${service.imageSrc})` }}
                  ></div>
                  <h4 className={styles.serviceTitle}>{service.title}</h4>
                </div>
                <div>
                  {service.description.map((desc, idx) => (
                    <p className={styles.serviceDescription} key={idx}>
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        </Slide>
      </div>
    </div>
  );
};

export default ServicesSection;

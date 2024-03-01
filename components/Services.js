import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import styles from "../styles/test.module.scss";
import { useInView } from "react-intersection-observer";

function services() {
  const [entered, setEntered] = useState("0");

  // Custom hook to track intersection and update entered state
  const useIntersection = (index) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      rootMargin: "-70% 0% -30% 0%",
    });

    useEffect(() => {
      if (inView) {
        setEntered(String(index));
      }
    }, [inView, index]);

    return ref;
  };

  return (
    <Parallax strength={500}>
      <div className={styles.services}>

        <div className="max-w-5xl mx-auto" data-entered={entered}>
        <div className="relative z-0 space-y-8 md:space-y-14">
            <section
              ref={useIntersection(0)}
              className="[--i:0]"
              style={{ "--e": entered }}
            >
              <Parallax y={[20, -20]}>
                <div
                  className={`relative bg-red-800 rounded-2xl border border-red-700 overflow-hidden transition-transform duration-700 ease-in-out z-[2] ${
                    entered >= 0
                      ? "translate-y-0"
                      : `-translate-y-[calc(100%*(var(--i)-var(--e)))]`
                  }`}
                >
                  <div className="md:flex flex-col md:flex-row justify-between items-center">
                    <div className="shrink-0 px-6 md:px-12 py-8 max-md:pb-0 md:pr-0 md:max-w-md">
                      <div className="md:max-w-md">
                        <div className="font-nycd text-xl text-red-500 mb-2 relative inline-flex justify-center items-end">
                          Film Maker
                          <svg
                            className="absolute fill-red-500 opacity-40 -z-10"
                            xmlns="http://www.w3.org/2000/svg"
                            width="88"
                            height="4"
                            viewBox="0 0 88 4"
                            aria-hidden="true"
                            preserveAspectRatio="none"
                          >
                            <path d="M87.343 2.344S60.996 3.662 44.027 3.937C27.057 4.177.686 3.655.686 3.655c-.913-.032-.907-1.923-.028-1.999 0 0 26.346-1.32 43.315-1.593 16.97-.24 43.342.282 43.342.282.904.184.913 1.86.028 1.999" />
                          </svg>
                        </div>
                        <h1 className="text-4xl font-extrabold text-red-50 mb-4">
                          Masterful Lens Wizard and Storytelling Virtuoso
                        </h1>
                        <p className="text-red-400 mb-6">
                        From camera wizard to storytelling maestro: I transform moments to epic tales, making products shine like stars. My lenses are magic wands, weaving emotions into every frame. In the digital realm, I wield Photoshop and Lightroom like a virtuoso, crafting vibrant masterpieces. But storytelling is my true enchantment, scripting commercials and narratives that showcase my passion for film, TV, and the digital world
                        </p>
                      </div>
                    </div>
                    <img
                      className="mx-auto md:max-md:-translate-x-[5%] md:my-0 my-8"
                      src="/images/filmmaker.webp"
                      width={519}
                      height={490}
                      alt="Illustration 01"
                    />
                  </div>
                  <div className="absolute left-6 md:left-12 bottom-0 h-14 flex items-center text-xs font-medium text-red-400">
                    01
                  </div>
                </div>
              </Parallax>
            </section>

            <section
              ref={useIntersection(1)}
              className="[--i:1]"
              style={{ "--e": entered }}
            >
              <Parallax y={[20, -20]}>
                <div
                  className={`relative bg-red-800 rounded-2xl border border-red-700 overflow-hidden transition-transform duration-700 ease-in-out z-[1] ${
                    entered >= 1
                      ? "translate-y-0"
                      : `-translate-y-[calc(100%*(var(--i)-var(--e)))]`
                  }`}
                >
                  <div className="md:flex flex-col md:flex-row justify-between items-center">
                    <div className="shrink-0 px-6 md:px-12 py-8 max-md:pb-0 md:pr-0 md:max-w-md">
                      <div className="md:max-w-md">
                        <div className="font-nycd text-xl text-sky-500 mb-2 relative inline-flex justify-center items-end">
                          Designer
                          <svg
                            className="absolute fill-sky-500 opacity-40 -z-10"
                            xmlns="http://www.w3.org/2000/svg"
                            width="88"
                            height="4"
                            viewBox="0 0 88 4"
                            aria-hidden="true"
                            preserveAspectRatio="none"
                          >
                            <path d="M87.343 2.344S60.996 3.662 44.027 3.937C27.057 4.177.686 3.655.686 3.655c-.913-.032-.907-1.923-.028-1.999 0 0 26.346-1.32 43.315-1.593 16.97-.24 43.342.282 43.342.282.904.184.913 1.86.028 1.999" />
                          </svg>
                        </div>
                        <h1 className="text-4xl font-extrabold text-red-50 mb-4">
                          Multifaceted Design Dynamo
                        </h1>
                        <p className="text-red-400 mb-6">
                        I'm a design chameleon, thriving in various domains like web, app, graphic design, and more. Armed with a keen eye for beauty and tech wizardry, I breathe life into ideas through stunning, user-friendly experiences. I craft interfaces, build brands, and conquer all things digital design, making me a force in the ever-changing design landscape.
                        </p>
                      </div>
                    </div>
                    <img
                      className="mx-auto md:max-md:-translate-x-[5%] md:my-0 my-8"
                      src="/images/designer.webp"
                      width={519}
                      height={490}
                      alt="Illustration 02"
                    />
                  </div>
                  <div className="absolute left-6 md:left-12 bottom-0 h-14 flex items-center text-xs font-medium text-red-400">
                    02
                  </div>
                </div>
              </Parallax>
            </section>

            <section
              ref={useIntersection(2)}
              className="[--i:2]"
              style={{ "--e": entered }}
            >
              <Parallax y={[20, -20]}>
                <div
                  className={`relative bg-red-800 rounded-2xl border border-red-700 overflow-hidden transition-transform duration-700 ease-in-out z-0 ${
                    entered >= 2
                      ? "translate-y-0"
                      : `-translate-y-[calc(100%*(var(--i)-var(--e)))]`
                  }`}
                >
                  <div className="md:flex flex-col md:flex-row justify-between items-center">
                    <div className="shrink-0 px-6 md:px-12 py-8 max-md:pb-0 md:pr-0 md:max-w-md">
                      <div className="md:max-w-md">
                        <div className="font-nycd text-xl text-teal-500 mb-2 relative inline-flex justify-center items-end">
                          Web Developer
                          <svg
                            className="absolute fill-teal-500 opacity-40 -z-10"
                            xmlns="http://www.w3.org/2000/svg"
                            width="88"
                            height="4"
                            viewBox="0 0 88 4"
                            aria-hidden="true"
                            preserveAspectRatio="none"
                          >
                            <path d="M87.343 2.344S60.996 3.662 44.027 3.937C27.057 4.177.686 3.655.686 3.655c-.913-.032-.907-1.923-.028-1.999 0 0 26.346-1.32 43.315-1.593 16.97-.24 43.342.282 43.342.282.904.184.913 1.86.028 1.999" />
                          </svg>
                        </div>
                        <h1 className="text-4xl font-extrabold text-red-50 mb-4">
                          Full-stack Alchemist
                        </h1>
                        <p className="text-red-400 mb-6">
                        I code magic webs: seamless experiences crafted with front-end finesse and robust back-end muscle. HTML, CSS, and JavaScript are my paintbrushes, and I wield Firebase, SQL, Laravel, Django, and JavaScript frameworks like a seasoned wizard. From blazing-fast loading times to intuitive navigation, I build captivating websites that exceed expectations and captivate users
                        </p>
                      </div>
                    </div>
                    <img
                      className="mx-auto md:max-md:-translate-x-[5%] md:my-0 my-8"
                      src="/images/website.webp"
                      width={519}
                      height={490}
                      alt="Illustration 03"
                    />
                  </div>
                  <div className="absolute left-6 md:left-12 bottom-0 h-14 flex items-center text-xs font-medium text-red-400">
                    03
                  </div>
                </div>
              </Parallax>
            </section>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default services;

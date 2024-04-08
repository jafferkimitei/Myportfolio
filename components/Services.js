import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Parallax } from "react-parallax";
import styles from "../styles/test.module.scss";
import { useInView } from "react-intersection-observer";

function Services() {
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
                        <div className="font-nycd text-xl text-sky-500 mb-2 relative inline-flex justify-center items-end">
                          Film Maker
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
                        <h3 className="text-4xl font-extrabold text-red-50 mb-4">
                          Cinematographer and Photographer
                        </h3>
                        <p className="text-gray-200 mb-6">
                          As a Cinematographer and Photographer, I immerse
                          myself in a world where every click of the shutter and
                          frame of the video tells a story. From capturing the
                          intimate moments of a portrait session to
                          orchestrating the elegance of a fashion shoot, and
                          from the joyous celebrations of weddings and baby
                          showers to the electrifying energy of events, I am
                          adept at bringing out the essence of every occasion
                          through my lens. But my craft extends beyond
                          photography; in the realm of video, I weave together
                          mesmerizing music videos, captivating fashion films,
                          and compelling cinematic narratives. My camera is not
                          just a tool; it&apos;s a conduit through which I channel
                          emotions, creativity, and imagination, transforming
                          ordinary moments into extraordinary tales.
                        </p>
                      </div>
                    </div>
                    <Image
                      className="mx-auto md:max-md:-translate-x-[5%] md:my-0 my-8"
                      src="/images/filmmaker.webp"
                      width={519}
                      height={490}
                      alt="Photographer/Videographer - Yung Havy"
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
                        <h3 className="text-4xl font-extrabold text-red-50 mb-4">
                          UI UX Designer
                        </h3>
                        <p className="text-gray-200 mb-6">
                          As a UI/UX Designer, I&apos;m a versatile design maestro,
                          specializing in crafting seamless user experiences
                          across web, app, and graphic design realms. With a
                          fusion of aesthetic finesse and technical expertise, I
                          infuse vitality into concepts by creating visually
                          captivating and user-friendly interfaces. From
                          wireframing to prototyping, I meticulously sculpt
                          digital experiences that resonate with users,
                          elevating brands and leaving a lasting impact in the
                          dynamic landscape of UI/UX design.
                        </p>
                      </div>
                    </div>
                    <Image
                      className="mx-auto md:max-md:-translate-x-[5%] md:my-0 my-8"
                      src="/images/designer.webp"
                      width={519}
                      height={490}
                      alt="UI UX Designer - Yung Havy"
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
                        <div className="font-nycd text-xl text-sky-500 mb-2 relative inline-flex justify-center items-end">
                          Web Developer
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
                        <h3 className="text-4xl font-extrabold text-red-50 mb-4">
                          Full-stack Developer
                        </h3>
                        <p className="text-gray-200 mb-6">
                          As a Full-stack Developer, I conjure up magic on the
                          web, seamlessly blending front-end finesse with robust
                          back-end muscle. With HTML, CSS, and JavaScript as my
                          trusty paintbrushes, I harness the power of Next.js,
                          React.js, and Node.js to breathe life into digital
                          experiences. My toolkit includes Tailwind CSS for
                          crafting sleek and responsive interfaces, while
                          Firebase and SQL databases provide the foundation for
                          secure and scalable data management. Leveraging
                          frameworks like Laravel, I orchestrate complex backend
                          operations with finesse. From optimizing for SEO to
                          ensuring blazing-fast loading times, I craft
                          captivating websites that not only meet but exceed
                          expectations, enchanting users with every click.
                        </p>
                      </div>
                    </div>
                    <Image
                      className="mx-auto md:max-md:-translate-x-[5%] md:my-0 my-8"
                      src="/images/website.webp"
                      width={519}
                      height={490}
                      alt="Web Developer Yung Havy"
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

export default Services;

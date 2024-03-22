import React from "react";
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from "../styles/Styles.module.scss";

const SceneFour = dynamic(() => import("../components/SceneFour/Scene"), {
    ssr: false
});

function Custom404 () {
  return (
    <main className="relative h-screen"> 
      <SceneFour />
      <Link href="/" passHref legacyBehavior>
        <button className={`${styles.backButton} text-orange-500`}>
          Go back to Home
        </button>
      </Link>
    </main>
  );
}

export default Custom404;

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/Styles.module.scss";
import dynamic from "next/dynamic";

const SceneSuccess = dynamic(() => import("../components/SceneSuccess/Scene"), {
  ssr: false,
});

function SuccessPage () {
  const router = useRouter();

  useEffect(() => {
    const submitted = router.query.submitted;

    if (!submitted) {
      router.push("/");
    }
  }, [router, router.query]);
  return (
    <main className={styles.scene}>
      <SceneSuccess />
      
      <Link href="/" passHref legacyBehavior>
        <button className={`${styles.backButton} text-orange-500`}>
          Go back to Home
        </button>
      </Link>
    </main>
  );
};
export default SuccessPage;

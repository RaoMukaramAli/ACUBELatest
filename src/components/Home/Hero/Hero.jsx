import React from "react";
import styles from "./hero.module.css";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.videoContainer}>
      <Image
        src="/images/HeroSectionImg.jpg"
        alt="Background Image"
        fill
        priority
        className={styles.backgroundImage}
      />
      <div className={`mt-5 pt-5 ${styles.overlayContent}`}>
        <div className={styles.buttonContainer}>
          <Link href="/client">
            <button className={styles.button}>Become a Client</button>
          </Link>
          <Link href="/expert">
            <button className={styles.button}>Become an Expert</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

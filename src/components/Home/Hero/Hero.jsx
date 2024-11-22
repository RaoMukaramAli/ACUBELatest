
import React from "react";
import styles from "./hero.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="/video/HeroSection1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlayContent}>
        <h1 className={styles.heading}>ACUBE Research Network</h1>
        <p className={styles.description}>
          Linking Top Professionals to Renowned Industry Experts
        </p>
        <div className={styles.buttonContainer}>
          <Link href="/contactus">
            <button className={styles.button}>Become a Client</button>
          </Link>
          <Link href="/contactus">
            <button className={styles.button}>Become an Expert</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

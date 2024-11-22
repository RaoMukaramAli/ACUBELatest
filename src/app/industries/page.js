import Sustainable from "@/components/Home/Sustainable/Sustainable";
import styles from "./industries.module.css";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted className={styles.backgroundVideo}>
          <source src="/video/Industries.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlayContent}>
          <h1 className={styles.heading}>INDUSTRIES | ACUBE</h1>
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
      <Sustainable />
    </>
  );
};
export default page;

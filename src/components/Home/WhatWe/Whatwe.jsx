"use client";
import React from "react";
import img1 from "../../../../public/images/Consultation.jpg";
import Surveys from "../../../../public/images/Surveys.jpg";
import Project from "../../../../public/images/Project.jpg";
import ITService from "../../../../public/images/ITService.jpg"; // Add your IT Services image
import styles from "./WhatWe.module.css";
import Image from "next/image";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const Whatwe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="whatwedo" className="spacing">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="row"
        >
          <div className={styles.successfulHeading}>
            <h2>Our Services</h2>
          </div>

          {/* Card 1 */}
          <div className={`col-md-6 col-lg-3`}>
            <div className={styles.card}>
              <Link href="/calls" passHref className={`${styles.cardLink}`}>
                <div className={styles.imageContainer}>
                  <Image
                    className={`${styles.radius} ${styles.cardImage}`}
                    src={img1}
                    width={480}
                    height={550}
                    alt="Consultation call"
                  />
                  <div className={styles.imageOverlay}>
                    <h3 className={styles.cardTitle}>Consultation Calls</h3>
                  </div>
                </div>

                <div className={`${styles.cardContent}`}>
                  <div
                    className={`mx-auto d-flex justify-content-between ${styles.btns}`}
                  >
                    <PrimaryButton isLink={true} href="/calls">
                      Explore Further
                    </PrimaryButton>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`col-md-6 col-lg-3`}>
            <div className={styles.card}>
              <Link href="/surveys" passHref className={`${styles.cardLink}`}>
                <div className={styles.imageContainer}>
                  <Image
                    className={`${styles.radius} ${styles.cardImage}`}
                    src={Surveys}
                    width={480}
                    height={550}
                    alt="Bespoke Surveys"
                  />
                  <div className={styles.imageOverlay}>
                    <h3 className={styles.cardTitle}>Bespoke Surveys</h3>
                  </div>
                </div>

                <div className={`${styles.cardContent}`}>
                  <div
                    className={`mx-auto d-flex justify-content-between ${styles.btns}`}
                  >
                    <PrimaryButton isLink={true} href="/surveys">
                      Explore Further
                    </PrimaryButton>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`col-md-6 col-lg-3`}>
            <div className={styles.card}>
              <Link href="/advisory" passHref className={`${styles.cardLink}`}>
                <div className={styles.imageContainer}>
                  <Image
                    className={`${styles.radius} ${styles.cardImage}`}
                    src={Project}
                    width={480}
                    height={550}
                    alt="Longer Term Advisory"
                  />
                  <div className={styles.imageOverlay}>
                    <h3 className={styles.cardTitle}>Longer Term Advisory</h3>
                  </div>
                </div>

                <div className={`${styles.cardContent}`}>
                  <div
                    className={`mx-auto d-flex justify-content-between ${styles.btns}`}
                  >
                    <PrimaryButton isLink={true} href="/advisory">
                      Explore Further
                    </PrimaryButton>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 4 - IT Services */}
          <div className={`col-md-6 col-lg-3`}>
            <div className={styles.card}>
              <Link
                href="/it-services"
                passHref
                className={`${styles.cardLink}`}
              >
                <div className={styles.imageContainer}>
                  <Image
                    className={`${styles.radius} ${styles.cardImage}`}
                    src={ITService}
                    width={480}
                    height={550}
                    alt="IT Services"
                  />
                  <div className={styles.imageOverlay}>
                    <h3 className={styles.cardTitle}>IT Services</h3>
                  </div>
                </div>

                <div className={`${styles.cardContent}`}>
                  <div
                    className={`mx-auto d-flex justify-content-between ${styles.btns}`}
                  >
                    <PrimaryButton isLink={true} href="/itServices">
                      Explore Further
                    </PrimaryButton>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whatwe;

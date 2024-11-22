"use client";
import React from "react";
import img1 from "../../../../public/images/Education.png";
import food from "../../../../public/images/food.png";
import care from "../../../../public/images/care.png";
import styles from "./WhatWe.module.css";
import Image from "next/image";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Whatwe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers once when it enters view
  return (
    <section id="whatwedo" className="spacing">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to full opacity and position when in view
          transition={{ duration: 0.6, ease: "easeOut" }} // Animation duration and easing
          className="row"
        >
          <div className={styles.successfulHeading}>
            <h2> What We Do </h2>
          </div>
          <div className={` col-md-6  col-lg-4  `}>
            <div className={styles.card}>
              <Image
                className={`${styles.radius}`}
                src={img1}
                width={480}
                height={550}
                alt="education for children"
              />

              <div className={` ${styles.cardContent}`}>
                <h3>Consultation Calls </h3>
                <p>
                  ACube calls are 30-60 minute or longer telephone conversations
                  with client professionals and may occasionally take place over
                  video (e.g. Zoom, Teams). Calls are the most common way we
                  work with experts....
                </p>

                <div
                  className={`d-flex justify-content-between  ${styles.btns}`}
                >
                  <a className="readMoreBtnYellow" href="/calls">
                    Read more
                  </a>
                  {/* <button className={styles.nvaBtns}> Donate Now </button> */}
                  <PrimaryButton isLink={true} href="/contactus">
                    Contact Us
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
          <div className={` col-md-6  col-lg-4  `}>
            <div className={styles.card}>
              <Image
                className={`${styles.radius}`}
                src={food}
                width={480}
                height={550}
                alt="education for children"
              />

              <div className={` ${styles.cardContent}`}>
                <h3> Bespoke Surveys </h3>
                <p>
                  ACube surveys are online questionnaires. They begin with
                  screening questions to ensure that the topic is correctly
                  suited to your experience, and typically take no longer than
                  20 minutes to complete....
                </p>

                <div
                  className={`d-flex justify-content-between  ${styles.btns}`}
                >
                  <a className="readMoreBtnYellow" href="/advisory">
                    Read more
                  </a>
                  <PrimaryButton isLink={true} href="/contactus">
                    Contact Us
                  </PrimaryButton>
                  {/* <button className={styles.nvaBtns}> Donate Now </button> */}
                </div>
              </div>
            </div>
          </div>

          <div className={` col-md-6  col-lg-4  `}>
            <div className={styles.card}>
              <Image
                className={`${styles.radius}`}
                src={care}
                width={480}
                height={550}
                alt="education for children"
              />

              <div className={` ${styles.cardContent}`}>
                <h3> Longer Term Advisory</h3>
                <p>
                  From time to time, clients partner with ACube to identify
                  senior executives with relevant experience who can help them
                  on a longer term basis....
                </p>

                <div
                  className={`d-flex justify-content-between  ${styles.btns}`}
                >
                  <a className="readMoreBtnYellow" href="/surveys">
                    Read more
                  </a>
                  {/* <button className={styles.nvaBtns}> Donate Now </button> */}
                  <PrimaryButton isLink={true} href="/contactus">
                    Contact Us
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whatwe;

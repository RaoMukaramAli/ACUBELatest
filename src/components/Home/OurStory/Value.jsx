"use client";
import React from "react";
import styles from "./Value.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Value = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers once when it enters view

  return (
    <section className="spacing bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to full opacity and position when in view
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
          className="row justify-content-between"
        >
          <section className="py-5 bg-light">
            <div className="container">
              <div
                className="text-center mx-auto mb-5"
                style={{ maxWidth: "600px" }}
              >
                <h2 className="mt-4 display-5 font-weight-bold text-dark">
                  The Value We Offer
                </h2>
                <p className="text-muted mt-3">
                  At ACUBE, we provide tailored solutions that
                  drive growth and deliver lasting results. With a commitment to
                  excellence and innovation, our expert team ensures that every
                  partnership is built on trust, reliability, and a deep
                  understanding of your unique needs. Let us help you achieve
                  your goals with confidence.
                </p>
              </div>

              {/* Cards Section */}
              <div className="row mt-5">
                {/* Card 1 */}
                <div className="col-12 col-md-4 mb-4">
                  <div className="card shadow-sm transition-all duration-200">
                    <div className="card-body text-center py-5 px-4">
                      <svg
                        className="mx-auto w-25 h-25 text-muted"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <h3 className=" mt-4 font-weight-semibold text-dark">
                        Customer Focused
                      </h3>
                      <p className="text-muted mt-3">
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-12 col-md-4 mb-4">
                  <div className="card shadow-sm transition-all duration-200">
                    <div className="card-body text-center py-5 px-4">
                      <svg
                        className=" mx-auto w-25 h-25 text-muted"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        />
                      </svg>
                      <h3 className="mt-4 font-weight-semibold text-dark">
                        Innovation
                      </h3>
                      <p className="text-muted mt-3">

                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-12 col-md-4 mb-4">
                  <div className="card shadow-sm transition-all duration-200">
                    <div className="card-body text-center py-5 px-4">
                      <svg
                        className="mx-auto w-25 h-25 text-muted"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <h3 className="mt-4 font-weight-semibold text-dark">
                        Cost Efficient
                      </h3>
                      <p className="text-muted mt-3">
                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </section>
  );
};

export default Value;

"use client"
import React, { useState } from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";
import desktopLogo from "../../../public/images/HeaderLogo.png";
import FooterSubcriptionForm from "./FooterSubcriptionForm";

const Footer = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <footer>
      <div className={` ${styles.foterBg}`}>
        <div className="container ">
          <div className="row justify-content-between">
            <div
              className={`col-lg-2  pt-0  ${styles.fotterFirstColumn} ${styles.headingUl}`}
            >
              <div className={styles.footerLogo}>
                <a href="/">
                  <Image
                    src={desktopLogo}
                    width={162}
                    height={265}
                    alt="ACUBE Research Network   logo"
                  />
                </a>
              </div>
            </div>
            <div
              className={`col-lg-3   ${styles.headingUl} ${styles.headingAbout}`}
            >
              <h3>ACUBE Research Network</h3>
              <ul>
                <li>
                  <Link href="/"> Home</Link>
                </li>
                <li>
                  <Link href="/aboutus">About Us</Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className={`nav-link dropdown-toggle`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    What We Serve
                  </a>
                  <ul className="dropdown-menu">
                    <li onClick={closeNav}>
                      <Link className="dropdown-item" href="/calls">
                        Calls
                      </Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link className="dropdown-item" href="/advisory">
                        Longer term advisory
                      </Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link className="dropdown-item" href="/surveys">
                        Surveys
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/contactus">Become a Client</a>
                </li>
                <li>
                  <a href="/industries">Industries</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3   px-0">
              <div className={styles.headingUl}>
                <h3>Information</h3>
                <ul>
                  <li>
                    <a href="mailto:aalambibitrust@gmail.com">
                      <span className={styles.fotterEmail}>
                        teams@acuberesearchnetwork.com
                      </span>
                    </a>
                  </li>
                  <li>Available 24/7</li>
                  <li>6 Gordon Street, Burton-on-Trent, United Kingdom</li>
                </ul>
              </div>
            </div>
            <div className={`col-lg-4 ${styles.headingUl}`}>
              <h3> Stay up to data </h3>
              <ul>
                <li>
                  <a href="#"> Get Newsletter & Stories </a>
                </li>
              </ul>

              <div className={styles.fotertInput}>
                <FooterSubcriptionForm />
              </div>

              <div className={styles.Sicons}>
                <ul className="pt-3" role="list">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/acube-research-network/"
                      target="_blank"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1394_5352)">
                          <path
                            d="M27.991 28.002L27.998 28.0008V17.7318C27.998 12.7081 26.9165 8.83829 21.0435 8.83829C18.2202 8.83829 16.3255 10.3876 15.552 11.8565H15.4704V9.30729H9.90188V28.0008H15.7002V18.7445C15.7002 16.3073 16.1622 13.9506 19.1804 13.9506C22.1542 13.9506 22.1985 16.732 22.1985 18.9008V28.002H27.991ZM0.460047 9.30845H6.26538V28.002H0.460047V9.30845ZM3.36038 0.00195313C1.50421 0.00195313 -0.00195312 1.50812 -0.00195312 3.36429C-0.00195312 5.22045 1.50421 6.75812 3.36038 6.75812C5.21655 6.75812 6.72271 5.22045 6.72271 3.36429C6.7221 2.47273 6.36765 1.61787 5.73723 0.98744C5.1068 0.357015 4.25194 0.00257119 3.36038 0.00195313Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1394_5352">
                            <rect width="28" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@Acuberesearchnetwork"
                      target="_blank"
                    >
                      <svg
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1394_5355)">
                          <path
                            d="M16 27L26.38 21L16 15V27ZM39.12 11.34C39.38 12.28 39.56 13.54 39.68 15.14C39.82 16.74 39.88 18.12 39.88 19.32L40 21C40 25.38 39.68 28.6 39.12 30.66C38.62 32.46 37.46 33.62 35.66 34.12C34.72 34.38 33 34.56 30.36 34.68C27.76 34.82 25.38 34.88 23.18 34.88L20 35C11.62 35 6.4 34.68 4.34 34.12C2.54 33.62 1.38 32.46 0.88 30.66C0.62 29.72 0.44 28.46 0.32 26.86C0.18 25.26 0.12 23.88 0.12 22.68L0 21C0 16.62 0.32 13.4 0.88 11.34C1.38 9.54 2.54 8.38 4.34 7.88C5.28 7.62 7 7.44 9.64 7.32C12.24 7.18 14.62 7.12 16.82 7.12L20 7C28.38 7 33.6 7.32 35.66 7.88C37.46 8.38 38.62 9.54 39.12 11.34Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1394_5355">
                            <rect
                              y="0.632812"
                              width="40"
                              height="40"
                              rx="5.33333"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <div className="container ">
          <div className={`${styles.mainCopy}`}>
            <div className={` ${styles.copyContent}`}>
              <span>
                {" "}
                © 2024 ACUBE Research Network . All Rights Reserved.{" "}
              </span>
            </div>
            <div className={styles.privacy}>
              <ul className="p-0">
                <li>
                  <Link href="/privacyPolicy">Privacy policy</Link>
                </li>
                <li>
                  <Link href="/termsAndConditions">Term and Condition </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

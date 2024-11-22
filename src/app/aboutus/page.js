import Link from "next/link";
import styles from "./aboutus.module.css";
import React from "react";

export const metadata = {
  title: "About Us | ACUBE Research Network  ",
  description:
   "ACUBE Research Network is a market research and business consulting firm. that offers a broad range of services to clients across various industries. The company's mission is to deliver high-quality research and consulting services that help clients achieve their business objectives."
  };
const AboutUs = () => {
  return (
    <div className={"wrapper"}>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted className={styles.backgroundVideo}>
          <source src="/video/AboutUs.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlayContent}>
          <h1 className={styles.heading}>AboutUs | ACUBE</h1>
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
      <section className={styles.wrapper}>
        <section className={`container ${styles.top_static_section}`}>
          <h2>Words of ACUBE Research Network </h2>
        </section>
        <section className={styles.about_us_btm_sec}>
          <div className={`${styles.about_container} container`}>
            <div
              className={`${styles.about_box} row pb-4 mb-4 align-items-center`}
            >
              <div className={`${styles.image_box} col-md-6 `}></div>
              <div
                className={`${styles.description} col-md-6 flex justify-content-center align-items-center`}
              >
                <p>
                  ACUBE Research Network is a market research and business
                  consulting firm. that offers a broad range of services to
                  clients across various industries. The company&apos;s mission
                  is to deliver high-quality research and consulting services
                  that help clients achieve their business objectives.
                </p>
              </div>
            </div>

            <div
              className={`${styles.about_box} row pb-4 mb-4 align-items-center`}
            >
              <div className={`${styles.image_box} col-md-6 `}></div>
              <div
                className={`${styles.description} col-md-6 flex justify-content-center align-items-center`}
              >
                <p>
                  The services provided by Acube Research Network are not
                  limited to a specific industry but rather cater to a broad
                  range of sectors, including technology, healthcare, finance,
                  real estate, pharmaceuticals, education, and more. This
                  diversity of offerings indicates that the company has a
                  wide-ranging expertise and is capable of adapting to meet the
                  specific needs of each industry it serves.
                </p>
              </div>
            </div>

            <div
              className={`${styles.about_box} row pb-4 mb-4 align-items-center`}
            >
              <div className={`${styles.image_box} col-md-6 `}></div>
              <div
                className={`${styles.description} col-md-6 flex justify-content-center align-items-center`}
              >
                <p>
                  In the field of crypto, Acube Research Network offers
                  consulting and advisory services to clients looking to invest
                  or develop in the crypto market. These services may include
                  market research, investment analysis, risk management, and
                  regulatory compliance advice, among others. The company&apos;s
                  team of experts can provide clients with customized support
                  throughout the project&apos;s lifecycle, from inception to
                  implementation.
                </p>
              </div>
            </div>

            <div
              className={`${styles.about_box} row pb-4 mb-4 align-items-center`}
            >
              <div className={`${styles.image_box} col-md-6 `}></div>
              <div
                className={`${styles.description} col-md-6 flex justify-content-center align-items-center`}
              >
                <p>
                  Acube Research Network&apos;s approach to working with clients
                  is based on building long-term relationships founded on trust,
                  transparency, and mutual respect. The company&apos;s team
                  works closely with each client to understand their specific
                  needs and goals, tailoring its services accordingly. This
                  personalized approach allows the company to provide effective
                  solutions and deliver value to clients.
                </p>
              </div>
            </div>

            <div
              className={`${styles.about_box} row pb-4 mb-4 align-items-center`}
            >
              <div className={`${styles.image_box} col-md-6 `}></div>
              <div
                className={`${styles.description} col-md-6 flex justify-content-center align-items-center`}
              >
                <p>
                  One of the company&apos;s unique offerings is expert
                  consultation calls at a lower price point, allowing clients to
                  access expert advice quickly and affordably. For longer-term
                  projects, Acube Research Network also provides customized
                  surveys and access to its expert pool, enabling clients to tap
                  into a wealth of knowledge and expertise.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutUs;

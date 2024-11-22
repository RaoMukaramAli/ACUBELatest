import React from "react";
import story from "../../../public/images/ourStory.png";
import Image from "next/image";
import styles from "./AboutUsOurStory.module.css";

const AboutUsOurStory = () => {
  return (
    <section className={`spacing ${styles.bgColor}`}>
      <div className="container">
        <div className="row justify-content-between">
          <div
            className={`col-md-6 d-flex align-items-center  ${styles.leftColumn} `}
          >
            <div className={styles.story}>
              <h2>About Us</h2>
              <p>
                Acube Research Network is a market research and business
                consulting firm. that offers a broad range of services to
                clients across various industries. The company&apos;s mission is
                to deliver high-quality research and consulting services that
                help clients achieve their business objectives.
              </p>
              <p>
                The services provided by Acube Research Network are not limited
                to a specific industry but rather cater to a broad range of
                sectors, including technology, healthcare, finance, real estate,
                pharmaceuticals, education, and more. This diversity of
                offerings indicates that the company has a wide-ranging
                expertise and is capable of adapting to meet the specific needs
                of each industry it serves.
              </p>
              <p>
                In the field of crypto, Acube Research Network offers consulting
                and advisory services to clients looking to invest or develop in
                the crypto market. These services may include market research,
                investment analysis, risk management, and regulatory compliance
                advice, among others. The company&apos;s team of experts can
                provide clients with customized support throughout the
                project&apos;s lifecycle, from inception to implementation.
              </p>
              <p>
                Acube Research Network&apos;s approach to working with clients
                is based on building long-term relationships founded on trust,
                transparency, and mutual respect. The company&apos;s team works
                closely with each client to understand their specific needs and
                goals, tailoring its services accordingly. This personalized
                approach allows the company to provide effective solutions and
                deliver value to clients.
              </p>
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

          <div className={`col-md-6  ${styles.rightColumn} `}>
            <div className={styles.storyImg}>
              <Image
                className={styles.ourImg}
                src={story}
                width={685}
                height={542}
                alt="learning under tree"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsOurStory;

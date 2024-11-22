import React from "react";
import styles from "./expert.module.css";

export const metadata = {
  title: "Become an Expert | ACUBE Research Network  ",
  description:
  " Become ACUBE's expert and contribute to the mission of ACUBE Research Network.",
};
const Expert = () => {
  return (
    <div className={`container ${styles.top_static_section}`} id="volunteer">
      <div className={`row ${styles.internWrap}`}>
        <div className={styles.internHeading}>
          <h2> Become an Expert </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
        </div>
      </div>
    </div>
  );
};

export default Expert;

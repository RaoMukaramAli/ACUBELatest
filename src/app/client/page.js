import React from "react";
import styles from "./client.module.css";
import VolunteerForm from "@/components/VolunteerForm/VolunteerForm";

export const metadata = {
  title: "Become a Client | ACUBE Research Network  ",
  description:
   "Become ACUBE's client and spread the mission of ACUBE Research Network.",
  };
const Client = () => {
  return (
    <div className={`container ${styles.top_static_section}`} id="volunteer">
      <div className={`row ${styles.internWrap}`}>
        <div className={styles.internHeading}>
          <h2> Become a Client </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <VolunteerForm />
        </div>
      </div>
    </div>
  );
};

export default Client;

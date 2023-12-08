import React from "react";
import listicon from "../../public/assets/icons/list-icon.png";
import styles from "@/styles/Terms.module.css";

const Involvement = () => {
  return (
    <div className={styles.terms}>
      <div className="container">
        <h4>Involvement of Third Parties</h4>
        <div style={{ marginBottom: "60px" }}>
          <div className="d-flex align-items-start gap-3">
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              SilverSitting Gigauri, Andrea and Monninger, Daniel GbR reserves
              the right to commission third parties with the provision of
              partial services or the entire range of services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Involvement;

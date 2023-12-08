import React from "react";
import listicon from "../../public/assets/icons/list-icon.png";
import styles from "@/styles/Terms.module.css";

const Copyright = () => {
  return (
    <div className={styles.terms}>
      <div className="container">
        <h4>Copyright</h4>
        <div style={{ marginBottom: "60px" }}>
          <div className="d-flex align-items-start gap-3">
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The copyright for objects, texts, sound documents, video
              sequences, animations, graphics and the like, which were created
              and published by SilverSitting Gigauri, Andrea and Monninger,
              Daniel GbR, remains exclusively with the operator. Duplication of
              this or use in other electronic or printed publications is not
              permitted without the express written consent of SilverSitting
              Gigauri, Andrea and Monninger, Daniel GbR.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;

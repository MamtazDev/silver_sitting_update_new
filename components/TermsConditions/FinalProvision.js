import React from "react";
import listicon from "../../public/assets/icons/list-icon.png";
import styles from "@/styles/Terms.module.css";

const FinalProvision = () => {
  return (
    <div className={styles.terms}>
      <div className="container">
        <h4>Final Provisions</h4>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              If the user or provider is a merchant, a legal entity under public
              law or a special fund under public law, Frankfurt is agreed as the
              place of jurisdiction.
            </p>
          </div>

          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              German law applies exclusively, excluding the UN sales law. In the
              event that the user or provider is a consumer, this only applies
              insofar as the protection granted by mandatory provisions of the
              law of the state in which the user or provider has his habitual
              residence is not withdrawn.
            </p>
          </div>
          <div className="d-flex align-items-start gap-3">
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">Contract language is German.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalProvision;

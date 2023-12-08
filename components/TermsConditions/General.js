import React from "react";
import listicon from "../../public/assets/icons/list-icon.png";
import styles from "@/styles/Terms.module.css";

const General = () => {
  return (
    <div className={styles.terms}>
      <div className="container">
        <h4>General</h4>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              By registering or logging in to the silversitting.com digital
              platform, you, hereinafter referred to as "user" or "provider",
              agree to the following general terms and conditions, hereinafter
              referred to as "GTC". You agree to this by confirming that you are
              aware of and agree to these General Terms and Conditions when
              registering or registering.
            </p>
          </div>

          <div
            style={{ marginBottom: "20px" }}
            className="d-flex align-items-start gap-3"
          >
            <img className="mt-2" src={listicon.src} alt="" />
            <p className="mb-0">
              The scope of the terms and conditions includes both free and paid
              offers from SilverSitting - Andrea Gigauri and Daniel Monninger
              GbR and refers to the version valid at the time the contract was
              concluded, regardless of whether the user or provider is a
              consumer, entrepreneur or merchant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;

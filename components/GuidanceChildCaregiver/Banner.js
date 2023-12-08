import React from "react";
import styles from "@/styles/Guidance.module.css";

const Banner = () => {
  return (
    <div className="container">
      <div className={styles.guidance_banner}>
        <h4>
          Are you 55 years or older and would like to take care <br /> of
          children?
        </h4>
        <p>"The longer a person remains a child, the older he gets."</p>
        <h6>Novalis</h6>
      </div>
    </div>
  );
};

export default Banner;

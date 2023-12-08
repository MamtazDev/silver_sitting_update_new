import React from "react";
import styles from "@/styles/Known.module.css";
import known from "../../../public/assets/known.png";

const Known = () => {
  return (
    <div className={styles.known}>
      <div className="container">
        <p>Known from</p>
        <img src={known.src} alt="known" />
      </div>
    </div>
  );
};

export default Known;

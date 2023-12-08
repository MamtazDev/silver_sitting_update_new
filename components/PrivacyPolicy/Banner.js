import React from "react";
import styles from "@/styles/Terms.module.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={styles.listBanner}>
      <div className="container">
        <h2>
          Data protection SilverSitting, Gigauri, Andrea and Monninger, Daniel
          (GbR) for the digital platform silversitting.com
        </h2>
        <div className={styles.listing}>
          <ul>
            <li>General information</li>
            <li>Purpose of data collection and processing</li>
            <li>Data collection on silversitting.com by the operator</li>
            <li>
              Data collection on silversitting.com by integrating services and
              content from third parties
            </li>
            <li>data security</li>
            <li>Right to object</li>
          </ul>
        </div>
      
      </div>
    </div>
  );
};

export default Banner;

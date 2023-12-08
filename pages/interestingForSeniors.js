import Link from "next/link";
import React from "react";
import styles from "@/styles/InterestingForSeniors.module.css";
import BannerImage from "../public/assets/images/interestForSeniors.png";

const interestingForSeniors = () => {
  return (
    <section className={`container ${styles.mainContainer}`}>
      <div className={styles.boxContainer}>
        <h3>Interesting for Seniors</h3>
        <img src={BannerImage.src} alt="" />
        <p>
          Ways out of loneliness eV is an association that works nationawide to
          improve the living conditions of old people and their position in
          society.
        </p>
        <Link href="#">Ways out of loneilness eV</Link>
      </div>
    </section>
  );
};

export default interestingForSeniors;

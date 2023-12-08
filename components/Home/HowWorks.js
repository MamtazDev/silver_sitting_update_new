import React from "react";
import styles from "@/styles/HowWorks.module.css";

const HowWorks = () => {
  const works = [
    {
      text: "Seniors aged 55 and over register as childcare workers",
    },
    {
      text: "With the proximity search, parents can find suitable childcare providers in the vicinity",
    },
    {
      text: "Parents get in touch and after getting to know each other personally, we can start!",
    },
  ];
  return (
    <div className={styles.how_works}>
      <div className="container">
        <h2>Here’s how it works</h2>
        <div className={`${styles.parent} row justify-content-center`}>
          {works.map((work, index) => (
            <div
              key={index}
              className={`${styles.child} col-12 col-md-6 col-lg-4`}
            >
              <h1>{index + 1}</h1>
              <p>{work.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
